import type { Meta, StoryObj } from '@storybook/react-vite';
import { HiOutlineDownload } from 'react-icons/hi';

import { IconActionButton } from '.';

const meta = {
  component: IconActionButton,
  args: {
    icon: <HiOutlineDownload />,
    label: 'Загрузить из файла',
  },
  tags: ['autodocs'],
  title: 'UI/Buttons/IconActionButton',
} satisfies Meta<typeof IconActionButton>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

