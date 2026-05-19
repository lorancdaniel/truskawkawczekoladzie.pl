import { forwardRef } from 'react';
import type { LeadFormErrors } from '../../types/lead';

type ErrorSummaryProps = {
  errors: LeadFormErrors;
};

const fieldLabels: Record<keyof LeadFormErrors, string> = {
  fullName: 'Imię i nazwisko',
  email: 'Email',
  phone: 'Telefon',
  eventDate: 'Data wydarzenia',
  eventType: 'Typ wydarzenia',
  eventLocation: 'Miasto / lokalizacja',
  guestCount: 'Liczba gości',
  desiredPackage: 'Preferowany pakiet',
  message: 'Informacje dodatkowe',
  consent: 'Zgoda',
};

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(({ errors }, ref) => {
  const entries = Object.entries(errors) as Array<[keyof LeadFormErrors, string]>;
  if (!entries.length) {
    return <div className="error-summary error-summary--empty" aria-hidden="true" />;
  }

  return (
    <div className="error-summary" role="alert" tabIndex={-1} ref={ref}>
      <strong>Popraw pola formularza</strong>
      <span className="error-summary__count">{entries.length} pól wymaga uzupełnienia lub korekty.</span>
      <ul>
        {entries.map(([field, error]) => (
          <li key={field}>
            <a href={`#${field}`}>{fieldLabels[field]}: {error}</a>
          </li>
        ))}
      </ul>
      {entries.length > 3 ? (
        <span className="error-summary__more">Pozostałe pola są oznaczone bezpośrednio w formularzu.</span>
      ) : null}
    </div>
  );
});

ErrorSummary.displayName = 'ErrorSummary';
