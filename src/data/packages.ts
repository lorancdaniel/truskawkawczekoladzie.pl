import type { DesiredPackage } from '../types/lead';

export type DessertPackage = {
  id: Exclude<DesiredPackage, 'nie_wiem'>;
  name: 'Silver' | 'Gold' | 'Platinum';
  tagline: string;
  bestFor: string;
  staff: string;
  includes: string[];
  priceUpTo800: number;
  priceFrom800: number;
  badge: string;
  highlighted?: boolean;
};

export const dessertPackages: DessertPackage[] = [
  {
    id: 'silver',
    name: 'Silver',
    tagline: 'Prosta, szybka i efektowna forma serwowania.',
    bestFor: 'Duże wydarzenia, które potrzebują płynnej obsługi i estetycznego podania.',
    staff: '2 osoby obsługi',
    includes: [
      'ok. 300 g świeżych truskawek w kubku',
      'czekolada mleczna',
      '2 rodzaje posypek',
      'deser przygotowywany i wydawany przez obsługę',
    ],
    priceUpTo800: 11,
    priceFrom800: 10,
    badge: 'Najsprawniejszy wybór',
  },
  {
    id: 'gold',
    name: 'Gold',
    tagline: 'Więcej smaków, więcej możliwości.',
    bestFor: 'Eventy, gdzie liczy się wybór i bardziej angażujące doświadczenie gości.',
    staff: '2 osoby obsługi',
    includes: [
      'ok. 300 g świeżych truskawek w kubku',
      'czekolada mleczna i biała',
      '4 rodzaje posypek',
      'deser przygotowywany i wydawany przez obsługę',
    ],
    priceUpTo800: 13,
    priceFrom800: 12,
    badge: 'Najbardziej uniwersalny',
    highlighted: true,
  },
  {
    id: 'platinum',
    name: 'Platinum',
    tagline: 'Najwięcej możliwości i najwyższy poziom doświadczenia.',
    bestFor: 'Wesela premium, gale, bankiety, premiery i strefy VIP.',
    staff: '2 osoby obsługi',
    includes: [
      '4 rodzaje owoców: truskawki, maliny, borówki, banany',
      'czekolada mleczna i biała',
      '4 rodzaje posypek',
      '2 polewy: karmel i czekolada',
      'gość sam komponuje i dekoruje kubek',
    ],
    priceUpTo800: 17,
    priceFrom800: 16,
    badge: 'Najbardziej interaktywny',
  },
];
