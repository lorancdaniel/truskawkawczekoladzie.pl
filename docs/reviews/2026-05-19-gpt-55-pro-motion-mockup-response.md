# GPT-5.5 Pro Motion Mockup Response

- Conversation: https://chatgpt.com/c/6a0c8263-7abc-8387-98b2-53d0aebc2f47
- Captured: 2026-05-19T15:47:17.141Z
- Source title: Projekt animacji landing page
- Text length: 39171
- Upload evidence: screenshots uploaded and prompt sent in project praca Daniel via chrome-chatgpt-upload-files.mjs.

---

Jestes GPT-5.5 Pro / Extended Pro w projekcie ChatGPT praca Daniel. Dzialasz jako principal motion designer, senior UI designer i product-minded frontend architect.

Cel tej konsultacji jest pojedynczy: zaprojektowac system animacji dla istniejacego landing page Strawberry Group oraz dac gotowe, precyzyjne prompty do wygenerowania mockupow/storyboardow animacji w gpt-image-20. Potem ten sam zakres ma byc zweryfikowany jako GPT Pro Review przed implementacja GSAP/SVG/smooth scroll.

WAŻNE:
- Nie implementuj kodu. Daj plan motion + prompty do mockupow animacji + kryteria weryfikacji.
- Nie proponuj generycznych dekoracji. Ruch ma wzmacniac premium eventowy charakter strony, czytelnosc i decyzje uzytkownika.
- Projekt ma juz duzo dopracowanych layoutow, header/floating CTA, karuzele galerii, modale kalkulatora i formularz. Nie rozbijaj tego nadmiarem animacji.
- Preferowany kierunek: elegancki, spokojny, premium, gastronomia/eventy, czekolada/truskawka, editorial serif, cieple ivory/cocoa/red tones.
- Forbidden: bounce/elastic, konfetti, bokeh/orbs/blobs, agresywne parallax overload, layout-shifting, animowanie width/height/padding/margin, zbyt wolne efekty, cartoon vibes.
- Technicznie docelowo moze wejsc GSAP i SVG motion, ale tylko tam, gdzie daje to wyrazna wartosc. Obecnie gsap nie jest jeszcze zaleznoscia projektu.
- Smooth scroll ma byc przyjemny i przewidywalny. Trzeba respektowac prefers-reduced-motion.
- Motion mockups sa storyboardami: implementacja potem ma uzyc realnego DOM i dostepnych fallbackow.
- Jezeli gpt-image-20 jest dostepny, wygeneruj/podaj kierunek mockupow. Jezeli nie, zwroc dokladnie gpt-image-20-unavailable i przygotuj pixel-detailed prompt pack.

Kontekst produktu:
- Strona promuje mobilne stoisko deserowe z truskawkami w czekoladzie na wesela, eventy firmowe, gale i strefy VIP.
- Glowne zadania uzytkownika: zrozumiec oferte, porownac pakiety, zobaczyc styl realizacji, policzyc orientacyjny koszt, wyslac zapytanie o termin.
- Ton marki: premium, cieply, zaufany, elegancki, eventowy, nie zabawkowy.
- Publiczne dane widoczne na stronie: telefon i email firmy. Brak sekretow, tokenow, danych prywatnych lub produkcyjnych payloadow w screenshotach.

Zakres motion:
1. Page-load / hero entrance.
2. Smooth anchor scrolling + scroll progress/section transitions, jezeli ma sens.
3. SVG/lucide icon stroke animation dla ikon sekcji, claim strip, formularza i CTA, jesli wzmacnia affordance.
4. Header/floating CTA handoff: tylko dopracowac plynny ruch, nie zmieniac aktualnej logiki.
5. Packages scroll section: premium scroll narrative, bez wertykalnego chaosu.
6. Gallery horizontal carousel: nie naruszac infinite loop; mozna zaproponowac mikro-ruch obrazu/tekstu, ale bez opoznien pustych kart.
7. Calculator/package/date/select modals: wejscie/wyjscie, krok po kroku, focus guidance.
8. Contact form: focus, validation, submit, success/error.
9. Reduced-motion fallback.

Istniejace pliki i mechanizmy:
- src/App.tsx sklada strone: Header, Hero, ClaimStrip, About, Process, Packages, EventTypes, Logistics, ValueSection, Gallery, ContactSection, Footer.
- src/components/ui/Reveal.tsx i src/hooks/useInView.ts robia prosty IntersectionObserver reveal.
- src/lib/dom.ts uzywa scrollIntoView({ behavior: "smooth" }) dla formularza.
- src/styles/reset.css ma html { scroll-behavior: smooth; } i globalny prefers-reduced-motion.
- src/components/layout/Header.tsx ma zlozona logike header CTA -> floating actions -> dock.
- src/components/sections/Gallery.tsx ma wlasny infinite carousel oparty o clone slides, transform track i fallback po transition.
- src/components/sections/Packages.tsx ma pakiety jako scroll narrative z active card przez IntersectionObserver.
- src/components/sections/ValueSection.tsx ma kalkulator i modal pakietow.
- package.json: brak gsap; React 19, Vite, lucide-react, Playwright.

Screenshot context / evidence pack:
Wszystkie obrazy sa osobnymi oryginalnymi PNG, bez contact sheetow.

| Evidence | File | Route/state | Device | Viewport | Capture mode | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Hero desktop default | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-hero-default.png | / top default | desktop | 1920x1080 | viewport | primary readable |
| Packages desktop scroll narrative | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-packages-scroll.png | #pakiety | desktop | 1920x1080 | viewport | primary readable |
| Gallery desktop carousel | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-gallery-carousel.png | gallery section | desktop | 1920x1080 | viewport | primary readable |
| Contact desktop form | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-contact-form.png | #kontakt | desktop | 1920x1080 | viewport | primary readable |
| Calculator modal step 1 desktop | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-calculator-modal-step1.png | calculator modal open | desktop | 1920x1080 | viewport after settle | primary readable |
| Package modal desktop | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-package-modal.png | package modal open | desktop | 1920x1080 | viewport after settle | primary readable |
| Hero mobile default | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-hero-default.png | / top default | mobile | 390x844 | viewport | primary readable |
| Packages mobile | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-packages-scroll.png | #pakiety | mobile | 390x844 | viewport | primary readable |
| Gallery mobile | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-gallery-carousel.png | gallery section | mobile | 390x844 | viewport | primary readable |
| Contact mobile | /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-contact-form.png | #kontakt | mobile | 390x844 | viewport | primary readable |

Poprosze wynik w takiej strukturze:

1. Motion thesis: jedno zdanie, jaka ma byc glowna idea ruchu tej strony.
2. Do not animate: lista rzeczy, ktorych nie ruszac ruchem, zeby nie popsuc dopracowanej strony.
3. Signature animation: jeden najwazniejszy motyw, np. subtelny chocolate-flow / stroke draw / section handoff, z uzasadnieniem i gdzie go uzyc.
4. Motion system: tabela Obszar / Cel uzytkownika / Ruch / Timing / Easing / Technika CSS-GSAP-SVG / Reduced motion fallback / Ryzyko.
5. gpt-image-20 prompt pack: 6-8 gotowych promptow do wygenerowania storyboardow/mockupow animacji. Kazdy prompt musi byc jednoznaczny, scoped do jednego deliverable, i zawierac:
   - viewport,
   - dokladny stan/klatke animacji,
   - co ma byc widoczne,
   - jak pokazac ruch statycznym storyboardem,
   - czego unikac,
   - jak zachowac realny styl tej strony.
6. Recommended first mockups: wybierz 5 najwazniejszych storyboardow do wygenerowania najpierw.
7. Implementation plan after mockups: kroki wdrozenia w React/Vite, z naciskiem na GSAP/SVG/smooth scroll, bez ryzykownych zmian layoutu.
8. Verification plan: jak zweryfikowac po implementacji: desktop/mobile, reduced motion, console errors, scroll anchors, carousel infinite loop, header/floating CTA handoff, modal step transitions, form validation.
9. Pass/fail criteria for GPT Pro Review verification: konkretne kryteria, wedlug ktorych po wdrozeniu mam wyslac post-change screenshoty i poprosic GPT-5.5 Pro o pass/fail.
10. Teraz / Pozniej: co wdrazac teraz, a co zostawic jako dalszy motion polish.

Wazne: wygenerowane prompty musza byc praktyczne do uzycia przez gpt-image-20 i musza sluzyc implementacji, nie moodboardowi.

Show more
Thought for 10m 47s

gpt-image-20-unavailable

1. Motion thesis

Ruch tej strony powinien działać jak spokojne nalewanie czekolady: prowadzić wzrok od oferty do decyzji, podkreślać premium charakter eventu i nigdy nie konkurować z dużą typografią, zdjęciami ani CTA.

2. Do not animate

Nie ruszać ruchem tych elementów albo traktować je ekstremalnie ostrożnie:

Nie animować layoutu: żadnego width, height, padding, margin, font-size, line-height, zmiany wrapowania nagłówków, przeskoków kart ani przesuwania sekcji przez zmianę wymiarów.

Nie robić letter-by-letter na dużych serifach. Nagłówki są mocne same w sobie; najlepszy jest spokojny reveal blokami/liniami, bez teatralnego składania liter.

Nie dodawać dekoracji typu bokeh, orbs, blobs, konfetti, krople-cartoon. Strona jest premium gastronomiczna, nie imprezowo-zabawkowa.

Nie robić ciężkiego parallaxu hero. Hero ma już intensywne zdjęcie i gradient. Wystarczy minimalny image settle, maska lub opacity.

Nie morphować fizycznie header CTA w floating CTA, jeżeli wymagałoby to zmiany obecnej logiki. Lepiej zrobić elegancki crossfade/scale handoff.

Nie naruszać infinite carousel logic w galerii. Żadnych pustych kart, opóźnień po kliknięciu, dodatkowego „ładowania” ani przebudowy tracka.

Nie robić scroll-jacking ani agresywnie pinowanych sekcji na mobile. Mobile ma być przewidywalny i szybki.

Nie animować walidacji formularza shake’ami. Brak efektów alarmowych; tylko czytelny focus, stroke/check, komunikat i stan przycisku.

Nie animować cen i wysokości pakietów. Ceny są decyzyjne, muszą być stabilne.

Nie zasłaniać formularza floating CTA. Motion nie może powodować konfliktów z focus, klawiaturą mobile ani submit buttonem.

3. Signature animation

Signature: chocolate-flow stroke — cienka, elegancka linia/stroke inspirowana strumieniem czekolady.

Nie jako dosłowna animacja kropli, tylko jako subtelny motyw SVG/stroke: linia rysuje się po łuku, podkreśla aktywny stan, przechodzi przez ikonę albo domyka border karty. Ma być krótka, miękka i premium.

Gdzie użyć:

aktywny CTA: krótki stroke przy strzałce lub na krawędzi pigułki,

claim strip / ikony: draw stroke ikon po wejściu w viewport,

aktywny pakiet: rysująca się cienka czerwona/kakaowa linia na górnej krawędzi karty,

modal kalkulatora: progress dots/line między krokami,

formularz: focus field, checkbox consent, submit success check.

Dlaczego: produktowo łączy się z czekoladą, ale nie dodaje nowych ozdobników. Technicznie da się to zrobić SVG/CSS/GSAP bez layout shiftu i z dobrym reduced-motion fallbackiem.

4. Motion system

Bazowe tokeny ruchu:

Typ ruchu	Czas	Easing
Micro hover / focus	140–220 ms	cubic-bezier(0.2, 0, 0, 1)
UI state change	220–320 ms	cubic-bezier(0.22, 1, 0.36, 1)
Section reveal	420–620 ms	cubic-bezier(0.22, 1, 0.36, 1)
Hero entrance total	700–850 ms	layered, same premium ease
Modal enter / exit	180–280 ms	enter: premium ease, exit: cubic-bezier(0.4, 0, 1, 1)
Smooth anchor scroll	360–650 ms, capped	distance-based, predictable
Carousel slide	keep current rhythm	no extra delay
Obszar	Cel użytkownika	Ruch	Timing	Easing	Technika CSS-GSAP-SVG	Reduced motion fallback	Ryzyko
Hero page-load	Szybko zrozumieć ofertę i zobaczyć CTA	Header fade/translate 8 px, hero image bardzo subtelny settle 1–2%, overlay/gradient już obecny, nagłówek reveal liniami przez maskę, potem opis, CTA i statystyki krótkim staggerem	0–850 ms	premium enter	CSS transform/opacity; ewentualnie jedna GSAP timeline po mounted	Od razu widoczny hero; maks. 100 ms opacity, bez translate	Zbyt wolny load lub zmiana łamania dużego nagłówka
Claim strip / feature cards	Złapać konkrety: owoce, interakcja, skala, organizacja	Karty wchodzą po hero, nie wszystkie naraz: opacity + y 10 px; ikona/stroke rysuje się raz	420–620 ms po hero albo on-scroll	premium enter	CSS reveal + SVG stroke draw	Karty statyczne, ikony bez draw	Przeciążenie pierwszego viewportu
Anchor scrolling	Przejść do pakietów/formularza bez utraty orientacji	Native smooth lub GSAP ScrollTo z offsetem headera; bez globalnego scroll-jacking. Dystans capowany, anulowalny przez user input	360–650 ms	distance-based ease-out	Obecny scrollIntoView jako baza; GSAP ScrollTo tylko po decyzji	Instant jump do celu; focus na sekcji	Scroll walczy z browserem albo mobile keyboard
Section transitions	Czuć rytm premium, nie animację dla animacji	Reveal tylko dla dużych bloków: heading, lead, card cluster. Nie animować każdego akapitu osobno	420–620 ms	premium enter	Rozszerzyć istniejący Reveal.tsx; CSS variables per variant	Sekcje widoczne bez przesunięć	Nadmiar staggerów, wolna strona
Header / floating CTA handoff	CTA zawsze dostępne, bez chaosu	Handoff przez opacity + scale 0.98/1 + y 6 px. Header CTA wygasa, floating CTA pojawia się z tym samym red/cocoa feelingiem. Bez fizycznego morphu między DOM nodes	180–260 ms	micro/premium	CSS classes sterowane obecną logiką; GSAP tylko jeśli trzeba zsynchronizować	Jeden stan CTA bez animacji	Migotanie przy progu scrolla, overlap z formularzem
Packages scroll narrative	Porównać pakiety bez zgubienia decyzji	Aktywny pakiet dostaje border/stroke draw, delikatne podniesienie przez shadow/opacity, treść przechodzi opacity + y 10 px. Lewa lista aktywna płynnie zmienia kolor/akcent. Bez pinowania mobile	300–520 ms per active change	premium enter	Obecny IntersectionObserver; GSAP ScrollTrigger opcjonalnie tylko desktop	Aktywna karta zmienia się instant; wszystkie treści czytelne	„Wertykalny chaos”, złe aktywne stany przy szybkim scrollu
Gallery carousel	Zobaczyć styl realizacji, nie czekać	Zachować track/infinite. Po slide change: aktywna karta tekst fade/y 8 px, obraz wewnątrz minimalny pan 1–1.5%, dot zmienia się jako red pill. Arrow hover: icon stroke/translate 2 px	Slide wg obecnego CSS; content 180–260 ms	micro/premium	Nie zmieniać mechaniki klonów; tylko child animation per active slide	Carousel działa bez micro-ruchu	Puste slajdy, desync po clone reset
SVG/lucide icons	Wzmocnić affordance i premium detal	Ikony rysują stroke raz przy wejściu w viewport; CTA arrows mają 2 px micro-shift na hover/focus	180–450 ms	micro	SVG path length / stroke-dashoffset; GSAP DrawSVG niekonieczny	Ikony statyczne	Zbyt dużo draw animations naraz
Calculator modal entrance	Użytkownik rozumie, że jest w lekkim flow decyzyjnym	Backdrop fade, panel scale 0.985→1 + y 16→0, lewy dark panel wchodzi minimalnie wcześniej, karty pakietów stagger 40 ms	220–280 ms	premium enter	CSS transition lub GSAP timeline scoped do modala	Modal pojawia się bez scale; focus ustawiony	Blur/overlay za ciężki, wolne otwarcie
Modal step transitions	Przejść przez kroki bez dezorientacji	Current step fade/y -6 px out, next step fade/y 8 px in. Progress dot/stroke przechodzi płynnie. Selected card border draw	out 100–140 ms, in 180–240 ms	exit + premium enter	CSS/GSAP timeline; focus management po stepie	Instant content swap, focus na heading/first control	Utrata focus, scroll modala skacze
Package/date/select modals	Wybrać pakiet/datę bez ciężaru	Karty wchodzą jako group reveal, hover/focus przez border/stroke i shadow. Select/date dropdown: opacity + y 4 px, nie resize layoutu	160–260 ms	micro	CSS transforms; SVG stroke dla akcentu	Statyczne karty/dropdowny	Modal zbyt „aplikacyjny”, mniej premium
Contact form focus	Jasno wiedzieć, gdzie wpisuję dane	Field focus: border warm red/cocoa, subtelny shadow, label bez ruchu. Checkbox stroke draw po zaznaczeniu	120–180 ms	micro	CSS focus-visible, SVG check	Domyślny focus bez animacji	Zbyt mały kontrast focus albo brak keyboard affordance
Contact validation/submit	Szybko poprawić błąd lub zaufać submitowi	Error: komunikat fade/y 4 px, żadnego shake. Submit: button disabled + krótki progress highlight/stroke, success: check draw i spokojny panel komunikatu	160–320 ms	micro/premium	CSS states + SVG check; bez layout shiftu	Komunikaty instant	Form field przesuwa się i zmienia wysokość strony
Mobile menu	Otworzyć nawigację bez utraty hero	Menu panel fade/y 8 px lub slide z góry, item stagger max 25 ms. Brak full-screen teatralnego wejścia	180–260 ms	premium enter	CSS transforms	Menu instant	Konflikt z hero, klawiaturą lub sticky headerem
Global reduced motion	Dostępność i przewidywalność	Wyłączyć smooth scroll, parallax, scrub, stagger, carousel micro-pan, stroke draw. Zostawić statyczne stany i focus	natychmiast / 80 ms opacity	linear/none	prefers-reduced-motion jako centralny warunek	Pełna czytelność bez animacji	Część GSAP nadal działa mimo reduced motion
5. gpt-image-20 prompt pack

Poniższe prompty są przygotowane jako techniczne storyboardy do mockupów motion. Każdy powinien bazować na aktualnym screenie i nie redesignować UI.

Prompt 1 — Desktop hero page-load storyboard

Reference: desktop-1920x1080-hero-default.png

Create a technical motion storyboard for the existing Strawberry Group landing page hero. Use the provided desktop reference screenshot as the exact visual base. Do not redesign the page.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing the final hero layout with translucent motion overlays and timing callouts. Preserve the exact header, logo, nav, hero photo, typography, red CTA buttons, stats, and claim strip.

Animation state to visualize:
- Page-load hero entrance, 0ms → 850ms.
- Header appears first: opacity 0→100%, y -8px→0, around 0–180ms.
- Hero background photo is already present but settles subtly from scale 1.015 to 1.0; do not show dramatic parallax.
- Large serif headline “Truskawki w czekoladzie jako atrakcja wydarzenia.” reveals by line masks, not letter-by-letter.
- Subheading appears after headline with opacity + y 10px.
- Primary CTA “Sprawdź dostępność terminu” and secondary CTA “Zobacz pakiety” appear together with a 60ms stagger.
- Stats “do 1000”, “od 10 zł”, “2 osoby” appear last with small y 8px movement.
- Claim strip cards at bottom edge appear after the hero content, opacity + y 10px.

How to show motion statically:
- Add subtle semi-transparent ghost positions for start states, with small red/cocoa arrows showing direction.
- Add tiny timing labels near groups: 0ms, 180ms, 420ms, 650ms, 850ms.
- Use a thin cocoa/red mask-line indicator over the headline to show line reveal.
- Keep annotations minimal and premium, like a design spec overlay, not a marketing graphic.

Avoid:
- No bounce, no elastic, no confetti, no bokeh/orbs/blobs, no chocolate drips.
- No layout changes, no text rewrap, no new components.
- Do not brighten the photo or change colors.

Style:
- Preserve warm ivory/cocoa/red palette, editorial serif feeling, premium event/gastronomy mood.
Prompt 2 — Mobile hero entrance and CTA stack

Reference: mobile-390x844-hero-default.png

Create a technical motion storyboard for the mobile hero entrance of the existing Strawberry Group landing page. Use the provided mobile screenshot as the exact visual base. Do not redesign.

Viewport: mobile 390x844.

Deliverable: one 390x844 storyboard frame with final UI plus translucent start-state overlays and timing callouts.

Animation state to visualize:
- Mobile page-load entrance, 0ms → 780ms.
- Top header/logo and cream “Menu” pill appear first with opacity + y -6px.
- Hero background photo remains stable, with only a very subtle scale settle from 1.012 to 1.0.
- Eyebrow “INTERAKTYWNE STOISKO DESEROWE” fades in.
- Large serif headline reveals by line mask from bottom to top, keeping exact line breaks from the screenshot.
- Body copy fades in after headline.
- Primary red CTA appears from y 10px to 0; secondary outlined CTA appears 50ms later.
- Stats stack appears last, each stat opacity + y 8px with a short stagger.

How to show motion statically:
- Use ghosted start positions at 30% opacity.
- Add small downward/upward arrows only where movement happens.
- Add tiny time labels near the header, headline, CTA stack, and stats.
- Show the line-mask reveal with thin semi-transparent horizontal cream/cocoa bands.

Avoid:
- No horizontal movement that could imply overflow.
- No menu redesign.
- No heavy parallax, no bouncing buttons, no decorative particles.
- Do not change typography, CTA sizes, or stat layout.

Style:
- Keep the exact warm, dark, premium mobile hero style. The storyboard should look like an implementation spec layered over the existing screen.
Prompt 3 — Header to floating CTA handoff

Reference: desktop-1920x1080-hero-default.png and desktop-1920x1080-contact-form.png

Create a technical storyboard for the header CTA to floating CTA handoff on the existing Strawberry Group landing page. Use the provided screenshots as visual references. Do not redesign the header or floating CTA.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing the page in a mid-scroll transition state. Use the hero/header style from the hero screenshot and the floating CTA placement from the contact screenshot.

Animation state to visualize:
- User scrolls from hero toward lower sections.
- Header contact pill in the top-right fades out from opacity 100% to 0% and scales 1→0.98.
- Floating CTA dock at bottom-right fades in from opacity 0% to 100%, y 8px→0, scale 0.98→1.
- The two elements should not physically morph across the screen; show it as a controlled crossfade/handoff.
- The floating CTA contains the phone icon chip and red “Sprawdź termin” pill, preserving current size and placement.
- Header remains stable; no nav movement.

How to show motion statically:
- Show header CTA as a semi-transparent outgoing ghost.
- Show floating CTA as a solid incoming element with a faint previous ghost y 8px lower.
- Add a small timeline label: 0ms header CTA visible, 120ms crossfade, 240ms floating CTA active.
- Add a thin dashed cocoa guide line between the two only as an annotation, not as a UI element.

Avoid:
- No physical flying button.
- No resize of header, no layout shift, no new sticky bar.
- No bounce, no elastic, no exaggerated shadows.
- Do not cover form inputs or submit button.

Style:
- Premium, calm, same red/cocoa/ivory colors, subtle shadow only.
Prompt 4 — Packages desktop scroll narrative

Reference: desktop-1920x1080-packages-scroll.png

Create a technical motion storyboard for the packages scroll narrative section of the existing Strawberry Group landing page. Use the provided packages desktop screenshot as the exact base. Do not redesign the section.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing a mid-transition between active package states, with implementation-focused overlays.

Animation state to visualize:
- Section is in the packages area.
- The left editorial heading “Trzy poziomy obsługi…” remains stable and readable.
- The package list at bottom-left changes active state from “01 Silver” toward the next package; show the active red accent gliding/fading, not jumping.
- The large right package card remains in the same layout position.
- Active card receives a subtle premium emphasis: border/stroke draw along the top and right edge, soft shadow increase, no scale larger than 1.01.
- Card text transitions opacity + y 8px; do not move the whole card.
- The pale background glow remains static.

How to show motion statically:
- Use a 35% opacity ghost of the previous active text state and a solid current state.
- Add a thin red/cocoa “chocolate-flow stroke” on the active card border with arrow direction.
- Add timing labels: active-state change 0ms → 420ms.
- Add a small scroll marker annotation showing that the trigger is IntersectionObserver/scroll position, not a draggable carousel.

Avoid:
- No pinned chaos, no vertical card flying, no big parallax.
- No price number animation.
- No card height changes, no text reflow.
- Do not add new package content that is not implied by the existing design.

Style:
- Editorial, premium, quiet. Preserve ivory background, cocoa typography, red accents.
Prompt 5 — Gallery carousel motion, desktop

Reference: desktop-1920x1080-gallery-carousel.png

Create a technical motion storyboard for the existing gallery horizontal carousel. Use the provided desktop gallery screenshot as the exact visual base. Do not redesign the carousel.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing the carousel 220ms after pressing the right arrow.

Animation state to visualize:
- The carousel track is moving horizontally to the next item.
- Preserve the existing infinite-loop card structure and visible partial next card on the right.
- The active card image has a very subtle internal pan, 1–1.5%, not a page parallax.
- The text panel of the active card reveals opacity + y 8px after the track movement begins.
- Dots below carousel transition: active dot becomes a red pill, inactive dots remain small beige circles.
- Right arrow appears in pressed/active state for one frame; left arrow remains normal.

How to show motion statically:
- Show outgoing and incoming card positions with translucent ghost outlines.
- Add a small horizontal arrow along the track direction.
- Add timing labels: track 0–360ms, text 160–300ms, dot 160–260ms.
- Add a tiny “no blank slide / preserve clone reset” annotation near the right edge.

Avoid:
- No empty cards.
- No long delay before content appears.
- No reordering of slides, no redesign of arrows/dots.
- No heavy zoom or cinematic photo movement.

Style:
- Keep the current warm event photo style, large serif text, rounded cards, ivory background.
Prompt 6 — Calculator modal entrance and step focus

Reference: desktop-1920x1080-calculator-modal-step1.png

Create a technical motion storyboard for the calculator modal entrance and step focus. Use the provided calculator modal screenshot as the exact base. Do not redesign.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing the modal at 180ms of a 280ms entrance animation, with clear motion annotations.

Animation state to visualize:
- Backdrop is dimmed and slightly blurred, but not over-blurred.
- Modal panel enters from y 16px to 0 and scale 0.985 to 1.
- Left dark panel appears slightly earlier than the right content panel.
- Heading “Co pasuje do wydarzenia?” fades in and settles.
- Three cards Silver, Gold, Platinum appear with a 40ms stagger.
- Gold card is selected; its red border is drawn as a thin stroke from top-left around the card.
- Bottom “Wstecz” and “Dalej” buttons fade in after cards.
- Close button remains stable in the top-right.

How to show motion statically:
- Show a faint ghost of the modal 16px lower and 0.985 scale behind the current panel.
- Add small arrows for y movement.
- Add red stroke-draw direction marks around the selected Gold card.
- Add timing labels: backdrop 0–180ms, panel 40–280ms, cards 120–260ms, selected stroke 180–300ms.

Avoid:
- No bounce, no elastic pop.
- No large scale zoom.
- No new fields or modal content.
- No cartoon chocolate or decorative blobs.
- Do not make the background unreadably blurred.

Style:
- Preserve the premium ivory/cocoa modal, dark left panel, serif headings, red CTA accents.
Prompt 7 — Package modal card selection

Reference: desktop-1920x1080-package-modal.png

Create a technical motion storyboard for the package selection modal. Use the provided package modal screenshot as the exact base. Do not redesign.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing the Gold package card in selected/focus state.

Animation state to visualize:
- Modal is already open and stable.
- Gold card receives selected emphasis through border color, subtle shadow, and a thin “chocolate-flow stroke” drawn along the card edge.
- Silver and Platinum remain readable and calm, with no movement except very slight opacity reduction if needed.
- CTA button “Policz Gold” has an arrow micro-motion: arrow shifts 2px right with a faint ghost.
- Price box inside the card remains stable; no number animation.
- The top heading and description do not move.

How to show motion statically:
- Add a 30% opacity previous border ghost and a solid current red border.
- Add tiny arrow markers along the border stroke path.
- Add labels: hover/focus 0–180ms, selected stroke 180–320ms.
- Add a small focus-ring note showing keyboard accessibility.

Avoid:
- No card resizing.
- No content reflow.
- No animated price.
- No hover tilt or 3D effect.
- No extra badges beyond the existing labels.

Style:
- Clean product decision UI, premium event tone, warm ivory/cocoa/red palette.
Prompt 8 — Contact form focus, validation, submit success

Reference: desktop-1920x1080-contact-form.png

Create a technical motion storyboard for the contact form interactions on the Strawberry Group landing page. Use the provided desktop contact form screenshot as the exact base. Do not redesign.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing three interaction states as subtle overlays on the same form: focused field, validation message, and submit success path.

Animation state to visualize:
- Focus state: one input field has a warm red/cocoa border and very subtle shadow, no label movement.
- Validation state: a small error/help message appears below one field with opacity + y 4px. No shake.
- Checkbox consent: check icon draws as SVG stroke.
- Submit state: red “Wyślij zapytanie” button shows a short internal progress highlight/stroke, not an infinite spinner.
- Success state: a calm success confirmation area appears near the form bottom/top of button area with a drawn check icon, preserving layout stability.
- Floating CTA remains visible but must not block form fields or the submit button.

How to show motion statically:
- Use small callout labels beside each state: focus 120ms, validation 180ms, submit 240–320ms, success 320ms.
- Add ghosted y-start positions for the validation and success messages.
- Add a small stroke-draw direction mark on the checkbox and success check.

Avoid:
- No field shaking.
- No moving labels.
- No layout jumps or increased form height that pushes content unexpectedly.
- No large modal success overlay.
- No disabling keyboard focus visibility.

Style:
- Keep the current premium form style: ivory panel, thin borders, serif heading, red submit button, cocoa copy.
6. Recommended first mockups

Najpierw wygenerowałbym te 5 storyboardów:

Prompt 1 — Desktop hero page-load
Najbardziej widoczny moment, definiuje cały język ruchu strony.

Prompt 2 — Mobile hero entrance
Mobile ma większe ryzyko overflow, zbyt długich staggerów i utraty CTA.

Prompt 4 — Packages desktop scroll narrative
To najtrudniejszy fragment produktowo: porównanie pakietów ma być premium, ale czytelne.

Prompt 6 — Calculator modal entrance and step focus
Modal jest głównym narzędziem decyzyjnym; tu motion może realnie poprawić flow.

Prompt 8 — Contact form focus, validation, submit success
Najbliżej konwersji. Warto ustalić focus, validation i submit zanim wejdzie implementacja.

Prompt 3, czyli header/floating CTA handoff, jest ważny, ale najlepiej oceniać go potem na krótkim nagraniu scrolla, bo statyczny storyboard nie pokaże całego progu przełączenia.

7. Implementation plan after mockups

Ustalić motion tokens przed kodem

Jedno źródło czasów, easingów i reduced-motion.

Trzymać zasadę: transform + opacity + SVG stroke, bez layout animation.

Zostawić większość motion w CSS

Hero, reveals, focus states, hover, modal base transitions mogą być CSS.

GSAP dopiero tam, gdzie potrzebna jest synchronizacja timeline, scroll trigger albo SVG stroke timing.

Rozszerzyć istniejący Reveal.tsx, nie robić nowego systemu od zera

Warianty: hero-line, section-heading, card, cluster, icon-stroke.

Mobile: krótsze stagger, mniej elementów animowanych naraz.

Smooth scroll uporządkować w jednym miejscu

Obecne scrollIntoView({ behavior: "smooth" }) może zostać jako baza.

Dodać offset pod sticky header/floating states.

Dla prefers-reduced-motion: instant jump.

GSAP ScrollTo tylko wtedy, gdy potrzebna jest lepsza kontrola dystansu/czasu.

GSAP dodać selektywnie

Dobry kandydat: hero entrance timeline, modal timeline, packages desktop narrative, ewentualnie SVG stroke.

Nie używać GSAP do każdego hover/focus.

Scope timelines do komponentów i czyścić je przy unmount.

SVG/lucide motion

Dla ikon: stroke-dash draw raz przy wejściu w viewport.

Dla CTA arrows: micro translate 2 px + stroke opacity.

Dla selected package/modal: cienka SVG/border line jako chocolate-flow stroke.

Header/floating CTA

Nie zmieniać istniejącej logiki.

Dodać tylko klasy/stany przejścia: entering, active, exiting.

Handoff przez opacity/transform, bez zmiany wymiarów i bez reparentowania.

Packages

Zachować IntersectionObserver jako źródło active state.

Dodać przejście aktywnego stanu: border/stroke, copy opacity/y.

Desktop może dostać mocniejszą narrację scrollową; mobile ma zostać prostym, szybkim stacked flow.

Gallery

Nie ruszać mechaniki clone slides i fallback po transition.

Animować tylko child elements aktywnego slajdu: tekst, dot, arrow, minimalny image pan.

Testować wielokrotne next/prev, zwłaszcza reset z klona do realnego slajdu.

Modals

Jeden motion pattern dla calculator/package/date/select.

Backdrop + panel + content stagger.

Step transitions bez zmiany wysokości w połowie animacji.

Focus management: po open heading/first interactive, po step next właściwy element, po close powrót do triggera.

Form

Focus-visible, validation i submit jako stany komponentów.

Komunikaty błędów rezerwują miejsce albo pojawiają się bez skoku layoutu.

Success/error calm, bez modala zasłaniającego stronę.

Performance QA przed review

Sprawdzić CLS, console, keyboard, mobile viewport, reduced motion.

Dopiero potem robić screenshoty i krótkie nagrania do GPT Pro Review.

8. Verification plan

Desktop/mobile visual states

Zweryfikować te same stany co w evidence pack:

desktop 1920×1080: hero, packages, gallery, contact, calculator modal, package modal,

mobile 390×844: hero, packages, gallery, contact,

dodatkowo: mid-transition screenshots dla hero, modal step, package active change i form validation.

Reduced motion

Sprawdzić przy emulowanym prefers-reduced-motion: reduce:

brak smooth scroll,

brak hero image scale/parallax,

brak staggerów i stroke draw,

modale otwierają się bez scale/y,

carousel dalej działa, ale bez micro-pan,

focus i validation nadal czytelne.

Console/errors

Zero runtime errors.

Zero GSAP warnings po unmount/remount.

Zero hydration/React warnings.

Brak timerów carousel/modali zostających po unmount.

Scroll anchors

Przetestować:

header nav: Oferta, Pakiety, Jak działamy, Eventy, Kontakt,

hero CTA do formularza,

secondary CTA do pakietów,

floating CTA do formularza,

modal calculator przejście do formularza.

Kryterium: cel scrolla ląduje czytelnie pod headerem, bez zasłonięcia headingu i bez korekty po chwili.

Carousel infinite loop

Minimum 30 kliknięć next i 30 prev na desktopie.

Minimum 15 swipe/click zmian na mobile.

Brak pustej karty.

Brak widocznego skoku podczas clone reset.

Dots i tekst aktywnego slajdu nie desynchronizują się z obrazem.

Header/floating CTA handoff

Przy scrollu w dół i w górę nie ma flickera na progu.

Nie pojawiają się dwa dominujące CTA naraz dłużej niż ~120 ms.

Floating CTA nie zasłania submit buttona, pól formularza ani modali.

Tap target pozostaje komfortowy na mobile.

Modal transitions

Open/close calculator modal.

Next/back między krokami.

Wybór Silver/Gold/Platinum.

Package modal open/close.

Escape, click outside, close button.

Focus trap działa.

Body scroll lock działa.

Mobile modal nie wychodzi poza viewport w sposób uniemożliwiający obsługę.

Form validation

Empty submit.

Invalid email.

Missing required consent.

Date/select focus.

Submit loading.

Success/error.

Keyboard-only navigation.

9. Pass/fail criteria for GPT Pro Review verification

Po wdrożeniu prześlij do review screenshoty w tych samych stanach plus krótkie nagrania scroll/modal/carousel, jeżeli są dostępne. Kryteria pass/fail:

Obszar	PASS	FAIL
Ogólny charakter	Ruch jest spokojny, premium, wspiera decyzję użytkownika	Ruch wygląda jak dekoracja, demo efektów albo animacja reklamowa
Hero	Cały entrance kończy się w maks. ~850 ms, tekst nie zmienia wrapowania, CTA szybko dostępne	Nagłówek skacze, reveal jest zbyt wolny, hero photo robi ciężki parallax
Layout stability	Brak widocznego layout shiftu; animowane są transform/opacity/stroke	Animowane są width/height/padding/margin albo elementy zmieniają pozycje layoutowe
Header/floating CTA	Handoff jest płynny, bez flickera i bez blokowania treści	CTA migocze, dubluje się zbyt długo, zasłania formularz lub modal
Packages	Active state pomaga porównać pakiety; tekst i cena są stabilne	Scroll narrative powoduje chaos, karta lata, cena lub layout się przesuwa
Gallery	Infinite loop działa bez blank frames; micro-ruch nie opóźnia treści	Carousel gubi slajdy, pokazuje pustkę, reset klona jest widoczny
Modals	Open/close i step transitions są krótkie, czytelne, focus działa	Modal popuje agresywnie, traci focus, scroll strony działa pod spodem
Form	Focus, validation i submit są czytelne, bez shake i bez layout jump	Komunikaty przesuwają całą sekcję, brak focus-visible, submit jest niejasny
SVG/icon motion	Stroke draw jest subtelny i użyty tylko tam, gdzie wzmacnia affordance	Ikony rysują się wszędzie, odciągają uwagę od treści
Smooth scroll	Anchor scroll jest przewidywalny, capowany, respektuje reduced motion	Scroll jest za wolny, gumowy, walczy z user input albo ignoruje reduced motion
Reduced motion	Po prefers-reduced-motion ruch jest wyłączony lub mocno ograniczony	Nadal działają parallax, smooth scroll, stagger, stroke draw
Performance	Brak console errors; animacje trzymają płynność; brak ciężkich repaintów	Jank, warningi, opóźnione kliknięcia, CPU spikes
Mobile	Brak overflow, CTA dostępne, menu/modal/form obsługiwalne	Elementy wychodzą poza ekran, zbyt długie stagger, floating CTA przeszkadza

Minimalny warunek PASS: hero, pakiety, modal kalkulatora, formularz i reduced motion muszą przejść bez uwag krytycznych. Galeria i icon stroke mogą dostać minor polish, ale nie mogą psuć funkcji.

10. Teraz / Później
Teraz

Ustalić motion tokens i reduced-motion guard.

Zrobić hero entrance desktop/mobile.

Uporządkować section reveal na bazie istniejącego Reveal.tsx.

Dopracować header/floating CTA handoff bez zmiany logiki.

Dodać modal entrance/exit i step transitions.

Dodać focus/validation/submit states formularza.

Dodać podstawowy SVG stroke dla CTA/icons tylko w najważniejszych miejscach.

Zweryfikować anchor scroll i reduced motion.

Później

Rozbudować packages scroll narrative na desktopie przy użyciu GSAP ScrollTrigger, jeżeli mockupy pokażą realną wartość.

Dopolerować gallery micro-pan i text reveal bez zmiany infinite loop.

Dodać bardziej wyrafinowany chocolate-flow stroke jako wspólny motyw między pakietami, modalem i formularzem.

Rozważyć delikatny section progress tylko wtedy, gdy nie konkuruje z headerem i floating CTA.

Przygotować finalne motion review: before/after screenshots, mid-transition captures, krótkie clips dla hero, scroll, carousel, modal i form.

DEVELOPER MODE

Extended Pro
ChatGPT can make mistakes. Check important info.