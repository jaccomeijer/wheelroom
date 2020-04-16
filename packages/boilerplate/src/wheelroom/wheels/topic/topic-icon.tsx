import React from 'react'
import { IconMap } from '../../svg/feather/iconMap'
import { FeatherIcon, TextIcon } from '../elements/icon'
import { NcssProps, Wheel } from '../types'

export const TopicIcon = (props: {
  icon: string | JSX.Element
  ncss: NcssProps
  wheel: Wheel
}) => {
  // When a React element is passed, return that
  if (React.isValidElement(props.icon)) {
    return props.icon
  }
  if (typeof props.icon === 'string') {
    if (Object.keys(IconMap).includes(props.icon)) {
      // When a valid feather icon string is passed, return the svg icon
      return (
        <FeatherIcon
          icon={props.icon}
          wheel={{ ...props.wheel, style: props.wheel.style }}
        />
      )
    } else {
      // When a non feather icon string is passed, return the string
      return (
        <TextIcon
          text={props.icon}
          wheel={{ ...props.wheel, style: props.wheel.style }}
        />
      )
    }
  }
  return null
}
