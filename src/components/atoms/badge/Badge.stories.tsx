import type { Meta, StoryObj } from '@storybook/react';
import Badge from './Badge';

/**
 * ## DESCRIPTION
 * Badges are used as a small numerical value or status descriptor for UI elements.
 *
 * Badges can be used to indicate the number of notifications, messages, or other items that require attention.
 */

const meta: Meta<typeof Badge> = {
  title: 'Atoms/Badge',
  component: Badge,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    color: 'primary',
    content: '1',
    variant: 'solid',
    placement: 'top-right',
    size: 'sm',
    rounded: false,
    visibility: true
  }
};

/**
 * - Different sizes of badges can be used to indicate different levels of importance or urgency
 */
export const Size: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Badge content={'1'} size='sm' color={'primary'} />
      <Badge content={'2'} size='md' color={'primary'} />
      <Badge content={'3'} size='lg' color={'primary'} />
    </div>
  )
};

/**
 * - Colors can be used to indicate different types of notifications or statuses.
 */
export const Color: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Badge content={'1'} color={'primary'} size={'md'} />
      <Badge content={'2'} color={'secondary'} size={'md'} />
      <Badge content={'3'} color={'success'} size={'md'} />
      <Badge content={'4'} color={'warning'} size={'md'} />
      <Badge content={'5'} color={'danger'} size={'md'} />
    </div>
  )
};

/**
 * - Variant can be used to indicate different types of badges, such as solid, flat, faded, or shadow.
 */
export const Variant: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Badge content={'1'} variant={'solid'} color={'primary'} />
      <Badge content={'2'} variant={'faded'} color={'primary'} />
      <Badge content={'3'} variant={'flat'} color={'primary'} />
      <Badge content={'4'} variant={'shadow'} color={'primary'} />
    </div>
  )
};

/**
 * - Placement can be used to indicate where the badge should be positioned relative to the element it is associated with.
 */
export const Placement: Story = {
  render: () => (
    <div className='flex gap-4 items-center'>
      <Badge content={'1'} placement='top-right' color={'primary'} />
      <Badge content={'1'} placement='bottom-right' color={'primary'} />
      <Badge content={'1'} placement='bottom-left' color={'primary'} />
      <Badge content={'1'} placement='top-left' color={'primary'} />
    </div>
  )
};
