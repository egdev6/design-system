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
    children: 'Lorem Ipsum'
  }
};

export const WithIcon: Story = {
  args: {
    children: "Lorem Ipsum",
    icon: "activity"
  }
};

export const Button: Story = {
  args: {
    children: "Lorem Ipsum",
    variant: "button"
  }
};

export const Outlined: Story = {
  args: {
    children: "Lorem Ipsum",
    variant: "outline"
  }
};

export const ButtonWithIcon: Story = {
  args: {
    children: "Lorem Ipsum",
    variant: "button",
    icon: "badge-euro"
  }
};
