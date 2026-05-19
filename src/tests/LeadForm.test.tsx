import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import { LeadForm } from '../components/form/LeadForm';

const submitMock = vi.fn();

vi.mock('../lib/leadCapture', () => ({
  submitLead: (...args: unknown[]) => submitMock(...args),
}));

describe('LeadForm', () => {
  beforeEach(() => {
    submitMock.mockReset();
  });

  it('renders all required lead fields', () => {
    render(<LeadForm />);

    expect(screen.getByLabelText(/imię i nazwisko/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^telefon$/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/data wydarzenia/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/typ wydarzenia/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/miasto/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/liczba gości/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/preferowany pakiet/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/informacje dodatkowe/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/zgadzam się/i)).toBeInTheDocument();
  });

  it('focuses an error summary after an empty submit', async () => {
    const user = userEvent.setup();
    render(<LeadForm />);

    await user.click(screen.getByRole('button', { name: /wyślij zapytanie/i }));

    const summary = await screen.findByRole('alert');
    expect(summary).toHaveFocus();
    expect(summary).toHaveTextContent('Popraw pola formularza');
  });

  it('shows loading and then success for a valid submit', async () => {
    const user = userEvent.setup();
    let resolveSubmit: () => void = () => undefined;
    submitMock.mockImplementationOnce(
      () =>
        new Promise<void>((resolve) => {
          resolveSubmit = resolve;
        }),
    );
    render(<LeadForm />);

    await user.type(screen.getByLabelText(/imię i nazwisko/i), 'Anna Kowalska');
    await user.type(screen.getByLabelText(/email/i), 'anna@example.com');
    await user.type(screen.getByLabelText(/^telefon$/i), '+48 514 214 567');
    
    await user.click(screen.getByLabelText(/data wydarzenia/i));
    await user.click(await screen.findByRole('button', { name: /Dziś/i }));
    
    await user.click(screen.getByLabelText(/typ wydarzenia/i));
    await user.click(await screen.findByRole('button', { name: /Wesele \/ poprawiny/i }));
    
    await user.type(screen.getByLabelText(/miasto/i), 'Warszawa');
    await user.type(screen.getByLabelText(/liczba gości/i), '240');
    
    await user.click(screen.getByLabelText(/preferowany pakiet/i));
    await user.click(await screen.findByRole('button', { name: /Gold/i }));
    
    await user.type(screen.getByLabelText(/informacje dodatkowe/i), 'Proszę o wycenę pakietu Gold.');
    await user.click(screen.getByLabelText(/zgadzam się/i));

    await user.click(screen.getByRole('button', { name: /wyślij zapytanie/i }));

    expect(screen.getByRole('button', { name: /wysyłamy/i })).toBeDisabled();
    resolveSubmit();
    const success = await screen.findByRole('status');
    expect(success).toHaveTextContent(/zapytanie wysłane/i);
    expect(success).toHaveTextContent(/dziękujemy/i);
    await waitFor(() => expect(success).toHaveFocus());
  });

  it('shows contact fallback when submit fails', async () => {
    const user = userEvent.setup();
    submitMock.mockRejectedValueOnce(new Error('Network failed'));
    render(<LeadForm />);

    await user.type(screen.getByLabelText(/imię i nazwisko/i), 'Anna Kowalska');
    await user.type(screen.getByLabelText(/email/i), 'anna@example.com');
    await user.type(screen.getByLabelText(/^telefon$/i), '+48 514 214 567');
    
    await user.click(screen.getByLabelText(/data wydarzenia/i));
    await user.click(await screen.findByRole('button', { name: /Dziś/i }));
    
    await user.click(screen.getByLabelText(/typ wydarzenia/i));
    await user.click(await screen.findByRole('button', { name: /Wesele \/ poprawiny/i }));
    
    await user.type(screen.getByLabelText(/miasto/i), 'Warszawa');
    await user.type(screen.getByLabelText(/liczba gości/i), '240');
    
    await user.click(screen.getByLabelText(/preferowany pakiet/i));
    await user.click(await screen.findByRole('button', { name: /Gold/i }));
    
    await user.type(screen.getByLabelText(/informacje dodatkowe/i), 'Proszę o wycenę pakietu Gold.');
    await user.click(screen.getByLabelText(/zgadzam się/i));

    await user.click(screen.getByRole('button', { name: /wyślij zapytanie/i }));

    await waitFor(() => expect(screen.getByText(/nie udało się wysłać formularza/i)).toBeInTheDocument());
    expect(screen.getAllByText('+48 514 214 567').length).toBeGreaterThan(0);
    expect(screen.getByText('strawberrygroupsc@gmail.com')).toBeInTheDocument();
  });
});
