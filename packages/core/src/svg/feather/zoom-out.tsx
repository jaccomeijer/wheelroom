import React, { SVGProps } from 'react'
import { styledSystem } from '@wheelroom/styled-system'
import { Wheel } from '../../lib/wheel'
interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any
  wheel: Wheel
}
const componentId = 'svg-zoom-out'
export const SvgZoomOut = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(
    props.wheel.wrSystemConfig,
    props.wheel.wrSystemTheme,
    {
      ncss: props.ncss,
    }
  )
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="zoom-out_svg__feather zoom-out_svg__feather-zoom-out"
      css={css}
      id={componentId}
      width="100%"
    >
      <circle cx={11} cy={11} r={8} />
      <path d="M21 21l-4.35-4.35M8 11h6" />
    </svg>
  )
}
