import type { DynamicIconName, TextDarkThemeColors, TextThemeColors } from '@/components/types';

export type IconProps = {
  /** @control select*/
  name: DynamicIconName;
  /** @control select */
  color?: TextThemeColors;
  /** @control select */
  colorDark?: TextDarkThemeColors;
  /** @control select */
  size?: 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 68 | 72 | 76 | 80;
};
