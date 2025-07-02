import type { DynamicIconName } from '@/components/utils/types';
import { type VariantProps, cva } from 'class-variance-authority';

export const iconButtonVariants = cva(
  [
    'link relative overflow-hidden border-2 cursor-pointer px-2 py-2 max-w-full',
    'transition-all duration-200 ease-in-out',
    'flex items-center justify-start',
    'whitespace-nowrap line-clamp-1 ',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'disabled:pointer-events-none disabled:opacity-60',
    'dark:focus-visible:outline-white focus-visible:outline-secondary'
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
          'hover:shadow-transparent',
          'dark:text-text-dark',
          'dark:border-transparent',
          'dark:hover:bg-gray-dark-500',
          'dark:hover:border-gray-dark-500',
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
          'dark:bg-gray-dark-600',
          'dark:border-gray-dark-600',
          'dark:hover:bg-gray-dark-500',
          'dark:hover:border-gray-dark-500',
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
        true: 'hover:shadow-custom-sm',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'primary',
      rounded: false,
      shadow: false
    }
  }
);

type IconButtonVariant = VariantProps<typeof iconButtonVariants>['variant'];
type IconSizes = 10 | 12 | 14 | 16 | 18 | 20 | 22 | 24 | 26 | 28 | 30 | 32 | 34 | 36 | 38 | 40;

export type IconButtonProps = {
  /**
   * @control select
   * @default primary
   */
  variant?: IconButtonVariant;
  /** @control text */
  icon?: DynamicIconName;
  /**
   * @control text
   * @default 20
   */
  size?: IconSizes;
  /**
   * @control boolean
   * @default false
   */
  rounded?: boolean;
  /**
   * @control boolean
   * @default false
   */
  shadow?: boolean;
  /**
   * @control boolean
   * @default false
   */
  disabled?: boolean;
  /** @control text */
  title?: string;
  /** @control text */
  className?: string;
  /**
   * @control boolean
   * @default false
   */
  'aria-pressed'?: boolean;
};
