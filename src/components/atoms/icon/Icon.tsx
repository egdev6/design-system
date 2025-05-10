import { DynamicIcon } from 'lucide-react/dynamic';
import type { FC } from 'react';
import type { IconProps } from './types';

/**
 *
 *  Lucille Icons
 *  - https://lucide.dev/icons/
 *
 */
const Icon: FC<IconProps> = ({ name, color = 'text-accent', colorDark, size = 24 }) => {
  const dark = colorDark ? ` ${colorDark}` : '';
  return <DynamicIcon name={name} className={color + dark} size={size} />;
};

export default Icon;
