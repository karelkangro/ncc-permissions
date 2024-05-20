export const size = {
  micro: 12.5, // 200,
  mobileSmall: 23.4375, // 375,
  mobile: 26.75, // 428,
  tablet: 48, // 768,
  laptop: 62, // 992,
  desktop: 75, // 1200,
};

export const device = {
  micro: `(min-width: ${size.micro}rem)`,
  mobileSmall: `(min-width: ${size.mobileSmall}rem)`,
  mobile: `(min-width: ${size.mobile}rem)`,
  tablet: `(min-width: ${size.tablet}rem)`,
  laptop: `(min-width: ${size.laptop}rem)`,
  desktop: `(min-width: ${size.desktop}rem)`,
};
