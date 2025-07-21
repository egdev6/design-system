export type SnippetProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
  color?:
    | "default"
    | "primary"
    | "secondary"
    | "success"
    | "warning"
    | "danger"
    | "info";
  variant?: "solid" | "outline" | "ghost";
  disableCopy?: boolean;
  onCopy?: () => void;
  "aria-controls"?: string;
  "aria-label"?: string;
};
