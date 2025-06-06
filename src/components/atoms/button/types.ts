import type { DynamicIconName } from '@/components/utils/types';
import { type VariantProps, cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'button relative overflow-hidden border-2 cursor-pointer max-w-full',
    'transition-all duration-200 ease-in-out',
    'flex items-center justify-center',
    'font-secondary-bold whitespace-nowrap line-clamp-1 leading-[1.2]',
    'disabled:pointer-events-none disabled:opacity-60',
    'focus-visible:outline-offset-2 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-2'
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
          'border-transparent',
          'hover:bg-gray-light-600',
          'hover:border-gray-light-600',
          'hover:!shadow-transparent',
          'dark:text-text-dark',
          'dark:border-transparent',
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
          'hover:!shadow-transparent',
          'dark:text-text-dark',
          'dark:bg-gray-dark-500',
          'dark:border-gray-dark-500',
          'dark:hover:bg-gray-dark-400',
          'dark:hover:border-gray-dark-400',
          'dark:hover:shadow-gray-dark-900'
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
        true: 'hover:shadow-custom-sm',
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
  /**
   * @control select
   * @default primary
   */
  variant?: ButtonVariant;
  /** @control text */
  text?: string;
  /** @control text */
  icon?: DynamicIconName;
  /**
   * @control select
   * @default md
   */
  size?: ButtonSizeVariants;
  /**
   * @control select
   * @default button
   */
  type?: ButtonTypeVariants;
  /**
   * @control boolean
   * @default false
   */
  rounded?: boolean;
  /**
   * @control boolean
   * @default true
   */
  shadow?: boolean;
  /**
   * @control boolean
   * @default true
   */
  uppercase?: boolean;
  /**
   * @control boolean
   * @default false
   */
  disabled?: boolean;
  /**
   * @control boolean
   * @default false
   */
  isFullWidth?: boolean;
  /**
   * @control boolean
   * @default false
   */
  isLoading?: boolean;
  /** @control text */
  ariaLabel?: string;
  /** @control text */
  className?: string;
  /**
   * @control boolean
   * @default false
   */
  'aria-pressed'?: boolean; // Nuevo prop para accesibilidad en botones de alternancia
};
