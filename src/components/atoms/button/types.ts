import type { DynamicIconName } from '@/components/types';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'button relative transition-all ease-in duration-300 !flex gap-4 font-secondary-bold rounded-lg items-center tracking-[2px] overflow-hidden justify-center cursor-pointer whitespace-nowrap disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white focus-visible:outline-accent line-clamp-1 ',
  {
    variants: {
      variant: {
        primary:
          'shadow-lg text-text-dark hover:text-accent dark:hover:text-text-dark bg-accent hover:shadow-transparent shadow-secondary hover:bg-transparent uppercase',
        secondary:
          'shadow-lg text-text-dark bg-gray-800 hover:text-text-light dark:hover:text-text-dark hover:shadow-transparent shadow-gray-900 hover:bg-transparent uppercase',
        outline:
          'button-outline shadow-lg dark:text-text-dark text-accent hover:text-text-dark bg-gray-100 dark:bg-gray-800 shadow-accent border-2 border-accent hover:bg-accent uppercase'
      },
      size: {
        md: 'px-4 py-2 fs-base tablet:fs-base-tablet',
        lg: 'px-6 py-4 fs-h6 tablet:fs-h6-tablet',
        sm: 'px-4 py-2 fs-small tablet:fs-small-tablet'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md'
    }
  }
);

export type ButtonProps = {
  /** @control string */
  text?: string;
  /** @control boolean */
  disabled?: boolean;
  /** @control boolean */
  isFullWidth?: boolean;
  /** @control boolean */
  isLoading?: boolean;
  /** @control select */
  type?: 'button' | 'submit' | 'reset';
  /** @control string */
  icon?: DynamicIconName;
  /** @control string */
  ariaLabel?: string;
};
