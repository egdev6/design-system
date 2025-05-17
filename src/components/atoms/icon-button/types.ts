import type { DynamicIconName } from '@/components/utils/types';
import { cva } from 'class-variance-authority';

export const iconButtonVariants = cva(
  [
    'link px-2 py-2 w-auto border-2',
    '!flex !gap-1 items-center justify-start',
    'cursor-pointer whitespace-nowrap line-clamp-1 ',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
    'dark:focus-visible:outline-white focus-visible:outline-accent'
  ],
  {
    variants: {
      variant: {
        primary: [
          'text-text-dark',
          'bg-secondary',
          'border-secondary',
          'hover:text-secondary',
          'hover:border-secondary',
          'hover:shadow-primary',
          'dark:hover:bg-gray-800',
          'dark:hover:text-text-dark',
          'dark:hover:text-text-dark',
          'dark:hover:shadow-secondary'
        ],
        ghost: ['text-text-light', 'dark:text-text-dark'],
        light: ['text-text-light', 'dark:text-text-dark'],
        secondary: [
          'text-text-dark',
          'bg-gray-500',
          'border-gray-500',
          'dark:bg-gray-700',
          'dark:border-gray-700',
          'dark:hover:border-accent',
          'hover:border-secondary',
          'hover:shadow-gray-900',
          'dark:hover:shadow-gray-900'
        ],
        outlined: [
          'text-secondary',
          'bg-gray-200',
          'border-secondary',
          'dark:text-text-dark',
          'dark:bg-gray-800',
          'hover:text-text-dark',
          'hover:bg-secondary',
          'hover:shadow-primary',
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
