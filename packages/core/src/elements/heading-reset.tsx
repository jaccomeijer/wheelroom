import { NcssNode } from '../lib/ncss'

export const headingReset: NcssNode = {
  ncss: {
    boxSizing: 'border-box',
    fontFamily: 'text',
  },
}

// These styles are added to H1, H2, H3, H4, H5 and H6 as presets
export const heading1Reset: NcssNode = {
  ncss: {
    // Correct the font size and margin on `h1` elements within `section` and
    // `article` contexts in Chrome, Firefox, and Safari.
    fontSize: '2em',
    my: '0.67em',
    mx: '0',
    ...headingReset.ncss,
  },
}

export const heading2Reset: NcssNode = {
  ncss: {
    ...headingReset.ncss,
  },
}

export const heading3Reset: NcssNode = {
  ncss: {
    ...headingReset.ncss,
  },
}

export const heading4Reset: NcssNode = {
  ncss: {
    ...headingReset.ncss,
  },
}

export const heading5Reset: NcssNode = {
  ncss: {
    ...headingReset.ncss,
  },
}

export const heading6Reset: NcssNode = {
  ...headingReset.ncss,
}

export const headingResets = {
  h1: heading1Reset,
  h2: heading2Reset,
  h3: heading3Reset,
  h4: heading4Reset,
  h5: heading5Reset,
  h6: heading6Reset,
}
