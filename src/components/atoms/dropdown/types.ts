import type { ReactNode } from 'react';

export type DropdownProps = {
  /**
   * @control text
   * @default '56px'
   */
  width?: string;
  /**
   * @control select
   * @default 'bottom'
   */
  position?: 'top' | 'bottom' | 'left' | 'right';
  /**
   * @control select
   * @default 'start'
   */
  align?: 'start' | 'center' | 'end';
  /**
   * @control number
   * @default 1
   */
  offset?: number;
  /**
   * @control boolean
   * @default true
   */
  closeOnSelect?: boolean;
  /**
   * @control boolean
   * @default false
   */
  loading?: boolean;
  /**
   * @control text
   */
  children: ReactNode;
  items: DropdownSchema;
  /**
   * @control text
   */
  className?: string;
};

export type DropdownItem = {
  type: 'item';
  label: string;
  disabled?: boolean;
  variant?: 'default' | 'destructive';
  onClick?: () => void;
  startContent?: ReactNode;
  endContent?: ReactNode;
};

export type DropdownSubmenu = {
  type: 'submenu';
  label: string;
  items: DropdownElement[];
  startContent?: ReactNode;
  endContent?: ReactNode;
};

export type DropdownSeparator = {
  type: 'separator';
};

export type DropdownLabel = {
  type: 'label';
  label: string;
};

export type DropdownElement = DropdownItem | DropdownSubmenu | DropdownSeparator | DropdownLabel;

export type DropdownSchema = DropdownElement[];
