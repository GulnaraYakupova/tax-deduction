export const color = {
  red: '#FF5E56',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#BEC5CC',
  grey: '#808080',
  altGray: '#CFDAE7',
  borderGray: '#DFE3E6',
  lightGray: '#EEF0F2',
  darkRed: '#EA0029',
  lightRed: '#DC3131',
  blurRed: '#F53A31',
  opacityRed: 'rgba(255, 79, 79, 0)',
  shadowRed: 'rgba(234, 0, 41, 0.33)',
  overlayGray: 'rgba(0, 0, 0, 0.3)',
}

export const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktop: 1440,
}

export const size = {
  mobile: `max-width: ${breakpoints.tablet - 1}px`,
  tablet: `max-width: ${breakpoints.desktop - 1}px`,
}

export const media = {
  mobile: `@media screen and (${size.mobile})`,
  tablet: `@media screen and (${size.tablet})`,
}