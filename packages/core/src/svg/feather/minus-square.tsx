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
const componentId = 'svg-minus-square'
export const SvgMinusSquare = (props: IconProps) => {
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
      className="minus-square_svg__feather minus-square_svg__feather-minus-square"
      css={css}
      id={componentId}
      width="100%"
    >
      <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
      <path d="M8 12h8" />
    </svg>
  )
}
