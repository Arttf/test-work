import type { Meta, StoryObj } from '@storybook/react-vite';

import { BlueGlossButton } from '.';

const meta = {
  component: BlueGlossButton,
  args: {
    label: 'Кнопка',
  },
  tags: ['autodocs'],
  title: 'UI/Buttons/BlueGlossButton',
} satisfies Meta<typeof BlueGlossButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

