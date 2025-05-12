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
    href: 'https://github.com/egdev6',
    target: '_blank',
    title: 'Menu',
    icon: 'menu',
    shadow: false,
    rounded: false,
    variant: 'outlined',
    size: 'md'
  }
};

export const Primary: Story = {
  args: {
    href: 'https://github.com/egdev6',
    target: '_blank',
    title: 'Menu',
    variant: 'primary',
    icon: 'menu',
    shadow: false,
    rounded: false,
    size: 'md'
  }
};

export const Secondary: Story = {
  args: {
    href: 'https://github.com/egdev6',
    target: '_blank',
    title: 'Menu',
    icon: 'menu',
    shadow: false,
    rounded: false,
    variant: 'secondary',
    size: 'md'
  }
};

export const ShadowRounded: Story = {
  args: {
    href: 'https://github.com/egdev6',
    target: '_blank',
    title: 'Menu',
    variant: 'primary',
    icon: 'menu',
    shadow: true,
    rounded: true,
    size: 'md'
  }
};

export const Large: Story = {
  args: {
    href: 'https://github.com/egdev6',
    target: '_blank',
    title: 'Menu',
    variant: 'primary',
    icon: 'menu',
    shadow: true,
    rounded: false,
    size: 'lg'
  }
};

export const SM: Story = {
  args: {
    href: 'https://github.com/egdev6',
    target: '_blank',
    title: 'Menu',
    variant: 'secondary',
    icon: 'menu',
    shadow: false,
    rounded: false,
    size: 'sm'
  }
};

export const OnClick: Story = {
  args: {
    icon: 'menu',
    shadow: false,
    rounded: false,
    variant: 'outlined',
    size: 'md',
    onClick: action('Clicked')
  }
};
