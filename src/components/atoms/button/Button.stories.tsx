import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Atoms/Button',
  component: Button,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    onClick: action('Clicked')
  }
};

export const Primary: Story = {
  args: {
    variant: 'primary',
    onClick: action('Clicked')
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    onClick: action('Clicked')
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outline',
    onClick: action('Clicked')
  }
};

export const WithIcon: Story = {
  args: {
    icon: 'view',
    onClick: action('Clicked')
  }
};

export const Loading: Story = {
  args: {
    isLoading: true
  }
};

export const Disabled: Story = {
  args: {
    disabled: true
  }
};
