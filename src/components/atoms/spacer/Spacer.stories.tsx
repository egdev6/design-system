import type { Meta, StoryObj } from '@storybook/react';
import Spacer from './Spacer';

/**
 * ## DESCRIPTION
 * Avatar component is used to display user profile images or icons.
 * It supports different sizes and can show a fallback text when the image is not available.
 *
 * ## DEPENDENCIES
 * - [Radix UI Avatar](https://www.radix-ui.com/docs/primitives/components/avatar)
 *
 */
const meta: Meta<typeof Spacer> = {
  title: 'Atoms/Spacer',
  component: Spacer,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Spacer>;

export const Default: Story = {
  args: {
    spaceY: 6
  }
};

export const Horizontal: Story = {
  render: () => (
    <div className='flex'>
      <Spacer spaceX={2} />
    </div>
  )
};
