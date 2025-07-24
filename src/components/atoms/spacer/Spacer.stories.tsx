import type { Meta, StoryObj } from '@storybook/react';
import Spacer from './Spacer';

/**
 * ## DESCRIPTION
 * The Spacer component is responsible for providing spacing between components on both axes.
 *
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
    spaceY: 4
  }
};

/**
 *Spacing on the X axis.
 */

export const Horizontal: Story = {
  render: () => (
    <div className='flex'>
      <Spacer spaceX={5} />
    </div>
  )
};
