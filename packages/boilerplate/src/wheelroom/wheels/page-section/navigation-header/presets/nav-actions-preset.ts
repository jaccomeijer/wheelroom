import { NcssProps } from '../../../types'

export interface NavActionsPreset {
  container: { ncss: NcssProps }
  action: { ncss: NcssProps }
  themeButton: { ncss: NcssProps }
}

export const navActionsPreset: NavActionsPreset = {
  container: { ncss: {} },
  action: { ncss: {} },
  themeButton: {
    ncss: {
      ml: 2,
      textTransform: 'capitalize',
      minWidth: '70px',
    },
  },
}
