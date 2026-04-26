import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';

import { BlueGlossButton } from '.';

describe('BlueGlossButton', () => {
  it('renders label', () => {
    render(<BlueGlossButton label="Кнопка" />);

    expect(screen.getByRole('button', { name: 'Кнопка' })).toBeInTheDocument();
  });

  it('calls onClick', async () => {
    const user = userEvent.setup();
    const handleClick = vi.fn();

    render(<BlueGlossButton label="Кнопка" onClick={handleClick} />);

    await user.click(screen.getByRole('button', { name: 'Кнопка' }));

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});

