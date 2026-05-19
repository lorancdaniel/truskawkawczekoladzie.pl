Jestes GPT-5.5 Pro / Extended Pro w projekcie ChatGPT `praca Daniel`. Dzialasz jako principal motion designer, senior UI designer i product-minded frontend architect.

Cel tej konsultacji jest pojedynczy: zaprojektowac system animacji dla istniejacego landing page Strawberry Group oraz dac gotowe, precyzyjne prompty do wygenerowania mockupow/storyboardow animacji w `gpt-image-20`. Potem ten sam zakres ma byc zweryfikowany jako GPT Pro Review przed implementacja GSAP/SVG/smooth scroll.

WAŻNE:
- Nie implementuj kodu. Daj plan motion + prompty do mockupow animacji + kryteria weryfikacji.
- Nie proponuj generycznych dekoracji. Ruch ma wzmacniac premium eventowy charakter strony, czytelnosc i decyzje uzytkownika.
- Projekt ma juz duzo dopracowanych layoutow, header/floating CTA, karuzele galerii, modale kalkulatora i formularz. Nie rozbijaj tego nadmiarem animacji.
- Preferowany kierunek: elegancki, spokojny, premium, gastronomia/eventy, czekolada/truskawka, editorial serif, cieple ivory/cocoa/red tones.
- Forbidden: bounce/elastic, konfetti, bokeh/orbs/blobs, agresywne parallax overload, layout-shifting, animowanie width/height/padding/margin, zbyt wolne efekty, cartoon vibes.
- Technicznie docelowo moze wejsc GSAP i SVG motion, ale tylko tam, gdzie daje to wyrazna wartosc. Obecnie `gsap` nie jest jeszcze zaleznoscia projektu.
- Smooth scroll ma byc przyjemny i przewidywalny. Trzeba respektowac `prefers-reduced-motion`.
- Motion mockups sa storyboardami: implementacja potem ma uzyc realnego DOM i dostepnych fallbackow.
- Jezeli `gpt-image-20` jest dostepny, wygeneruj/podaj kierunek mockupow. Jezeli nie, zwroc dokladnie `gpt-image-20-unavailable` i przygotuj pixel-detailed prompt pack.

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
- `src/App.tsx` sklada strone: Header, Hero, ClaimStrip, About, Process, Packages, EventTypes, Logistics, ValueSection, Gallery, ContactSection, Footer.
- `src/components/ui/Reveal.tsx` i `src/hooks/useInView.ts` robia prosty IntersectionObserver reveal.
- `src/lib/dom.ts` uzywa `scrollIntoView({ behavior: "smooth" })` dla formularza.
- `src/styles/reset.css` ma `html { scroll-behavior: smooth; }` i globalny `prefers-reduced-motion`.
- `src/components/layout/Header.tsx` ma zlozona logike header CTA -> floating actions -> dock.
- `src/components/sections/Gallery.tsx` ma wlasny infinite carousel oparty o clone slides, transform track i fallback po transition.
- `src/components/sections/Packages.tsx` ma pakiety jako scroll narrative z active card przez IntersectionObserver.
- `src/components/sections/ValueSection.tsx` ma kalkulator i modal pakietow.
- `package.json`: brak `gsap`; React 19, Vite, lucide-react, Playwright.

Screenshot context / evidence pack:
Wszystkie obrazy sa osobnymi oryginalnymi PNG, bez contact sheetow.

| Evidence | File | Route/state | Device | Viewport | Capture mode | Status |
| --- | --- | --- | --- | --- | --- | --- |
| Hero desktop default | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-hero-default.png` | `/` top default | desktop | 1920x1080 | viewport | primary readable |
| Packages desktop scroll narrative | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-packages-scroll.png` | `#pakiety` | desktop | 1920x1080 | viewport | primary readable |
| Gallery desktop carousel | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-gallery-carousel.png` | gallery section | desktop | 1920x1080 | viewport | primary readable |
| Contact desktop form | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-contact-form.png` | `#kontakt` | desktop | 1920x1080 | viewport | primary readable |
| Calculator modal step 1 desktop | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-calculator-modal-step1.png` | calculator modal open | desktop | 1920x1080 | viewport after settle | primary readable |
| Package modal desktop | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-package-modal.png` | package modal open | desktop | 1920x1080 | viewport after settle | primary readable |
| Hero mobile default | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-hero-default.png` | `/` top default | mobile | 390x844 | viewport | primary readable |
| Packages mobile | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-packages-scroll.png` | `#pakiety` | mobile | 390x844 | viewport | primary readable |
| Gallery mobile | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-gallery-carousel.png` | gallery section | mobile | 390x844 | viewport | primary readable |
| Contact mobile | `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-contact-form.png` | `#kontakt` | mobile | 390x844 | viewport | primary readable |

Poprosze wynik w takiej strukturze:

1. `Motion thesis`: jedno zdanie, jaka ma byc glowna idea ruchu tej strony.
2. `Do not animate`: lista rzeczy, ktorych nie ruszac ruchem, zeby nie popsuc dopracowanej strony.
3. `Signature animation`: jeden najwazniejszy motyw, np. subtelny chocolate-flow / stroke draw / section handoff, z uzasadnieniem i gdzie go uzyc.
4. `Motion system`: tabela Obszar / Cel uzytkownika / Ruch / Timing / Easing / Technika CSS-GSAP-SVG / Reduced motion fallback / Ryzyko.
5. `gpt-image-20 prompt pack`: 6-8 gotowych promptow do wygenerowania storyboardow/mockupow animacji. Kazdy prompt musi byc jednoznaczny, scoped do jednego deliverable, i zawierac:
   - viewport,
   - dokladny stan/klatke animacji,
   - co ma byc widoczne,
   - jak pokazac ruch statycznym storyboardem,
   - czego unikac,
   - jak zachowac realny styl tej strony.
6. `Recommended first mockups`: wybierz 5 najwazniejszych storyboardow do wygenerowania najpierw.
7. `Implementation plan after mockups`: kroki wdrozenia w React/Vite, z naciskiem na GSAP/SVG/smooth scroll, bez ryzykownych zmian layoutu.
8. `Verification plan`: jak zweryfikowac po implementacji: desktop/mobile, reduced motion, console errors, scroll anchors, carousel infinite loop, header/floating CTA handoff, modal step transitions, form validation.
9. `Pass/fail criteria for GPT Pro Review verification`: konkretne kryteria, wedlug ktorych po wdrozeniu mam wyslac post-change screenshoty i poprosic GPT-5.5 Pro o pass/fail.
10. `Teraz / Pozniej`: co wdrazac teraz, a co zostawic jako dalszy motion polish.

Wazne: wygenerowane prompty musza byc praktyczne do uzycia przez `gpt-image-20` i musza sluzyc implementacji, nie moodboardowi.
