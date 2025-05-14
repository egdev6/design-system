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
    variant: 'primary',
    rounded: false,
    shadow: true,
    uppercase: true,
    size: 'md',
    text: 'Lorem ipsum',
    type: 'button',
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    ariaLabel: '',
    onClick: action('Clicked')
  }
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
    rounded: false,
    shadow: true,
    uppercase: true,
    size: "md",
    text: "Lorem ipsum",
    type: "button",
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    ariaLabel: ""
  }
};

export const Outlined: Story = {
  args: {
    variant: "outline",
    rounded: false,
    shadow: true,
    uppercase: true,
    size: "md",
    text: "Lorem ipsum",
    type: "button",
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    ariaLabel: ""
  }
};

export const Loading: Story = {
  args: {
    variant: "primary",
    rounded: false,
    shadow: true,
    uppercase: true,
    size: "md",
    text: "Lorem ipsum",
    type: "button",
    disabled: false,
    isFullWidth: false,
    isLoading: true,
    ariaLabel: ""
  }
};

export const WithIcon: Story = {
  args: {
    variant: "primary",
    rounded: false,
    shadow: true,
    uppercase: true,
    size: "md",
    text: "Lorem ipsum",
    type: "button",
    disabled: false,
    isFullWidth: false,
    isLoading: false,
    ariaLabel: "",
    icon: "image"
  }
};
