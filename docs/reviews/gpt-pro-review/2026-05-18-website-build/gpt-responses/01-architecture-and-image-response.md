1. Verdict

Należy zbudować jednostronicową, premium stronę lead-generation dla Strawberry Group: sensoryczna, świeża, elegancka, ale bardzo praktyczna sprzedażowo. Strona ma prowadzić użytkownika od pierwszego ekranu do decyzji: sprawdzić termin albo poprosić o wycenę.

Najlepszy kierunek: „mobilne atelier truskawek w czekoladzie na eventy”, a nie klasyczna strona cateringowa ani czerwono-złota broszura. Wizualnie: dużo oddechu, bliski kontakt z owocem, czekoladą i ruchem obsługi, plus czytelne argumenty operacyjne: skala do 1000 osób, pełna organizacja, szybka obsługa, atrakcyjny koszt na osobę.

Krytyczne ryzyka przed wdrożeniem:

Brak realnego backendu formularza — sama walidacja i sukces demo nie zbiorą leadów produkcyjnie. Trzeba przygotować adapter pod endpoint, Netlify Forms, Formspree, CRM albo prosty własny API endpoint.

Brak prawdziwych zdjęć realizacji — galeria nie może udawać wykonanych eventów. Do startu można użyć hero assetu i aranżowanych wizualizacji, ale sekcja „realizacje” powinna być ostrożnie nazwana.

RODO i zgoda marketingowa — tekst zgody oraz polityka prywatności wymagają potwierdzenia przez właściciela lub prawnika.

Sezonowość i logistyka truskawek — claim „polskie truskawki prosto z plantacji” powinien być opisany tak, żeby nie obiecywać niemożliwego poza sezonem.

Cennik — ceny 10–17 zł/os. są mocnym atutem, ale trzeba potwierdzić, czy są brutto/netto, czy zawierają transport, minimalną liczbę osób i strefy dojazdu.

2. Design Direction
Terytorium wizualne

Kierunek: premium fresh dessert experience.

Strona powinna wyglądać jak coś pomiędzy elegancką marką eventową a nowoczesnym food atelier. Nie jak sklep spożywczy, nie jak standardowy catering, nie jak AI landing page z wielkim czerwonym gradientem.

Proponowana atmosfera:

świeże, naturalne, zmysłowe detale;

elegancka obsługa eventowa;

dużo kremowego tła i ciemnej czekolady;

truskawkowa czerwień jako akcent, nie jako całe tło;

delikatny kontrast między „naturalnym owocem” a „sprawną organizacją wydarzenia”.

Kolor

Bazowa paleta:

Cream / tło premium:        #FFF7EC
Warm white:                 #FDFBF6
Dark chocolate:             #211716
Cocoa brown:                #6A3D2C
Strawberry accent:          #C93445
Soft strawberry blush:      #F3D6D9
Leaf green:                 #2F5D45
Muted pistachio:            #DCE8D2
Text charcoal:              #201B18
Border warm grey:           #E6D8CB
Success green:              #2F6B45
Error red:                  #B4232A

Nie robić strony czerwono-złotej. Czerwień ma działać punktowo: CTA, oznaczenia pakietów, detale w ikonach, mikroakcenty w hoverach.

Typografia

Rekomendacja:

Nagłówki: elegancki display serif z polskimi znakami, np. Cormorant Garamond, Fraunces albo podobny krój o wysokim kontraście.

Tekst użytkowy: czytelny sans, np. Manrope, Inter albo systemowy stack.

Przykład hierarchii:

Hero H1: fluid 48–112 px, serif, ciasny leading
Section H2: 36–72 px, serif
Body: 16–19 px, sans
CTA: 15–17 px, sans, semibold
Microcopy: 13–14 px, sans

Nagłówki mogą być ekspresyjne, ale formularz, cennik i porównanie pakietów muszą być bardzo czytelne.

Obrazowanie

Główne motywy:

świeże truskawki w przezroczystych kubkach;

mleczna i biała czekolada;

ruch nalewania/dekorowania;

eleganckie stanowisko eventowe;

rozmyte tło gości, świateł, namiotu, sali albo pleneru;

detale dłoni obsługi, ale bez dominowania twarzy;

brak fałszywych logotypów, napisów i nieczytelnego signage’u.

Galeria powinna być podzielona na funkcje, nie tylko estetykę:

„świeże owoce”;

„przygotowanie na miejscu”;

„stoisko i obsługa”;

„personalizacja dodatków”;

„skala eventowa”.

Ruch i animacja

Animacje mają pomagać, nie popisywać się.

Wdrożyć:

delikatny hero reveal: tekst i CTA pojawiają się w kolejności;

sticky CTA/nav po scrollu;

subtelne pojawianie się sekcji przy wejściu w viewport;

hover/focus feedback na pakietach i CTA;

mikroanimację sukcesu formularza;

opcjonalny count-up dla „do 1000 osób”, ale tylko raz i z obsługą prefers-reduced-motion.

Nie wdrażać:

ciężkiego scroll-jackingu;

animacji blokujących czytanie;

losowych parallaxów;

ruchów wymagających GSAP/dużych bibliotek na start.

Jak wykorzystać zasady z referencji bez kopiowania

Z Marquet: duża, elegancka typografia + jeden mocny motyw jedzenia. Nie kopiować owalnego kadru, logo ani układu.

Z Savor: immersyjność tekstury i odwaga w skali hero. Nie kopiować żółtego monochromatycznego tła ani układu nawigacji.

Z Driscoll’s: energia świeżych owoców i radość produktu. Nie kopiować kolażowej kompozycji, komiksowej geometrii ani letteringowego stylu.

Dla Strawberry Group najlepszy jest bardziej dojrzały, eventowy język: świeży, zmysłowy, ale uporządkowany.

3. Information Architecture
1. Header / nawigacja

Cel: od razu dać kontakt i skrócić drogę do formularza.

Elementy:

logo tekstowe: Strawberry Group;

anchor links: Oferta, Pakiety, Jak działamy, Eventy, Kontakt;

sticky CTA: Sprawdź termin;

telefon jako widoczny link na desktopie;

na mobile: prosty przycisk Menu, po otwarciu duże linki i CTA.

Nie ukrywać lead CTA w menu na mobile.

2. Hero

Cel: natychmiast powiedzieć, co to jest, dla kogo i dlaczego warto.

Proponowany układ desktop:

lewa strona: H1, subcopy, dwa CTA, szybkie fakty;

prawa strona: premium hero asset z truskawkami, czekoladą i eventowym kontekstem;

pod hero: pasek z 3–4 claimami.

Proponowana treść:

H1:
Interaktywne stoisko z truskawkami w czekoladzie na eventy

Subcopy:
Polskie truskawki, czekolada, dodatki i elegancka obsługa nawet do 1000 gości. Strawberry Group tworzy świeżą atrakcję, która angażuje uczestników i działa sprawnie przy dużej skali wydarzenia.

CTA primary:
Sprawdź dostępność terminu

CTA secondary:
Poproś o wycenę

Quick facts:
Do 1000 osób
Od 10 zł / osoba
Obsługa, montaż i demontaż
Personalizacja stoiska

Na mobile hero musi mieć CTA widoczne bez przewijania zbyt daleko. Obraz może przejść pod tekst, ale nie powinien wypychać nagłówka.

3. Claim strip / szybkie przewagi

Cel: uwiarygodnienie oferty przed szczegółami.

Przykładowe kafelki:

Świeże owoce
Polskie truskawki prosto z plantacji, przygotowywane na miejscu.

Interakcja
Goście wybierają dodatki, dekoracje i wariant deseru.

Skala eventowa
Sprawna obsługa dużych wydarzeń — nawet do 1000 uczestników.

Pełna organizacja
Transport, montaż, obsługa podczas wydarzenia i demontaż.
4. O nas / brand story

Cel: nadać marce charakter i zbudować zaufanie.

Nie pisać długiej historii. Lepiej krótko, konkretnie:

O nas

Tworzymy stoisko deserowe, które łączy świeżość owoców z doświadczeniem eventowym. Zamiast kolejnej pasywnej atrakcji proponujemy punkt, przy którym goście zatrzymują się, wybierają dodatki i dostają deser przygotowany na miejscu.

Dbamy o jakość składników, estetykę podania i sprawną organizację — od transportu po demontaż.

W tej sekcji dobrze dodać brand line:

Świeżość. Jakość. Doświadczenie.
5. Jak działa stoisko

Cel: usunąć niepewność operacyjną.

Układ: 4 kroki.

1. Ustalamy wydarzenie
Termin, lokalizacja, liczba gości, typ eventu i preferowany pakiet.

2. Dopasowujemy stoisko
Dobieramy wariant, dodatki, wygląd stoiska, branding i szczególne życzenia.

3. Przyjeżdżamy i montujemy
Organizujemy transport, przygotowanie stanowiska i zaplecze do sprawnej obsługi.

4. Serwujemy i sprzątamy
Obsługa wydaje desery, angażuje gości, a po wydarzeniu demontuje stoisko.

Dodać mały blok:

Nie musisz organizować osobnej obsługi deseru — przyjeżdżamy z gotowym procesem.
6. Pakiety: Silver, Gold, Platinum

Cel: umożliwić szybki wybór i skierować do formularza.

Forma:

3 karty pakietów;

Platinum wyróżniony jako „najbardziej interaktywny”;

pod kartami krótka tabela porównawcza;

CTA przy każdej karcie: Zapytaj o Silver, Zapytaj o Gold, Zapytaj o Platinum.

Silver
Silver
Prosta, szybka i efektowna forma serwowania.

Dla dużych wydarzeń, które potrzebują sprawnej obsługi i estetycznego podania.

W pakiecie:
- ok. 300 g świeżych truskawek w kubku
- czekolada mleczna
- 2 rodzaje posypek
- deser przygotowywany i wydawany przez obsługę
- 2 osoby obsługi

Cena:
do 800 osób: 11 zł / osoba
800+ osób: 10 zł / osoba
Gold
Gold
Więcej smaków, więcej możliwości.

Dla wydarzeń, gdzie liczy się wybór i atrakcyjniejsze doświadczenie dla gości.

W pakiecie:
- ok. 300 g świeżych truskawek w kubku
- czekolada mleczna i biała
- 4 rodzaje posypek
- deser przygotowywany i wydawany przez obsługę
- 2 osoby obsługi

Cena:
do 800 osób: 13 zł / osoba
800+ osób: 12 zł / osoba
Platinum
Platinum
Najwięcej możliwości i najwyższy poziom doświadczenia.

Uczestnik sam komponuje i dekoruje kubek, wybierając owoce, czekolady, posypki oraz polewy.

W pakiecie:
- 4 rodzaje owoców: truskawki, maliny, borówki, banany
- czekolada mleczna i biała
- 4 rodzaje posypek
- 2 polewy: karmel i czekolada
- uczestnik dekoruje kubek według uznania
- 2 osoby obsługi

Cena:
do 800 osób: 17 zł / osoba
800+ osób: 16 zł / osoba

Przy cenniku dodać zastrzeżenie do potwierdzenia:

Ostateczna wycena zależy od terminu, lokalizacji, liczby gości i zakresu personalizacji.
7. Typy wydarzeń

Cel: pomóc użytkownikowi zobaczyć swoje wydarzenie w ofercie.

Kafelki:

Wesela i poprawiny
Eventy firmowe
Integracje
Gale i bankiety
Premiery produktów
Festiwale i plener
Strefy VIP
Pikniki rodzinne

Dla każdego krótka korzyść, np.:

Wesela i przyjęcia premium
Efektowna atrakcja deserowa, która angażuje gości i dobrze wygląda na zdjęciach.
8. Organizacja i logistyka

Cel: odpowiedzieć na pytanie: „czy to będzie kłopot dla organizatora?”.

Proponowane bloki:

Transport
Przywozimy stoisko, składniki i potrzebne wyposażenie.

Montaż
Przygotowujemy stanowisko przed rozpoczęciem obsługi.

Obsługa
Dwie osoby prowadzą stoisko i dbają o płynne wydawanie deserów.

Personalizacja
Dopasowanie wyglądu stoiska, dodatków, brandingu i życzeń specjalnych.

Demontaż
Po wydarzeniu porządkujemy i zamykamy stanowisko.

Warto dodać checklistę informacyjną:

Do wyceny potrzebujemy:
terminu, miasta, typu wydarzenia, liczby gości, wybranego pakietu i informacji o miejscu ustawienia stoiska.
9. Dlaczego to się opłaca

Cel: wzmocnić argument cenowy bez nachalności.

Sekcja powinna porównać koszt atrakcji eventowej, ale nie wyglądać jak agresywna promocja.

Przykład:

Efekt premium bez kosztu typowej atrakcji eventowej

Popularne atrakcje eventowe często kosztują ok. 22–35 zł za osobę. Pakiety Strawberry Group zaczynają się od 10–17 zł za osobę, a jednocześnie łączą deser, interakcję i obsługę na miejscu.

Przy 500 gościach:
- typowa atrakcja 22–35 zł/os.: ok. 11 000–17 500 zł
- Strawberry Group: ok. 5 500–8 500 zł zależnie od pakietu

Dodać CTA:

Sprawdź koszt dla swojego wydarzenia
10. Gallery / visual proof

Cel: pokazać jakość i styl.

Do czasu realnych zdjęć nie nazywać tego „realizacjami”, jeśli nie ma materiałów z eventów.

Bezpieczne nazwy:

Styl stoiska
Detale podania
Świeże składniki
Personalizacja

Układ:

desktop: nieregularna siatka 5–6 zdjęć;

mobile: przewijane karty albo prosta kolumna;

każda grafika z krótkim opisem alt.

Nie używać zdjęć stockowych, które pokazują inne logo, inny produkt lub niepasujące stoisko.

11. Lead form

Cel: centralny punkt konwersji.

Nagłówek:

Sprawdź dostępność terminu

Podaj kilka informacji o wydarzeniu. Wrócimy z dostępnością, rekomendowanym pakietem i orientacyjną wyceną.

Pola:

Imię i nazwisko

Email

Telefon

Data wydarzenia

Typ wydarzenia

Miasto / lokalizacja wydarzenia

Szacowana liczba gości

Preferowany pakiet

Wiadomość / informacje dodatkowe

Checkbox zgody

Microcopy po sukcesie:

Dziękujemy — zgłoszenie zostało zapisane. Skontaktujemy się, aby potwierdzić dostępność terminu i doprecyzować wycenę. W pilnych sprawach zadzwoń: +48 514 214 567.

Failure state:

Nie udało się wysłać formularza. Spróbuj ponownie albo skontaktuj się bezpośrednio:
+48 514 214 567
strawberrygroupsc@gmail.com
12. Footer

Cel: kontakt, wiarygodność, szybki powrót do CTA.

Elementy:

Strawberry Group
Świeżość. Jakość. Doświadczenie.

Telefon: +48 514 214 567
Email: strawberrygroupsc@gmail.com

Linki:
Oferta
Pakiety
Jak działamy
Kontakt
Polityka prywatności
4. Frontend Architecture
Rekomendowany stack

Dla pustego repo najlepszy będzie konserwatywny, szybki stack:

Vite
React
TypeScript
CSS Modules + global design tokens
Vitest + React Testing Library
Playwright do screenshotów i podstawowego smoke testu

Bez Tailwinda na start. Bez ciężkiej biblioteki animacji. Animacje można zrobić przez CSS, IntersectionObserver i prefers-reduced-motion.

Formularz:

własny reducer/hook albo react-hook-form;

walidacja własna albo Zod;

rekomendacja dla prostoty: czysta funkcja walidacji w TypeScript, łatwa do testowania.

Proponowana struktura plików
/
├── package.json
├── index.html
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── playwright.config.ts
├── vitest.config.ts
├── public/
│   ├── favicon.svg
│   ├── og-image.jpg
│   └── images/
│       └── hero-strawberry-stand.jpg
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── styles/
    │   ├── reset.css
    │   ├── tokens.css
    │   ├── global.css
    │   └── utilities.css
    ├── data/
    │   ├── siteContent.ts
    │   ├── packages.ts
    │   └── eventTypes.ts
    ├── types/
    │   └── lead.ts
    ├── lib/
    │   ├── validation.ts
    │   ├── leadCapture.ts
    │   ├── format.ts
    │   └── dates.ts
    ├── hooks/
    │   ├── useInView.ts
    │   └── usePrefersReducedMotion.ts
    ├── components/
    │   ├── layout/
    │   │   ├── Header.tsx
    │   │   ├── Header.module.css
    │   │   ├── Footer.tsx
    │   │   └── Footer.module.css
    │   ├── ui/
    │   │   ├── Button.tsx
    │   │   ├── Button.module.css
    │   │   ├── Section.tsx
    │   │   ├── Section.module.css
    │   │   ├── Badge.tsx
    │   │   └── VisuallyHidden.tsx
    │   ├── form/
    │   │   ├── LeadForm.tsx
    │   │   ├── LeadForm.module.css
    │   │   ├── TextField.tsx
    │   │   ├── SelectField.tsx
    │   │   ├── TextareaField.tsx
    │   │   ├── CheckboxField.tsx
    │   │   └── ErrorSummary.tsx
    │   └── sections/
    │       ├── Hero.tsx
    │       ├── Hero.module.css
    │       ├── ClaimStrip.tsx
    │       ├── About.tsx
    │       ├── Process.tsx
    │       ├── Packages.tsx
    │       ├── EventTypes.tsx
    │       ├── Logistics.tsx
    │       ├── ValueSection.tsx
    │       ├── Gallery.tsx
    │       └── ContactSection.tsx
    └── tests/
        ├── validation.test.ts
        └── LeadForm.test.tsx
Model danych pakietów
TypeScript
export type PackageId = 'silver' | 'gold' | 'platinum';

export type DessertPackage = {
  id: PackageId;
  name: 'Silver' | 'Gold' | 'Platinum';
  tagline: string;
  bestFor: string;
  staff: string;
  includes: string[];
  priceUpTo800: number;
  priceFrom800: number;
  highlighted?: boolean;
};
Model formularza leadowego
TypeScript
export type EventType =
  | 'wesele'
  | 'event_firmowy'
  | 'integracja'
  | 'gala_bankiet'
  | 'premiera'
  | 'festiwal_plener'
  | 'vip'
  | 'inne';

export type DesiredPackage =
  | 'silver'
  | 'gold'
  | 'platinum'
  | 'nie_wiem';

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
Walidacja

Reguły:

fullName:
- wymagane
- minimum 2 znaki po trim

email:
- wymagane
- prosty, czytelny format email

phone:
- wymagane
- po usunięciu spacji, myślników i nawiasów musi pasować do +?[0-9]{9,15}

eventDate:
- wymagane
- data nie może być w przeszłości

eventType:
- wymagane

eventLocation:
- wymagane
- minimum 2 znaki po trim

guestCount:
- wymagane
- liczba całkowita dodatnia

desiredPackage:
- wymagane
- można wybrać „nie wiem”

message:
- wymagane
- minimum 5 znaków, ponieważ brief wskazuje wiadomość jako pole wymagane

consent:
- wymagane
- musi być zaznaczone

Przykładowe komunikaty:

Podaj imię i nazwisko.
Podaj poprawny adres email.
Podaj poprawny numer telefonu.
Wybierz datę wydarzenia.
Data wydarzenia nie może być z przeszłości.
Wybierz typ wydarzenia.
Podaj miasto lub lokalizację wydarzenia.
Podaj dodatnią liczbę gości.
Wybierz pakiet albo opcję „Nie wiem”.
Napisz krótką informację o wydarzeniu.
Zaznacz zgodę, aby wysłać formularz.
Lead capture

W src/lib/leadCapture.ts przygotować API-ready adapter:

TypeScript
export async function submitLead(values: LeadFormValues): Promise<void> {
  const endpoint = import.meta.env.VITE_LEAD_ENDPOINT;

  if (!endpoint) {
    await new Promise((resolve) => window.setTimeout(resolve, 700));
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });

  if (!response.ok) {
    throw new Error('Lead submission failed');
  }
}

Dzięki temu strona działa demo bez backendu, ale produkcyjnie można podpiąć endpoint bez przebudowy UI.

Accessibility

Wymagania implementacyjne:

każdy input ma widoczny <label>;

błędy są powiązane przez aria-describedby;

pola z błędem mają aria-invalid="true";

po nieudanej próbie wysłania error summary dostaje focus;

error summary zawiera linki do pól;

sukces i błąd wysyłki są ogłaszane przez aria-live;

focus states są widoczne i kontrastowe;

CTA i linki mają minimum 44 px wysokości na mobile;

menu mobile obsługuje klawiaturę;

po zamknięciu menu focus wraca do przycisku menu;

dekoracyjne obrazy mają pusty alt="";

informacyjne obrazy mają krótkie, konkretne alty;

wszystkie animacje respektują prefers-reduced-motion.

Responsive

Breakpoints:

Mobile: 0–599 px
Tablet: 600–1023 px
Desktop: 1024+ px
Large desktop: 1440+ px

Zasady:

Mobile: jedna kolumna, CTA pełnej szerokości, pakiety jako karty jedna pod drugą.

Tablet: hero może być nadal stacked albo 2-kolumnowy z mniejszą grafiką; pakiety 1–2 kolumny.

Desktop: hero 2 kolumny, pakiety 3 kolumny, logistyka i proces w siatkach.

Full HD: maksymalna szerokość contentu ok. 1180–1320px, ale hero visual może wychodzić szerzej.

Formularz desktop: 2 kolumny dla krótkich pól, wiadomość i checkbox na całą szerokość.

Formularz mobile: jedna kolumna, brak poziomego scrolla.

SEO i metadata

Minimum:

title:
Strawberry Group — stoisko z truskawkami w czekoladzie na eventy

description:
Interaktywne stoisko deserowe ze świeżymi truskawkami w czekoladzie na wesela, eventy firmowe i imprezy plenerowe. Obsługa nawet do 1000 gości.

og:title:
Strawberry Group — truskawki w czekoladzie na eventy

og:description:
Świeże owoce, czekolada, dodatki i pełna obsługa stoiska deserowego.

lang:
pl
5. gpt-image-2 Prompt
Create a photorealistic premium hero image for a modern Polish event dessert stand website.

Scene:
An elegant mobile dessert stand at a wedding or corporate outdoor event, serving fresh strawberries in chocolate. In the foreground, show clear dessert cups filled with fresh ripe strawberries, glossy milk chocolate and white chocolate drizzles, delicate toppings, and a refined dark chocolate marble or warm cream counter surface. Include one neatly gloved staff hand gently pouring chocolate over strawberries to communicate preparation on site. In the background, show soft out-of-focus event lights, guests, linen, and a subtle tent or venue atmosphere, but no recognizable faces.

Composition:
Wide horizontal website hero image, 16:9 ratio. Leave generous clean negative space on the left third and upper-left area for headline and call-to-action overlay. Place the strongest visual focus in the lower-right and center-right area: strawberries, chocolate, cups, and the pouring action. The image must also work when center-cropped for a mobile portrait hero, so keep the dessert subject clear near the center-right, not only at the far edge.

Style:
Premium commercial food photography, realistic, tactile, elegant, fresh, warm, and high-end. Natural European event styling, not a supermarket look. Shallow depth of field, soft natural tent/window light mixed with subtle warm event bokeh. Color palette: cream, warm white, dark chocolate brown, natural strawberry red, soft blush, and a small touch of leafy green. Avoid a generic red-and-gold brochure look.

Lighting and texture:
Soft directional light, glossy chocolate highlights, natural strawberry texture, realistic glass or transparent cup reflections, elegant shadows, appetizing but not oversaturated.

Negative constraints:
No readable text, no logos, no signage, no brand marks, no QR codes, no fake labels, no typography inside the image. No cartoon style, no illustration, no 3D render look, no plastic-looking fruit, no impossible giant strawberries, no messy buffet, no cheap party decorations, no over-saturated red background, no gold luxury clichés, no distorted hands, no extra fingers, no duplicated cups, no unrealistic chocolate physics, no visible faces requiring identity, no watermark.

Output intent:
This image will be used as the primary responsive hero asset behind or beside Polish website copy for Strawberry Group, a premium event dessert stand offering fresh strawberries in chocolate.
6. Implementation Repair Plan
Priorytet 1 — inicjalizacja repo

Utworzyć projekt Vite React TypeScript.

Dodać podstawowe skrypty:

npm run dev
npm run build
npm run preview
npm run test
npm run test:watch
npm run typecheck
npm run lint
npm run screenshots

Skonfigurować TypeScript, Vitest i Playwright.

Dodać reset CSS, tokeny i globalne style.

Akceptacja:

npm run typecheck przechodzi
npm run build przechodzi
strona renderuje pusty shell bez błędów konsoli
Priorytet 2 — content i design tokens

Wprowadzić dane pakietów w src/data/packages.ts.

Wprowadzić teksty sekcji w src/data/siteContent.ts.

Zdefiniować zmienne CSS:

CSS
--color-cream
--color-chocolate
--color-strawberry
--color-leaf
--color-blush
--color-text
--space-*
--radius-*
--shadow-*
--font-display
--font-body

Ustawić fluid typography przez clamp().

Akceptacja:

teksty nie są zaszyte chaotycznie w komponentach
pakiety są renderowane z danych
kolory i spacing pochodzą z tokenów
Priorytet 3 — layout, header i hero

Header desktop z anchorami i CTA.

Header mobile z dostępnym menu.

Hero z H1, subcopy, dwoma CTA, quick facts i assetem.

Sticky CTA po scrollu albo sticky header z wyraźnym przyciskiem.

Akceptacja:

pierwszy ekran na 1920x1080 komunikuje ofertę i pokazuje CTA
pierwszy ekran na 390x844 zawiera H1 i przynajmniej jedno CTA bez chaosu
menu mobile działa klawiaturą
Priorytet 4 — sekcje sprzedażowe

Wdrożyć w kolejności:

Claim strip.

O nas.

Jak działa stoisko.

Pakiety.

Typy wydarzeń.

Organizacja i logistyka.

Dlaczego to się opłaca.

Galeria / visual proof.

Footer.

Akceptacja:

każda sekcja ma jasny cel sprzedażowy
pakiety są czytelne bez otwierania modali
Platinum jest wyróżniony, ale Silver i Gold nie wyglądają jak gorsze odpady
cennik nie znika na mobile
Priorytet 5 — formularz leadowy

Zbudować kontrolowany formularz albo hook formularza.

Dodać wszystkie wymagane pola.

Dodać walidację.

Dodać error summary z focusem.

Dodać loading state.

Dodać success state.

Dodać failure state.

Dodać fallback telefon/email.

Przy CTA pakietów ustawiać preferowany pakiet w formularzu albo przewijać do formularza z parametrem.

Akceptacja:

pusty submit pokazuje komplet błędów
email jest walidowany
telefon akceptuje polskie i międzynarodowe formaty
data z przeszłości jest blokowana
guest count musi być dodatni
zgoda jest wymagana
success/failure są ogłaszane przez aria-live
submit disabled podczas wysyłania
Priorytet 6 — accessibility pass

Sprawdzić:

klawiatura:
- header
- menu mobile
- CTA
- formularz
- error summary

screen reader basics:
- labels
- aria-describedby
- aria-invalid
- aria-live
- landmarki: header, main, footer
- jeden H1
- logiczna kolejność H2

motion:
- prefers-reduced-motion ogranicza animacje

Akceptacja:

brak pułapek focusu
widoczny focus na każdym elemencie interaktywnym
kontrast CTA i tekstu zgodny z praktycznym WCAG AA
Priorytet 7 — testy

Testy jednostkowe:

validation.test.ts:
- wymagane pola
- invalid email
- valid email
- invalid phone
- valid Polish phone
- valid international phone
- date in past
- positive guest count
- unchecked consent

Testy komponentowe:

LeadForm.test.tsx:
- renderuje wszystkie pola
- submit pustego formularza pokazuje error summary
- error summary otrzymuje focus
- poprawny submit pokazuje loading i success
- failure pokazuje fallback kontaktowy

Playwright smoke:

- strona ładuje się
- anchor CTA przewija do formularza
- menu mobile otwiera i zamyka się
- formularz pokazuje błędy po pustym submit

Akceptacja:

npm run test przechodzi
npm run typecheck przechodzi
npm run build przechodzi
Playwright smoke przechodzi lokalnie
Priorytet 8 — performance i polish

Obrazy w webp/avif z fallbackiem.

Lazy loading dla galerii.

Hero image preload.

Brak dużych zależności animacyjnych.

Minimalizacja layout shift.

Ustawione width/height albo aspect-ratio dla obrazów.

Meta tags i OG image.

Akceptacja:

brak widocznego CLS na hero
brak poziomego scrolla na 390x844
brak błędów w konsoli
mobile Lighthouse jako orientacyjny check: Performance, Accessibility, Best Practices, SEO możliwie 90+
Do odroczenia lub potwierdzenia przez właściciela

Potwierdzić przed publikacją:

czy ceny są brutto czy netto
czy ceny zawierają transport
minimalna liczba gości / minimalna wartość zamówienia
obsługiwany obszar Polski
zasady rezerwacji terminu
zaliczka / płatność
sezonowość polskich truskawek
dokładny tekst zgody RODO
polityka prywatności
czy można publikować claim „do 1000 osób” bez dodatkowych warunków
czy personalizacja brandingu ma dopłatę

Odroczyć:

blog / journal
zaawansowany kalkulator ceny
integracja CRM
opinie klientów, dopóki nie ma prawdziwych opinii
logotypy klientów, dopóki nie ma zgód
konkursy/nagrody i niejasne szczegóły promocyjne
7. Screenshot Review Plan

Po wdrożeniu trzeba zebrać screenshoty w trzech viewportach:

Desktop: 1920x1080
Tablet: 834x1194 albo 768x1024
Mobile: 390x844
Desktop 1920x1080

Wymagane ujęcia:

Hero above the fold.

Header sticky po scrollu.

Sekcja „Jak działa stoisko”.

Sekcja pakietów z trzema kartami.

Tabela/porównanie pakietów, jeśli jest osobno.

Sekcja „Dlaczego to się opłaca”.

Galeria.

Formularz pusty.

Formularz po submit bez danych — error summary.

Formularz success.

Formularz failure.

Footer.

Tablet

Wymagane ujęcia:

Hero.

Otwarte menu, jeśli header przechodzi w wariant mobilny/tabletowy.

Pakiety — sprawdzić, czy układ 1/2 kolumny nie gubi hierarchii.

Logistyka.

Formularz.

Formularz z błędami.

Mobile 390x844

Wymagane ujęcia:

Pierwszy ekran hero z CTA.

Otwarte menu mobile.

Claim strip / szybkie przewagi.

Pakiety — Silver, Gold, Platinum w kolumnie.

Event types.

Sekcja wartości/ceny.

Galeria.

Formularz domyślny.

Formularz z error summary po pustym submit.

Widoczny focus state na jednym polu.

Success state.

Failure state.

Footer z telefonem i emailem.

Stany specjalne

Dodatkowo sprawdzić:

prefers-reduced-motion: reduce
hover/focus CTA na desktopie
aktywny link telefonu
aktywny link email
brak poziomego scrolla na mobile
czy CTA „Sprawdź termin” faktycznie prowadzi do formularza
czy CTA przy pakietach ustawia albo sugeruje wybrany pakiet
czy error summary po submit dostaje focus

Najważniejsze kryterium odbioru: użytkownik w ciągu pierwszych kilku sekund rozumie, że Strawberry Group oferuje interaktywne stoisko z truskawkami w czekoladzie na wydarzenia, widzi przewagi operacyjne i ma prostą drogę do zapytania o termin oraz wycenę.