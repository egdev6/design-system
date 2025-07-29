import { useRipple } from '@/components/utils/hooks/useRipple';
import type { VariantProps } from 'class-variance-authority';
import { type ComponentProps, useRef } from 'react';
import type { IconButtonProps, iconButtonVariants } from './types';

export const useIconButton = ({
  variant = 'primary',
  icon = 'image',
  size = 20,
  className,
  onClick,
  title,
  rounded = false,
  shadow = false,
  disabled = false,
  'aria-pressed': ariaPressed,
  ...props
}: IconButtonProps & VariantProps<typeof iconButtonVariants> & ComponentProps<'button'>) => {
  const iconButtonRef = useRef<HTMLButtonElement | null>(null);
  useRipple(iconButtonRef);

  return {
    variant,
    icon,
    size,
    className,
    onClick,
    title,
    rounded,
    shadow,
    disabled,
    iconButtonRef,
    ariaPressed,
    ...props
  };
};
