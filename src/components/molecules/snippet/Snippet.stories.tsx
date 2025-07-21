import type { Meta, StoryObj } from "@storybook/react";
import Snippet from "./Snippet";

const meta: Meta<typeof Snippet> = {
  title: "Molecules/Snippet",
  component: Snippet,
  parameters: {
    docs: {
      autodocs: true,
    },
  },
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Snippet>;

export const Default: Story = {
  args: {
    children: "npm install @your/package",
  },
};

export const DisabledCopy: Story = {
  args: {
    children: "npm install --no-copy",
    disableCopy: true,
  },
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
    `,
  },
};
