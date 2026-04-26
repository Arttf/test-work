import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, it, vi } from 'vitest';
import { RedToggle } from './index';

describe('RedToggle', () => {
  it('renders switch with unchecked state', () => {
    render(<RedToggle checked={false} onChange={vi.fn()} />);

    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
  });

  it('calls onChange with toggled value', async () => {
    const user = userEvent.setup();
    const handleChange = vi.fn();

    render(<RedToggle checked={false} onChange={handleChange} />);

    await user.click(screen.getByRole('switch'));

    expect(handleChange).toHaveBeenCalledWith(true);
  });
});
