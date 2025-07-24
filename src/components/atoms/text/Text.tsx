import type { FC } from 'react';
import type { TextProps } from './types';
import { useText } from './useText';

const Text: FC<TextProps> = ({ ...props }) => {
  const { tag, isHtml, sanitizedHtml, children, ...rest } = useText(props);
  const Component = tag;
  if (isHtml && typeof sanitizedHtml === 'string') {
    return (
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      <Component {...rest} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
    );
  }

  return <Component {...props}>{children}</Component>;
};

export default Text;
