import { useState, useRef, useCallback } from "react";
import { snippetBase, SnippetProps } from "./types";

export function useSnippet({
  children,
  size = "md",
  className,
  color = "default",
  variant = "solid",
  disableCopy,
  onCopy,
  ...ariaProps
}: SnippetProps) {
  const [copied, setCopied] = useState(false);
  const preRef = useRef<HTMLPreElement>(null);

  const handleCopy = useCallback(() => {
    if (disableCopy || !preRef.current) return;

    const text = preRef.current.textContent || "";
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      onCopy?.();
      setTimeout(() => setCopied(false), 2000);
    });
  }, [disableCopy, onCopy]);

  const slots = {
    base: snippetBase({ size, variant, color, className }),
    pre: "break-words",
    copyButton: copied
      ? "absolute top-2 right-2 text-xs px-2 py-1 rounded bg-green-500 text-white"
      : "absolute top-2 right-2 text-xs px-2 py-1 rounded bg-gray-300 text-black hover:bg-gray-400",
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
    ariaProps,
  };
}
