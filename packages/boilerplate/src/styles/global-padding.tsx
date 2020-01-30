/**
 * Global styled system responsive padding scales used in components
 *
 */
import {
  Padding,
  PaddingBrakepoints,
  PaddingType,
  parsePadding,
} from '../lib/padding'

type PaddingName =
  | 'image'
  | 'listItem'
  | 'navLinks'
  | 'page'
  | 'section'
  | 'textBox'
type GlobalPadding = Record<
  PaddingName,
  PaddingBrakepoints | number[] | number | Padding
>

// eslint:disable: object-literal-sort-keys
const globalPadding: GlobalPadding = {
  image: [4, 5, 6, 6],
  navLinks: 2,
  page: { top: 0, bottom: 8, left: 0, right: 0 },
  section: {
    mobile: { top: 2, bottom: 1, left: 4, right: 4 },
    tablet: { top: 3, bottom: 2, left: 5, right: 5 },
    desktop: { top: 4, bottom: 3, left: 6, right: 6 },
    widescreen: { top: 5, bottom: 4, left: 0, right: 0 },
  },
  textBox: [4, 5, 6, 6],
  listItem: {
    mobile: { top: 3, bottom: 3, left: 4, right: 3 },
    tablet: { top: 3, bottom: 4, left: 4, right: 3 },
    desktop: { top: 4, bottom: 5, left: 5, right: 4 },
    widescreen: { top: 4, bottom: 5, left: 5, right: 4 },
  },
}

export const getSinglePadding = (name: PaddingName, type: PaddingType) => {
  return parsePadding(name, type, globalPadding)
}

export const getAllPaddingObject = (name: PaddingName) => {
  const pb = parsePadding(name, 'bottom', globalPadding)
  const pl = parsePadding(name, 'left', globalPadding)
  const pr = parsePadding(name, 'right', globalPadding)
  const pt = parsePadding(name, 'top', globalPadding)

  return { pb, pl, pr, pt }
}
