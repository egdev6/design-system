import type { DynamicIconName, TextDarkThemeColors, TextThemeColors } from '@/components/utils/types';

type IconSizes = 16 | 20 | 24 | 28 | 32 | 36 | 40 | 44 | 48 | 52 | 56 | 60 | 64 | 68 | 72 | 76 | 80;

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
