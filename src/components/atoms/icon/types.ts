import type { DynamicIconName, TextDarkThemeColors, TextThemeColors } from '@/components/utils/types';

type IconSizes = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40;

export type IconProps = {
  /** @control select*/
  name: DynamicIconName;
  /**
   * @control select
   * @default text-accent
   * */
  color?: TextThemeColors;
  /**
   * @control select
   * @default dark:text-accent
   */
  colorDark?: TextDarkThemeColors;
  /**
   * @control select
   * @default 24
   * */
  size?: IconSizes;
  /** @control text */
  className?: string;
};
