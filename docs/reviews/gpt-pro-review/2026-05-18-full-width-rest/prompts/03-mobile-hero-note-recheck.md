# GPT-5.5 Pro Focused Recheck: Mobile Hero Transition Note

Project: Strawberry Group landing page  
Required ChatGPT project/folder: `praca Daniel`  
Route verified locally: `http://localhost:5174/`  
Date: 2026-05-18  
Model UI expected: GPT-5.5 Pro / Extended Pro

## Context

In the post-change verification response, GPT-5.5 Pro gave `PASS_WITH_NOTES` for the full-width section implementation and identified one non-blocking production check:

> In `mobile-390x844-01-hero.png`, the third hero metric, “2 osoby”, appears partially clipped/covered by the incoming claim strip at the bottom of the first mobile viewport. Since the hero/header direction is explicitly approved and this is at the hero transition, I would not block the full-width-rest pass on it, but I would verify it in the browser.

## Follow-Up Fix

Changed file:

- `/Users/danielloranc/Documents/truskawka/src/styles/global.css`

Implemented fix:

```css
@media (max-width: 430px) {
  .hero {
    min-height: max(100svh, 1180px);
  }
}
```

Local Playwright metrics after the fix on `390x844`:

- `.hero` height: `1180px`
- `.hero__hint` top: about `897px`
- `.hero__facts` bottom: about `840px`
- `scrollWidth === clientWidth === 390`

Local commands after this fix:

- `npm run typecheck` passed.
- `npm run lint` passed.
- `npm run test` passed.
- `npm run build` passed.
- `npm run screenshots` passed.

## Uploaded Screenshot

1. `/Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-full-width-rest/post-change/mobile-390x844-01-hero.png`
   - device: mobile
   - viewport: 390x844
   - state: mobile hero after overlap fix
   - capture mode: viewport
   - stability: stable after settle
   - safety: public marketing page, no secrets or private data

## Review Request

Please verify only this focused note:

1. Is the third hero metric no longer covered by the claim/benefits strip?
2. Does this fix avoid introducing a visible mobile hero regression in the provided screenshot?
3. Output `PASS` or `BLOCK` for this focused recheck.

Do not re-open the whole full-width section review; that already received `PASS_WITH_NOTES`. This prompt only verifies the follow-up mobile hero overlap fix.
