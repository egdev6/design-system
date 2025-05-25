import { useRipple } from '@/components/utils/hooks/useRipple';
import { cn } from '@/lib/utils';
import type { VariantProps } from 'class-variance-authority';
import { useEffect, useRef, useState } from 'react';
import type { ChangeEvent, ComponentProps, FocusEvent, KeyboardEvent, RefObject } from 'react';
import { type InputProps, inputVariants, labelVariants } from './types';
import './style.css';
import Icon from '@atoms/icon';

const formatAriaIds = (ids?: string | string[]) => (Array.isArray(ids) ? ids.join(' ') : ids);

const IncrementDecrementButtons = ({
  ref,
  setHasValue
}: { ref: RefObject<HTMLInputElement>; setHasValue: (value: boolean) => void }) => (
  <div className='absolute right-2 top-0 bottom-0 flex flex-col justify-center items-center gap-[2px] z-10'>
    <button
      role='button'
      aria-label='Increase value'
      className='bg-gray-light-500 hover:bg-gray-light-700 dark:bg-gray-dark-600 dark:hover:bg-gray-dark-400 rounded-t-sm px-1 cursor-pointer outline-offset-0 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-1'
      onClick={() => {
        if (ref.current) {
          const currentValue = parseFloat(ref.current.value !== '' ? ref.current.value : '0');
          ref.current.value = (currentValue + 1).toString();
          setHasValue(!!ref.current.value);
        }
      }}
    >
      <Icon name='chevron-up' color='text-text-light' colorDark='dark:text-text-dark' size={16} />
    </button>
    <button
      role='button'
      aria-label='Decrease value'
      className='bg-gray-light-500 hover:bg-gray-light-700 dark:bg-gray-dark-600 dark:hover:bg-gray-dark-400 rounded-b-sm px-1 cursor-pointer outline-offset-0 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-1'
      onClick={() => {
        if (ref.current) {
          const currentValue = parseFloat(ref.current.value !== '' ? ref.current.value : '0');
          ref.current.value = (currentValue - 1).toString();
          setHasValue(!!ref.current.value);
        }
      }}
    >
      <Icon name='chevron-down' color='text-text-light' colorDark='dark:text-text-dark' size={16} />
    </button>
  </div>
);

const PasswordToggleButton = ({
  showPassword,
  setShowPassword
}: { showPassword: boolean; setShowPassword: (value: boolean) => void }) => (
  <div className='absolute right-2 top-0 bottom-0 flex flex-col justify-center items-center gap-[2px] z-10'>
    <button
      role='button'
      aria-label={!showPassword ? 'Show password' : 'Hide password'}
      className='cursor-pointer outline-offset-0 dark:focus-visible:outline-white focus-visible:outline-secondary focus-visible:outline-1'
      onClick={() => setShowPassword(!showPassword)}
    >
      <Icon
        name={!showPassword ? 'eye' : 'eye-off'}
        color='text-text-light'
        colorDark='dark:text-text-dark'
        size={20}
      />
    </button>
  </div>
);

const Input = ({
  rounded = false,
  size = 'md',
  label,
  placeholder,
  id,
  type = 'text',
  variant = 'regular',
  className,
  startContent,
  endContent,
  isFullWidth = false,
  hint,
  onFocus,
  onBlur,
  onKeyDown,
  onChange,
  value,
  defaultValue,
  disabled = false,
  ariaDescribedBy,
  ariaLabelledBy,
  ...props
}: Omit<VariantProps<typeof inputVariants>, 'state' | 'focused'> &
  InputProps &
  Omit<ComponentProps<'input'>, 'size' | 'id'> & {
    ariaDescribedBy?: string | string[];
    ariaLabelledBy?: string | string[];
  }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hasValue, setHasValue] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLInputElement>(null);

  useRipple(containerRef);

  useEffect(() => {
    if (ref.current) {
      ref.current.type = showPassword ? 'text' : 'password';
    }
  }, [showPassword]);

  const handleFocus = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    setIsFocused(false);
    setHasValue(!!e.target.value);
    onBlur?.(e);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (['number', 'tel'].includes(type)) {
      const allowedKeys = ['Backspace', 'Tab', 'ArrowLeft', 'ArrowRight', 'Delete', 'Enter', 'Home', 'End', '.'];
      const isNumberKey = /^[0-9]$/.test(e.key);

      if (!allowedKeys.includes(e.key) && !isNumberKey) {
        e.preventDefault();
      }
      if (e.key === '.' && e.currentTarget.value.includes('.')) {
        e.preventDefault();
      }
    }
    onKeyDown?.(e);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHasValue(!!e.target.value);
    onChange?.(e, e.target.value);
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
    <div className={`flex flex-col gap-2${type === 'hidden' ? ' hidden' : ''}`}>
      <div
        ref={containerRef}
        className={cn(
          inputVariants({
            size,
            rounded,
            variant,
            state: !isFocused
              ? variant === 'regular'
                ? 'focusedRegular'
                : variant === 'underlined'
                  ? 'focusedUnderlined'
                  : variant === 'line'
                    ? 'focusedLine'
                    : variant === 'bordered'
                      ? 'focusedBordered'
                      : 'default'
              : 'default',
            focused: isFocused
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
              size,
              state:
                isFocused || hasValue || placeholder
                  ? size === 'sm'
                    ? 'focusedSm'
                    : size === 'md'
                      ? 'focusedMd'
                      : size === 'lg'
                        ? 'focusedLg'
                        : 'default'
                  : 'default'
            }),
            startContent || (endContent && 'sr-only')
          )}
        >
          {label}
        </label>
        <div className='flex w-full justify-between gap-4'>
          {startContent && startContent}
          <input
            {...props}
            ref={ref}
            id={id}
            type={type}
            placeholder={placeholder}
            disabled={disabled}
            aria-disabled={disabled}
            aria-invalid={hint?.type === 'error' ? 'true' : 'false'}
            aria-describedby={formatAriaIds(ariaDescribedBy || (hint?.message ? `${id}-hint` : undefined))}
            aria-labelledby={formatAriaIds(ariaLabelledBy || (label ? `${id}-label` : undefined))}
            className='flex-1 outline-none text-text-light dark:text-text-dark placeholder:text-secondary-light dark:placeholder:text-secondary-dark border-none'
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            onChange={handleChange}
            value={value}
            defaultValue={defaultValue}
          />
          {type === 'number' && (
            <IncrementDecrementButtons ref={ref as RefObject<HTMLInputElement>} setHasValue={setHasValue} />
          )}
          {type === 'password' && (
            <PasswordToggleButton showPassword={showPassword} setShowPassword={setShowPassword} />
          )}
          {endContent && endContent}
        </div>
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
  );
};

export default Input;
