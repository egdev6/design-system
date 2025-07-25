import { cn } from '@/lib/utils';
import { type FC, useEffect, useState } from 'react';
import type { BadgeProps } from './types';
import { badgeVariants } from './types';
import { useBadge } from './useBadge';

const Badge: FC<BadgeProps> = ({ ...props }) => {
  const { content, className, color, rounded, size, variant, placement, visibility, ariaLabel, animation, children } =
    useBadge({ ...props });

  const badgeClass = badgeVariants({ color, rounded, size, variant, placement, animation });

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
      {children}
      {visibilityClass && (
        <span className={cn(badgeClass, className)} aria-label={ariaLabel}>
          {content}
        </span>
      )}
    </div>
  );
};

export default Badge;
