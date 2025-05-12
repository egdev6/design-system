import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { ComponentProps, FC } from 'react';
import { type IconButtonProps, iconButtonVariants } from './types';

const IconButton: FC<IconButtonProps & VariantProps<typeof iconButtonVariants> & ComponentProps<'a'>> = ({
  children,
  icon = 'menu',
  variant = 'outlined',
  size = 'md',
  target = '_self',
  className,
  href,
  onClick,
  title,
  rounded = false,
  shadow = false,
  ...props
}) => {
  const getIconWidth = () => {
    switch (size) {
      case 'sm':
        return 14;
      case 'md':
        return 20;
      case 'lg':
        return 28;
      default:
        return 22;
    }
  };
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
      className={cn(
        iconButtonVariants({ variant, size }),
        shadow && 'shadow-md hover:shadow-transparent',
        rounded ? 'rounded-full' : 'rounded-md',
        className
      )}
    >
      <DynamicIcon name={icon} color='currentColor' size={getIconWidth()} />
    </a>
  );
};

export default IconButton;
