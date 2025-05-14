import { cn } from '@/lib/utils';
import { DynamicIcon } from 'lucide-react/dynamic';
import type { FC } from 'react';
import type { IconProps } from './types';

/**
 *
 *  Lucille Icons
 *  - https://lucide.dev/icons/
 *
 */
const Icon: FC<IconProps> = ({ name, color = 'text-accent', colorDark = 'text-accent', size = 24, className }) => {
  return <DynamicIcon name={name} className={cn(color, colorDark, className)} size={size} />;
};

export default Icon;
