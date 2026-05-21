import { contact } from './siteContent';
import { dessertPackages } from './packages';

export const siteUrl = 'https://truskawkawczekoladzie.pl';

export const siteMeta = {
  title: 'Strawberry Group — stoisko z truskawkami w czekoladzie na eventy',
  description:
    'Mobilne stoisko deserowe ze świeżymi truskawkami w czekoladzie na wesela, eventy firmowe i imprezy plenerowe. Pakiety Silver, Gold i Platinum od 10 zł/os. Obsługa do 1000 gości.',
  ogTitle: 'Strawberry Group — truskawki w czekoladzie na eventy',
  ogDescription:
    'Interaktywne stoisko deserowe: świeże owoce, czekolada, dodatki i pełna obsługa na wesela, gale i eventy firmowe.',
  ogImage: `${siteUrl}/images/hero-strawberry-stand.png`,
  ogImageWidth: 1672,
  ogImageHeight: 941,
  locale: 'pl_PL',
  language: 'pl-PL',
  businessName: 'Strawberry Group S.C.',
  tagline: 'Świeżość. Jakość. Doświadczenie.',
  email: contact.email,
  phone: contact.phone,
  phoneHref: contact.phoneHref,
  emailHref: contact.emailHref,
  logoUrl: `${siteUrl}/brand/strawberry-group-logo.svg`,
  areaServed: 'Polska',
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const faqItems: FaqItem[] = [
  {
    question: 'Na jakie wydarzenia oferujecie stoisko z truskawkami w czekoladzie?',
    answer:
      'Obsługujemy wesela, poprawiny, eventy firmowe, integracje, gale, bankiety, festiwale plenerowe oraz strefy VIP. Stoisko działa jako interaktywna atrakcja deserowa dopasowana do skali wydarzenia.',
  },
  {
    question: 'Ile kosztuje catering deserowy Strawberry Group?',
    answer:
      'Orientacyjnie od 10 zł za osobę w pakiecie Silver (przy 800+ gościach), od 12 zł w Gold i od 16 zł w Platinum. Cena zależy od liczby gości, terminu i logistyki — dokładną wycenę podajemy po zapytaniu.',
  },
  {
    question: 'Czym różnią się pakiety Silver, Gold i Platinum?',
    answer:
      'Silver to szybkie serwowanie truskawek z czekoladą mleczną i 2 posypkami. Gold dodaje białą czekoladę i 4 posypki. Platinum oferuje 4 owoce, 2 polewy oraz samodzielną kompozycję kubka przez gościa — najwyższy poziom interakcji.',
  },
  {
    question: 'Ile gości możecie obsłużyć podczas jednego eventu?',
    answer:
      'Proces obsługi jest zaprojektowany pod płynne wydawanie deserów nawet do 1000 gości. W każdym pakiecie pracują 2 osoby obsługi stoiska.',
  },
  {
    question: 'Co obejmuje pełna obsługa stoiska deserowego?',
    answer:
      'Transport i wyposażenie, montaż stanowiska przed eventem, obsługa dwóch osób, dopasowanie dodatków i wyglądu stoiska oraz demontaż i uporządkowanie strefy po zakończeniu wydarzenia.',
  },
  {
    question: 'Jak zamówić stoisko na wesele lub event firmowy?',
    answer:
      'Wypełnij formularz wyceny na stronie lub zadzwoń pod numer +48 514 214 567. Podaj termin, miasto, liczbę gości i typ wydarzenia — wrócimy z dostępnością, rekomendowanym pakietem i zakresem obsługi.',
  },
];

export const serviceOfferings = dessertPackages.map((pkg) => ({
  name: `Pakiet ${pkg.name} — truskawki w czekoladzie`,
  description: `${pkg.tagline} ${pkg.bestFor}`,
  priceFrom: pkg.priceFrom800,
  priceTo: pkg.priceUpTo800,
}));
