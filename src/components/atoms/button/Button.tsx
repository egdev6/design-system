import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { ComponentProps } from 'react';
import { SpinnerCircular } from 'spinners-react';
import { type ButtonProps, buttonVariants } from './types';

const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  isFullWidth = true,
  onClick,
  icon = undefined,
  text = 'Lorem ipsum',
  disabled = false,
  shadow = true,
  rounded = false,
  uppercase = true,
  ariaLabel = '',
  type = 'button',
  ...props
}: VariantProps<typeof buttonVariants> & ButtonProps & ComponentProps<'button'>) => {
  const width = isFullWidth ? 'w-full ' : 'w-auto ';
  return (
    <button
      type={type}
      role='button'
      className={width + cn(buttonVariants({ variant, size, rounded, shadow, uppercase, className }))}
      aria-label={ariaLabel || text}
      aria-disabled={disabled}
      disabled={disabled || isLoading}
      onClick={(e) => (!isLoading ? onClick?.(e) : undefined)}
      {...props}
    >
      {icon && <DynamicIcon name={icon} />}
      {text}
      {isLoading && (
        <div className='w-[24px] h-[24px]'>
          <SpinnerCircular color={'currentColor'} secondaryColor={'transparent'} thickness={300} size='100%' />
        </div>
      )}
    </button>
  );
};

export default Button;
