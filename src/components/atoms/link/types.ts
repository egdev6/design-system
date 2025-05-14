import type { DynamicIconName } from '@/components/types';
import { cva } from 'class-variance-authority';

export const linkVariants = cva(
  'link w-auto relative transition-all ease-in duration-300 !flex !gap-1 font-secondary items-center justify-start cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white focus-visible:outline-accent line-clamp-1 ',
  {
    variants: {
      variant: {
        regular:
          'hover:text-accent text-text-light dark:text-text-dark dark:hover:text-accent underline-offset-2 underline',
        button:
          'px-4 py-2 shadow-lg rounded-lg text-text-dark dark:text-text-dark hover:text-accent hover:underline-offset-2 hover:underline dark:hover:text-text-dark bg-accent shadow-secondary hover:shadow-transparent hover:bg-gray-100 dark:hover:bg-gray-800 border-2 border-accent hover:border-accent',
        outlined:
          'px-4 py-2 shadow-lg rounded-lg text-accent dark:text-text-dark hover:text-text-dark bg-gray-100 dark:bg-gray-800 shadow-secondary border-2 border-accent hover:bg-accent'
      },
      size: {
        sm: 'fs-small tablet:fs-small-tablet',
        md: 'fs-base tablet:fs-base-tablet',
        lg: 'fs-h5 tabket:fs-base-tablet'
      }
    },
    defaultVariants: {
      variant: 'regular',
      size: 'md'
    }
  }
);

type ButtonVariants = 'regular' | 'button' | 'outlined';
type TargetVariants = '_blank' | '_self' | '_parent' | '_top';
type LinkSizes = 'sm' | 'md' | 'lg';

export type LinkProps = {
  /** @control select */
  variant?: ButtonVariants;
  /** @control string */
  href: string;
  /**@control string */
  target?: TargetVariants;
  /** @control string */
  icon?: DynamicIconName;
  /** @control */
  title?: string;
  /** @control select */
  size: LinkSizes;
  /** @control string */
  className?: string;
  /** @control string */
  children: string;
};
