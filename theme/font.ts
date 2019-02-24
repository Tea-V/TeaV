export const fontFace = `
@font-face {
  font-display: swap;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 400;
  src: local('Open Sans Regular'), local('OpenSans-Regular'), url(https://fonts.gstatic.com/s/opensans/v15/mem8YaGs126MiZpBA-UFVZ0bf8pkAg.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

@font-face {
  font-display: swap;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 700;
  src: local('Open Sans Bold'), local('OpenSans-Bold'), url(https://fonts.gstatic.com/s/opensans/v15/mem5YaGs126MiZpBA-UN7rgOUuhpKKSTjw.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
`;

export const fontFamily = "'Open Sans', sans-serif";

const lineHeightRatio = 1.5;

export const weight = {
  bolder: 700,
  regular: 400,
};

export default {
  large: `
    font: 18px ${fontFamily};
    line-height: ${18 * lineHeightRatio}px;
  `,
  medium: `
    font: 16px ${fontFamily};
    line-height: ${16 * lineHeightRatio}px;
  `,
  small: `
    font: 14px ${fontFamily};
    line-height: ${14 * lineHeightRatio}px;
  `,
  xSmall: `
    font: 12px ${fontFamily};
    line-height: ${12 * lineHeightRatio}px;
  `,
};
