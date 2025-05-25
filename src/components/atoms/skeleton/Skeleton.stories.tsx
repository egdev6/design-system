import type { Meta, StoryObj } from '@storybook/react';
import Skeleton from './Skeleton';

/**
 * ## DESCRIPTION
 *
 * Skeleton component is used to display a placeholder for content that is loading.
 * It provides a visual cue to users that content is being fetched or processed.
 * This component is typically used in scenarios where data is being loaded asynchronously.
 * It can be applied to various elements such as text, images, or entire sections of a page.
 * The skeleton effect is achieved using CSS animations to create a shimmering effect,
 * giving the illusion of a loading state.
 *
 */
const meta: Meta<typeof Skeleton> = {
  title: 'Atoms/Skeleton',
  component: Skeleton,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Skeleton>;

export const Default: Story = {
  args: {
    width: '100px',
    height: '20px',
    rounded: 'md'
  }
};

/**
 * - You can combine multiple skeletons to create a more complex loading state.
 * - This is useful when you have multiple elements loading simultaneously.
 * - For example, you can have a skeleton for a header, a paragraph, and an image all at once.
 * - This gives users a better understanding of the layout and what content is expected.
 */
export const MultipleSkeletons: Story = {
  render: () => (
    <div className='flex flex-col gap-4'>
      <Skeleton width={'100px'} height='20px' />
      <Skeleton width={'200px'} height='150px' />
      <Skeleton width={'200px'} height='20px' />
      <Skeleton width={'100px'} height='20px' />
    </div>
  )
};
