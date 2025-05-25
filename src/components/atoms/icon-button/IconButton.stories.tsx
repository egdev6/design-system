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
    disabled: false,
    className: '',
    title: 'Menu'
  }
};

export const Primary: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} title='link' onClick={action('clicked')} />
      <IconButton size={16} title='link' onClick={action('clicked')} />
      <IconButton size={22} title='link' onClick={action('clicked')} />
      <IconButton size={28} title='link' onClick={action('clicked')} />
      <IconButton size={34} title='link' onClick={action('clicked')} />
      <IconButton size={40} title='link' onClick={action('clicked')} />
    </div>
  )
};

export const Secondary: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} title='link' variant='secondary' onClick={action('clicked')} />
      <IconButton size={16} title='link' variant='secondary' onClick={action('clicked')} />
      <IconButton size={22} title='link' variant='secondary' onClick={action('clicked')} />
      <IconButton size={28} title='link' variant='secondary' onClick={action('clicked')} />
      <IconButton size={34} title='link' variant='secondary' onClick={action('clicked')} />
      <IconButton size={40} title='link' variant='secondary' onClick={action('clicked')} />
    </div>
  )
};

export const Outlined: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} title='link' variant='outlined' onClick={action('clicked')} />
      <IconButton size={16} title='link' variant='outlined' onClick={action('clicked')} />
      <IconButton size={22} title='link' variant='outlined' onClick={action('clicked')} />
      <IconButton size={28} title='link' variant='outlined' onClick={action('clicked')} />
      <IconButton size={34} title='link' variant='outlined' onClick={action('clicked')} />
      <IconButton size={40} title='link' variant='outlined' onClick={action('clicked')} />
    </div>
  )
};

export const Ghost: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} title='link' variant='ghost' onClick={action('clicked')} />
      <IconButton size={16} title='link' variant='ghost' onClick={action('clicked')} />
      <IconButton size={22} title='link' variant='ghost' onClick={action('clicked')} />
      <IconButton size={28} title='link' variant='ghost' onClick={action('clicked')} />
      <IconButton size={34} title='link' variant='ghost' onClick={action('clicked')} />
      <IconButton size={40} title='link' variant='ghost' onClick={action('clicked')} />
    </div>
  )
};

export const Light: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} title='link' variant='light' onClick={action('clicked')} />
      <IconButton size={16} title='link' variant='light' onClick={action('clicked')} />
      <IconButton size={22} title='link' variant='light' onClick={action('clicked')} />
      <IconButton size={28} title='link' variant='light' onClick={action('clicked')} />
      <IconButton size={34} title='link' variant='light' onClick={action('clicked')} />
      <IconButton size={40} title='link' variant='light' onClick={action('clicked')} />
    </div>
  )
};

export const RoundedShadow: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} title='link' variant='outlined' rounded={true} shadow={true} onClick={action('clicked')} />
      <IconButton size={16} title='link' variant='outlined' rounded={true} shadow={true} onClick={action('clicked')} />
      <IconButton size={22} title='link' variant='outlined' rounded={true} shadow={true} onClick={action('clicked')} />
      <IconButton size={28} title='link' variant='outlined' rounded={true} shadow={true} onClick={action('clicked')} />
      <IconButton size={34} title='link' variant='outlined' rounded={true} shadow={true} onClick={action('clicked')} />
      <IconButton size={40} title='link' variant='outlined' rounded={true} shadow={true} onClick={action('clicked')} />
    </div>
  )
};
