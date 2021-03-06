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
const componentId = 'svg-umbrella'
export const SvgUmbrella = (props: IconProps) => {
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
      className="umbrella_svg__feather umbrella_svg__feather-umbrella"
      css={css}
      id={componentId}
      width="100%"
    >
      <path d="M23 12a11.05 11.05 0 00-22 0zm-5 7a3 3 0 01-6 0v-7" />
    </svg>
  )
}
