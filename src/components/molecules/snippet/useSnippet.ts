import { useState, useRef, useCallback } from "react";
import { SnippetProps } from "./types";

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
    base: () =>
      `relative rounded-md p-4 font-mono text-sm bg-gray-100 text-gray-800 ${
        className ?? ""
      }`,
    pre: () => "whitespace-pre-wrap break-words",
    copyButton: () =>
      `absolute top-2 right-2 text-xs px-2 py-1 rounded ${
        copied ? "bg-green-500 text-white" : "bg-gray-300 text-black"
      }`,
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
