import type { Meta, StoryObj } from '@storybook/react-vite';

import { NeutralArrowButton } from '.';

const meta = {
  component: NeutralArrowButton,
  args: {
    label: 'Просмотреть',
    visualState: 'default',
  },
  tags: ['autodocs'],
  title: 'UI/Buttons/NeutralArrowButton',
} satisfies Meta<typeof NeutralArrowButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Hover: Story = { args: { visualState: 'hover' } };
export const Active: Story = { args: { visualState: 'active' } };
export const Disabled: Story = { args: { visualState: 'disabled' } };

