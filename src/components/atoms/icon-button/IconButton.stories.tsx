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

export const Primary: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} href='#' title='link' />
      <IconButton size={16} href='#' title='link' />
      <IconButton size={22} href='#' title='link' />
      <IconButton size={28} href='#' title='link' />
      <IconButton size={34} href='#' title='link' />
      <IconButton size={40} href='#' title='link' />
    </div>
  )
};

export const Secondary: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} href='#' title='link' variant='secondary' />
      <IconButton size={16} href='#' title='link' variant='secondary' />
      <IconButton size={22} href='#' title='link' variant='secondary' />
      <IconButton size={28} href='#' title='link' variant='secondary' />
      <IconButton size={34} href='#' title='link' variant='secondary' />
      <IconButton size={40} href='#' title='link' variant='secondary' />
    </div>
  )
};

export const Outlined: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} href='#' title='link' variant='outlined' />
      <IconButton size={16} href='#' title='link' variant='outlined' />
      <IconButton size={22} href='#' title='link' variant='outlined' />
      <IconButton size={28} href='#' title='link' variant='outlined' />
      <IconButton size={34} href='#' title='link' variant='outlined' />
      <IconButton size={40} href='#' title='link' variant='outlined' />
    </div>
  )
};

export const Button: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} href='#' title='link' onClick={action('clicked')} />
      <IconButton size={16} href='#' title='link' onClick={action('clicked')} />
      <IconButton size={22} href='#' title='link' onClick={action('clicked')} />
      <IconButton size={28} href='#' title='link' onClick={action('clicked')} />
      <IconButton size={34} href='#' title='link' onClick={action('clicked')} />
      <IconButton size={40} href='#' title='link' onClick={action('clicked')} />
    </div>
  )
};

export const RoundedShadow: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <IconButton size={12} href='#' title='link' variant='outlined' rounded={true} shadow={true} />
      <IconButton size={16} href='#' title='link' variant='outlined' rounded={true} shadow={true} />
      <IconButton size={22} href='#' title='link' variant='outlined' rounded={true} shadow={true} />
      <IconButton size={28} href='#' title='link' variant='outlined' rounded={true} shadow={true} />
      <IconButton size={34} href='#' title='link' variant='outlined' rounded={true} shadow={true} />
      <IconButton size={40} href='#' title='link' variant='outlined' rounded={true} shadow={true} />
    </div>
  )
};
