import type { Meta, StoryObj } from '@storybook/react-vite';
import { HiPencil } from 'react-icons/hi';

import { BaseButton } from './BaseButton';

const meta = {
  component: BaseButton,
  args: {
    label: 'Базовая кнопка',
  },
  tags: ['autodocs'],
  title: 'UI/Buttons/BaseButton',
} satisfies Meta<typeof BaseButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithArrow: Story = {
  args: {
    arrow: true,
    label: 'Со стрелкой',
  },
};

export const WithIcon: Story = {
  args: {
    icon: <HiPencil />,
    label: 'С иконкой',
  },
};

