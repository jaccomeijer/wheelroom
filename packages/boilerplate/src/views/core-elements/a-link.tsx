/** @jsx jsx */
import { jsx } from '@emotion/core'
import { emotionCss } from './emotion-css'

export const ALink = (props: any) => (
  <a
    css={emotionCss({
      ncss: { display: 'block', textDecoration: 'none', ...props.ncss },
    })}
    href={props.href}
  >
    {props.children}
  </a>
)
