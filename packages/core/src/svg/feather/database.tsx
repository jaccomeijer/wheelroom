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
const componentId = 'svg-database'
export const SvgDatabase = (props: IconProps) => {
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
      className="database_svg__feather database_svg__feather-database"
      css={css}
      id={componentId}
      width="100%"
    >
      <ellipse cx={12} cy={5} rx={9} ry={3} />
      <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
    </svg>
  )
}
