import type { Meta, StoryObj } from '@storybook/react';
import Button from '../button';
import Modal from './Modal';

const meta: Meta<typeof Modal> = {
  title: 'Atoms/Modal',
  component: Modal,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    size: 'md',
    position: 'center',
    backdrop: 'opacity',
    children: <Button text='Open Modal' />
  }
};
