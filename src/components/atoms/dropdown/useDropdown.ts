import type { DropdownProps } from './types';

export const useDropdown = ({
  items = [],
  loading = false,
  closeOnSelect = true,
  position = 'bottom',
  align = 'start',
  offset = 0,
  width = 'auto',
  className = ''
}: DropdownProps) => {
  const marginClasses = {
    top: 'mb-2',
    bottom: 'mt-2',
    left: 'mr-2',
    right: 'ml-2'
  };

  const firstLabelId = items.find((item) => item.type === 'label')?.label
    ? `dropdown-label-${items.findIndex((item) => item.type === 'label')}`
    : undefined;
  const fallbackId = 'dropdown-fallback-label';
  const accessibleLabelId = firstLabelId || fallbackId;

  return {
    items,
    loading,
    closeOnSelect,
    position,
    align,
    offset,
    width,
    className,
    accessibleLabelId,
    marginClasses,
    firstLabelId,
    fallbackId
  };
};
