export type EventType =
  | 'wesele'
  | 'event_firmowy'
  | 'integracja'
  | 'gala_bankiet'
  | 'premiera'
  | 'festiwal_plener'
  | 'vip'
  | 'inne';

export type DesiredPackage = 'silver' | 'gold' | 'platinum' | 'nie_wiem';

export type LeadFormValues = {
  fullName: string;
  email: string;
  phone: string;
  eventDate: string;
  eventType: EventType | '';
  eventLocation: string;
  guestCount: string;
  desiredPackage: DesiredPackage | '';
  message: string;
  consent: boolean;
};

export type LeadFormErrors = Partial<Record<keyof LeadFormValues, string>>;

export type LeadFormStatus = 'idle' | 'submitting' | 'success' | 'error';
