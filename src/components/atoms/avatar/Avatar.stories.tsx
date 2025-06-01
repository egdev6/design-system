import Icon from '@atoms/icon';
import type { Meta, StoryObj } from '@storybook/react';
import Avatar from './Avatar';

/**
 * ## DESCRIPTION
 * Avatar component is used to display user profile images or icons.
 * It supports different sizes and can show a fallback text when the image is not available.
 *
 * ## DEPENDENCIES
 * - [Radix UI Avatar](https://www.radix-ui.com/docs/primitives/components/avatar)
 *
 */
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

/**
 * - If you don't provide an image, the component will show a fallback text.
 * - The fallback text is set to "EG" by default, but you can change it by providing a different `alt` prop.
 */

export const WithoutImage: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Avatar src={''} size='sm' alt='EG' />
      <Avatar src={''} size='md' alt='EG' />
      <Avatar src={''} size='lg' alt='EG' />
      <Avatar src={''} size='xl' alt='EG' />
      <Avatar src={''} size='2xl' alt='EG' />
      <Avatar src={''} size='3xl' alt='EG' />
    </div>
  )
};

/**
 * - You can use the `src` prop to provide an image URL.
 * - The `alt` prop is used for accessibility and should describe the image.
 */

export const WithImage: Story = {
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

/**
 * - You can add a badge to the avatar by using the `hasBadge` prop.
 * - The `badgeContent` prop allows you to customize the badge text.
 */

export const WithBadge: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Avatar
        src='/images/logo-dark-background.png'
        alt='EG'
        size='sm'
        hasBadge={true}
        badgeContent='1'
        badgeClassName='bg-red-500 text-white'
      />
      <Avatar
        src='/images/logo-dark-background.png'
        alt='EG'
        size='md'
        hasBadge={true}
        badgeContent='2'
        badgeClassName='bg-blue-500 text-white'
      />
      <Avatar
        src='/images/logo-dark-background.png'
        alt='EG'
        size='lg'
        hasBadge={true}
        badgeContent='3'
        badgeClassName='bg-green-500 text-white'
      />
      <Avatar
        src='/images/logo-dark-background.png'
        alt='EG'
        size='sm'
        hasBadge={true}
        badgeContent={<Icon name='eye' size={14} color='text-text-dark' colorDark='dark:text-text-dark' />}
        badgeClassName='bg-red-500 text-white'
      />
      <Avatar
        src='/images/logo-dark-background.png'
        alt='EG'
        size='md'
        hasBadge={true}
        badgeContent={<Icon name='calendar-clock' size={14} color='text-text-dark' colorDark='dark:text-text-dark' />}
        badgeClassName='bg-blue-500 text-white'
      />
      <Avatar
        src='/images/logo-dark-background.png'
        alt='EG'
        size='lg'
        hasBadge={true}
        badgeContent={<Icon name='check' size={14} color='text-text-dark' colorDark='dark:text-text-dark' />}
        badgeClassName='bg-green-500 text-white'
      />
    </div>
  )
};
