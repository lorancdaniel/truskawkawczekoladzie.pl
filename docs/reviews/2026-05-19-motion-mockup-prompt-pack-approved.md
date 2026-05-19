# Approved Motion Mockup Prompt Pack

Scope: Strawberry Group landing page motion system.

Status: GPT-5.5 Pro / Extended Pro returned `APPROVE WITH CHANGES`.

Evidence:
- Plan response: `/Users/danielloranc/Documents/truskawka/docs/reviews/2026-05-19-gpt-55-pro-motion-mockup-response.md`
- Verification response: `/Users/danielloranc/Documents/truskawka/docs/reviews/2026-05-19-gpt-55-pro-motion-plan-verification-response.md`
- Fresh verification response: `/Users/danielloranc/Documents/truskawka/docs/reviews/2026-05-19-gpt-55-pro-motion-plan-verification-response-fresh.md`
- Screenshot pack: `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/`

Note: GPT Pro reported `gpt-image-20-unavailable`, so this file keeps pixel-detailed prompts ready for the mockup generation step.

## Global Prefix

Use this block at the top of every storyboard prompt:

```text
Use the provided screenshot as a strict image-to-image base. Preserve the exact layout, crop, typography, colors, photos, spacing, copy, buttons, cards, and component positions. This is a motion storyboard, not a redesign.

All motion indicators must be annotation overlays only: translucent ghosts, thin arrows, tiny timing labels, stroke paths and timing labels. Do not invent new UI, replace images, change text, add decorative chocolate, drops, particles, bokeh, blobs or confetti.

Keep the original page underneath crisp and readable. No motion blur, no cinematic effects, no extra glow, no bokeh, no blobs, no confetti, no chocolate drips, no liquid splashes.
```

## First 5 Mockups

### 1. Desktop Hero Page-Load Storyboard

Reference: `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-hero-default.png`

```text
Create a technical motion storyboard for the existing Strawberry Group landing page hero.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing the final hero layout with subtle translucent motion overlays and timing callouts. Preserve the exact header, logo, nav, hero photo, typography, red CTA buttons, stats, and claim strip.

Animation state to visualize:
- Page-load hero entrance, 0ms -> 850ms.
- Header appears first: opacity 0 -> 100%, y -8px -> 0, around 0-180ms.
- Hero background photo is already present but settles subtly from scale 1.015 to 1.0.
- Large serif headline reveals by line masks, not letter-by-letter.
- Do not split or change the hero headline line breaks. The line-reveal masks must follow the exact existing lines from the screenshot.
- Subheading appears after headline with opacity + y 10px.
- Primary CTA and secondary CTA appear together with a 60ms stagger.
- Stats appear last with small y 8px movement.
- Claim strip cards at bottom edge appear after hero content, opacity + y 10px.
- CTA must remain visible and clickable in the final state.

How to show motion statically:
- Add subtle semi-transparent ghost positions for start states, with small red/cocoa arrows showing direction.
- Add tiny timing labels near groups: 0ms, 180ms, 420ms, 650ms, 850ms.
- Use a thin cocoa/red mask-line indicator over the headline to show line reveal.
- The annotation layer should be subtle and secondary. The final frame must still look like the real landing page first, and a motion spec second.

Avoid:
- No bounce, no elastic, no confetti, no bokeh/orbs/blobs.
- No layout changes, no text rewrap, no new components.
- Do not brighten the photo or change colors.
```

### 2. Mobile Hero Entrance And CTA Stack

Reference: `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/mobile-390x844-hero-default.png`

```text
Create a technical motion storyboard for the mobile hero entrance of the existing Strawberry Group landing page.

Viewport: mobile 390x844.

Deliverable: one 390x844 storyboard frame with final UI plus translucent start-state overlays and timing callouts. Preserve the exact mobile header, logo, cream Menu pill, hero crop, typography, CTA stack and stats.

Animation state to visualize:
- Mobile page-load entrance, 0ms -> 780ms.
- Top header/logo and cream “Menu” pill appear first with opacity + y -6px.
- Hero background photo remains stable, with only a subtle scale settle from 1.012 to 1.0.
- Eyebrow fades in.
- Large serif headline reveals by line mask from bottom to top, keeping exact line breaks from the screenshot.
- Body copy fades in after headline.
- Primary red CTA appears from y 10px to 0; secondary outlined CTA appears 50ms later.
- Stats stack appears last, each stat opacity + y 8px with a short stagger.
- No horizontal overflow, no cropped CTA, no animated element may extend outside the 390px viewport. Preserve the exact mobile headline wrapping.

How to show motion statically:
- Use ghosted start positions at 30% opacity.
- Add tiny time labels near the header, headline, CTA stack, and stats.
- Show the line-mask reveal with thin semi-transparent cream/cocoa bands.

Avoid:
- No horizontal movement that could imply overflow.
- No menu redesign.
- No heavy parallax, no bouncing buttons, no decorative particles.
- Do not change typography, CTA sizes, or stat layout.
```

### 3. Packages Desktop Active-State Narrative

Reference: `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-packages-scroll.png`

```text
Create a technical motion storyboard for the existing packages section.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing the current Silver package becoming active during scroll. Use a ghosted previous neutral state of the same Silver card and a solid final active state. Do not show or invent the next package card content.

Animation state to visualize:
- Active Silver card receives subtle premium emphasis: border/stroke draw on top/side edge, opacity 90% -> 100%, no card movement beyond y 4-6px max.
- Only the existing visible Silver card text may receive ghosted opacity/y annotations. Do not alter or replace the copy.
- Price blocks remain stable, no movement.
- Left package list/current index receives color accent, not a layout change.
- This is a calm active-state transition spec, not a pinned-scroll redesign.

How to show motion statically:
- Show a faint neutral ghost state layered behind the active Silver state.
- Use a thin red/cocoa stroke arrow along the card edge to show draw direction.
- Add small timing labels: 0ms neutral, 220ms stroke draw, 420ms final active.

Avoid:
- Do not create a pinned-scroll effect in the image.
- Do not invent unseen package content.
- Do not animate width, height, price, bullet list positions, or card grid.
- No heavy glow, no bounce, no tilted cards.
```

### 4. Calculator Modal Entrance And Step Focus

Reference: `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-calculator-modal-step1.png`

```text
Create a technical motion storyboard for the existing calculator modal opening and first-step focus.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame showing the modal open state with subtle motion annotations.

Animation state to visualize:
- Backdrop fades in behind modal. Backdrop should be primarily opacity dimming. If blur is shown, keep it extremely subtle and avoid a heavy frosted-glass effect.
- Modal panel enters from y 16px -> 0 and scale 0.985 -> 1.
- Left dark panel appears slightly before right content panel.
- Package cards stagger in 40ms apart, but all remain aligned and same height.
- Selected Platinum card shows a thin border/stroke draw, not a glow burst.
- Progress dots/step indicator uses a small chocolate-flow stroke, not liquid.
- Bottom “Wstecz” and “Dalej” buttons fade in after cards.
- Close button remains stable in the top-right.
- Show a small focus note indicating that focus lands on the modal heading or first meaningful interactive element after the entrance completes.

How to show motion statically:
- Use translucent panel start position behind final modal.
- Add tiny timing labels: backdrop 0-160ms, panel 80-260ms, cards 220-380ms.
- Add one focus ring annotation on the intended first focus target.

Avoid:
- No bounce, no aggressive zoom, no changing modal size.
- No heavy blur wall.
- Do not change card copy, package order, prices, or modal layout.
```

### 5. Contact Form Focus, Validation And Floating CTA Safe-Zone

Reference: `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-contact-form.png`

```text
Create a technical motion storyboard for the existing contact form focus, validation and floating CTA safe-zone.

Viewport: desktop 1920x1080.

Deliverable: one 1920x1080 storyboard frame with three small state callouts layered over the existing form: input focus, validation/checkbox, and floating CTA safe-zone.

Animation states to visualize:
- Focus state: one input field gets warm red/cocoa border and subtle shadow, label stays stable.
- Checkbox consent: check icon draws as SVG stroke.
- Validation state: error message appears via opacity + y 4px, no shake.
- Validation messages should appear in pre-reserved space or as a non-disruptive inline overlay. Do not move neighboring fields.
- Floating CTA remains visible only if it does not block form fields, checkbox, validation, submit button or urgent contact pill.
- If the floating CTA would overlap the submit button or fields, show the proposed safe-zone behavior: slight upward offset, compact phone-chip-only state, or temporary hide near active form area, without redesigning the CTA.
- Submit success is not part of this first mockup; keep it for a later focused prompt.

How to show motion statically:
- Add small callout boxes with 0ms, 160ms, 320ms labels.
- Use ghosted y-start positions for error only, not for the whole form.
- Use one drawn check stroke path overlay.
- Add a subtle “safe-zone” outline around the submit/checkbox area to show that floating CTA must not intrude.

Avoid:
- No red flashing, no shake, no aggressive warning animation.
- No layout shift, no field movement, no resizing form container.
- Do not hide required legal/consent text.
```

## Parallel Motion Clip / Verification

Header/floating CTA handoff should be verified as a short motion clip or Playwright capture, because a static storyboard cannot reliably reveal scroll-threshold flicker.

Reference:
- `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-hero-default.png`
- `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-19-motion-mockups/desktop-1920x1080-contact-form.png`

```text
Create a short technical verification clip or sequential capture for the header CTA to floating CTA handoff.

Use the contact-form desktop screenshot as the base. Show floating CTA in a safe active state and header CTA as a small translucent outgoing annotation only. The primary deliverable is CTA non-overlap and handoff behavior, not a new composed page state.

If the floating CTA would overlap the submit button or fields, show the proposed safe-zone behavior: slight upward offset, compact phone-chip-only state, or temporary hide near active form area, without redesigning the CTA.

The handoff must be crossfade/y/scale only, with hysteresis at the scroll threshold. Do not show a physical flying path from header to bottom-right.
```

## Second Wave

1. Gallery carousel motion, desktop.
2. Package modal card selection.
3. Contact submit/loading/success state.
4. Header/floating CTA static safe-zone storyboard if the motion clip still needs annotation support.

## Implementation Guardrails

- CSS first; GSAP only for synchronized timelines, controlled modal/hero sequences, or SVG stroke timing.
- Do not use ScrollSmoother or global smooth-scroll hijacking.
- Keep one source of truth for scroll: if JS scroll timing is added, do not let it fight `html { scroll-behavior: smooth; }`, `scrollIntoView`, or sticky-header offsets.
- No initial invisible content before JS; motion must be progressive enhancement.
- Central reduced-motion guard must control CSS and JS: smooth scroll, hero scale, stagger, stroke draw, carousel micro-pan and ScrollTrigger/scrub.
- GSAP timelines must not start at all in `prefers-reduced-motion: reduce`.
- Header/floating CTA needs hysteresis to avoid flicker around the scroll threshold.
- Hidden CTA states must use `pointer-events: none`.
- In the contact section, floating CTA needs a safe-zone behavior so it never covers fields, checkbox, submit, validation, modals, or mobile keyboard interactions.
- GSAP timelines must be scoped and cleaned up on unmount/close.
- Avoid global GSAP selectors; scope animation targets to component refs.
- Carousel track/infinite logic stays untouched; animate only active slide children and disable child animation during clone reset.
- Modal motion must be tied to focus management and body scroll lock.
- Packages should keep IntersectionObserver active state with a stable threshold/minimum dwell; no mobile pinning or long stagger.
