import type { Meta, StoryObj } from '@storybook/react-vite';
import { useState } from 'react';

import { CheckboxYellow } from '.';

function CheckboxYellowStory() {
  const [checked, setChecked] = useState(true);

  return <CheckboxYellow checked={checked} onChange={setChecked} />;
}

const meta = {
  component: CheckboxYellow,
  tags: ['autodocs'],
  title: 'UI/Input/CheckboxYellow',
} satisfies Meta<typeof CheckboxYellow>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Interactive: Story = {
  args: {
    checked: true,
    onChange: () => undefined,
  },
  render: () => <CheckboxYellowStory />,
};

