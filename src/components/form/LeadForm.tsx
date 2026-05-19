import { useEffect, useMemo, useRef, useState } from 'react';
import { Send } from 'lucide-react';
import { eventTypeOptions, packageOptions } from '../../data/formOptions';
import { contact } from '../../data/siteContent';
import { submitLead } from '../../lib/leadCapture';
import { hasErrors, validateLeadForm } from '../../lib/validation';
import type { DesiredPackage, LeadFormErrors, LeadFormStatus, LeadFormValues } from '../../types/lead';
import { Button } from '../ui/Button';
import { CheckboxField, DateModalField, ModalSelectField, TextareaField, TextField } from './fields';
import { ErrorSummary } from './ErrorSummary';

const initialValues: LeadFormValues = {
  fullName: '',
  email: '',
  phone: '',
  eventDate: '',
  eventType: '',
  eventLocation: '',
  guestCount: '',
  desiredPackage: '',
  message: '',
  consent: false,
};

const eventTypeModalOptions = eventTypeOptions.map((option) => ({
  ...option,
  description:
    option.value === 'wesele'
      ? 'Wesela, poprawiny i rodzinne przyjęcia.'
      : option.value === 'event_firmowy'
        ? 'Spotkania dla pracowników, klientów i partnerów.'
        : option.value === 'gala_bankiet'
          ? 'Wieczorne wydarzenia z bardziej elegancką oprawą.'
          : option.value === 'vip'
            ? 'Strefy premium, personalizacja i większy detal.'
            : 'Dopasujemy stoisko do charakteru wydarzenia.',
}));

const packageModalOptions = packageOptions.map((option) => ({
  ...option,
  description:
    option.value === 'silver'
      ? 'Szybka, sprawna forma serwowania.'
      : option.value === 'gold'
        ? 'Najbardziej uniwersalny zakres obsługi.'
        : option.value === 'platinum'
          ? 'Najwięcej interakcji i możliwości personalizacji.'
          : 'Dobierzemy zakres po rozmowie.',
}));

function focusPanel(panel: HTMLDivElement | null) {
  if (!panel) return;
  let top = 0;
  const isWideLayout =
    typeof window.matchMedia === 'function' ? window.matchMedia('(min-width: 1101px)').matches : window.innerWidth >= 1101;
  const target = isWideLayout ? panel.closest<HTMLElement>('#kontakt') ?? panel : panel;
  let node: HTMLElement | null = target;
  while (node) {
    top += node.offsetTop;
    node = node.offsetParent as HTMLElement | null;
  }

  const header = document.querySelector<HTMLElement>('.site-header');
  const headerHeight = header?.getBoundingClientRect().height ?? 80;
  const focusOffset = Math.max(144, Math.ceil(headerHeight + 64));

  try {
    window.scrollTo({ top: Math.max(0, top - focusOffset), behavior: 'auto' });
  } catch {
    panel.scrollIntoView?.({ block: 'center' });
  }
  panel.focus({ preventScroll: true });
}

export function LeadForm() {
  const [values, setValues] = useState<LeadFormValues>(initialValues);
  const [errors, setErrors] = useState<LeadFormErrors>({});
  const [showValidation, setShowValidation] = useState(false);
  const [status, setStatus] = useState<LeadFormStatus>('idle');
  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  const canSubmit = status !== 'submitting';
  const visibleErrors = showValidation ? errors : {};
  const statusMessage = useMemo(() => {
    if (status === 'success') {
      return 'Dziękujemy — zgłoszenie zostało zapisane. Skontaktujemy się, aby potwierdzić dostępność terminu i doprecyzować wycenę.';
    }
    if (status === 'error') {
      return 'Nie udało się wysłać formularza. Spróbuj ponownie albo skontaktuj się bezpośrednio.';
    }
    return '';
  }, [status]);

  useEffect(() => {
    const section = document.getElementById('kontakt');
    const onPackageRequest = (event: Event) => {
      const detail = (event as CustomEvent<DesiredPackage>).detail;
      setValues((current) => ({ ...current, desiredPackage: detail }));
      setErrors((current) => ({ ...current, desiredPackage: undefined }));
      setShowValidation(false);
    };
    section?.addEventListener('package-request', onPackageRequest);
    return () => section?.removeEventListener('package-request', onPackageRequest);
  }, []);

  useEffect(() => {
    if (status !== 'success') return undefined;
    const timeout = window.setTimeout(() => focusPanel(successRef.current), 50);
    return () => window.clearTimeout(timeout);
  }, [status]);

  function updateField<Key extends keyof LeadFormValues>(field: Key, value: LeadFormValues[Key]) {
    setValues((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setShowValidation(false);
    if (status !== 'idle') setStatus('idle');
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateLeadForm(values);
    setErrors(nextErrors);

    if (hasErrors(nextErrors)) {
      setShowValidation(true);
      window.setTimeout(() => focusPanel(summaryRef.current), 0);
      return;
    }

    setShowValidation(false);
    setStatus('submitting');
    try {
      await submitLead(values);
      setStatus('success');
      setErrors({});
      setValues(initialValues);
    } catch {
      setStatus('error');
    }
  }

  return (
    <form className={`lead-form lead-form--${status}`} onSubmit={onSubmit} noValidate>
      {status === 'success' ? (
        <div className="success-summary success-summary--complete" role="status" tabIndex={-1} ref={successRef}>
          <span>Zapytanie wysłane</span>
          <strong>Dziękujemy. Wracamy z dostępnością i rekomendacją pakietu.</strong>
          <p>{statusMessage}</p>
          <div className="success-summary__actions">
            <Button type="button" variant="secondary" onClick={() => setStatus('idle')}>
              Wyślij kolejne zapytanie
            </Button>
            <a href={contact.phoneHref}>{contact.phone}</a>
          </div>
        </div>
      ) : (
        <>
          <div className="lead-form__header">
            <span>Formularz</span>
            <h3>Szczegóły wydarzenia</h3>
            <p>Najważniejsze informacje wystarczą do pierwszej wyceny i sprawdzenia terminu.</p>
          </div>

          <ErrorSummary ref={summaryRef} errors={visibleErrors} />

          <div className="form-grid">
            <h4 id="lead-contact-heading">Kontakt</h4>
            <TextField
              id="fullName"
              label="Imię i nazwisko"
              autoComplete="name"
              value={values.fullName}
              error={visibleErrors.fullName}
              onChange={(event) => updateField('fullName', event.target.value)}
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              autoComplete="email"
              value={values.email}
              error={visibleErrors.email}
              onChange={(event) => updateField('email', event.target.value)}
            />
            <TextField
              id="phone"
              label="Telefon"
              type="tel"
              autoComplete="tel"
              value={values.phone}
              error={visibleErrors.phone}
              onChange={(event) => updateField('phone', event.target.value)}
            />
            <DateModalField
              id="eventDate"
              label="Data wydarzenia"
              value={values.eventDate}
              error={visibleErrors.eventDate}
              onChange={(value) => updateField('eventDate', value)}
            />

            <h4 id="lead-event-heading">Wydarzenie</h4>
            <ModalSelectField
              id="eventType"
              label="Typ wydarzenia"
              value={values.eventType}
              error={visibleErrors.eventType}
              placeholder="Wybierz typ"
              options={eventTypeModalOptions}
              onChange={(value) => updateField('eventType', value)}
            />
            <TextField
              id="eventLocation"
              label="Miasto / lokalizacja wydarzenia"
              value={values.eventLocation}
              error={visibleErrors.eventLocation}
              onChange={(event) => updateField('eventLocation', event.target.value)}
            />
            <TextField
              id="guestCount"
              label="Szacowana liczba gości"
              inputMode="numeric"
              value={values.guestCount}
              error={visibleErrors.guestCount}
              onChange={(event) => updateField('guestCount', event.target.value)}
            />
            <ModalSelectField
              id="desiredPackage"
              label="Preferowany pakiet"
              value={values.desiredPackage}
              error={visibleErrors.desiredPackage}
              placeholder="Wybierz pakiet"
              options={packageModalOptions}
              onChange={(value) => updateField('desiredPackage', value)}
            />

            <h4 id="lead-service-heading">Dodatkowe informacje</h4>
            <TextareaField
              id="message"
              label="Informacje dodatkowe"
              rows={4}
              value={values.message}
              error={visibleErrors.message}
              onChange={(event) => updateField('message', event.target.value)}
            />
            <CheckboxField
              id="consent"
              label="Zgadzam się na kontakt telefoniczny lub mailowy w sprawie wyceny i dostępności terminu. Dane zostaną użyte wyłącznie do obsługi tego zapytania."
              checked={values.consent}
              error={visibleErrors.consent}
              onChange={(event) => updateField('consent', event.target.checked)}
            />
          </div>

          <div className="form-actions">
            <Button type="submit" disabled={!canSubmit} icon={false}>
              <Send aria-hidden="true" size={18} />
              {status === 'submitting' ? 'Wysyłamy zapytanie' : 'Wyślij zapytanie'}
            </Button>
            <div className="form-actions__meta">
              <span>Po wysłaniu sprawdzamy termin i wracamy z orientacyjną wyceną.</span>
              <a href={contact.phoneHref}>Pilne sprawy: {contact.phone}</a>
            </div>
          </div>

          <div
            className={`form-status form-status--${status}`}
            role={status === 'error' ? 'alert' : undefined}
            aria-live={status === 'error' ? 'polite' : undefined}
          >
            {status === 'error' ? statusMessage : ''}
            {status === 'error' ? (
              <span>
                {' '}
                <a href={contact.phoneHref}>{contact.phone}</a> · <a href={contact.emailHref}>{contact.email}</a>
              </span>
            ) : null}
          </div>
        </>
      )}
    </form>
  );
}
