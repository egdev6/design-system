import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { ComponentProps, FC } from 'react';
import { type IconButtonProps, iconButtonVariants } from './types';
import { useIconButton } from './useIconButton';
import '@/components/utils/styles/index.css';

const IconButton: FC<IconButtonProps & VariantProps<typeof iconButtonVariants> & ComponentProps<'button'>> = ({
  ...props
}) => {
  const { iconButtonRef, ariaPressed, variant, rounded, shadow, className, disabled, title, icon, size, onClick } =
    useIconButton(props);

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
