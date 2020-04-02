import React from 'react'
import { Box } from './grid'
import { IconMap } from '../../svg/feather/iconMap'
import {
  defaultFeatherIconStyle,
  defaultTextIconStyle,
} from '../../styles/core-elements/icon.'
import { NcssProps } from './types'

export const FeatherIcon = (props: { icon: string; ncss?: NcssProps }) => {
  if (Object.keys(IconMap).includes(props.icon)) {
    const ncss = props.ncss || {}
    // When a valid feather icon string is passed, return the svg icon
    const RenderIcon = IconMap[props.icon]
    return <RenderIcon ncss={{ ...defaultFeatherIconStyle, ...ncss }} />
  } else {
    return <div>Feather icon {props.icon} not found</div>
  }
}

export const TextIcon = (props: { text: string; ncss?: NcssProps }) => {
  const ncss = props.ncss || {}
  return <Box ncss={{ ...defaultTextIconStyle, ...ncss }}>{props.text}</Box>
}