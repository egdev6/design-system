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
  const iconWidth = { sm: 18, md: 20, lg: 24 }[size] || 22;

  const isExternal = target === '_blank';

  return (
    <a
      {...props}
      href={href}
      target={target}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={title || children}
      aria-current={props['aria-current'] || undefined}
      role={variant === 'button' || variant === 'outlined' ? 'button' : 'link'}
      title={title ?? children}
      tabIndex={0}
      className={cn(linkVariants({ variant, size, className }))}
    >
      {icon && <DynamicIcon name={icon} color='currentColor' size={iconWidth} />}
      {children}
    </a>
  );
};

export default Link;
