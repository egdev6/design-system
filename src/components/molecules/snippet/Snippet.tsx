import IconButton from '@/components/atoms/icon-button';
import type { FC } from 'react';
import type { SnippetProps } from './types';
import { useSnippet } from './useSnippet';

const Snippet: FC<SnippetProps> = ({ ...props }) => {
  const { preRef, size, copied, handleCopy, slots, children, ariaProps } = useSnippet(props);
  return (
    <div className={slots.base} {...ariaProps}>
      <pre ref={preRef} className={slots.pre}>
        {children}
      </pre>
      {!props.disableCopy && (
        <IconButton
          className={slots.copyButtonAnimations}
          icon={copied ? 'check' : 'copy'}
          size={slots.sizeButton[size]}
          title='copy to clipboard'
          variant='ghost'
          onClick={handleCopy}
        />
      )}
    </div>
  );
};

export default Snippet;
