import { cn } from '@/lib/utils';
import type { ComponentProps, FC } from 'react';
import type { SkeletonProps } from './types';

const Skeleton: FC<SkeletonProps & ComponentProps<'div'>> = ({
  width = '100px',
  height = '20px',
  rounded = 'md',
  className,
  ...props
}) => {
  return (
    <div
      {...props}
      data-slot='skeleton'
      className={cn('bg-gray-500 dark:bg-gray-700 animate-pulse opacity-20', `rounded-${rounded}`, className)}
      style={{ width: `${width}`, height: `${height}` }}
    />
  );
};

export default Skeleton;
