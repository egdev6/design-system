import type { Meta, StoryObj } from '@storybook/react';
import Link from './Link';

const meta: Meta<typeof Link> = {
  title: 'Atoms/Link',
  component: Link,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    variant: 'regular',
    href: 'https://github.com/egdev6',
    target: '_self',
    size: "md",
    children: 'Lorem ipsum'
  }
};

export const Button: Story = {
  args: {
    variant: "button",
    href: "https://github.com/egdev6",
    target: "_self",
    size: "md",
    children: "Lorem ipsum"
  }
};

export const Outlined: Story = {
  args: {
    variant: "outlined",
    href: "https://github.com/egdev6",
    target: "_self",
    size: "md",
    children: "Lorem ipsum"
  }
};

export const WithIcon: Story = {
  args: {
    variant: "regular",
    href: "https://github.com/egdev6",
    target: "_self",
    size: "md",
    children: "Lorem ipsum",
    icon: "code"
  }
};
