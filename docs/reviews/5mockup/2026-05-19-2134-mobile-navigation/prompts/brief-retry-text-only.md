# 5Mockup Retry Brief - Strawberry Group Mobile Navigation

You are GPT-5.5 Pro / Extended Pro in the ChatGPT project `praca Daniel`.

The previous screenshot-driven attempt stalled at `Pro thinking` after two `kontynuuj` resumes. For this retry, do not generate images directly. Return a text-only prompt pack and state whether `gpt-image-20` image generation is unavailable in this context.

Task: create exactly five materially different UI/UX directions for redesigning the existing mobile navigation and mobile navigation buttons of the Strawberry Group landing page.

Use the attached screenshots as evidence:

1. Desktop header/hero context: `desktop-1920x1080-header-context.png`
2. Mobile closed nav: `mobile-390x844-nav-closed.png`
3. Mobile menu button focus: `mobile-390x844-menu-button-focus.png`
4. Mobile open nav: `mobile-390x844-nav-open.png`
5. Mobile open nav panel crop: `mobile-390x844-nav-open-panel-crop.png`

Product context:
- Premium Polish event dessert stand, strawberries in chocolate.
- Preserve: dark chocolate/cocoa header, thin gold accent, warm cream surfaces, strawberry-red primary CTA, generated strawberry logo, `Strawberry Group S.C.` wordmark, premium event tone.
- Current mobile nav: logo + big menu pill; fixed dark panel below header; links `Oferta`, `Pakiety`, `Jak działamy`, `Eventy`, `Kontakt`; phone action; `Sprawdź termin` CTA.
- Relevant implementation files: `src/components/layout/Header.tsx`, `src/styles/global.css`, `src/styles/tokens.css`, `src/data/siteContent.ts`.
- Data safety: public business phone may be visible; no secrets, cookies, tokens, private form submissions, or customer data.

Return exactly this Markdown structure:

```markdown
# Mobile Navigation 5Mockup Prompt Pack

## Availability
gpt-image-20-unavailable

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
  Create a 390x844 mobile UI mockup board for Strawberry Group...

### Option 2 - <name>
...

### Option 3 - <name>
...

### Option 4 - <name>
...

### Option 5 - <name>
...
```

Each `gpt_image_20_prompt` must request one readable 390x844 mobile screenshot mockup board showing BOTH closed top navigation and open navigation state. Avoid unreadable contact sheets, fake browser chrome, stock-photo collage, decorative orbs/blobs/bokeh, irrelevant device mockups, copied proprietary assets, generic SaaS tab bars, one-note purple/blue palettes, beige-only palettes, card-inside-card nesting, hidden brand logo, tiny touch targets, and persistent controls that block the lead form.
