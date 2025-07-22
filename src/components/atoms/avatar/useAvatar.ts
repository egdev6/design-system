import type { AvatarProps } from './types';

export const useAvatar = ({ src, alt = 'EG', className, size = 'md', rounded = 'md' }: AvatarProps) => {
  const sizeClasses = {
    sm: '30px',
    md: '40px',
    lg: '50px',
    xl: '60px',
    '2xl': '70px',
    '3xl': '80px'
  };
  const textClasses = {
    sm: 'text-[0.8em]',
    md: 'text-[1em]',
    lg: 'text-[1.2em]',
    xl: 'text-[1.4em]',
    '2xl': 'text-[1.6em]',
    '3xl': 'text-[1.8em]'
  };

  const roundedClass = rounded ? `rounded-${rounded}` : '';
  const sizeClass = sizeClasses[size];
  const textClass = textClasses[size];

  return {
    src,
    alt,
    className,
    sizeClass,
    textClass,
    roundedClass
  };
};
