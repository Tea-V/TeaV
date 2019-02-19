const breakpoints = {
  large: 992,
  medium: 768,
  small: 576,
  xLarge: 1200,
};

export default {
  largeAndAbove: `(min-width: ${breakpoints.large}px)`,
  mediumAndAbove: `(min-width: ${breakpoints.medium}px)`,
  smallAndAbove: `(min-width: ${breakpoints.small}px)`,
  xLargeAndAbove: `(min-width: ${breakpoints.xLarge}px)`,
};
