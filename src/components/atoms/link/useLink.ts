import type { VariantProps } from 'class-variance-authority';
import type { ComponentProps } from 'react';
import type { LinkProps, linkVariants } from './types';

export const useLink = ({
  children,
  icon = undefined,
  variant = 'regular',
  size = 'md',
  target = '_blank',
  className,
  href,
  title,
  ...rest
}: LinkProps & VariantProps<typeof linkVariants> & ComponentProps<'a'>) => {
  const iconWidth = { sm: 18, md: 20, lg: 24 }[size] || 22;
  const isExternal = target === '_blank';

  return { href, target, isExternal, title, children, variant, size, className, icon, iconWidth, ...rest };
};
