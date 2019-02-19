import unit from './unit';

export default {
  large: `${unit << 1}px`,
  medium: `${unit}px`,
  small: `${unit >> 1}px`,
  xLarge: `${unit << 2}px`,
  xSmall: `${unit >> 2}px`,
};
