import { cn } from '@/lib/utils';
import * as AvatarPrimitive from '@radix-ui/react-avatar';
import type { ComponentProps } from 'react';
import type { AvatarProps } from './types';

function AvatarContainer({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Root>) {
  return (
    <AvatarPrimitive.Root
      data-slot='avatar'
      className={cn('relative flex size-8 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Image>) {
  return (
    <AvatarPrimitive.Image data-slot='avatar-image' className={cn('aspect-square size-full', className)} {...props} />
  );
}

function AvatarFallback({ className, ...props }: ComponentProps<typeof AvatarPrimitive.Fallback>) {
  return (
    <AvatarPrimitive.Fallback
      data-slot='avatar-fallback'
      className={cn('bg-muted flex size-full items-center justify-center rounded-full', className)}
      {...props}
    />
  );
}

const Avatar = ({
  src,
  alt = 'EG',
  className,
  size = 'md',
  hasBadge = false,
  badgeContent,
  badgeClassName
}: AvatarProps) => {
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
  const sizeClass = sizeClasses[size];
  const textClass = textClasses[size];

  return (
    <div className='relative inline-block'>
      <AvatarContainer
        className={cn(
          'dark:bg-gray-700 rounded-full flex items-center justify-center shadow-sm shadow-gray-light-800 dark:shadow-gray-dark-800',
          className
        )}
        style={{ width: sizeClass, height: sizeClass }}
        aria-label={alt}
      >
        <AvatarImage src={src} style={{ width: sizeClass, height: sizeClass }} />
        <AvatarFallback className={cn('text-text-light dark:text-text-dark leading-[1.2] pt-[0.2em]', textClass)}>
          {alt}
        </AvatarFallback>
      </AvatarContainer>
      {hasBadge && (
        <span
          className={cn(
            'absolute -top-2 -right-2 flex items-center justify-center rounded-full bg-accent text-white text-xs',
            badgeClassName
          )}
          style={{ width: '20px', height: '20px' }}
        >
          {badgeContent}
        </span>
      )}
    </div>
  );
};

export default Avatar;
