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
    children: 'Lorem ipsum',
    font: 'secondary',
    tag: 'p',
    prominent: false,
    srOnly: false,
    isHtml: false
  }
};

export const WithHtml: Story = {
  args: {
    children: '<i>Lorem ipsum</i>',
    font: 'secondary',
    tag: 'p',
    prominent: false,
    srOnly: false,
    isHtml: true
  }
};

export const CustomColors: Story = {
  args: {
    children: 'Lorem ipsum',
    font: 'secondary',
    tag: 'p',
    prominent: false,
    srOnly: false,
    isHtml: false,
    className: 'text-yellow dark:text-pink'
  }
};
