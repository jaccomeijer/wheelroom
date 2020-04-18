import { NcssProps } from '../../../types'
import {
  navHeaderListItemLinkPreset,
  NavHeaderListItemLinkWheelStyle,
} from './nav-header-list-item-link-preset'

export interface NavHeaderListItemWheelStyle {
  ncss: NcssProps
  link: NavHeaderListItemLinkWheelStyle
}

export const navHeaderListItemPreset: NavHeaderListItemWheelStyle = {
  ncss: {
    label: 'nav-header-list-item',
    listStyle: 'none',
  },
  link: navHeaderListItemLinkPreset,
}
