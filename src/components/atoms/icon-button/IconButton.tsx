import { useRipple } from '@/components/utils/hooks/useRipple';
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon } from 'lucide-react/dynamic';
import { type ComponentProps, type FC, useRef } from 'react';
import { type IconButtonProps, iconButtonVariants } from './types';
import './style.css';

const IconButton: FC<IconButtonProps & VariantProps<typeof iconButtonVariants> & ComponentProps<'button'>> = ({
  variant = 'primary',
  icon,
  size = 20,
  className,
  onClick,
  title,
  rounded = false,
  shadow = false,
  disabled = false,
  'aria-pressed': ariaPressed,
  ...props
}) => {
  const iconButtonRef = useRef<HTMLButtonElement | null>(null);

  useRipple(iconButtonRef);

  return (
    <button
      {...props}
      ref={iconButtonRef}
      type='button'
      role={ariaPressed !== undefined ? 'switch' : 'button'}
      className={cn('w-auto', iconButtonVariants({ variant, rounded, shadow }), className)}
      disabled={disabled}
      aria-disabled={disabled || undefined}
      aria-label={title || icon}
      aria-pressed={ariaPressed}
      title={title}
      onClick={(e) => !disabled && onClick?.(e)}
    >
      <DynamicIcon name={icon} color='currentColor' size={size} />
    </button>
  );
};

export default IconButton;
