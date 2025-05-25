import { type VariantProps, cva } from 'class-variance-authority';
import type { ChangeEvent, ReactNode } from 'react';

export const inputVariants = cva(
  ['relative overflow-hidden flex py-2 justify-between max-w-full', 'border-2 transition-all duration-200'],
  {
    variants: {
      variant: {
        regular: ['bg-gray-light-500', 'border-gray-light-500', 'dark:bg-gray-dark-600', 'dark:border-gray-dark-600'],
        underlined: ['bg-transparent', 'border-gray-light-500', 'dark:bg-transparent', 'dark:border-gray-dark-600'],
        line: [
          'bg-transparent',
          'border-t-transparent',
          'border-l-transparent',
          'border-r-transparent',
          '!rounded-none',
          'border-b-gray-light-500',
          'dark:border-b-gray-dark-600'
        ],
        bordered: ['bg-gray-light-500', 'border-gray-light-600', 'dark:bg-gray-dark-600', 'dark:border-gray-dark-500']
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md'
      },
      size: {
        sm: 'h-12 px-2 fs-small tablet:fs-small-tablet',
        md: 'h-14 px-4 fs-base tablet:fs-base-tablet',
        lg: 'h-16 px-4 fs-h6 tablet:fs-h6-tablet'
      },
      state: {
        default: '',
        focused: 'outline-offset-2 dark:outline-white outline-secondary outline-2',
        focusedRegular:
          'hover:bg-gray-light-600 hover:border-gray-light-600 dark:hover:bg-gray-dark-500 dark:hover:border-gray-dark-500',
        focusedUnderlined: 'hover:border-gray-light-600 dark:hover:border-gray-dark-500',
        focusedLine: 'hover:border-b-gray-light-600 dark:hover:border-b-gray-dark-500',
        focusedBordered: 'hover:bg-gray-light-600 dark:hover:bg-gray-dark-500'
      },
      focused: {
        true: 'outline-offset-2 dark:outline-white outline-secondary outline-2',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'regular',
      rounded: false,
      size: 'md',
      state: 'default'
    }
  }
);

export const labelVariants = cva(
  ['absolute w-auto transition-all duration-200 text-text-light dark:text-text-dark pt-[2px]'],
  {
    variants: {
      size: {
        sm: 'left-2 fs-small tablet:fs-small-tablet',
        md: 'left-4 fs-base tablet:fs-base-tablet',
        lg: 'left-4 fs-h6 tablet:fs-h6-tablet'
      },
      state: {
        default: 'top-[50%] translate-y-[-50%]',
        focusedSm: 'top-1 fs-small font-secondary-bold',
        focusedMd: 'top-1.5 fs-small font-secondary-bold',
        focusedLg: 'top-2 fs-small font-secondary-bold',
        hasValueSm: 'top-1 fs-small font-secondary-bold',
        hasValueMd: 'top-1.5 fs-small font-secondary-bold',
        hasValueLg: 'top-2 fs-small font-secondary-bold'
      }
    },
    defaultVariants: {
      size: 'md',
      state: 'default'
    }
  }
);

type InputVariant = VariantProps<typeof inputVariants>['variant'];
type InputTypeVariant = 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'hidden';
type InputSize = VariantProps<typeof inputVariants>['size'];

export type InputProps = {
  /** @control text */
  id: string;
  /**
   * @control select
   * @defaultValue regular
   */
  variant?: InputVariant;
  /**
   * @control select
   * @defaultValue text
   */
  type?: InputTypeVariant;
  /**
   * @control boolean
   * @defaultValue false
   */
  rounded?: boolean;
  /** @control text */
  label?: string;
  /**
   * @control boolean
   * @defaultValue false
   */
  disabled?: boolean;
  /**
   * @control select
   * @defaultValue md
   */
  size?: InputSize;
  /**
   * @control boolean
   * @defaultValue false
   */
  isFullWidth?: boolean;
  /** @control text */
  placeholder?: string;
  /** @control text */
  className?: string;
  /** @control object */
  hint?: { message: string; type: 'error' | 'warning' | 'success' | 'info' };
  startContent?: ReactNode;
  endContent?: ReactNode;
  onChange?: (e: ChangeEvent, value: string) => void;
};
