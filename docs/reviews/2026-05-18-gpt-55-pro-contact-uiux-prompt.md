Jesteś GPT-5.5 Pro / Extended Pro działającym jako senior UI designer, senior staff engineer i product-minded UI/UX reviewer. To jest jednofazowa konsultacja UI/UX + visual architecture dla sekcji kontaktu landing page Strawberry Group.

WAŻNE:
- Analizujesz zakres: sekcja kontaktu `#kontakt` oraz jej przejście do footera.
- Użytkownik poprosił o zmianę układu UI/UX tej sekcji zgodnie z wysokim standardem senior UI/UX designera.
- Otrzymujesz osobne, pełnowymiarowe PNG, nie collage. Widoki całej strony są załączone jako kontekst designu, żeby rekomendacje do `#kontakt` pasowały do całego landing page.
- Screenshoty są głównym źródłem oceny wizualnej. Jeśli jakiś stan nie pozwala ocenić konkretnego aspektu, nazwij to jako limitation, ale nadal zaproponuj plan dla layoutu sekcji kontaktu.
- Nie projektuj generycznego SaaS/formularza. Dopasuj rozwiązanie do obecnego stylu: pełnoszerokie pasy, ciepły cream/cocoa, truskawki w czekoladzie, editorial typography, premium event/service landing page.
- Nie proponuj ozdobników dla samych ozdobników. Każda zmiana ma wzmacniać konwersję, zaufanie, skanowalność, ergonomię formularza, responsywność albo spójność całej strony.
- Nie zmieniaj footera w CTA-heavy footer. Footer ma pozostać raczej directory/sign-off bez dodatkowego CTA, chyba że wskażesz drobną korektę relacji kontakt-footer.
- Poproszę konkretny, implementowalny plan: grid, spacing, hierarchy, copy grouping, form grouping, responsive behavior, states, and acceptance criteria.

Kontekst produktu:
- Strawberry Group S.C. oferuje mobilne stoisko deserowe z truskawkami w czekoladzie na wesela, eventy firmowe, gale i strefy VIP.
- Landing page ma prowadzić do sprawdzenia terminu, orientacyjnej wyceny i formularza kontaktowego.
- Kontakt jest końcowym conversion endpointem po sekcjach: hero, oferta, o nas, proces, pakiety, eventy, logistyka, kalkulator, galeria.

Analizowany widok/moduł:
- Route: `http://127.0.0.1:5174/#kontakt`
- Target selector: `section#kontakt.contact-section`
- Related selectors: `.contact-copy`, `.direct-contact`, `form.lead-form`, `.site-footer`
- Main user task: zostawić zapytanie o termin i koszt stoiska albo szybko użyć telefonu/e-maila.

Istotne pliki:
- `/Users/danielloranc/Documents/truskawka/src/components/sections/ContactSection.tsx`
- `/Users/danielloranc/Documents/truskawka/src/components/form/LeadForm.tsx`
- `/Users/danielloranc/Documents/truskawka/src/components/layout/Footer.tsx`
- `/Users/danielloranc/Documents/truskawka/src/styles/global.css`
- `/Users/danielloranc/Documents/truskawka/src/lib/validation.ts`
- `/Users/danielloranc/Documents/truskawka/src/lib/leadCapture.ts`

Obecny implementation summary:
- `ContactSection` to dwukolumnowy split: tekst + direct-contact po lewej, karta formularza po prawej.
- Formularz ma pola: imię i nazwisko, email, telefon, data wydarzenia, typ wydarzenia, miasto/lokalizacja, liczba gości, preferowany pakiet, informacje dodatkowe, zgoda, submit.
- Walidacja wymaga wszystkich pól i zgody. Lokalny submit bez endpointu kończy się success po krótkim opóźnieniu.
- Header offset i anchor do `#kontakt` są już istotne w testach, więc plan nie może pogorszyć scroll/anchor behavior.
- Footer był już kierunkowo ustawiony jako directory/sign-off bez CTA.

Screenshot context and metadata:

1. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/landing-desktop-1920x1080-hero.png`
- view: Whole landing reference - hero
- route/url: `/`
- state: default
- coverage item: desktop whole-site context / hero
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after 900ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets, public landing page

2. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/landing-desktop-1920x1080-offer-about.png`
- view: Whole landing reference - offer/about
- route/url: `/#oferta`
- state: default
- coverage item: desktop whole-site context / offer-about
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after 900ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets, public landing page

3. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/landing-desktop-1920x1080-process.png`
- view: Whole landing reference - process
- route/url: `/#jak-dziala`
- state: default
- coverage item: desktop whole-site context / process
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after 900ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets, public landing page

4. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/landing-desktop-1920x1080-packages.png`
- view: Whole landing reference - packages
- route/url: `/#pakiety`
- state: default
- coverage item: desktop whole-site context / packages
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after 900ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets, public landing page

5. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/landing-desktop-1920x1080-events-logistics.png`
- view: Whole landing reference - events/logistics
- route/url: `/#eventy`
- state: default
- coverage item: desktop whole-site context / events-logistics
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after 900ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets, public landing page

6. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/landing-desktop-1920x1080-calculator-gallery.png`
- view: Whole landing reference - calculator/gallery
- route/url: `/#kalkulator`
- state: default
- coverage item: desktop whole-site context / calculator-gallery
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after 900ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets, public landing page

7. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-desktop-1920x1080-default.png`
- view: Contact section
- route/url: `/#kontakt`
- state: default
- coverage item: desktop default contact
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after 900ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets, public landing page

8. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-desktop-1920x1080-form-footer-closure.png`
- view: Contact-to-footer closure
- route/url: `/#kontakt`, scrolled down within the closing area
- state: default / bottom contact + footer start
- coverage item: desktop contact/footer relationship
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport segment
- stability: stable after 700ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets, public landing page

9. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-desktop-1920x1080-validation-errors.png`
- view: Contact form
- route/url: `/#kontakt`
- state: empty submit validation errors
- coverage item: desktop validation errors
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after validation summary appears + 900ms settle
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets; only validation messages

10. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-desktop-1920x1080-select-focus.png`
- view: Contact form
- route/url: `/#kontakt`
- state: focused event type select
- coverage item: desktop focus state
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after focus + 500ms settle
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets

11. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-desktop-1920x1080-success.png`
- view: Contact form
- route/url: `/#kontakt`
- state: valid local submit success
- coverage item: desktop success state
- device: desktop
- viewport: 1920x1080
- actual PNG dimensions: 1920x1080
- capture mode: viewport
- stability: stable after success summary appears + 900ms settle
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload; synthetic demo values only

12. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-mobile-390x844-top.png`
- view: Contact section
- route/url: `/#kontakt`
- state: default top
- coverage item: mobile contact top segment
- device: mobile
- viewport: 390x844
- actual PNG dimensions: 780x1688
- capture mode: viewport segment, deviceScaleFactor 2
- stability: stable after 900ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets

13. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-mobile-390x844-form-middle.png`
- view: Contact form
- route/url: `/#kontakt`, scrolled within form
- state: default form middle
- coverage item: mobile form middle segment
- device: mobile
- viewport: 390x844
- actual PNG dimensions: 780x1688
- capture mode: viewport segment, deviceScaleFactor 2
- stability: stable after scroll + 700ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets

14. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-mobile-390x844-form-bottom-footer.png`
- view: Contact form + footer
- route/url: `/#kontakt`, scrolled near form bottom/footer
- state: default bottom
- coverage item: mobile form bottom and footer transition
- device: mobile
- viewport: 390x844
- actual PNG dimensions: 780x1688
- capture mode: viewport segment, deviceScaleFactor 2
- stability: stable after scroll + 700ms settle, animations disabled
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets

15. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-mobile-390x844-validation-errors.png`
- view: Contact form
- route/url: `/#kontakt`
- state: empty submit validation errors
- coverage item: mobile validation errors
- device: mobile
- viewport: 390x844
- actual PNG dimensions: 780x1688
- capture mode: viewport segment, deviceScaleFactor 2
- stability: stable after validation summary appears + 900ms settle
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload, no secrets; only validation messages

16. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/contact-mobile-390x844-input-focus.png`
- view: Contact form
- route/url: `/#kontakt`
- state: first input focused
- coverage item: mobile focused input
- device: mobile
- viewport: 390x844
- actual PNG dimensions: 780x1688
- capture mode: viewport segment, deviceScaleFactor 2
- stability: stable after focus + 900ms settle
- access gate: expected content visible
- readability: primary evidence readable
- transmission safety: approved for upload; no real personal data entered

Evidence coverage matrix:

| Obszar/stan | Desktop | Mobile | Screenshoty | Dane pomocnicze | Status |
| --- | --- | --- | --- | --- | --- |
| Whole-site design context | captured | not needed as full mobile reference for this planning pass | 1-6 | section order and CSS references | captured |
| Contact default | captured | captured segmented | 7, 12-14 | `ContactSection.tsx`, `LeadForm.tsx`, `global.css` | captured |
| Contact/footer closure | captured | captured | 8, 14 | `Footer.tsx`, footer CSS | captured |
| Validation errors | captured | captured | 9, 15 | `validation.ts`, `ErrorSummary` | captured |
| Success state | captured | not captured on mobile | 11 | synthetic demo submit; local endpoint fallback | captured desktop / mobile limitation |
| Focus state | captured select focus | captured input focus | 10, 16 | visible focus and input behavior | captured |
| Open native select menu | blocked/not reliably screenshotable in headless browser | blocked/not reliably screenshotable | n/a | native select menu not captured | limitation |
| Mobile keyboard | blocked/not reliably shown in headless Chrome screenshots | blocked | 16 only focused input, no OS keyboard | browser limitation | limitation |
| Disabled/loading submit | not captured | not captured | n/a | submitting state is brief local timeout | limitation |

Accessibility/semantics notes:
- The form uses native labels through shared field components, native inputs/select/textarea, checkbox, and a submit button.
- Validation summary is rendered via `ErrorSummary`; success uses `role="status"` and focus management.
- Direct contact links are normal anchors.
- Current screenshot review can evaluate static layout, form hierarchy, spacing, visual quality, responsive segmentation, validation/success visibility, and focus visuals. It cannot fully evaluate native select menu rendering, mobile OS keyboard behavior, or transient loading state.

Console/network/runtime issues:
- None observed during capture.

Data safety:
- Screenshots show a public local landing page and public contact details.
- Success screenshot uses synthetic demo values (`Jan Kowalski`, `jan.kowalski@example.com`, `+48500200300`), no real private data.
- No secrets, tokens, passwords, private messages, private customer data, credentials, cookies, or env values are included.

Poproszę wynik:
1. Problemy UI/UX P0/P1/P2/P3 dla sekcji kontaktu i relacji z footerem.
2. Screenshot-driven recommendations: screenshot/stan, obserwacja, problem użytkownika, minimalistyczna zmiana, oczekiwany efekt, ryzyko.
3. Visual architecture plan for redesigning `#kontakt`: recommended layout direction, grid, spacing, form grouping, direct contact placement, heading/copy hierarchy, relationship to footer.
4. Mobile/responsive plan: how to segment/stack content and form fields on `390x844`, including validation and footer transition.
5. Senior UI designer pass: centering/alignment, grid, optical balance, spacing rhythm, typography, density, component consistency, contrast, modern UI/design standards.
6. Accessibility and semantic control issues to preserve or improve.
7. Evidence limitations and whether any additional screenshots are required before implementation.
8. Czego nie ruszać teraz.
9. Implementation order with `Teraz` and `Później`.
10. Acceptance criteria for post-change screenshot verification: desktop default, mobile top/middle/bottom, validation, success, focus, footer transition.
