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
const componentId = 'svg-speaker'
export const SvgSpeaker = (props: IconProps) => {
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
      className="speaker_svg__feather speaker_svg__feather-speaker"
      css={css}
      id={componentId}
      width="100%"
    >
      <rect x={4} y={2} width={16} height={20} rx={2} ry={2} />
      <circle cx={12} cy={14} r={4} />
      <path d="M12 6h.01" />
    </svg>
  )
}
