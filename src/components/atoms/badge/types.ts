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
        primary: ['bg-primary', 'text-text-light'],
        secondary: ['bg-gray-light-500', 'text-text-light'],
        success: ['bg-green-500', 'text-text-dark'],
        warning: ['bg-yellow-500', 'text-text-dark'],
        danger: ['bg-red-500', 'text-text-light']
      },
      size: {
        // Cambiar los tamaños de los padding y disminuir el font-size
        sm: 'text-[10px] px-2 py-[2px] min-w-[16px] h-[16px]',
        md: 'text-xs px-2.5 py-0.5 min-w-[20px] h-[20px]',
        lg: 'text-sm px-3 py-1 min-w-[24px] h-[24px]'
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md'
      },
      variant: {
        // Cambiar los estilos de cada uno
        solid: 'bg-opacity-100',
        flat: 'bg-opacity-80',
        faded: 'bg-opacity-60',
        shadow: 'shadow-lg'
      },
      placement: {
        // Cambiar las posiciones de los badges y corregir en el componente las posiciones relative y absolute
        'top-right': 'top-0 right-0',
        'bottom-right': 'bottom-0 right-0',
        'bottom-left': 'bottom-0 left-0',
        'top-left': 'top-0 left-0'
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

export type BadgeProps = {
  content?: ReactNode;
  className?: string;
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
   * @default false
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
};
