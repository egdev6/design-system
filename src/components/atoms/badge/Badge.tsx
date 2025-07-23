import { cn } from '@/lib/utils';
import { type FC, useEffect, useState } from 'react';
import type { BadgeProps } from './types';
import { badgeVariants } from './types';

const Badge: FC<BadgeProps> = ({
  content,
  className,
  color,
  rounded = false,
  size = 'md',
  variant = 'solid',
  placement = 'top-right',
  visibility = true
}) => {
  const badgeClass = badgeVariants({ color, rounded, size, variant, placement });

  const [visibilityClass, setVisibilityClass] = useState(false);

  useEffect(() => {
    if (visibility) {
      setVisibilityClass(true);
    } else {
      setVisibilityClass(false);
    }
  }, [visibility]);

  return (
    <div className='relative inline-flex items-center justify-center'>
      <img src='https://i.pravatar.cc/300?u=a042581f4e29026709d' alt='Avatar' className='w-12 h-12 rounded-xl' />
      {visibilityClass && <span className={cn(badgeClass, className)}>{content}</span>}
    </div>
  );
};

export default Badge;
