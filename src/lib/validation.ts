import type { LeadFormErrors, LeadFormValues } from '../types/lead';

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const phonePattern = /^\+?[0-9]{9,15}$/;

function isPastDate(value: string): boolean {
  const selected = new Date(`${value}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return Number.isFinite(selected.getTime()) && selected < today;
}

export function validateLeadForm(values: LeadFormValues): LeadFormErrors {
  const errors: LeadFormErrors = {};

  if (values.fullName.trim().length < 2) {
    errors.fullName = 'Podaj imię i nazwisko.';
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = 'Podaj poprawny adres email.';
  }

  const normalizedPhone = values.phone.replace(/[\s\-()]/g, '');
  if (!phonePattern.test(normalizedPhone)) {
    errors.phone = 'Podaj poprawny numer telefonu.';
  }

  if (!values.eventDate) {
    errors.eventDate = 'Wybierz datę wydarzenia.';
  } else if (isPastDate(values.eventDate)) {
    errors.eventDate = 'Data wydarzenia nie może być z przeszłości.';
  }

  if (!values.eventType) {
    errors.eventType = 'Wybierz typ wydarzenia.';
  }

  if (values.eventLocation.trim().length < 2) {
    errors.eventLocation = 'Podaj miasto lub lokalizację wydarzenia.';
  }

  const guestCount = Number(values.guestCount);
  if (!Number.isInteger(guestCount) || guestCount <= 0) {
    errors.guestCount = 'Podaj dodatnią liczbę gości.';
  }

  if (!values.desiredPackage) {
    errors.desiredPackage = 'Wybierz pakiet albo opcję "Nie wiem".';
  }

  if (values.message.trim().length < 5) {
    errors.message = 'Napisz krótką informację o wydarzeniu.';
  }

  if (!values.consent) {
    errors.consent = 'Zaznacz zgodę, aby wysłać formularz.';
  }

  return errors;
}

export function hasErrors(errors: LeadFormErrors): boolean {
  return Object.values(errors).some(Boolean);
}
