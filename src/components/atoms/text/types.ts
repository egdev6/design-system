import type { ReactNode } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const textVariants = tv({
  base: 'font-normal leading-[1.2] text-text-light dark:text-text-dark tracking-widest',
  variants: {
    font: {
      primary: 'font-primary',
      secondary: 'font-secondary',
      secondaryBold: 'font-secondaryBold'
    },
    tag: {
      p: 'fs-base',
      span: 'fs-base',
      small: 'fs-small'
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

export type TextVariant = keyof typeof textVariants.variants.tag;
export type TextFont = keyof typeof textVariants.variants.font;

type BaseTextProps = {
  /**
   * @control select
   * @default secondary
   * */
  font?: TextFont;
  /**
   * @control select
   * @default p
   */
  tag: TextVariant;
  /**
   * @control boolean
   * @default false
   */
  prominent?: boolean;
  /**
   * @control boolean
   * @default false
   * */
  srOnly?: boolean;
  /** @control text */
  ariaLive?: 'polite' | 'assertive' | 'off';
  /** @control text */
  className?: string;
  /** @control select */
  role?: 'status' | 'alert' | 'log' | 'marquee' | 'none';
  /** @control text */
  id?: string;
} & VariantProps<typeof textVariants>;

type TextWithHtml = BaseTextProps & {
  /** @control boolean */
  isHtml: true;
  children: string;
};

type TextStandard = BaseTextProps & {
  /** @control boolean */
  isHtml?: false;
  children: ReactNode;
};

export type TextProps = TextStandard | TextWithHtml;
