import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { ComponentProps, FC } from 'react';
import { type IconButtonProps, iconButtonVariants } from './types';

const IconButton: FC<IconButtonProps & VariantProps<typeof iconButtonVariants> & ComponentProps<'a'>> = ({
  children,
  variant = 'primary',
  icon = 'menu',
  size = 20,
  target = '_self',
  className,
  href,
  onClick,
  title,
  rounded = false,
  shadow = false,
  ...props
}) => {
  return (
    <a
      {...props}
      target={target}
      aria-label={title}
      role={onClick ? 'button' : undefined}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      title={title}
      href={href ? href : undefined}
      onClick={onClick ? (e) => onClick(e) : undefined}
      tabIndex={0}
      className={cn(iconButtonVariants({ variant, shadow, rounded }), className)}
    >
      <DynamicIcon name={icon} color='currentColor' size={size} />
    </a>
  );
};

export default IconButton;
