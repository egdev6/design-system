import { action } from '@storybook/addon-actions';
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
    href: '',
    target: '_blank',
    size: 'md',
    children: 'Lorem ipsum',
    className: '',
    title: ''
  }
};

export const Regular: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Link size='sm' href='https://github.com/egdev6'>
        Lorem Ipsum
      </Link>
      <Link size='md' href='https://github.com/egdev6'>
        Lorem Ipsum
      </Link>
      <Link size='lg' href='https://github.com/egdev6'>
        Lorem Ipsum
      </Link>
    </div>
  )
};

export const Outlined: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Link size='sm' variant='outlined' href='https://github.com/egdev6'>
        Lorem Ipsum
      </Link>
      <Link size='md' variant='outlined' href='https://github.com/egdev6'>
        Lorem Ipsum
      </Link>
      <Link size='lg' variant='outlined' href='https://github.com/egdev6'>
        Lorem Ipsum
      </Link>
    </div>
  )
};

export const Button: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Link size='sm' variant='button' onClick={action('clicked')}>
        Lorem Ipsum
      </Link>
      <Link size='md' variant='button' onClick={action('clicked')}>
        Lorem Ipsum
      </Link>
      <Link size='lg' variant='button' onClick={action('clicked')}>
        Lorem Ipsum
      </Link>
    </div>
  )
};

export const WithIcon: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Link size='md' icon='image' href='https://github.com/egdev6'>
        Lorem Ipsum
      </Link>
      <Link size='md' variant='outlined' icon='image' href='https://github.com/egdev6'>
        Lorem Ipsum
      </Link>
      <Link size='md' variant='button' icon='image' onClick={action('clicked')}>
        Lorem Ipsum
      </Link>
    </div>
  )
};
