import { action } from '@storybook/addon-actions';
import type { Meta, StoryObj } from '@storybook/react';
import IconButton from './IconButton';

const meta: Meta<typeof IconButton> = {
  title: 'Atoms/IconButton',
  component: IconButton,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof IconButton>;

export const Default: Story = {
  args: {
    variant: 'primary',
    icon: 'menu',
    size: 20,
    rounded: false,
    shadow: false,
    target: '_self'
  }
};

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    icon: 'menu',
    size: 20,
    rounded: false,
    shadow: false,
    target: '_self'
  }
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    icon: 'menu',
    size: 20,
    rounded: false,
    shadow: false,
    target: '_self'
  }
};

export const Button: Story = {
  args: {
    variant: 'primary',
    icon: 'menu',
    size: 20,
    rounded: true,
    shadow: true,
    target: '_self',
    onClick: action('clicked'),
    title: "Menu"
  }
};

export const RoundedShadow: Story = {
  args: {
    variant: 'primary',
    icon: 'menu',
    size: 20,
    rounded: true,
    shadow: true,
    target: '_self'
  }
};
