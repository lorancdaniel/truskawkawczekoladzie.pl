# Landing Page Audit - Minimalist UI / GPT Taste / Polish / Quality

Date: 2026-05-18  
Scope: full landing page at `http://localhost:5174/`  
Mode: audit only; no product code fixes applied.

## Evidence

- Viewports captured: `1920x1080`, `1920x860`, `1536x864`, `834x1194`, `390x844`, `360x740`.
- Raw DOM/viewport observations: `audit-observations.json`.
- Full-page screenshots: `screenshots/`.
- Scrolled section screenshots: `segments/`.
- Verification commands run: `npm run typecheck`, `npm run lint`, `npm run test`, `npm run build`.

## Anti-Patterns Verdict

**Fail against strict `$minimalist-ui` and `$gpt-taste`; pass-with-notes as a premium chocolate/event landing direction.**

This does not read like generic unstyled AI output. The hero asset, cocoa command-bar header, custom strawberry logo, and Polish event-service copy give it a real brand direction. But against the requested audit lenses, several tells remain:

- `$gpt-taste`: the hero H1 is still a tall 4-line editorial block on desktop (`666x453` at `1920x1080`) instead of a wide 2-3 line composition. Several H2s also wrap into 4-6 line text towers.
- `$gpt-taste`: the page uses repeated card grids and package cards, but no gapless/dense bento, no advanced GSAP Desire chapter, no pinned/stacked/scrubbed section.
- `$gpt-taste`: raw hero metrics are present (`do 1000`, `od 10 zl`, `2 osoby`), which the skill explicitly treats as a banned hero trope.
- `$minimalist-ui`: the implementation uses gradients, heavy/diffuse shadows, large dark/red surfaces, pill CTAs, and Lucide icons. Those are appropriate for the current premium dessert style, but not for the strict warm editorial minimalism protocol.
- `$polish`: repeated narrow heading widths create a recognizable rhythm, but also monotony: large serif block, paragraph, card grid, repeat.

## Executive Summary

Issues found: **0 Critical, 5 High, 7 Medium, 4 Low**.

Overall quality score: **7.2 / 10 for current premium event aesthetic**; **5.2 / 10 against strict minimalist-ui + gpt-taste constraints**.

Top priorities:

1. Rework hero/section heading line lengths to avoid vertical text walls.
2. Decide whether the target direction is truly minimalist editorial or cocoa premium; the current implementation mixes both.
3. Reduce mobile hero height and improve above-the-fold continuation.
4. Fix small touch targets in footer/contact/form controls.
5. Replace repeated card grids with one stronger Interest/Desire system if the page should meet `$gpt-taste`.

## High-Severity Issues

### H1 and Major H2s Wrap Too Tall

- Location: `src/styles/global.css:320-335`, `src/styles/global.css:1152-1225`, `src/components/sections/Hero.tsx:11`, section headings throughout.
- Category: Responsive / Polish / GPT Taste.
- Evidence: desktop H1 measured `666x453` at `1920x1080`; headings such as package/event/gallery/contact H2s measure `538x361` to `538x433`.
- Impact: the page feels more like stacked poster text than a wide premium landing page. Scanability suffers, especially on desktop where there is ample unused horizontal space.
- Recommendation: widen H1/H2 text containers or reduce display sizes so hero is 2-3 lines and most section H2s are 2-4 lines. Use per-section composition instead of one global `max-width: 15ch`.
- Suggested command: `/polish` or `/adapt`.

### Current Visual System Conflicts With Strict Minimalist UI

- Location: `src/styles/global.css:3-6`, `48-80`, `200-223`, `584-653`, `733-755`, `830-834`.
- Category: Theming / Anti-pattern.
- Evidence: 18 gradients, 11 box-shadow declarations, 5 pill-radius rules, Lucide icons, dark cocoa hero/header, bright strawberry CTA.
- Impact: if the intended target is `$minimalist-ui`, the visual language is too lush, rounded, shadowed, and saturated. It reads as premium dessert/event rather than document-style editorial minimalism.
- Recommendation: either commit to current cocoa luxury style and stop judging it as minimalist, or run a full minimalist normalization pass: flatter surfaces, 8-12px radius, fewer gradients, near-zero shadows, Phosphor/Radix or no icons.
- Suggested command: `/normalize`, `/distill`, or `$minimalist-ui`.

### Mobile Hero Consumes Too Much of the Journey

- Location: `src/styles/global.css:1273-1284`, `1369-1405`.
- Category: Responsive / Conversion.
- Evidence: at `390x844`, hero height is `1180px`; first post-hero section starts at `1208px`. At `360x740`, hero remains `1180px`.
- Impact: mobile users need a long scroll before seeing offer proof or process content. The hero works visually, but it delays the page's Interest stage.
- Recommendation: create a mobile-specific composition that keeps CTA + one proof strip visible but reduces the hero minimum height, or move the hint strip into the first content section on mobile.
- Suggested command: `/adapt`.

### Touch Targets Are Below 44px In Several Interactive Areas

- Location: `src/styles/global.css:222-225`, `887-897`, `977-1005`, `src/components/form/fields.tsx:72-81`.
- Category: Accessibility / Responsive.
- Evidence: measured small focusables include `nav-cta` `199x36`, checkbox input `20x20`, footer links around `119x22` to `243x25`, and mobile menu `min-height: 42px`.
- Impact: fine pointer users are fine, but mobile and motor-impaired users have a higher miss-tap rate. This also weakens WCAG 2.2 target-size posture.
- Recommendation: ensure every interactive target or its clickable label area reaches at least `44x44`; increase footer link row padding and checkbox hit area.
- Suggested command: `/harden` or `/polish`.

### AIDA Desire Stage Is Underdeveloped

- Location: `src/App.tsx:19-28`, `src/styles/global.css:612-780`.
- Category: UX / GPT Taste.
- Evidence: the page has Attention, Interest, and Action, but the middle relies mostly on static cards; no pinned chapter, no stronger scroll narrative, no visual progression beyond repeated grids.
- Impact: the page explains the service clearly, but it does not create the memorable “I want this at my event” moment expected from a premium experiential product.
- Recommendation: add one distinctive Desire section: pinned process/media sequence, interactive package comparison, or scroll-stacked event use cases. Keep it purposeful, not decorative.
- Suggested command: `/animate`, `/delight`, or `$gpt-taste`.

## Medium-Severity Issues

### Reveal Animation Can Hide Most Content In Full-Page Capture / Non-Intersection Contexts

- Location: `src/styles/global.css:472-480`, `src/hooks/useInView.ts:11-18`, `src/components/ui/Reveal.tsx:8-13`.
- Category: Accessibility / Performance / Verification.
- Evidence: full-page screenshots show hero, large blank content area, and footer because `.reveal` sections remain `opacity: 0` until scrolled into view.
- Impact: real users who scroll see content, but automated screenshots, print-like rendering, some crawlers, or broken IntersectionObserver contexts can miss most of the page.
- Recommendation: make reveal progressive-enhancement safe: default visible, add hidden state only after JS initializes; or provide a no-IO fallback.
- Suggested command: `/harden`.

### Reduced Motion Support Is Partially Wired But Not Used In Scroll Logic

- Location: `src/hooks/usePrefersReducedMotion.ts:1-16`, `src/lib/dom.ts:9`, `src/styles/reset.css:34-43`.
- Category: Accessibility.
- Evidence: hook exists but is not consumed; CSS handles transitions, but `scrollIntoView({ behavior: 'smooth' })` still requests smooth motion.
- Impact: users with motion sensitivity can still get animated scrolling from CTA actions.
- Recommendation: use `prefers-reduced-motion` in `scrollToLeadForm` or switch to CSS-driven scroll behavior that the reset can override.
- Suggested command: `/harden`.

### Asset Weight Is Higher Than Necessary

- Location: `public/images/hero-strawberry-stand.png`, `public/brand/strawberry-group-generated-logo.png`, `src/styles/global.css:262-266`, `src/components/layout/Header.tsx:29-34`.
- Category: Performance.
- Evidence: hero PNG is `1.8M`; header logo PNG is `480K`, while an SVG logo also exists.
- Impact: first paint and mobile network performance can degrade, especially because the hero image is critical.
- Recommendation: export WebP/AVIF responsive sizes, preload the hero background, and use SVG for the header mark where possible.
- Suggested command: `/optimize`.

### Token Discipline Is Incomplete

- Location: `src/styles/global.css` broadly; examples at `68`, `303`, `540`, `544`, `555`, `736`, `977`, `999`.
- Category: Theming.
- Evidence: 20 hard-coded hex occurrences in CSS outside tokens, plus repeated rgba values.
- Impact: future palette changes will be brittle and inconsistently applied.
- Recommendation: move repeated warm whites, footer darks, accent golds, and hero pink text into `tokens.css`.
- Suggested command: `/normalize` or `/extract`.

### Heading Semantics Are Visually Useful But Structurally Noisy

- Location: `src/components/sections/ClaimStrip.tsx`, heading inventory in `audit-observations.json`.
- Category: Accessibility / Semantic HTML.
- Evidence: immediately after the H1, claim-strip items use multiple `h2` headings (`Świeże owoce`, `Interakcja`, etc.) before the next major content heading.
- Impact: screen-reader heading navigation may see four small benefit items as equal to full page sections.
- Recommendation: use `h3` or non-heading titles for claim-strip items, keeping H2 for major page chapters.
- Suggested command: `/harden` or `/normalize`.

### Package Cards Are Static And Repetitive

- Location: `src/components/sections/Packages.tsx:15-45`, `src/styles/global.css:637-665`.
- Category: Polish / GPT Taste.
- Evidence: three same-structure cards with minor highlight variation; mobile stacks them into a long vertical list.
- Impact: packages are understandable, but the section feels templated and less premium than the hero.
- Recommendation: convert to a denser comparison surface or bento-like asymmetry; keep one card emphasized but avoid equal repeated blocks.
- Suggested command: `/distill` or `$gpt-taste`.

### Footer Has Low Interaction Density Polish

- Location: `src/styles/global.css:977-1005`.
- Category: Accessibility / Polish.
- Evidence: footer links are visually small (`~25px` high) and stacked with little hit padding.
- Impact: not a blocker, but it feels less finished than the hero/header.
- Recommendation: add row padding, clearer grouping, and larger tap targets.
- Suggested command: `/polish`.

## Low-Severity Issues

### Dev Console Noise In Local Build

- Location: local dev route only.
- Category: Performance / DX.
- Evidence: Vite and React DevTools messages appear in local capture; no runtime errors.
- Impact: no production blocker.
- Recommendation: no action unless production console shows similar noise.

### Lucide Icons Conflict With Minimalist Protocol

- Location: `src/data/siteContent.ts`, `src/components/layout/Header.tsx`, `src/components/ui/Button.tsx`, `src/components/sections/ValueSection.tsx`.
- Category: Theming.
- Impact: icon style is consistent, but `$minimalist-ui` explicitly rejects Lucide/Feather-like thin icon libraries.
- Recommendation: replace with thicker Phosphor/Radix icons or remove icons in a minimalist pass.
- Suggested command: `/normalize`.

### Overuse Of Pill Shapes For A Minimalist Direction

- Location: `src/styles/global.css:200-203`, `356-358`, `656-658`, `823-825`.
- Category: Polish / Theming.
- Impact: works for friendly event conversion, but contradicts the requested crisp editorial system.
- Recommendation: if minimalist, move main buttons to 4-6px radius and reserve pills only for small status tags.
- Suggested command: `$minimalist-ui`.

### Full-Page Evidence Needs Scrolled Segment Capture

- Location: review workflow, not product code.
- Category: QA.
- Impact: because reveal-on-scroll hides non-visited sections, future audits should capture viewport segments after scrolling, not only full-page screenshots.
- Recommendation: keep using segment captures under `segments/`.

## Patterns & Systemic Issues

- The site repeatedly uses narrow display heading containers. This is the main source of both gpt-taste failures and desktop monotony.
- The visual system is coherent, but not minimalist. It uses gradients, soft cards, shadows, rounded pills, and saturated strawberry CTAs throughout.
- Interaction states are present for main CTAs, forms, and focus, but smaller text links and footer links need larger target treatment.
- Reveal animations are implemented with IntersectionObserver and transform/opacity, which is good, but the default hidden state should be safer.

## Positive Findings

- No horizontal overflow was detected across all audited viewports.
- Form fields have labels, invalid state wiring, error summaries, status messaging, and tests around success/error flows.
- The header direction is visually distinctive and consistent with the cocoa premium concept.
- Realistic Polish content avoids most generic AI-copy cliches.
- The page has a clear service structure: hero, claims, process, packages, event types, logistics, value, gallery, contact.
- `npm run typecheck`, `npm run lint`, `npm run test`, and `npm run build` all passed.

## Recommendations By Priority

1. Immediate: fix heading line-length system and mobile hero height.
2. Short-term: increase small touch targets; make reveal animation safe by default; wire reduced-motion into smooth scroll.
3. Medium-term: optimize hero/logo assets; move hard-coded colors into tokens.
4. Long-term: choose one visual direction: strict minimalist editorial or richer cocoa event luxury. Then rebuild the middle sections to match that direction.

## Suggested Commands For Fixes

- `/adapt`: mobile hero height, Mac/Windows viewport refinements, heading line-length behavior.
- `/polish`: spacing, target size, footer/header/detail finish.
- `/harden`: reduced-motion behavior, reveal fallback, semantic heading cleanup.
- `/optimize`: image formats, preload strategy, bundle/image review.
- `/normalize` or `/extract`: color tokens, shadow/radius system, icon policy.
- `$minimalist-ui`: full visual-direction reset toward warm editorial minimalism.
- `$gpt-taste`: stronger AIDA middle page, bento/desire/motion composition.
