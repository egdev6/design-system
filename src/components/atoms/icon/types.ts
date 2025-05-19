import type { DynamicIconName, TextDarkThemeColors, TextThemeColors } from '@/components/utils/types';

type IconSizes = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40;

export type IconProps = {
  /** @control select*/
  name: DynamicIconName;
  /** @control select */
  color?: TextThemeColors;
  /** @control select */
  colorDark?: TextDarkThemeColors;
  /** @control select */
  size?: IconSizes;
  /** @control text */
  className?: string;
};
