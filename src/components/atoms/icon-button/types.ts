import type { DynamicIconName } from '@/components/types';
import { cva } from 'class-variance-authority';

export const iconButtonVariants = cva(
  'link w-auto relative transition-all ease-in duration-300 !flex !gap-1 font-secondary items-center justify-start cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white focus-visible:outline-accent line-clamp-1 ',
  {
    variants: {
      variant: {
        primary:
          'text-text-dark hover:text-accent dark:hover:text-text-dark bg-accent hover:bg-gray-100 dark:hover:bg-gray-800 shadow-secondary border-2 border-accent',
        secondary:
          'text-gray-500 hover:text-accent dark:hover:bg-hover-dark hover:bg-hover-ligth hover-bg-transparent shadow-gray-500 dark:shadow-gray-900',
        outlined:
          'text-accent dark:text-text-dark hover:text-text-dark bg-gray-100 dark:bg-gray-800 hover:bg-accent border-2 border-accent shadow-secondary'
      },
      size: {
        md: 'px-2 py-2',
        lg: 'px-4 py-4',
        sm: 'px-1 py-1'
      }
    },
    defaultVariants: {
      variant: 'outlined',
      size: 'md'
    }
  }
);
export type IconButtonProps = {
  /** @control string */
  href: string;
  /** @control string */
  icon: DynamicIconName;
  /**@control string */
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** @control */
  title: string;
  /**@control boolean */
  shadow?: boolean;
  /**@control boolean */
  rounded?: boolean;
};
