import { cn } from '@/lib/utils';
import { type HeaderProps, headerVariants } from './types';

const Header = ({
  font = 'secondaryBold',
  tag = 'h1',
  prominent = false,
  className,
  children,
  srOnly = false,
  id,
  ...rest
}: HeaderProps) => {
  const Component = tag;

  const props = {
    className: cn(headerVariants({ font, tag, prominent, srOnly }), className),
    id: id || undefined,
    ...rest
  };

  return <Component {...props}>{children}</Component>;
};

export default Header;
