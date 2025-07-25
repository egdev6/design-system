import { type VariantProps, cva } from 'class-variance-authority';
import type { ReactNode } from 'react';

export const badgeVariants = cva(
  [
    'inline-flex items-center font-medium rounded-full',
    'transition-colors duration-200 ease-in-out',
    'whitespace-nowrap'
  ],
  {
    variants: {
      color: {
        primary: 'bg-primary text-text-dark',
        secondary: 'bg-gray-light-500 text-text-light',
        success: 'bg-green-500 text-text-light',
        warning: 'bg-yellow-500 text-text-light',
        danger: 'bg-red-500 text-text-dark'
      },
      size: {
        sm: 'text-[10px] min-w-[18px] h-[18px] px-[6px] py-[2px]',
        md: 'text-xs min-w-[24px] h-[24px] px-[8px] py-[4px]',
        lg: 'text-sm min-w-[28px] h-[28px] px-[10px] py-[5px]'
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md'
      },
      variant: {
        solid: '',
        flat: 'opacity-60 border border-grey-500',
        shadow: 'shadow-md shadow-gray-dark-600'
      },
      placement: {
        'top-right': 'absolute top-0 right-0 translate-x-1/2 -translate-y-1/2',
        'bottom-right': 'absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2',
        'bottom-left': 'absolute bottom-0 left-0 -translate-x-1/2 translate-y-1/2',
        'top-left': 'absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2'
      },
      animation: {
        default: '',
        pulse: 'animate-pulse',
        bounce: 'animate-bounce',
        ping: 'animate-ping'
      }
    },
    defaultVariants: {
      color: 'primary',
      size: 'md',
      rounded: false,
      variant: 'solid',
      placement: 'top-right'
    }
  }
);

type BadgeVariantsColor = VariantProps<typeof badgeVariants>['color'];
type BadgeVariantsSize = VariantProps<typeof badgeVariants>['size'];
type BadgeVariantsRounded = VariantProps<typeof badgeVariants>['rounded'];
type BadgeVariantsPlacement = VariantProps<typeof badgeVariants>['placement'];
type BadgeVariants = VariantProps<typeof badgeVariants>['variant'];
type AnimationVariants = VariantProps<typeof badgeVariants>['animation'];

export type BadgeProps = {
  content?: string | number | ReactNode;
  className?: string;
  ariaLabel?: string;
  children?: ReactNode;
  /**
   * @control select
   * @default primary
   */
  color?: BadgeVariantsColor;
  /**
   * @control select
   * @default top-right
   */
  placement?: BadgeVariantsPlacement;
  /**
   * @control select
   * @default md
   */
  size?: BadgeVariantsSize;
  /**
   * @control select
   * @default true
   */
  rounded?: BadgeVariantsRounded;
  /**
   * @control select
   * @default solid
   */
  variant?: BadgeVariants;
  /**
   * @control boolean
   * @default true
   */
  visibility?: boolean;
  /**
   * @control select
   * @default default
   */
  animation?: AnimationVariants;
};
