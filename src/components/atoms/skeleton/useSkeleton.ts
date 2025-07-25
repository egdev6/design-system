import type { ComponentProps } from 'react';
import type { SkeletonProps } from './types';

export const useSkeleton = ({
  width = '100px',
  height = '20px',
  rounded = 'md',
  className,
  ...rest
}: SkeletonProps & ComponentProps<'div'>) => {
  return {
    rounded,
    className,
    width,
    height,
    ...rest
  };
};
