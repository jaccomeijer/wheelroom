/** @jsx jsx */
import { SVGProps } from 'react'
import { jsx } from '@emotion/core'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
  strokeWidth: number
}
const componentId = 'svg-chrome'
export const SvgChrome = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(
    props.wheel.wrSystemConfig,
    props.wheel.wrSystemTheme,
    props.ncss
  )
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="chrome_svg__feather chrome_svg__feather-chrome"
      css={css}
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={10} />
      <circle cx={12} cy={12} r={4} />
      <path d="M21.17 8H12M3.95 6.06L8.54 14M10.88 21.94L15.46 14" />
    </svg>
  )
}
