type ThemeRounded = 'sm' | 'md' | 'lg' | 'full' | 'none';

export type SkeletonProps = {
  /** @control text */
  width: string;
  /** @control text */
  height: string;
  /** @control select */
  rounded?: ThemeRounded;
  /** @control text */
  className?: string;
};
