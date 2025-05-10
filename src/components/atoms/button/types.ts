import type { DynamicIconName } from '@/components/types';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'button relative !flex gap-4 font-secondary-bold rounded-lg items-center transition-all tracking-[2px] overflow-hidden justify-center cursor-pointer whitespace-nowrap disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white focus-visible:outline-accent line-clamp-1 ',
  {
    variants: {
      variant: {
        primary:
          'shadow-lg text-text-dark hover:text-accent dark:hover:text-text-dark bg-accent hover:shadow-transparent shadow-secondary hover:bg-transparent uppercase',
        secondary:
          'shadow-lg text-text-dark bg-gray-800 hover:text-text-light dark:hover:text-text-dark hover:shadow-transparent shadow-gray-900 hover:bg-transparent uppercase',
        outline:
          'button-outline shadow-lg dark:text-text-dark text-accent hover:text-text-dark bg-gray-100 dark:bg-gray-800 shadow-accent border-2 border-accent hover:bg-accent uppercase',
        link: 'button-link text-accent dark:text-dark-text underline-offset-4 underline'
      },
      size: {
        default: 'px-6 py-4 has-[>svg]:px-4 fs-base',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5 fs-base'
      },
      width: {
        full: 'w-full',
        auto: 'w-auto'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
      width: 'auto'
    }
  }
);

export type ButtonProps = {
  /** @control string */
  text?: string;
  /** @control boolean */
  disabled?: boolean;
  /** @control boolean */
  isLoading?: boolean;
  /** @control select */
  type?: 'button' | 'submit' | 'reset';
  /** @control string */
  icon?: DynamicIconName;
  /** @control string */
  ariaLabel?: string;
};
