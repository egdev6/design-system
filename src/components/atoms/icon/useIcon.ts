import type { IconProps } from './types';

export const useIcon = ({
  name,
  color = 'text-accent',
  colorDark = 'dark:text-accent',
  size = 24,
  className
}: IconProps) => {
  return {
    name,
    color,
    colorDark,
    size,
    className
  };
};
