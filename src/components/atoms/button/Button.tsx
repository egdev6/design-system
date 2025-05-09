import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { ComponentProps } from 'react';
import { type ButtonProps, buttonVariants } from './types';
import './style.css';
import { BeatLoader } from 'react-spinners';

const Button = ({
  className,
  variant = 'primary',
  size = 'default',
  width = 'auto',
  isLoading = false,
  onClick,
  icon = undefined,
  text = 'Lorem ipsum',
  disabled = false,
  ariaLabel = '',
  type = 'button',
  ...props
}: ButtonProps & VariantProps<typeof buttonVariants> & ComponentProps<'button'>) => {
  return (
    <button
      type={type}
      role='button'
      onClick={(e) => (!isLoading ? onClick?.(e) : undefined)}
      className={cn(buttonVariants({ variant, size, width, className }))}
      aria-label={ariaLabel || text}
      aria-disabled={disabled}
      disabled={disabled || isLoading}
      {...props}
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {icon && <DynamicIcon name={icon} />}
      {text}
      {isLoading && (
        <div className='pt-[2px]'>
          <BeatLoader color={'currentColor'} />
        </div>
      )}
    </button>
  );
};

export default Button;
