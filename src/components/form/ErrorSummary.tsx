import { forwardRef, type MouseEvent } from 'react';
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

const fieldTargets: Record<keyof LeadFormErrors, string> = {
  fullName: 'fullName',
  email: 'email',
  phone: 'phone',
  eventDate: 'eventDate-trigger',
  eventType: 'eventType-trigger',
  eventLocation: 'eventLocation',
  guestCount: 'guestCount',
  desiredPackage: 'desiredPackage-trigger',
  message: 'message',
  consent: 'consent',
};

const VISIBLE_ERROR_LIMIT = 4;

function formatFieldCount(count: number) {
  if (count === 1) return '1 pole wymaga uzupełnienia lub korekty.';
  if (count > 1 && count < 5) return `${count} pola wymagają uzupełnienia lub korekty.`;
  return `${count} pól wymaga uzupełnienia lub korekty.`;
}

export const ErrorSummary = forwardRef<HTMLDivElement, ErrorSummaryProps>(({ errors }, ref) => {
  const entries = (Object.entries(errors) as Array<[keyof LeadFormErrors, string | undefined]>).filter(
    (entry): entry is [keyof LeadFormErrors, string] => Boolean(entry[1]),
  );
  const visibleEntries = entries.slice(0, VISIBLE_ERROR_LIMIT);
  const remainingCount = entries.length - visibleEntries.length;

  if (!entries.length) {
    return <div className="error-summary error-summary--empty" aria-hidden="true" />;
  }

  const focusField = (event: MouseEvent<HTMLAnchorElement>, targetId: string) => {
    event.preventDefault();
    const target = document.getElementById(targetId);
    if (!target) return;
    target.scrollIntoView({ block: 'center' });
    window.setTimeout(() => target.focus({ preventScroll: true }), 0);
  };

  return (
    <div className="error-summary" role="alert" tabIndex={-1} ref={ref}>
      <strong>Popraw pola formularza</strong>
      <span className="error-summary__count">{formatFieldCount(entries.length)}</span>
      <ul>
        {visibleEntries.map(([field, error]) => (
          <li key={field}>
            <a href={`#${fieldTargets[field]}`} onClick={(event) => focusField(event, fieldTargets[field])}>
              {fieldLabels[field]}: {error}
            </a>
          </li>
        ))}
      </ul>
      {remainingCount > 0 ? (
        <span className="error-summary__more">
          +{remainingCount} oznaczone bezpośrednio przy polach poniżej.
        </span>
      ) : null}
    </div>
  );
});

ErrorSummary.displayName = 'ErrorSummary';
