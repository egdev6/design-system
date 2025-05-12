import { cn } from '@/lib/utils';
import { type TextProps, textVariants } from './types';

export function sanitizeHtml(html: string): string {
  const template = document.createElement('template');
  template.innerHTML = html;

  const scripts = template.content.querySelectorAll('script');
  scripts.forEach((script) => script.remove());

  const elements = template.content.querySelectorAll('*');
  elements.forEach((el) => {
    [...el.attributes].forEach((attr) => {
      if (attr.name.startsWith('on')) {
        el.removeAttribute(attr.name);
      }
    });
  });

  return template.innerHTML;
}

const Text = ({
  tag = 'p',
  size,
  color,
  prominent,
  className,
  children,
  isHtml = false,
  srOnly,
  ...rest
}: TextProps) => {
  const Component = tag;
  const value = size ?? tag;

  const sanitizedHtml = isHtml ? sanitizeHtml(children as string) : undefined;

  const props = {
    className: cn(textVariants({ size: value, color, prominent }), srOnly && 'sr-only', className),
    ...rest
  };

  if (isHtml && typeof sanitizedHtml === 'string') {
    // biome-ignore lint/security/noDangerouslySetInnerHtml: contenido HTML controlado y sanitizado
    return <Component {...props} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
  }

  return (
    <Component {...props} aria-label={children}>
      {children}
    </Component>
  );
};

export default Text;
