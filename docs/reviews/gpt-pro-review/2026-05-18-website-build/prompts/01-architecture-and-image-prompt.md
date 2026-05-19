# GPT-5.5 Pro Prompt: Strawberry Group Website Architecture And Image Prompt

You are GPT-5.5 Pro / Extended Pro acting as a senior creative director, conversion strategist, and frontend architect.

Review the provided Awwwards reference screenshots and the project requirements below. Produce a concrete, implementation-ready plan for a premium, responsive lead-generation website for Strawberry Group, a Polish event dessert stand business. Also generate an exact prompt for `gpt-image-2` to create the primary hero/visual asset direction.

Important constraints:
- Do not copy the Awwwards reference layouts, logos, imagery, or text. Extract principles only.
- The attached offer images are not a design reference. Use only the marketing information extracted from them.
- The website must be original, premium, conversion-focused, and usable.
- The website must be responsive for desktop Full HD, tablet, and mobile.
- Include purposeful animation only where it improves orientation, hierarchy, feedback, or perceived polish.
- Keep lead collection central: the visitor should quickly request availability/quote.
- Polish language site copy is preferred.
- Do not design a generic AI-looking red/gold brochure site.

## Project State

Repository: `/Users/danielloranc/Documents/truskawka`

Current state:
- Empty fresh git repository.
- No stack, no source files, no tests, no package manager files.
- We can choose a conservative frontend stack.

Suggested build approach unless you recommend otherwise:
- Vite + React + TypeScript for a polished static lead-generation site.
- CSS modules or a small handcrafted CSS system.
- No heavy backend; lead form can use client-side validation and a demo capture/success state unless you recommend a simple mailto or API-ready structure.

## Business

Brand: Strawberry Group

Brand line: `Świeżość. Jakość. Doświadczenie.`

Main offer: `Interaktywne stoisko deserowe - świeże truskawki w czekoladzie`

Contact:
- Phone: `+48 514 214 567`
- Email: `strawberrygroupsc@gmail.com`

Hero copy candidate:
`Interaktywne stoisko deserowe z truskawkami w czekoladzie na eventy, wesela i imprezy plenerowe`

Subhero candidate:
`Polskie truskawki, czekolada, dodatki i elegancka obsługa nawet do 1000 gości. Strawberry Group tworzy świeżą, efektowną atrakcję, która angażuje uczestników i działa sprawnie przy dużej skali wydarzenia.`

Primary CTAs:
- `Sprawdź dostępność terminu`
- `Poproś o wycenę`

Strongest sales claims:
- Polskie truskawki prosto z plantacji.
- Świeżość i przygotowywanie na miejscu.
- Interaktywna forma angażująca uczestników.
- Dopasowanie do motywu wydarzenia.
- Obsługa nawet do `1000 osób` w krótkim czasie.
- Pełna organizacja: transport, montaż, obsługa podczas wydarzenia i demontaż.
- Możliwość personalizacji wyglądu stoiska, dodatków, brandingu i życzeń specjalnych.
- Argument cenowy: typowe atrakcje eventowe ok. `22-35 zł / osoba` vs pakiety od `10-17 zł / osoba`.

## Packages

Silver:
- Positioning: prosta, szybka i efektowna forma serwowania.
- Best for: duże wydarzenia, sprawna obsługa, estetyczne podanie.
- Staff: 2 osoby.
- Includes: świeże truskawki ok. 300 g / kubek, czekolada mleczna, 2 rodzaje posypek, deser przygotowywany i wydawany przez obsługę.
- Pricing: do 800 osób: 11 zł / osoba; 800+ osób: 10 zł / osoba.

Gold:
- Positioning: więcej smaków, więcej możliwości.
- Staff: 2 osoby.
- Includes: świeże truskawki ok. 300 g / kubek, czekolada mleczna i biała, 4 rodzaje posypek, deser przygotowywany i wydawany przez obsługę.
- Pricing: do 800 osób: 13 zł / osoba; 800+ osób: 12 zł / osoba.

Platinum:
- Positioning: najwięcej możliwości, najwyższy poziom doświadczenia.
- Claim: uczestnik sam komponuje i dekoruje kubek, wybierając owoce, dwie czekolady, posypki oraz polewy.
- Staff: 2 osoby.
- Includes: 4 rodzaje owoców (truskawki, maliny, borówki, banany), czekolada mleczna i biała, 4 rodzaje posypek, 2 polewy (karmel i czekolada), uczestnik dekoruje kubek według uznania.
- Pricing: do 800 osób: 17 zł / osoba; 800+ osób: 16 zł / osoba.
- Best for: wesela i przyjęcia premium, eventy firmowe, integracje, gale, bankiety, premiery, festiwale, plener, VIP.
- Do not publish unclear contest/reward details unless marked as optional/follow-up.

## Desired Sections

- Hero with immediate CTA.
- "O nas" / brand story.
- How the stand works.
- Package comparison: Silver, Gold, Platinum.
- Event types.
- Organization and logistics.
- Gallery/visual proof.
- Why it pays off / value vs typical attraction.
- Lead form with validation and success/error states.
- Footer/contact.

## Lead Form Requirements

Required fields:
- Full name
- Email
- Phone
- Event date
- Event type
- Event city/location
- Estimated guest count
- Desired package
- Notes/message
- Privacy/consent checkbox

Validation:
- Empty required field.
- Invalid email.
- Invalid phone but allow common Polish/international formats.
- Date in the past.
- Guest count must be positive.
- Consent unchecked.
- Loading/disabled submit.
- Success state with next-step expectation.
- Failure state with retry and phone/email fallback.

Accessibility:
- Labels must be visible and programmatic.
- Errors associated by `aria-describedby`.
- Error summary after failed submit should receive focus.
- Focus states must be visible.
- Success/error submission states should be announced.

## Reference Screenshots

These screenshots are attached for high-level visual/design principle review only. They are screenshots of the live websites that were found through Awwwards, not screenshots of the Awwwards listing pages. Use the Awwwards URLs only as provenance/source metadata.

1. `/Users/danielloranc/Documents/truskawka/docs/reviews/gpt-pro-review/2026-05-18-website-build/screenshots/references-live/marquet-live-desktop-viewport.png`
   - Live Marquet catering website from Awwwards
   - Live URL: `https://www.marquet.nyc/`
   - Awwwards source: `https://www.awwwards.com/sites/marquet`
   - Desktop `1920x1080`

2. `/Users/danielloranc/Documents/truskawka/docs/reviews/gpt-pro-review/2026-05-18-website-build/screenshots/references-live/marquet-live-mobile-viewport.png`
   - Live Marquet catering website from Awwwards
   - Live URL: `https://www.marquet.nyc/`
   - Awwwards source: `https://www.awwwards.com/sites/marquet`
   - Mobile `390x844`

3. `/Users/danielloranc/Documents/truskawka/docs/reviews/gpt-pro-review/2026-05-18-website-build/screenshots/references-live/savor-live-desktop-viewport.png`
   - Live Savor food storytelling website from Awwwards
   - Live URL: `https://savor.it/`
   - Awwwards source: `https://www.awwwards.com/sites/savor`
   - Desktop `1920x1080`

4. `/Users/danielloranc/Documents/truskawka/docs/reviews/gpt-pro-review/2026-05-18-website-build/screenshots/references-live/savor-live-mobile-viewport.png`
   - Live Savor food storytelling website from Awwwards
   - Live URL: `https://savor.it/`
   - Awwwards source: `https://www.awwwards.com/sites/savor`
   - Mobile `390x844`

5. `/Users/danielloranc/Documents/truskawka/docs/reviews/gpt-pro-review/2026-05-18-website-build/screenshots/references-live/driscolls-live-desktop-viewport.png`
   - Live Driscoll's Berries website from Awwwards
   - Live URL: `https://www.driscolls.com.au/`
   - Awwwards source: `https://www.awwwards.com/sites/driscolls-berries`
   - Desktop `1920x1080`

6. `/Users/danielloranc/Documents/truskawka/docs/reviews/gpt-pro-review/2026-05-18-website-build/screenshots/references-live/driscolls-live-mobile-viewport.png`
   - Live Driscoll's Berries website from Awwwards
   - Live URL: `https://www.driscolls.com.au/`
   - Awwwards source: `https://www.awwwards.com/sites/driscolls-berries`
   - Mobile `390x844`

## What I Need From You

Return your answer in Polish unless a technical prompt must be in English.

Use this structure:

1. `Verdict`
   - What overall direction should be built?
   - Any critical risks before implementation?

2. `Design Direction`
   - Visual territory, tone, typography, color, imagery, motion.
   - How it borrows principles from the references without copying them.

3. `Information Architecture`
   - Ordered sections with purpose and key copy guidance.

4. `Frontend Architecture`
   - Recommended stack and file/component structure for an empty repo.
   - Validation/data model for the lead form.
   - Accessibility and responsive requirements.

5. `gpt-image-2 Prompt`
   - One exact prompt to generate the primary hero/visual asset.
   - The prompt must be production-oriented, premium, and realistic.
   - Include composition, subject, lighting, negative constraints, and how it should fit the website.
   - Do not request readable text inside the generated image.

6. `Implementation Repair Plan`
   - Treat this as the first GPT Pro Review plan for a greenfield repo.
   - List accepted implementation tasks in priority order.
   - Include test/build/visual verification requirements.
   - Flag anything that should be deferred or confirmed by the business owner.

7. `Screenshot Review Plan`
   - What screenshots/states must be captured after implementation for desktop `1920x1080`, tablet, and mobile `390x844`.

Be concrete. Avoid generic praise. This plan will be implemented directly and then sent back to GPT-5.5 Pro for post-change verification.
