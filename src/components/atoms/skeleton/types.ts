type ThemeRounded = 'sm' | 'md' | 'lg' | 'full' | 'none';

export type SkeletonProps = {
  /**
   * @control text
   * @default '100px'
   * */
  width: string;
  /**
   * @control text
   * @default '20px'
   */
  height: string;
  /**
   * @control select
   * @default 'sm'
   */
  rounded?: ThemeRounded;
  /** @control text */
  className?: string;
};
