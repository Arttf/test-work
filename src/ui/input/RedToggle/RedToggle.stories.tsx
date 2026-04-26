import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';
import { RedToggle } from './index';

function RedToggleStory() {
  const [checked, setChecked] = useState(false);

  return <RedToggle checked={checked} onChange={setChecked} />;
}

const meta = {
  component: RedToggle,
  tags: ['autodocs'],
  title: 'UI/Input/RedToggle',
} satisfies Meta<typeof RedToggle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    checked: false,
    onChange: () => undefined,
  },
  render: () => <RedToggleStory />,
};
