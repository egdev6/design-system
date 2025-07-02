import type { Meta, StoryObj } from '@storybook/react';
import Select from './Select';

const meta: Meta<typeof Select> = {
  title: 'Atoms/Select',
  component: Select,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Select>;

export const Default: Story = {
  args: {
    variant: 'regular',
    type: 'text',
    label: 'Lorem impsum',
    position: 'popper'
  }
};
