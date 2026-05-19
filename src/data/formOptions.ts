import type { DesiredPackage, EventType } from '../types/lead';

export const eventTypeOptions: Array<{ value: EventType; label: string }> = [
  { value: 'wesele', label: 'Wesele / poprawiny' },
  { value: 'event_firmowy', label: 'Event firmowy' },
  { value: 'integracja', label: 'Spotkanie integracyjne' },
  { value: 'gala_bankiet', label: 'Gala / bankiet' },
  { value: 'premiera', label: 'Premiera produktu' },
  { value: 'festiwal_plener', label: 'Festiwal / plener' },
  { value: 'vip', label: 'Strefa VIP' },
  { value: 'inne', label: 'Inne wydarzenie' },
];

export const packageOptions: Array<{ value: DesiredPackage; label: string }> = [
  { value: 'silver', label: 'Silver' },
  { value: 'gold', label: 'Gold' },
  { value: 'platinum', label: 'Platinum' },
  { value: 'nie_wiem', label: 'Nie wiem, proszę doradzić' },
];
