import type { Meta, StoryObj } from '@storybook/react';
import Text from './Text';

const meta: Meta<typeof Text> = {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {
    children: 'Lorem ipsum'
  }
};

export const PrimaryH1: Story = {
  args: {
    children: 'Lorem ipsum',
    tag: 'h1',
    className: 'font-primary'
  }
};
