import React, { SVGProps } from 'react'
import { Wheel } from '../../wheels/types'
import { styledSystem } from '@wheelroom/styled-system'
export interface IconProps extends SVGProps<SVGSVGElement> {
  ncss: any;
  wheel: Wheel;
}
const componentId = 'svg-sun'
export const SvgSun = (props: IconProps) => {
  const strokeWidth = props.strokeWidth || 2
  const css = styledSystem(props.wheel.styledSystemConfig, props.wheel.theme, {
    ncss: props.ncss,
  })
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className="sun_svg__feather sun_svg__feather-sun"
      css={css}
      id={componentId}
      width="100%"
    >
      <circle cx={12} cy={12} r={5} />
      <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
    </svg>
  )
}
