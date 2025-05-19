import type { Meta, StoryObj } from '@storybook/react';
import Icon from './Icon';

const meta: Meta<typeof Icon> = {
  title: 'Atoms/Icon',
  component: Icon,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {
    name: 'image-plus',
    color: 'text-accent',
    colorDark: 'dark:text-accent',
    size: 24
  }
};

export const Sizes: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Icon name='image' size={12} />
      <Icon name='image' size={16} />
      <Icon name='image' size={22} />
      <Icon name='image' size={28} />
      <Icon name='image' size={34} />
      <Icon name='image' size={40} />
    </div>
  )
};

export const Colors: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Icon name='image' size={12} color='text-orange' colorDark='dark:text-pink' />
      <Icon name='image' size={16} color='text-orange' colorDark='dark:text-pink' />
      <Icon name='image' size={22} color='text-orange' colorDark='dark:text-pink' />
      <Icon name='image' size={28} color='text-orange' colorDark='dark:text-pink' />
      <Icon name='image' size={34} color='text-orange' colorDark='dark:text-pink' />
      <Icon name='image' size={40} color='text-orange' colorDark='dark:text-pink' />
    </div>
  )
};
