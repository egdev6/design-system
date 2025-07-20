import { DynamicIconName } from "@/components/utils/types";
import { cva, VariantProps } from "class-variance-authority";

export const breadcrumbVariants = cva(
  'flex items-center gap-1 text-sm font-medium transition-colors',
  {
    variants: {
      variant: {
        solid: [
          'text-white',
          'p-3',
          'rounded',
          'rounded-xl',
          'bg-[#282828]',
          'opacity-70',
          'border-secondary',
          'dark:hover:bg-accent',
          'dark:hover:shadow-secondary'
        ],
        bordered: [
          'text-text-light',
          'bg-transparent',
          'border-transparent',
          'hover:bg-gray-light-600',
          'hover:border-gray-light-600',
          'hover:shadow-transparent',
          'dark:text-text-dark',
          'dark:border-transparent',
          'dark:hover:bg-gray-dark-400',
          'dark:hover:border-gray-dark-400',
          'dark:hover:shadow-gray-900'
        ],
        light: [
          'text-secondary',
          'border-transparent',
          'bg-transparent',
          'hover:text-text-dark',
          'dark:text-text-dark',
          'hover:border-accent',
          'hover:bg-accent',
          'hover:shadow-secondary'
        ],
      },
      rounded: {
        true: 'rounded-full',
        false: 'rounded-md'
      },
      shadow: {
        true: 'hover:shadow-custom-sm',
        false: ''
      }
    },
    defaultVariants: {
      variant: 'solid',
    },
  }
);

type BreadCrumbVariants = VariantProps<typeof breadcrumbVariants>['variant'];
type SeparatorVariants = DynamicIconName | '/' | '|' | '>';

export type BreadcrumbItem = {
  title: string;
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top" | undefined;
}


export type BreadcrumbProps = {
  /** Props for the Breadcrumb component */
  items : BreadcrumbItem[]

   /**
   * @control select
   * @default primary
   */
  variant?: BreadCrumbVariants;

   /** @control select*/
  separator? : SeparatorVariants
  
};