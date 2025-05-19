import { useRipple } from '@/components/utils/hooks/useRipple';
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon } from 'lucide-react/dynamic';
import { type ComponentProps, type FC, useRef } from 'react';
import { type IconButtonProps, iconButtonVariants } from './types';
import './style.css';

const IconButton: FC<IconButtonProps & VariantProps<typeof iconButtonVariants> & ComponentProps<'button'>> = ({
  variant = 'primary',
  icon = 'menu',
  size = 20,
  className,
  onClick,
  title,
  rounded = false,
  shadow = false,
  disabled = false,
  ...props
}) => {
  const iconButtonRef = useRef<HTMLButtonElement | null>(null);

  useRipple(iconButtonRef);

  return (
    <button
      {...props}
      ref={iconButtonRef}
      type={'button'}
      role='button'
      className={cn('w-auto', iconButtonVariants({ variant, rounded, shadow }), className)}
      disabled={disabled}
      aria-disabled={disabled}
      aria-label={title}
      title={title}
      onClick={(e) => onClick?.(e)}
    >
      <DynamicIcon name={icon} color='currentColor' size={size} />
    </button>
  );
};

export default IconButton;
