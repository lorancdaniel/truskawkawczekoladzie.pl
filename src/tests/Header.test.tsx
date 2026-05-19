import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { Header } from '../components/layout/Header';

describe('Header', () => {
  beforeEach(() => {
    vi.spyOn(window, 'requestAnimationFrame').mockImplementation((callback: FrameRequestCallback) => {
      callback(0);
      return 1;
    });
    vi.spyOn(window, 'cancelAnimationFrame').mockImplementation(() => undefined);
  });

  it('opens the selected fullscreen glass mobile navigation with animated link sequencing', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const menuButton = screen.getByRole('button', { name: /otwórz menu/i });
    expect(menuButton).toHaveClass('menu-button--magnetic');

    await user.click(menuButton);

    expect(screen.getByRole('button', { name: /zamknij menu/i })).toHaveClass('is-open');

    const navigation = screen.getByRole('navigation', { name: /główna nawigacja/i });
    expect(navigation).toHaveClass('site-nav--glass', 'is-open');
    expect(navigation.querySelector('.site-nav__photo-lock')).toHaveAttribute('aria-hidden', 'true');
    expect(screen.getByText(/wybierz sekcję albo od razu sprawdź dostępność terminu/i)).toBeInTheDocument();

    const links = screen.getAllByRole('link').filter((link) => link.closest('.site-nav__links'));
    expect(links).toHaveLength(5);
    expect(links[0]).toHaveStyle({ '--nav-item-index': '0' });
    expect(links[4]).toHaveStyle({ '--nav-item-index': '4' });
  });
});
