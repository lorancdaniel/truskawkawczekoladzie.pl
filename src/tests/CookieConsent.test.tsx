import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { CookieConsent } from '../components/ui/CookieConsent';

describe('CookieConsent', () => {
  const storage = new Map<string, string>();

  beforeEach(() => {
    storage.clear();
    Object.defineProperty(window, 'localStorage', {
      configurable: true,
      value: {
        getItem: vi.fn((key: string) => storage.get(key) ?? null),
        setItem: vi.fn((key: string, value: string) => storage.set(key, value)),
      },
    });
  });

  it('shows cookie policy and hides it after acceptance', async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);

    expect(await screen.findByRole('region', { name: /polityka cookies/i })).toBeInTheDocument();

    await user.click(screen.getByRole('button', { name: /akceptuję/i }));

    expect(screen.queryByRole('region', { name: /polityka cookies/i })).not.toBeInTheDocument();
    expect(window.localStorage.getItem('strawberry-group-cookie-consent')).toBe('accepted');
  });
});
