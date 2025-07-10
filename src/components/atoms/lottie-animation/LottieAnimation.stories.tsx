import type { Meta, StoryObj } from '@storybook/react';
import LottieAnimation from './LottieAnimation';

const meta: Meta<typeof LottieAnimation> = {
  title: 'Atoms/LottieAnimation',
  component: LottieAnimation,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof LottieAnimation>;

export const Default: Story = {
  args: {
    name: 'Default Name'
  }
};
