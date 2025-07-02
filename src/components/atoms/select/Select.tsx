import { useRipple } from '@/components/utils/hooks/useRipple';
import { cn } from '@/lib/utils';
import Icon from '@atoms/icon';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { type ComponentProps, useRef, useState } from 'react';
import { type SelectProps, labelVariants, selectVariant } from './types';

const Select = ({
  rounded = false,
  size = 'md',
  label,
  placeholder,
  id,
  type = 'text',
  variant = 'regular',
  className,
  isFullWidth = false,
  isRequired = false,
  hint,
  onChange,
  value,
  defaultValue,
  disabled = false,
  position = 'popper',
  ...props
}: SelectProps & ComponentProps<typeof SelectPrimitive.Root>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  useRipple(containerRef);
  const ref = useRef<HTMLInputElement>(null);

  useRipple(containerRef);

  const handleChange = (value: string) => {
    if (onChange) {
      onChange(value);
    }
  };

  const getIconByHintType = (type: string) => {
    switch (type) {
      case 'error':
        return <Icon name='circle-alert' color='text-red-500' colorDark='dark:text-red-500' size={16} />;
      case 'warning':
        return <Icon name='triangle-alert' color='text-yellow' colorDark='dark:text-yellow' size={16} />;
      case 'success':
        return <Icon name='circle-check' color='text-green' colorDark='dark:text-green' size={16} />;
      default:
        return <Icon name='info' color='text-gray-light-700' colorDark='dark:text-gray-dark-300' size={16} />;
    }
  };

  return (
    <SelectPrimitive.Root
      open={isOpen}
      onOpenChange={() => setIsOpen(!isOpen)}
      value={value}
      onValueChange={handleChange}
      {...props}
    >
      <SelectPrimitive.Trigger asChild={true} className='w-auto'>
        <div className={`w-auto flex flex-col gap-2${type === 'hidden' ? ' hidden' : ''}`}>
          <div
            ref={containerRef}
            className={cn(
              selectVariant({
                size,
                rounded,
                variant
              }),
              isFullWidth ? 'w-full' : 'w-auto',
              label ? 'items-end' : 'items-center',
              hint?.type === 'error' && '!border-red-500 dark:!border-red-500',
              hint?.type === 'warning' && '!border-yellow dark:!border-yellow',
              hint?.type === 'success' && '!border-green dark:!border-green',
              disabled && 'pointer-events-none opacity-60',
              className
            )}
            onClick={() =>
              document.activeElement !== ref.current && type !== 'number' && type !== 'password' && ref.current?.focus()
            }
          >
            <label
              id={`${id}-label`}
              htmlFor={id}
              className={cn(
                labelVariants({
                  size
                })
              )}
            >
              {label}{' '}
              {isRequired && (
                <span className='text-accent' aria-hidden={true}>
                  *
                </span>
              )}
            </label>
            <div className='flex w-full justify-between gap-4'></div>
          </div>
          {hint?.message && (
            <div id={`${id}-hint`} className='py-0.5 flex items-center gap-2'>
              {getIconByHintType(hint?.type)}
              <span
                className={cn(
                  'fs-small tablet:fs-small-tablet',
                  hint?.type === 'info'
                    ? 'text-gray-light-700 dark:text-gray-dark-300'
                    : hint?.type === 'warning'
                      ? 'text-yellow dark:text-yellow-400'
                      : hint?.type === 'error'
                        ? 'text-red-500 dark:text-red-500'
                        : hint?.type === 'success'
                          ? 'text-green dark:text-green-400'
                          : 'text-gray-light-700 dark:text-gray-dark-300'
                )}
              >
                {hint.message}
              </span>
            </div>
          )}
        </div>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          data-slot='select-content'
          className={cn(
            'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md border shadow-md',
            position === 'popper' &&
              'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
            className
          )}
          position={position}
        >
          <SelectPrimitive.ScrollUpButton className='flex cursor-default items-center justify-center py-1'>
            <ChevronUpIcon className='size-4' />
          </SelectPrimitive.ScrollUpButton>
          <SelectPrimitive.Viewport
            className={cn(
              'p-1',
              position === 'popper' &&
                'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1'
            )}
          ></SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton className='flex cursor-default items-center justify-center py-1'>
            <ChevronDownIcon className='size-4' />
          </SelectPrimitive.ScrollDownButton>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export default Select;
