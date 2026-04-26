import type { Meta, StoryObj } from '@storybook/react-vite';

import { TagLabel } from '.';

const meta = {
  component: TagLabel,
  args: {
    name: 'section',
  },
  tags: ['autodocs'],
  title: 'UI/TagLabel',
} satisfies Meta<typeof TagLabel>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

