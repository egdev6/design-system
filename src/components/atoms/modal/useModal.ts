import { cn } from '@/lib/utils';
import { useState } from 'react';
import type { ModalProps } from './types';

export const useModal = ({
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
  const contentId = 'modal-content';
  const currentBackdrop = !customBackdrop
    ? cn(
        'fixed inset-0 z-50',
        backdrop === 'opacity' && 'bg-black/50',
        backdrop === 'blur' && 'bg-black/50 backdrop-blur-sm',
        backdrop === 'transparent' && 'bg-transparent',
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      )
    : cn(
        'fixed inset-0 z-50',
        customBackdrop,
        'data-[state=open]:animate-in data-[state=closed]:animate-out',
        'data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0'
      );
  return {
    isOpen,
    setIsOpen,
    contentId,
    children,
    currentBackdrop,
    position,
    titleId,
    descriptionId,
    size,
    header,
    title,
    content,
    textContent,
    footer
  };
};
