import {
  BadgeCheck,
  CalendarCheck,
  ChefHat,
  ClipboardCheck,
  Gem,
  HandPlatter,
  Heart,
  MapPin,
  PartyPopper,
  Sparkles,
  Sprout,
  Truck,
  Users,
} from 'lucide-react';

export const contact = {
  phone: '+48 514 214 567',
  phoneHref: 'tel:+48514214567',
  email: 'strawberrygroupsc@gmail.com',
  emailHref: 'mailto:strawberrygroupsc@gmail.com',
};

export const navItems = [
  { href: '#oferta', label: 'Oferta' },
  { href: '#pakiety', label: 'Pakiety' },
  { href: '#jak-dziala', label: 'Jak działamy' },
  { href: '#eventy', label: 'Eventy' },
  { href: '#kontakt', label: 'Kontakt' },
];

export const quickFacts = [
  { value: 'do 1000', label: 'gości w krótkim czasie' },
  { value: 'od 10 zł', label: 'za osobę w pakietach' },
  { value: '2 osoby', label: 'obsługi w każdym pakiecie' },
];

export const claims = [
  {
    title: 'Świeże owoce',
    text: 'Polskie truskawki i owoce przygotowywane na miejscu, z sezonowością komunikowaną uczciwie.',
    Icon: Sprout,
  },
  {
    title: 'Interakcja',
    text: 'Goście wybierają czekoladę, dodatki i dekoracje, a stoisko staje się częścią wydarzenia.',
    Icon: Sparkles,
  },
  {
    title: 'Skala eventowa',
    text: 'Proces obsługi jest zaprojektowany pod płynne wydawanie deserów nawet przy dużych grupach.',
    Icon: Users,
  },
  {
    title: 'Pełna organizacja',
    text: 'Transport, montaż, obsługa, porządek i demontaż po stronie Strawberry Group.',
    Icon: Truck,
  },
];

export const processSteps = [
  {
    title: 'Ustalamy wydarzenie',
    text: 'Termin, miasto, liczba gości, typ wydarzenia i preferowany pakiet.',
    Icon: CalendarCheck,
  },
  {
    title: 'Dopasowujemy stoisko',
    text: 'Dobieramy dodatki, wariant obsługi, wygląd stoiska i ewentualny branding.',
    Icon: ClipboardCheck,
  },
  {
    title: 'Przyjeżdżamy i montujemy',
    text: 'Przywozimy wyposażenie, składniki i przygotowujemy stanowisko przed obsługą.',
    Icon: HandPlatter,
  },
  {
    title: 'Serwujemy i zamykamy',
    text: 'Obsługa wydaje desery, angażuje gości i po wydarzeniu demontuje stoisko.',
    Icon: BadgeCheck,
  },
];

export const eventTypes = [
  { title: 'Wesela i poprawiny', text: 'Deserowa atrakcja, która dobrze wygląda na zdjęciach.', Icon: Heart },
  { title: 'Eventy firmowe', text: 'Szybki, elegancki punkt dla pracowników, klientów i partnerów.', Icon: Gem },
  { title: 'Integracje', text: 'Lekka forma interakcji, która nie wymaga scenariusza.', Icon: PartyPopper },
  { title: 'Gale i bankiety', text: 'Premium detal, który mieści się w rytmie eleganckiego wydarzenia.', Icon: ChefHat },
  { title: 'Festiwale i plener', text: 'Sprawny proces i czytelna obsługa przy większym ruchu.', Icon: MapPin },
  { title: 'Strefy VIP', text: 'Personalizacja dodatków, podania i wyglądu stoiska.', Icon: Sparkles },
];

export const logistics = [
  'Transport i wyposażenie stoiska',
  'Montaż stanowiska przed eventem',
  'Dwie osoby obsługi w pakiecie',
  'Dopasowanie dodatków i wyglądu',
  'Demontaż i uporządkowanie strefy',
];

export const galleryItems = [
  {
    title: 'Świeże składniki',
    text: 'Owoc, czekolada i dodatki eksponowane jak w nowoczesnym food atelier.',
  },
  {
    title: 'Przygotowanie na miejscu',
    text: 'Goście widzą proces, a deser nie jest anonimową przekąską z zaplecza.',
  },
  {
    title: 'Personalizacja',
    text: 'Warianty dodatków, polew i oprawy dopasowane do wydarzenia.',
  },
];
