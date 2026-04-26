import type { Meta, StoryObj } from '@storybook/react-vite';

import { NeutralButton } from '.';

const meta = {
  component: NeutralButton,
  args: {
    label: 'Просмотреть',
    visualState: 'default',
  },
  tags: ['autodocs'],
  title: 'UI/Buttons/NeutralButton',
} satisfies Meta<typeof NeutralButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hover: Story = { args: { visualState: 'hover' } };
export const Active: Story = { args: { visualState: 'active' } };
export const Disabled: Story = { args: { visualState: 'disabled' } };

