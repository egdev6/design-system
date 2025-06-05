import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const headerVariants = tv({
  base: 'font-normal leading-[1.2] text-text-light dark:text-text-dark',
  variants: {
    font: {
      primary: 'font-primary',
      secondary: 'font-secondary',
      secondaryBold: 'font-secondary-bold'
    },
    tag: {
      h1: 'fs-h1',
      h2: 'fs-h2',
      h3: 'fs-h3',
      h4: 'fs-h4',
      h5: 'fs-h5',
      h6: 'fs-h6'
    },
    prominent: {
      true: 'font-bold',
      false: ''
    },
    srOnly: {
      true: 'sr-only',
      false: ''
    }
  },
  defaultVariants: {
    size: undefined,
    color: 'default',
    prominent: false
  }
});

export type HeaderVariant = keyof typeof headerVariants.variants.tag;
export type HeaderFont = keyof typeof headerVariants.variants.font;

export type HeaderProps = {
  /** @control text */
  children?: string;
  /** @control select */
  font?: HeaderFont;
  /** @control select */
  tag: HeaderVariant;
  /** @control select */
  fontSize?: HeaderVariant;
  /** @control boolean */
  prominent?: boolean;
  /** @control text */
  className?: string;
  /** @control boolean */
  srOnly?: boolean;
  /** @control text */
  id?: string; // Nuevo prop opcional para accesibilidad
} & VariantProps<typeof headerVariants>;
