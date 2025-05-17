import type { ReactNode } from 'react';
import type { VariantProps } from 'tailwind-variants';
import { tv } from 'tailwind-variants';

export const textVariants = tv({
  base: 'font-normal leading-[1.2] text-text-light dark:text-text-dark',
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
      true: 'srOnly',
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
  /** @control select */
  font?: TextFont;
  /** @control select */
  tag: TextVariant;
  /** @control boolean */
  prominent?: boolean;
  /** @control text */
  className?: string;
  /** @control boolean */
  srOnly?: boolean;
  /** @control text */
  ariaLive?: 'polite' | 'assertive' | 'off';
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
