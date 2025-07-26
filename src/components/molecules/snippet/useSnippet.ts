import { useCallback, useRef, useState } from 'react';
import { type SizeButton, type SnippetProps, snippetBase } from './types';

export function useSnippet({
  children,
  size = 'md',
  rounded = 'md',
  className,
  color = 'default',
  variant = 'solid',
  disableCopy,
  onCopy,
  ...ariaProps
}: SnippetProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = useCallback(async () => {
    if (disableCopy || !preRef.current) {
      return;
    }

    const text = preRef.current.textContent || '';
    await navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    });
  }, [disableCopy, onCopy]);

  const slots = {
    base: snippetBase({ size, variant, color, rounded, className }),
    pre: 'break-words',
    sizeButton: {
      sm: 12,
      md: 16,
      lg: 20
    } as const satisfies SizeButton,
    copyButtonAnimations: `transition-opacity duration-300 ease-in-out opacity-100`
  };

  return {
    preRef,
    copied,
    handleCopy,
    slots,
    children,
    size,
    variant,
    color,
    ariaProps
  };
}
