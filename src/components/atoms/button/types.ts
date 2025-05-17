import type { DynamicIconName } from '@/components/utils/types';
import { type VariantProps, cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'button relative overflow-hidden border-2 cursor-pointer max-w-full',
    'flex items-center justify-center',
    'font-secondary-bold whitespace-nowrap line-clamp-1 leading-[1.2]',
    'disabled:pointer-events-none disabled:opacity-60',
    'focus-visible:outline-offset-2 dark:focus-visible:outline-white focus-visible:outline-accent focus-visible:outline-2'
  ],
  {
    variants: {
      variant: {
        primary: [
          'text-text-dark',
          'bg-secondary',
          'border-secondary',
          'hover:border-accent',
          'hover:bg-accent',
          'hover:shadow-secondary',
          'dark:hover:bg-accent',
          'dark:hover:shadow-secondary'
        ],
        ghost: [
          'text-text-light',
          'bg-transparent',
          'border-text-light',
          'hover:bg-gray-light-600',
          'hover:border-gray-light-600',
          'hover:shadow-transparent',
          'dark:text-text-dark',
          'dark:border-gray-dark-400',
          'dark:hover:bg-gray-dark-400',
          'dark:hover:border-gray-dark-400',
          'dark:hover:shadow-gray-900'
        ],
        light: [
          'text-secondary',
          'border-transparent',
          'bg-transparent',
          'hover:text-text-dark',
          'dark:text-text-dark',
          'hover:border-accent',
          'hover:bg-accent',
          'hover:shadow-secondary'
        ],
        secondary: [
          'text-text-light',
          'bg-gray-light-500',
          'border-gray-light-500',
          'hover:bg-gray-light-600',
          'hover:border-gray-light-600',
          'hover:shadow-transparent',
          'dark:text-text-dark',
          'dark:bg-gray-dark-500',
          'dark:border-gray-dark-500',
          'dark:hover:bg-gray-dark-400',
          'dark:hover:border-gray-dark-400',
          'dark:hover:shadow-gray-900'
        ],
        outlined: [
          'text-secondary',
          'border-secondary',
          'hover:text-text-dark',
          'bg-transparent',
          'hover:border-accent',
          'hover:bg-accent',
          'hover:shadow-secondary',
          'dark:hover:bg-accent',
          'dark:text-text-dark',
          'dark:hover:shadow-secondary'
        ]
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md'
      },
      shadow: {
        true: 'hover:shadow-sm',
        false: ''
      },
      uppercase: {
        true: 'uppercase',
        false: ''
      },
      size: {
        md: 'px-md h-10 fs-base tablet:fs-base-tablet',
        lg: 'px-lg h-12 fs-h6 tablet:fs-h6-tablet',
        sm: 'px-sm h-8 fs-small tablet:fs-small-tablet'
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

type ButtonVariant = VariantProps<typeof buttonVariants>['variant'];
type ButtonTypeVariants = 'button' | 'submit' | 'reset';
type ButtonSizeVariants = 'md' | 'sm' | 'lg';

export type ButtonProps = {
  /** @control select */
  variant?: ButtonVariant;
  /** @control text */
  text?: string;
  /** @control text */
  icon?: DynamicIconName;
  /** @control text */
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
  /** @control text */
  ariaLabel?: string;
  /** @control text */
  className?: string;
};
