import type { Meta, StoryObj } from '@storybook/react';
import Snippet from './Snippet';

/**
 * ## DESCRIPTION
 * The `Snippet` component displays code or text snippets with optional copy-to-clipboard functionality.
 * It supports multiple variants, colors, sizes, and rounded corners for flexible use in documentation and UI.
 * The component is fully accessible, keyboard-navigable, and screen-reader friendly.
 *
 * ## DEPENDENCIES
 * - `IconButton` (atom): Used for the copy-to-clipboard button, providing accessible icon button interactions.
 * - `class-variance-authority (CVA)`: Used for scalable and maintainable styling variants.
 */

const meta: Meta<typeof Snippet> = {
  title: 'Molecules/Snippet',
  component: Snippet,
  parameters: {
    docs: {
      autodocs: true
    }
  },
  tags: ['autodocs']
};
export default meta;

type Story = StoryObj<typeof Snippet>;

export const Default: Story = {
  args: {
    children: 'npm install @your/package'
  }
};

export const DisabledCopy: Story = {
  args: {
    children: 'npm install --no-copy',
    disableCopy: true
  }
};

export const MultiLine: Story = {
  args: {
    children: `
# Instalación
npm install my-library

# Construcción
npm run build

# Inicio
npm start
    `
  }
};

export const SolidPrimary: Story = {
  args: {
    children: 'yarn add my-library',
    color: 'primary',
    variant: 'solid'
  }
};

export const OutlineSuccess: Story = {
  args: {
    children: "echo 'Hello World!'",
    color: 'success',
    variant: 'outline'
  }
};

export const ShadowWarning: Story = {
  args: {
    children: 'npm run lint',
    color: 'warning',
    variant: 'shadow'
  }
};

export const WithCustomRounded: Story = {
  args: {
    children: 'pnpm install',
    rounded: 'xl'
  }
};

export const Small: Story = {
  args: {
    children: 'npm run dev',
    size: 'sm'
  }
};

export const Large: Story = {
  args: {
    children: 'npm run build',
    size: 'lg'
  }
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'grid', gap: 16 }}>
      <Snippet variant='solid' color='primary'>
        Solid Primary
      </Snippet>
      <Snippet variant='outline' color='success'>
        Outline Success
      </Snippet>
      <Snippet variant='shadow' color='warning'>
        Shadow Warning
      </Snippet>
      <Snippet variant='solid' color='danger' size='sm'>
        Small Danger
      </Snippet>
      <Snippet variant='solid' color='info' size='lg' rounded='full'>
        Large Info Rounded
      </Snippet>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcases all main variants, colors, and sizes of the Snippet component.'
      }
    }
  }
};
