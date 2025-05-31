import { cn } from '@/lib/utils';
import * as ModalPrimitive from '@radix-ui/react-dialog';
import { useId, useState } from 'react';
import Button from '../button';
import IconButton from '../icon-button';
import { modalVariants } from './types';
import type { ModalProps } from './types';

const Modal = ({
  title = 'Modal title',
  textContent = 'Modal content goes here.',
  header,
  content,
  footer,
  children,
  size = 'md',
  position = 'center',
  backdrop = 'opacity',
  customBackdrop
}: Omit<ModalProps, 'isOpen'>) => {
  const [isOpen, setIsOpen] = useState(false);
  const titleId = 'modal-title';
  const descriptionId = 'modal-description';
  const modalId = useId();

  return (
    <ModalPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <ModalPrimitive.Trigger asChild={true}>{children}</ModalPrimitive.Trigger>
      <ModalPrimitive.Portal>
        <ModalPrimitive.Overlay
          className={cn(
            'fixed inset-0 z-50',
            backdrop === 'opacity' && 'bg-black/50',
            backdrop === 'blur' && 'bg-black/50 backdrop-blur-sm',
            backdrop === 'transparent' && 'bg-transparent',
            'data-[state=open]:animate-in data-[state=closed]:animate-out',
            'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
          )}
        >
          {customBackdrop}
        </ModalPrimitive.Overlay>
        <div
          id={modalId}
          className={cn(
            'fixed w-full inset-0 z-50 flex p-0 tablet:p-4',
            position === 'center' && 'items-center justify-center',
            position === 'top' && 'items-start justify-center',
            position === 'bottom' && 'items-end justify-center'
          )}
        >
          <ModalPrimitive.Content
            aria-labelledby={titleId}
            aria-describedby={descriptionId}
            className={cn(
              modalVariants({ size, position }),
              'data-[state=open]:animate-in data-[state=closed]:animate-out',
              'data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95'
            )}
          >
            <div className='relative pb-4'>
              <div className='w-full flex items-start justify-start pr-7'>
                {header ?? (
                  <h2 id={titleId} className='text-text-light dark:text-text-dark text-lg font-semibold'>
                    {title}
                  </h2>
                )}
              </div>
              <IconButton
                icon='x'
                size={18}
                title='Close'
                variant='ghost'
                rounded={true}
                onClick={() => setIsOpen(false)}
                className='p-1 absolute top-0 right-0'
              />
            </div>
            <div id={descriptionId} className='py-4 flex-1 overflow-y-auto max-h-[80dvh]'>
              {content || <div className='text-sm text-secondary-light dark:text-secondary-dark'>{textContent}</div>}
            </div>
            <div className='flex justify-end pt-4'>
              {footer || <Button text='Close' size='sm' variant='outlined' onClick={() => setIsOpen(false)} />}
            </div>
          </ModalPrimitive.Content>
        </div>
      </ModalPrimitive.Portal>
    </ModalPrimitive.Root>
  );
};

export default Modal;
