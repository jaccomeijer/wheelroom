import { NcssProps } from '../types'

export interface ALinkPreset {
  ncss: NcssProps
}

export const aLinkPreset: ALinkPreset = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'systemFont',
    cursor: 'pointer',
    ':hover': {},
    ':visited': {},
    ':focus': {},
  },
}
