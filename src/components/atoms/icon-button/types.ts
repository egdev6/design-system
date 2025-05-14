import type { DynamicIconName } from '@/components/types';
import { cva } from 'class-variance-authority';

export const iconButtonVariants = cva(
  'link px-2 py-2 w-auto relative transition-all ease-in duration-300 !flex !gap-1 font-secondary items-center justify-start cursor-pointer whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white focus-visible:outline-accent line-clamp-1 ',
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
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md'
      },
      shadow: {
        true: 'shadow-md hover:shadow-transparent',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'outlined',
      rounded: false,
      shadow: false
    }
  }
);

type ButtonVariants = 'primary' | 'secondary' | 'outlined';
type TargetVariants = '_blank' | '_self' | '_parent' | '_top';
type IconSizes = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40;

export type IconButtonProps = {
  /** @control select  */
  variant?: ButtonVariants;
  /** @control select */
  icon?: DynamicIconName;
  /** @control select */
  size?: IconSizes;
  /** @control text */
  href: string;
  /** @control select */
  target?: TargetVariants;
  /** @control text */
  title: string;
  /** @control boolean */
  rounded?: boolean;
  /** @control boolean */
  shadow?: boolean;
  /** @control text */
  className?: string;
};
