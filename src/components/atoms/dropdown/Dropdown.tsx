import { cn } from '@/lib/utils';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { ChevronRightIcon } from 'lucide-react';
import { SpinnerCircular } from 'spinners-react';
import type { DropdownElement, DropdownProps } from './types';

const renderDropdownItem = (element: DropdownElement, index: number) => {
  if (element.type === 'item') {
    return (
      <DropdownMenuPrimitive.Item
        key={index}
        disabled={element.disabled}
        data-variant={element.variant}
        aria-disabled={element.disabled || undefined}
        className={cn(
          'relative flex cursor-default justify-between items-center gap-2 rounded-sm px-2 py-1.5 text-sm',
          'transition-opacity duration-300 ease-in-out',
          'focus-visible:outline-offset-1 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-1',
          element.variant === 'destructive' && 'bg-secondary text-text-dark hover:bg-red-secondary-hover'
        )}
        onClick={element.onClick}
      >
        {element.startContent && <span className='flex items-center'>{element.startContent}</span>}
        <span className='w-full max-w-full'>{element.label}</span>
        {element.endContent && <span className='flex items-center'>{element.endContent}</span>}
      </DropdownMenuPrimitive.Item>
    );
  }
};

const renderDropdownSubmenu = (element: DropdownElement, index: number) => {
  if (element.type === 'submenu') {
    const submenuId = `submenu-${index}`;
    return (
      <DropdownMenuPrimitive.Sub key={index}>
        <DropdownMenuPrimitive.SubTrigger
          aria-haspopup='menu'
          aria-controls={submenuId}
          aria-expanded={false}
          className={cn(
            'flex items-center rounded-md justify-between px-2 py-1.5 text-sm',
            'transition-opacity duration-300 ease-in-out',
            'focus-visible:outline-offset-1 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-1'
          )}
        >
          {element.startContent && <span className='flex items-center'>{element.startContent}</span>}
          <span className='w-full max-w-full'>{element.label}</span>
          {element.endContent ? (
            <span className='flex items-center'>{element.endContent}</span>
          ) : (
            <ChevronRightIcon className='ml-auto size-4' />
          )}
        </DropdownMenuPrimitive.SubTrigger>
        <DropdownMenuPrimitive.SubContent
          id={submenuId}
          className={cn(
            'min-w-[8rem] ml-2 rounded-md border p-1 shadow-lg',
            'transition-opacity duration-300 ease-in-out',
            'focus-visible:outline-offset-1 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-1',
            'bg-gray-light-500 border-gray-light-500',
            'text-text-light dark:text-text-dark dark:bg-gray-dark-800 dark:border-gray-dark-800'
          )}
        >
          {element.items.map((subElement, subIndex) => renderDropdownElement(subElement, subIndex))}
        </DropdownMenuPrimitive.SubContent>
      </DropdownMenuPrimitive.Sub>
    );
  }
};

const renderDropdownElement = (element: DropdownElement, index: number) => {
  switch (element.type) {
    case 'item':
      return renderDropdownItem(element, index);
    case 'submenu':
      return renderDropdownSubmenu(element, index);
    case 'separator':
      return (
        <DropdownMenuPrimitive.Separator key={index} className='my-1 h-px bg-gray-light-900 dark:bg-gray-dark-700' />
      );
    case 'label': {
      const labelId = `dropdown-label-${index}`;
      return (
        <DropdownMenuPrimitive.Label key={index} id={labelId} className='px-2 py-1.5 text-sm font-medium'>
          {element.label}
        </DropdownMenuPrimitive.Label>
      );
    }
    default:
      return null;
  }
};

const Dropdown = ({
  width = '56px',
  position = 'bottom',
  align = 'center',
  offset = 1,
  closeOnSelect = true,
  items,
  loading = false, // New prop
  children,
  className,
  ariaLabelledby,
  ariaDescribedby
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

  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger
        asChild={true}
        aria-labelledby={ariaLabelledby || accessibleLabelId}
        aria-describedby={ariaDescribedby}
        aria-expanded={false}
      >
        <div>{children}</div>
      </DropdownMenuPrimitive.Trigger>
      <DropdownMenuPrimitive.Content
        role='menu'
        aria-labelledby={accessibleLabelId}
        className={cn(
          'min-w-[8rem] rounded-md border p-1 shadow-md',
          'text-text-light dark:text-text-dark',
          'bg-gray-light-500 border-gray-light-500',
          'dark:bg-gray-dark-800 dark:border-gray-dark-800',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
          'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95',
          marginClasses[position],
          className
        )}
        style={{ width }}
        side={position}
        align={align}
        sideOffset={offset}
        onCloseAutoFocus={(e) => {
          if (!closeOnSelect) {
            e.preventDefault();
          }
        }}
      >
        {loading ? (
          <div className='flex justify-center items-center p-4'>
            <SpinnerCircular
              color={'currentColor'}
              secondaryColor={'rgba(45, 6, 9, 0.2)'}
              thickness={200}
              size='1.5em'
            />
          </div>
        ) : (
          <>
            {!firstLabelId && (
              <span id={fallbackId} className='sr-only'>
                Dropdown menu
              </span>
            )}
            {items.map(renderDropdownElement)}
          </>
        )}
      </DropdownMenuPrimitive.Content>
    </DropdownMenuPrimitive.Root>
  );
};

export default Dropdown;
