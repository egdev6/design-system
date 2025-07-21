import type { FC } from "react";
import type { SnippetProps } from "./types";
import { useSnippet } from "./useSnippet";

const Snippet: FC<SnippetProps> = ({ ...props }) => {
  const { preRef, copied, handleCopy, slots, children, ariaProps } =
    useSnippet(props);
  return (
    <div className={slots.base} {...ariaProps}>
      <pre ref={preRef} className={slots.pre}>
        {children}
      </pre>
      {!props.disableCopy && (
        <button
          type="button"
          onClick={handleCopy}
          className={slots.copyButton}
          aria-label="Copiar código"
        >
          {copied ? "Copiado" : "Copiar"}
        </button>
      )}
    </div>
  );
};

export default Snippet;
