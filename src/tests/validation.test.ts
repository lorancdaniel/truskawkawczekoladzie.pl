import { describe, expect, it } from 'vitest';
import { validateLeadForm } from '../lib/validation';
import type { LeadFormValues } from '../types/lead';

const validLead: LeadFormValues = {
  fullName: 'Anna Kowalska',
  email: 'anna@example.com',
  phone: '+48 514 214 567',
  eventDate: '2099-06-12',
  eventType: 'wesele',
  eventLocation: 'Warszawa',
  guestCount: '240',
  desiredPackage: 'gold',
  message: 'Proszę o informację o dostępności terminu.',
  consent: true,
};

describe('validateLeadForm', () => {
  it('returns no errors for a complete valid lead', () => {
    expect(validateLeadForm(validLead)).toEqual({});
  });

  it('requires all required fields and consent', () => {
    const errors = validateLeadForm({
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
    });

    expect(errors).toMatchObject({
      fullName: 'Podaj imię i nazwisko.',
      email: 'Podaj poprawny adres email.',
      phone: 'Podaj poprawny numer telefonu.',
      eventDate: 'Wybierz datę wydarzenia.',
      eventType: 'Wybierz typ wydarzenia.',
      eventLocation: 'Podaj miasto lub lokalizację wydarzenia.',
      guestCount: 'Podaj dodatnią liczbę gości.',
      desiredPackage: 'Wybierz pakiet albo opcję "Nie wiem".',
      message: 'Napisz krótką informację o wydarzeniu.',
      consent: 'Zaznacz zgodę, aby wysłać formularz.',
    });
  });

  it('rejects invalid email and accepts valid email', () => {
    expect(validateLeadForm({ ...validLead, email: 'anna@' }).email).toBe('Podaj poprawny adres email.');
    expect(validateLeadForm({ ...validLead, email: 'anna@firma.pl' }).email).toBeUndefined();
  });

  it('accepts Polish and international phone formats but rejects short phone numbers', () => {
    expect(validateLeadForm({ ...validLead, phone: '514 214 567' }).phone).toBeUndefined();
    expect(validateLeadForm({ ...validLead, phone: '+49 151 234 56789' }).phone).toBeUndefined();
    expect(validateLeadForm({ ...validLead, phone: '12345' }).phone).toBe('Podaj poprawny numer telefonu.');
  });

  it('rejects dates in the past', () => {
    expect(validateLeadForm({ ...validLead, eventDate: '2020-01-01' }).eventDate).toBe(
      'Data wydarzenia nie może być z przeszłości.',
    );
  });

  it('requires a positive integer guest count', () => {
    expect(validateLeadForm({ ...validLead, guestCount: '0' }).guestCount).toBe(
      'Podaj dodatnią liczbę gości.',
    );
    expect(validateLeadForm({ ...validLead, guestCount: '-10' }).guestCount).toBe(
      'Podaj dodatnią liczbę gości.',
    );
    expect(validateLeadForm({ ...validLead, guestCount: '250' }).guestCount).toBeUndefined();
  });
});
