import { useEffect, useReducer, useContext } from 'react'
import { AdminCoreContext } from '@jacco-meijer/admin-core'
import queryString from 'query-string'
import { useLocation } from '@reach/router'
import { pagePreviewRegister } from './page-preview-register'
import { pagePreviewReducer } from './page-preview-reducer'
import { initialState } from './initial-state'
import { actionCreator } from './action-creator'

/**
 * Use page preview
 *
 * The main entry point for this admin module. This is used in an element
 * wrapped around each page. What is does:
 *
 * - register a React reducer
 * - save the reducer ito the admin core store
 * - on reducer state change, dispatch SET_LAST_MODULE_ID to the core store
 *
 */
export const usePagePreview = (pageProps: any) => {
  const location = useLocation()
  const { adminCoreDispatch } = useContext(AdminCoreContext)
  const [pagePreviewState, pagePreviewDispatch] = useReducer(
    pagePreviewReducer,
    initialState
  )
  const actions = actionCreator(pagePreviewState, pagePreviewDispatch)

  useEffect(() => {
    // Register module only once
    adminCoreDispatch(pagePreviewRegister)
  }, [adminCoreDispatch])

  useEffect(() => {
    // Update page props
    adminCoreDispatch({
      type: 'SET_PAGE_PROPS',
      pageProps,
    })
  }, [pageProps, adminCoreDispatch])

  useEffect(() => {
    adminCoreDispatch({
      type: 'SET_LAST_MODULE_ID',
      moduleId: pagePreviewRegister.moduleId,
    })
  }, [pagePreviewState, adminCoreDispatch])

  useEffect(() => {
    // Temp solution, use query string to set preview mode. This should be set by
    // using the admin module itself. The query parameter then becomes obsolete.
    const queryParams = queryString.parse(location.search)
    pagePreviewState.inPreviewMode = 'preview' in queryParams

    adminCoreDispatch({
      type: 'SET_ADMIN_MODULE_STORE',
      moduleId: pagePreviewRegister.moduleId,
      store: {
        actions,
        state: pagePreviewState,
        dispatch: pagePreviewDispatch,
      },
    })
  }, [pagePreviewState, adminCoreDispatch, actions, location.search])
}
