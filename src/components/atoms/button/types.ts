import type { DynamicIconName } from '@/components/types';
import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'button relative transition-all ease-in duration-300 !flex gap-4 font-secondary-bold rounded-lg items-center tracking-[2px] overflow-hidden justify-center cursor-pointer whitespace-nowrap disabled:pointer-events-none disabled:opacity-60 focus-visible:outline-2 focus-visible:outline-offset-2 dark:focus-visible:outline-white focus-visible:outline-accent line-clamp-1 ',
  {
    variants: {
      variant: {
        primary:
          'text-text-dark hover:text-accent dark:hover:text-text-dark bg-accent shadow-secondary border-2 border-transparent hover:border-accent hover:bg-gray-100 dark:hover:bg-gray-800',
        secondary:
          'text-text-dark bg-gray-500 dark:bg-gray-700 hover:text-accent shadow-gray-900 border-2 hover:bg-hover-ligth hover:border-hover-ligth border-gray-500 dark:border-gray-700 dark:hover:border-hover-dark dark:hover:bg-hover-dark',
        outline:
          'button-outline dark:text-text-dark text-accent hover:text-text-dark bg-gray-100 dark:bg-gray-800 shadow-accent border-2 border-accent hover:bg-accent'
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md'
      },
      shadow: {
        true: 'shadow-lg hover:shadow-transparent',
        false: ''
      },
      uppercase: {
        true: 'uppercase',
        false: ''
      },
      size: {
        md: 'h-[44px] px-4 py-2 fs-base tablet:fs-base-tablet',
        lg: 'px-6 py-4 fs-h6 tablet:fs-h6-tablet',
        sm: 'px-4 py-2 fs-small tablet:fs-small-tablet'
      }
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      rounded: false,
      shadow: true
    }
  }
);

type ButtonVariant = 'primary' | 'secondary' | 'outline';
type ButtonTypeVariants = 'button' | 'submit' | 'reset';
type ButtonSizeVariants = 'md' | 'sm' | 'lg';

export type ButtonProps = {
  /** @control select */
  variant?: ButtonVariant;
  /** @control string */
  text?: string;
  /** @control string */
  icon?: DynamicIconName;
  /** @control select */
  size?: ButtonSizeVariants;
  /** @control select */
  type?: ButtonTypeVariants;
  /** @control boolean */
  rounded?: boolean;
  /** @control boolean */
  shadow?: boolean;
  /** @control boolean */
  uppercase?: boolean;
  /** @control boolean */
  disabled?: boolean;
  /** @control boolean */
  isFullWidth?: boolean;
  /** @control boolean */
  isLoading?: boolean;
  /** @control string */
  ariaLabel?: string;
  /** @control */
  className?: string;
};
