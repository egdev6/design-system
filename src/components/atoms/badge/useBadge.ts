import type { BadgeProps } from './types';

export const useBadge = ({
  content = '',
  className = '',
  color = 'primary',
  rounded = true,
  size = 'md',
  variant = 'solid',
  placement = 'top-right',
  visibility = true,
  ariaLabel = '',
  animation = 'default',
  children = null
}: BadgeProps) => {
  return {
    content,
    className,
    color,
    rounded,
    size,
    variant,
    placement,
    visibility,
    ariaLabel,
    animation,
    children
  };
};
