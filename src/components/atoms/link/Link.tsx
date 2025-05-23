import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { FC } from 'react';
import type { ComponentProps } from 'react';
import { type LinkProps, linkVariants } from './types';

const Link: FC<LinkProps & VariantProps<typeof linkVariants> & ComponentProps<'a'>> = ({
  children,
  icon = undefined,
  variant = 'regular',
  size = 'md',
  target = '_blank',
  className,
  href,
  title,
  ...props
}) => {
  const getIconWidth = () => {
    switch (size) {
      case 'sm':
        return 18;
      case 'md':
        return 20;
      case 'lg':
        return 24;
      default:
        return 22;
    }
  };
  return (
    <a
      {...props}
      href={href}
      target={target}
      aria-label={children && href ? children : ''}
      role={variant === 'button' || variant === 'outlined' ? 'button' : 'link'}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      title={title ?? children}
      tabIndex={0}
      className={cn(linkVariants({ variant, size, className }))}
    >
      {icon && <DynamicIcon name={icon} color='currentColor' size={getIconWidth()} />}
      {children}
    </a>
  );
};

export default Link;
