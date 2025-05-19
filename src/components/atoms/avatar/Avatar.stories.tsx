import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  args: {
    size: 'md',
    alt: 'EG',
    className: ''
  }
};

export const Sizes: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Avatar src='/images/logo-dark-background.png' alt='EG' size='sm' />
      <Avatar src='/images/logo-dark-background.png' alt='EG' size='md' />
      <Avatar src='/images/logo-dark-background.png' alt='EG' size='lg' />
      <Avatar src='/images/logo-dark-background.png' alt='EG' size='xl' />
      <Avatar src='/images/logo-dark-background.png' alt='EG' size='2xl' />
      <Avatar src='/images/logo-dark-background.png' alt='EG' size='3xl' />
    </div>
  )
};
