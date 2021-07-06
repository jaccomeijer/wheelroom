import { TokenCollection } from '../../collection/token'
import { requestToClient } from '../../lib/request-to-client'
import { requestToRedirectUri } from '../../lib/request-to-redirect-uri'
import { requestToScopes } from '../../lib/request-to-scopes'
import {
  invalidGrantErrorFactory,
  invalidRequestErrorFactory,
} from '../../error/oauth2-error'
import {
  CodeChallengeMethod,
  verifyCodeChallenge,
} from '../../lib/verify-code-challenge'
import { accessTokenPayload } from '../../jwt/access-token'
import { RawCodeTokenPayload } from '../../jwt/code-token'
import { refreshTokenPayload } from '../../jwt/refresh-token'
import { OAuth2Response } from '../response'
import { idTokenPayload } from '../../jwt/id-token'
import { tokenResponseBodyPayload } from './token-response-body'
import { TokenResponse } from './token-response'

export const authorizationCodeGrant = async ({
  collectionApi,
  jwtApi,
  req,
}: TokenResponse): Promise<OAuth2Response> => {
  const code = req.body['code']
  if (typeof code !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code body parameter is required',
    })
  }

  const codePayload = (await jwtApi.parse(code)) as RawCodeTokenPayload

  if (typeof codePayload.auth_code_id !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'auth_code field in code JWT is required',
    })
  }
  const knmownAuthCode = await collectionApi.authCode.get({
    authCodeId: codePayload.auth_code_id,
    req,
  })

  if (Date.now() > codePayload.expire_time * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code JWT has expired',
    })
  }

  if (Date.now() > knmownAuthCode.expiresAt.getTime() * 1000) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'Code JWT was revoked',
    })
  }

  if (knmownAuthCode.codeChallenge !== codePayload.code_challenge) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'code_challenge field in code JWT is invalid',
    })
  }

  const codeVerifier = req.body['code_verifier']
  if (typeof code !== 'string') {
    throw invalidRequestErrorFactory({
      arg: 'code_verifier',
      description: 'Code verifier body parameter is required',
    })
  }

  const REGEXP_CODE_VERIFIER = /^[A-Za-z0-9-._~]{43,128}$/

  if (!REGEXP_CODE_VERIFIER.test(codeVerifier)) {
    throw invalidRequestErrorFactory({
      arg: 'code_verifier',
      description: 'Code verifier body parameter does not meet RFS-7636',
    })
  }

  const codeChallengeIsValid = verifyCodeChallenge({
    method: codePayload.code_challenge_method as CodeChallengeMethod,
    codeChallenge: codePayload.code_challenge,
    codeVerifier,
  })

  if (!codeChallengeIsValid) {
    throw invalidGrantErrorFactory({
      description: 'Code challende verification failed',
    })
  }

  const user = await collectionApi.user.get({
    userId: codePayload.user_id,
    req,
  })
  const client = await requestToClient({ collectionApi, req })
  const scopes = await requestToScopes({ collectionApi, req })
  const redirectUri = requestToRedirectUri({ client, req })

  if (codePayload.client_id !== client.id) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'client_id field in code JWT is invalid',
    })
  }

  if (codePayload.redirect_uri !== redirectUri) {
    throw invalidRequestErrorFactory({
      arg: 'code',
      description: 'redirect_uri field in code JWT is invalid',
    })
  }

  const newAccessTokenPayload = accessTokenPayload({
    clientName: client.name,
    expiresAtSeconds: Date.now() / 1000,
    issuedAtSeconds: Date.now() / 1000,
    notBeforeSeconds: Date.now() / 1000,
    jwtId: 'todo',
    scopes: scopes.map((scope) => scope.name).join(' '),
    userEmail: user.email,
    userId: user.id,
  })

  const newIdTokenPayload = idTokenPayload({
    clientId: client.id,
    expiresAtSeconds: Date.now() / 1000,
    issuedAtSeconds: Date.now() / 1000,
    jwtId: 'TODO',
    nonce: knmownAuthCode.nonce,
    notBeforeSeconds: Date.now() / 1000,
    userEmail: user.email,
    userEmailVerified: true,
    userId: user.id,
    userName: 'not implemented',
  })

  const newRefreshTokenPayload = refreshTokenPayload({
    clientId: client.id,
    expiresAtSeconds: Date.now() / 1000,
    scopes: scopes.map((scope) => scope.name).join(' '),
    userId: user.id,
  })

  const accessToken = await jwtApi.sign(newAccessTokenPayload)
  const idToken = await jwtApi.sign(newIdTokenPayload)
  const refreshToken = await jwtApi.sign(newRefreshTokenPayload)

  const tokenCollection: TokenCollection = {
    accessToken,
    accessTokenExpiresAt: new Date(),
    client,
    refreshToken,
    refreshTokenExpiresAt: new Date(),
    scopes,
    user,
  }

  await collectionApi.token.persist({ token: tokenCollection, req })
  await collectionApi.authCode.revoke({
    authCodeId: codePayload.auth_code_id,
    req,
  })

  const body = tokenResponseBodyPayload({
    accessToken,
    expiresInSeconds: 0,
    idToken,
    refreshToken,
    scopes: scopes.map((scope) => scope.name).join(' '),
  })
  return { body, headers: {}, url: redirectUri }
}
