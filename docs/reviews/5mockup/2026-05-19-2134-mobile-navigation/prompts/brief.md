# 5Mockup Brief - Strawberry Group Mobile Navigation

You are GPT-5.5 Pro / Extended Pro reviewing screenshots for a 5Mockup proposal phase.

Task: generate exactly five materially different UI/UX mockup directions for the existing mobile navigation and mobile navigation buttons of the Strawberry Group landing page. The user asked in Polish: "wygeneruj nowy design UI / UX pasujacej do calosc nawigacji mobilnej i przyciski mobiilnej nawigacji" - generate a new UI/UX design matching the whole mobile navigation and mobile navigation buttons.

Important: this is proposal mode only. Do not assume implementation is approved. Produce options for the user to choose from.

## Product Context

- Brand: Strawberry Group S.C.
- Product/category: premium interactive dessert/event stand with strawberries in chocolate for weddings, company events, galas, festivals, VIP zones, and larger events.
- Current view: single Vite/React landing page at `/`.
- Relevant UI files:
  - `/Users/danielloranc/Documents/truskawka/src/components/layout/Header.tsx`
  - `/Users/danielloranc/Documents/truskawka/src/styles/global.css`
  - `/Users/danielloranc/Documents/truskawka/src/styles/tokens.css`
  - `/Users/danielloranc/Documents/truskawka/src/data/siteContent.ts`
- Design cues to preserve:
  - dark chocolate/cocoa header
  - thin gold accent
  - warm cream text/backgrounds
  - strawberry-red primary CTA
  - generated strawberry logo and `Strawberry Group S.C.` wordmark
  - editorial/premium event tone, not a generic SaaS or stock app
  - Manrope UI text and Cormorant Garamond display language where appropriate

## Current Mobile Navigation Behavior

- Mobile top bar contains logo/wordmark and a large pill menu button.
- Menu opens as a fixed dark panel below the header.
- Menu items: `Oferta`, `Pakiety`, `Jak działamy`, `Eventy`, `Kontakt`.
- Mobile command block inside the menu contains a phone action and a primary CTA: `Sprawdź termin`.
- Menu open locks body scroll.
- Menu links close the menu and navigate to page anchors.
- CTA scrolls to the contact/lead form.
- Existing mobile floating actions are hidden at the mobile breakpoint, so the mobile navigation/button redesign can rethink CTA availability, but should not introduce behavior that blocks the form or modals.

## Screenshot Evidence Attached

Screenshot context:

1. `/Users/danielloranc/Documents/truskawka/docs/reviews/5mockup/2026-05-19-2134-mobile-navigation/baseline/desktop-1920x1080-header-context.png`
   - view: Strawberry Group landing page
   - route/url: `http://localhost:5174/`
   - state: desktop default header/hero context
   - coverage item: desktop design language context
   - device: desktop
   - viewport: `1920x1080`
   - actual PNG dimensions: `1920x1080`
   - capture mode: viewport
   - stability: loaded; images/fonts settled 800ms
   - interaction coverage: desktop context only
   - readability: primary evidence readable
   - captured at: `2026-05-19T19:35:36.277Z`

2. `/Users/danielloranc/Documents/truskawka/docs/reviews/5mockup/2026-05-19-2134-mobile-navigation/baseline/mobile-390x844-nav-closed.png`
   - view: Strawberry Group landing page
   - route/url: `http://localhost:5174/`
   - state: mobile menu closed at hero top
   - coverage item: mobile default closed navigation
   - device: mobile
   - viewport: `390x844`
   - actual PNG dimensions: `780x1688`
   - capture mode: viewport
   - stability: loaded; images/fonts settled 800ms
   - interaction coverage: default state covered
   - readability: primary evidence readable
   - captured at: `2026-05-19T19:35:48.306Z`

3. `/Users/danielloranc/Documents/truskawka/docs/reviews/5mockup/2026-05-19-2134-mobile-navigation/baseline/mobile-390x844-menu-button-focus.png`
   - view: Strawberry Group landing page
   - route/url: `http://localhost:5174/`
   - state: mobile menu button focused
   - coverage item: mobile focus-visible menu button
   - device: mobile
   - viewport: `390x844`
   - actual PNG dimensions: `780x1688`
   - capture mode: viewport
   - stability: focus applied; settled 500ms
   - interaction coverage: focus covered
   - readability: primary evidence readable
   - captured at: `2026-05-19T19:35:49.039Z`

4. `/Users/danielloranc/Documents/truskawka/docs/reviews/5mockup/2026-05-19-2134-mobile-navigation/baseline/mobile-390x844-nav-open.png`
   - view: Strawberry Group landing page
   - route/url: `http://localhost:5174/`
   - state: mobile menu open panel
   - coverage item: mobile open navigation panel with nav links and CTA buttons
   - device: mobile
   - viewport: `390x844`
   - actual PNG dimensions: `780x1688`
   - capture mode: viewport
   - stability: animated surface stable after 1000ms plus bounding-box/scroll recheck
   - interaction coverage: open menu covered; hover not applicable on mobile; validation/loading/disabled not applicable
   - readability: primary evidence readable
   - captured at: `2026-05-19T19:35:50.512Z`

5. `/Users/danielloranc/Documents/truskawka/docs/reviews/5mockup/2026-05-19-2134-mobile-navigation/baseline/mobile-390x844-nav-open-panel-crop.png`
   - view: Strawberry Group landing page
   - route/url: `http://localhost:5174/`
   - state: mobile menu open panel crop
   - coverage item: target element close context crop
   - device: mobile
   - viewport: `390x844`
   - actual PNG dimensions: `764x976`
   - capture mode: element crop around open nav panel
   - stability: animated surface stable after 1000ms plus bounding-box/scroll recheck
   - interaction coverage: open menu target crop covered
   - readability: primary evidence readable
   - captured at: `2026-05-19T19:35:50.547Z`

Data safety: screenshots may show public business contact phone `+48 514 214 567`. Do not infer or expose secrets. No private user/customer data, cookies, tokens, environment variables, credentials, or form submissions are included.

## What I Need From You

Return exactly five options numbered 1-5. Make the five options meaningfully different across at least two of these axes: structure, hierarchy/density, surface treatment/color system, interaction model/state handling, motion/feedback direction, and affordance clarity.

Each option must include:

- `name`: a short direction name
- `summary`: 2-4 sentences explaining the UX idea
- `why_it_fits`: how it matches Strawberry Group's existing visual language
- `mobile_closed_state`: what the top bar/menu button looks like before opening
- `mobile_open_state`: what the opened navigation looks like
- `buttons`: treatment for menu close/open, nav links, phone action, and `Sprawdź termin`
- `states`: focus-visible, pressed/active, selected/current anchor, reduced motion, and overflow/reduced-height behavior
- `accessibility`: touch target, contrast, labels, scroll lock/focus notes
- `implementation_notes`: concrete CSS/component notes grounded in current files
- `risks`: likely implementation or UX risks
- `gpt_image_20_prompt`: one exact image-generation prompt for `gpt-image-20` to create the mockup image for this option

For each `gpt_image_20_prompt`, request one 390x844 mobile screenshot mockup showing BOTH the closed top navigation and the open navigation state in a single readable design board. The board may use two stacked phone viewport states or one split presentation, but it must preserve legible UI text and must not shrink content into an unreadable contact sheet. It must look like an app screenshot/mockup, not a marketing poster.

If image generation is available to you in this ChatGPT context, also generate the five `gpt-image-20` mockup images after the structured option list. If `gpt-image-20` or image generation is unavailable, write exactly:

`gpt-image-20-unavailable`

and still provide the five exact `gpt_image_20_prompt` values.

## Negative Prompt For All Options

No unreadable UI text. No fake browser chrome. No stock-photo collage. No decorative orbs/blobs/bokeh. No irrelevant device mockups. No copied proprietary assets beyond the provided brand/logo context. No generic app tab bar if it does not fit the event/dessert brand. No one-note purple/blue SaaS palette. No beige-only palette. No enormous card-inside-card nesting. Do not hide the brand logo. Do not reduce the primary CTA touch target below 44px. Do not cover the lead form or page content with persistent controls in a way that traps the user.

## Output Format

Use Markdown, but keep it machine-checkable:

```markdown
# Mobile Navigation 5Mockup Prompt Pack

## Availability
<either "gpt-image-20 available" or "gpt-image-20-unavailable">

## Options

### Option 1 - <name>
name: ...
summary: ...
why_it_fits: ...
mobile_closed_state: ...
mobile_open_state: ...
buttons: ...
states: ...
accessibility: ...
implementation_notes: ...
risks: ...
gpt_image_20_prompt: |
  ...

### Option 2 - <name>
...

### Option 3 - <name>
...

### Option 4 - <name>
...

### Option 5 - <name>
...
```
