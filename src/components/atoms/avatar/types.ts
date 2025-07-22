type ThemeRounded = 'md' | 'full' | 'none';

export type AvatarProps = {
  /** @control src */
  src: string;
  /** @control select */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** @control text */
  alt: string;
  /** @control text */
  className?: string;
  /** @control select */
  rounded?: ThemeRounded;
};
