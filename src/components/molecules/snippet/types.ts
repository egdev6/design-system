import { type VariantProps, cva } from "class-variance-authority";

export const snippetBase = cva(
  "relative font-mono whitespace-pre-wrap rounded-md",
  {
    variants: {
      size: {
        sm: "text-xs p-2",
        md: "text-sm p-4",
        lg: "text-base p-6",
      },
      variant: {
        solid: "",
        outline: "border",
        ghost: "bg-transparent",
      },
      color: {
        default: "bg-red-900",
        primary: "bg-red-900",
        secondary: "bg-red-700",
        success: "bg-green-500",
        warning: "bg-yellow-500",
        danger: "bg-red-500",
        info: "bg-blue-500",
      },
    },
    compoundVariants: [
      {
        variant: "solid",
        color: "default",
        class: "bg-gray-100 text-gray-800",
      },
      { variant: "solid", color: "primary", class: "bg-blue-500 text-white" },
      {
        variant: "solid",
        color: "secondary",
        class: "bg-purple-500 text-white",
      },
      { variant: "solid", color: "success", class: "bg-green-500 text-white" },
      { variant: "solid", color: "warning", class: "bg-yellow-500 text-black" },
      { variant: "solid", color: "danger", class: "bg-red-500 text-white" },
      { variant: "solid", color: "info", class: "bg-cyan-500 text-white" },

      {
        variant: "outline",
        color: "default",
        class: "border-gray-400 text-gray-800",
      },
      {
        variant: "outline",
        color: "primary",
        class: "border-blue-500 text-blue-600",
      },
      {
        variant: "outline",
        color: "secondary",
        class: "border-purple-500 text-purple-600",
      },
      {
        variant: "outline",
        color: "success",
        class: "border-green-500 text-green-600",
      },
      {
        variant: "outline",
        color: "warning",
        class: "border-yellow-500 text-yellow-700",
      },
      {
        variant: "outline",
        color: "danger",
        class: "border-red-500 text-red-600",
      },
      {
        variant: "outline",
        color: "info",
        class: "border-cyan-500 text-cyan-600",
      },

      { variant: "ghost", color: "default", class: "text-gray-800" },
      { variant: "ghost", color: "primary", class: "text-blue-600" },
      { variant: "ghost", color: "secondary", class: "text-purple-600" },
      { variant: "ghost", color: "success", class: "text-green-600" },
      { variant: "ghost", color: "warning", class: "text-yellow-700" },
      { variant: "ghost", color: "danger", class: "text-red-600" },
      { variant: "ghost", color: "info", class: "text-cyan-600" },
    ],
    defaultVariants: {
      size: "md",
      variant: "solid",
      color: "default",
    },
  }
);

export type SnippetVariants = VariantProps<typeof snippetBase>;

export interface SnippetProps extends SnippetVariants {
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
}
