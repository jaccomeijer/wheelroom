import { commonNavigationStyle } from '../common/navigation-common-preset'
import { NcssProps } from '../../../types'

export interface NavLegalTreeStyle {
  container: NcssProps
  innerContainer: NcssProps
  text: NcssProps
  link: NcssProps
}

export const navLegalPreset: NavLegalTreeStyle = {
  container: {
    borderTop: '1px solid transparent',
    borderColor: 'border',
    px: 3,
  },
  innerContainer: {
    h: '48px',
    w: 1,
    alignItems: 'center',
    justifyContent: ['center', 'normal'],
  },
  text: { fontFamily: 'text', color: 'metal' },
  link: {
    ...commonNavigationStyle,
    display: 'inline-flex',
    color: 'metal',
  },
}