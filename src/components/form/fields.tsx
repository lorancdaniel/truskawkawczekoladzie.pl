import { useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { CalendarDays, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import type { ChangeEvent, InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from 'react';

type BaseFieldProps = {
  id: string;
  label: string;
  error?: string;
  required?: boolean;
};

function describedBy(id: string, error?: string) {
  return error ? `${id}-error` : undefined;
}

function FieldError({ id, error }: { id: string; error?: string }) {
  if (!error) return null;

  return (
    <p id={`${id}-error`}>
      {error}
    </p>
  );
}

function FieldLabel({ htmlFor, label, required }: { htmlFor: string; label: string; required?: boolean }) {
  return (
    <label htmlFor={htmlFor} data-required={required ? 'true' : undefined}>{label}</label>
  );
}

export function TextField({
  id,
  label,
  error,
  required,
  ...props
}: BaseFieldProps & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div className="field">
      <FieldLabel htmlFor={id} label={label} required={required} />
      <input id={id} aria-invalid={Boolean(error)} aria-describedby={describedBy(id, error)} required={required} {...props} />
      <FieldError id={id} error={error} />
    </div>
  );
}

type ModalOption<Value extends string> = {
  value: Value;
  label: string;
  description?: string;
};

function formatDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseDateInputValue(value: string) {
  if (!value) return null;
  const date = new Date(`${value}T00:00:00`);
  return Number.isFinite(date.getTime()) ? date : null;
}

function monthLabel(date: Date) {
  return new Intl.DateTimeFormat('pl-PL', { month: 'long', year: 'numeric' }).format(date);
}

function displayDate(value: string) {
  const date = parseDateInputValue(value);
  if (!date) return '';
  return new Intl.DateTimeFormat('pl-PL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

function fullDateLabel(date: Date) {
  return new Intl.DateTimeFormat('pl-PL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}

type DialogShellProps = {
  children: ReactNode;
  panelClassName?: string;
  titleId: string;
  onClose: () => void;
};

function DialogShell({ children, panelClassName, titleId, onClose }: DialogShellProps) {
  const panelRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== 'Tab') {
        return;
      }

      const panel = panelRef.current;
      if (!panel) {
        return;
      }

      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>('a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])'),
      ).filter((item) => {
        const style = window.getComputedStyle(item);
        return style.display !== 'none' && style.visibility !== 'hidden';
      });

      if (!focusable.length) {
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
        return;
      }

      if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  useEffect(() => {
    const previousBodyOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    previouslyFocusedRef.current = document.activeElement instanceof HTMLElement ? document.activeElement : null;

    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    const focusFrame = window.requestAnimationFrame(() => {
      const initialFocus = panelRef.current?.querySelector<HTMLElement>('button, [href], input, textarea');
      initialFocus?.focus({ preventScroll: true });
    });

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousBodyOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.classList.remove('modal-open');
      previouslyFocusedRef.current?.focus({ preventScroll: true });
    };
  }, []);

  if (typeof document === 'undefined') return null;

  return createPortal(
    <div className="choice-modal" role="presentation" onMouseDown={onClose}>
      <div
        aria-labelledby={titleId}
        aria-modal="true"
        className={`choice-modal__panel ${panelClassName ?? ''}`.trim()}
        role="dialog"
        ref={panelRef}
        onMouseDown={(event) => event.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}

export function ModalSelectField<Value extends string>({
  id,
  label,
  error,
  required,
  value,
  placeholder,
  options,
  onChange,
}: BaseFieldProps & {
  value: Value | '';
  placeholder: string;
  options: Array<ModalOption<Value>>;
  onChange: (value: Value) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = options.find((option) => option.value === value);
  const dialogTitleId = `${id}-choice-title`;

  return (
    <div className="field">
      <FieldLabel htmlFor={`${id}-trigger`} label={label} required={required} />
      <button
        id={`${id}-trigger`}
        aria-describedby={describedBy(id, error)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-invalid={Boolean(error)}
        aria-required={required ? 'true' : undefined}
        className={`modal-field__trigger ${!selected ? 'is-placeholder' : ''}`}
        onClick={() => setIsOpen(true)}
        type="button"
      >
        <span>{selected?.label ?? placeholder}</span>
        <span aria-hidden="true">▾</span>
      </button>
      {error ? <p id={`${id}-error`}>{error}</p> : null}
      {isOpen ? (
        <DialogShell titleId={dialogTitleId} onClose={() => setIsOpen(false)}>
          <div className="choice-modal__header">
            <span>Wybór</span>
            <h3 id={dialogTitleId}>{label}</h3>
            <button aria-label="Zamknij" className="choice-modal__close" onClick={() => setIsOpen(false)} type="button">
              ×
            </button>
          </div>
          <div className="choice-modal__list" role="listbox" aria-labelledby={dialogTitleId}>
            {options.map((option) => (
              <button
                aria-selected={option.value === value}
                className={`choice-option ${option.value === value ? 'is-selected' : ''}`}
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                role="option"
                type="button"
              >
                <span>
                  <strong>{option.label}</strong>
                  {option.description ? <small>{option.description}</small> : null}
                </span>
                {option.value === value ? <Check aria-hidden="true" size={18} /> : null}
              </button>
            ))}
          </div>
        </DialogShell>
      ) : null}
    </div>
  );
}

export function DateModalField({
  id,
  label,
  error,
  required,
  value,
  onChange,
}: BaseFieldProps & {
  value: string;
  onChange: (value: string) => void;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const selectedDate = parseDateInputValue(value);
  const [visibleMonth, setVisibleMonth] = useState(() => {
    const base = selectedDate ?? new Date();
    return new Date(base.getFullYear(), base.getMonth(), 1);
  });
  const dialogTitleId = `${id}-date-title`;
  const todayValue = formatDateInputValue(new Date());

  const days = useMemo(() => {
    const year = visibleMonth.getFullYear();
    const month = visibleMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const leadingBlankDays = (firstDay.getDay() + 6) % 7;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    return [
      ...Array.from({ length: leadingBlankDays }, () => null),
      ...Array.from({ length: daysInMonth }, (_, index) => new Date(year, month, index + 1)),
    ];
  }, [visibleMonth]);

  const changeMonth = (delta: number) => {
    setVisibleMonth((current) => new Date(current.getFullYear(), current.getMonth() + delta, 1));
  };

  return (
    <div className="field">
      <FieldLabel htmlFor={`${id}-trigger`} label={label} required={required} />
      <button
        id={`${id}-trigger`}
        aria-describedby={describedBy(id, error)}
        aria-expanded={isOpen}
        aria-haspopup="dialog"
        aria-invalid={Boolean(error)}
        aria-required={required ? 'true' : undefined}
        className={`modal-field__trigger ${!value ? 'is-placeholder' : ''}`}
        onClick={() => {
          const base = selectedDate ?? new Date();
          setVisibleMonth(new Date(base.getFullYear(), base.getMonth(), 1));
          setIsOpen(true);
        }}
        type="button"
      >
        <span>{value ? displayDate(value) : 'Wybierz datę'}</span>
        <CalendarDays aria-hidden="true" size={18} />
      </button>
      {error ? <p id={`${id}-error`}>{error}</p> : null}
      {isOpen ? (
        <DialogShell
          panelClassName="choice-modal__panel--date"
          titleId={dialogTitleId}
          onClose={() => setIsOpen(false)}
        >
          <div className="choice-modal__header">
            <span>Data</span>
            <h3 id={dialogTitleId}>Data wydarzenia</h3>
            <button aria-label="Zamknij" className="choice-modal__close" onClick={() => setIsOpen(false)} type="button">
              ×
            </button>
          </div>
          <div className="date-picker">
            <div className="date-picker__nav">
              <button aria-label="Poprzedni miesiąc" onClick={() => changeMonth(-1)} type="button">
                <ChevronLeft aria-hidden="true" size={18} />
              </button>
              <strong>{monthLabel(visibleMonth)}</strong>
              <button aria-label="Następny miesiąc" onClick={() => changeMonth(1)} type="button">
                <ChevronRight aria-hidden="true" size={18} />
              </button>
            </div>
            <div className="date-picker__weekdays" aria-hidden="true">
              <span>Pn</span>
              <span>Wt</span>
              <span>Śr</span>
              <span>Cz</span>
              <span>Pt</span>
              <span>Sb</span>
              <span>Nd</span>
            </div>
            <div className="date-picker__grid" role="grid" aria-label={monthLabel(visibleMonth)}>
              {days.map((date, index) => {
                if (!date) return <span className="date-picker__empty" key={`empty-${index}`} />;
                const dateValue = formatDateInputValue(date);
                return (
                  <button
                    aria-current={dateValue === todayValue ? 'date' : undefined}
                    aria-label={fullDateLabel(date)}
                    aria-pressed={dateValue === value}
                    className={dateValue === value ? 'is-selected' : undefined}
                    key={dateValue}
                    onClick={() => {
                      onChange(dateValue);
                      setIsOpen(false);
                    }}
                    type="button"
                  >
                    {date.getDate()}
                  </button>
                );
              })}
            </div>
            <div className="date-picker__actions">
              <button
                onClick={() => {
                  onChange(todayValue);
                  setIsOpen(false);
                }}
                type="button"
              >
                Dziś
              </button>
            </div>
          </div>
        </DialogShell>
      ) : null}
    </div>
  );
}

export function TextareaField({
  id,
  label,
  error,
  required,
  ...props
}: BaseFieldProps & TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <div className="field field--wide">
      <FieldLabel htmlFor={id} label={label} required={required} />
      <textarea id={id} aria-invalid={Boolean(error)} aria-describedby={describedBy(id, error)} required={required} {...props} />
      <FieldError id={id} error={error} />
    </div>
  );
}

export function CheckboxField({
  id,
  label,
  error,
  required,
  checked,
  onChange,
}: BaseFieldProps & {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className="field field--checkbox field--wide">
      <label className="checkbox-click-target" htmlFor={id}>
        <span className="checkbox-wrapper">
          <input
            id={id}
            type="checkbox"
            checked={checked}
            onChange={onChange}
            aria-invalid={Boolean(error)}
            aria-describedby={describedBy(id, error)}
            required={required}
          />
          <span className="checkbox-box" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="checkbox-svg" fill="none" stroke="currentColor">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>
        </span>
        <span className="checkbox-label-text" data-required={required ? 'true' : undefined}>{label}</span>
      </label>
      <FieldError id={id} error={error} />
    </div>
  );
}
