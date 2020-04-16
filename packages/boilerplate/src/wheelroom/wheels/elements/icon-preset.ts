import { NcssProps } from '../types'

export interface IconPreset {
  ncss: NcssProps
}

export const featherIconPreset: IconPreset = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    w: '48px',
    h: '48px',
    strokeWidth: '1px',
  },
}

export const textIconPreset: IconPreset = {
  ncss: {
    boxSizing: 'border-box',
    display: 'inline-flex',
    fontFamily: 'text',
  },
}
