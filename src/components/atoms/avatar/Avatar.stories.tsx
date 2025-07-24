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
 *  - You can round the avatar using the `rounded` prop.
 *  - The available options are 'md', 'full', and 'none'.
 *  - The default value is 'md'.
 *  - This prop allows for customization of the avatar's appearance.
 */

export const Rounded: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Avatar src='' alt='EG' size='md' rounded='md' />
      <Avatar src='' alt='EG' size='md' rounded='full' />
      <Avatar src='' alt='EG' size='md' rounded='none' />
    </div>
  )
};
