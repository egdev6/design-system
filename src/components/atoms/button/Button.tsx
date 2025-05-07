import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import { buttonVariants } from './types';
import './style.css';

const Button = ({
  className,
  variant = 'default',
  size,
  asChild = false,
  children,
  ...props
}: ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) => {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp data-slot='button' className={cn(buttonVariants({ variant, size, className }))} {...props}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      {children}
    </Comp>
  );
};

export default Button;
