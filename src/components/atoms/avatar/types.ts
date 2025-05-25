import type { ReactNode } from 'react';

export type AvatarProps = {
  /** @control src */
  src: string;
  /** @control select */
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';
  /** @control text */
  alt: string;
  /** @control text */
  className?: string;
  /**
   * @control boolean
   * @default false
   */
  hasBadge?: boolean;
  /** @control text */
  badgeContent?: string | ReactNode;
  /** @control text */
  badgeClassName?: string;
};
