Mobile Navigation 5Mockup Prompt Pack
Availability

gpt-image-20-unavailable

Options
Option 1 - Compact Cream Capsule

name: Compact Cream Capsule
summary: Reduce the oversized mobile menu pill into a tighter cream capsule that feels premium but no longer dominates the header. The open state becomes a clean dropdown sheet directly under the dark chocolate header, with fewer nested borders and a clearer CTA hierarchy.
why_it_fits: The current closed state already uses a cream pill successfully, but the screenshots show it taking too much visual weight and competing with the logo. This direction preserves the recognizable cream surface, strawberry-red CTA, dark cocoa header, thin gold accent, and premium dessert tone while making the navigation feel lighter and easier to scan.
mobile_closed_state: Dark chocolate sticky header, thin gold top rule, strawberry logo and Strawberry Group S.C. wordmark on the left, compact cream Menu capsule on the right with a 44–48px touch target, smaller hamburger icon, subtle cocoa shadow, and no oversized focus halo unless keyboard focus is active.
mobile_open_state: The menu capsule changes to Zamknij with an X icon. A warm cream dropdown sheet opens below the header, aligned to the page gutters. Links appear as large single-row items with subtle dividers rather than heavy card nesting. Phone and CTA sit at the bottom as two distinct actions: secondary phone chip above, strawberry-red primary Sprawdź termin below.
buttons: Primary CTA stays strawberry red with white text and right arrow. Secondary buttons use translucent cocoa fill or cream outline. Menu button uses warm cream background, cocoa text, and restrained gold/cocoa border. Focus state uses a thin strawberry-red outline offset outside the capsule, not a thick ring that clips at the viewport edge.
states: Closed, open, hover/tap pressed, keyboard focus, active link, and reduced-motion menu transition. Open animation should feel like a soft vertical reveal rather than a modal takeover.
accessibility: Keep all touch targets at least 44px. Use aria-expanded, aria-controls, and aria-label for the menu toggle. Do not rely on icon-only labels. Ensure the focus ring is visible without being cropped. Use strong contrast between cream text surfaces and dark cocoa background. Keep page scroll usable when the dropdown is open only if the sheet does not cover the viewport.
implementation_notes: Update Header.tsx to separate MobileMenuButton, MobileNavSheet, and MobileNavActions. Store nav labels and phone CTA from siteContent.ts. Add CSS tokens in tokens.css for mobile nav radius, menu pill size, focus outline, sheet shadow, and border color. In global.css, replace the current large mobile pill sizing and heavy panel borders with compact spacing and simple dividers.
risks: It is the safest and least disruptive option, so it may feel closer to the current design than the other directions. The dropdown must not become too beige or flat; it still needs enough cocoa/gold detail to feel premium.
gpt_image_20_prompt: |
Create a 390x844 mobile UI mockup board for Strawberry Group showing BOTH states in one readable mobile screenshot composition: the closed top navigation at the top and the open navigation state below it in the same 390x844 frame. Design direction: Compact Cream Capsule.

Brand context: premium Polish event dessert stand offering strawberries in chocolate. Preserve a dark chocolate/cocoa header, thin gold accent, warm cream surfaces, strawberry-red primary CTA, generated strawberry logo, Strawberry Group S.C. wordmark, and elegant event tone.

Closed state: sticky dark cocoa header with thin gold top rule, strawberry logo and wordmark on the left, compact warm-cream rounded Menu capsule on the right, hamburger icon, cocoa text, restrained premium proportions, no oversized clipped focus ring.

Open state: the button changes to Zamknij with an X icon. A warm cream dropdown sheet appears directly below the header, aligned to mobile gutters, with large readable links: Oferta, Pakiety, Jak działamy, Eventy, Kontakt. Use subtle dividers instead of nested cards. Add a secondary phone chip +48 514 214 567 and a strawberry-red primary CTA Sprawdź termin.

Show the hero background faintly behind the navigation so it is clear this belongs to the Strawberry Group landing page, but keep the navigation readable. Avoid unreadable contact sheets, fake browser chrome, stock-photo collage, decorative orbs/blobs/bokeh, irrelevant device mockups, copied proprietary assets, generic SaaS tab bars, one-note purple/blue palettes, beige-only palettes, card-inside-card nesting, hidden brand logo, tiny touch targets, and persistent controls that block the lead form.

Option 2 - Velvet Drawer

name: Velvet Drawer
summary: Replace the fixed panel below the header with a right-side full-height drawer that feels intentional and editorial. The drawer uses dark cocoa as the primary surface, cream typography, thin gold separators, and a strong red booking CTA anchored within the drawer.
why_it_fits: The existing open menu is visually heavy because it stacks many bordered boxes under the header. A drawer creates a more deliberate mobile navigation moment while preserving the luxury chocolate palette and keeping the hero page visible as context behind a soft overlay.
mobile_closed_state: Header remains compact and premium. The menu control becomes a smaller rounded-square or short capsule with icon plus Menu, visually aligned with the wordmark. The logo remains prominent and the header height is reduced compared with the current mobile screenshot.
mobile_open_state: A dark cocoa drawer slides in from the right, occupying about 86–92% of the width. The hero is dimmed behind it. Drawer top includes a small brand row and Zamknij control. Links are stacked as elegant editorial rows with thin gold/brown separators and small arrow indicators. Contact actions are grouped at the bottom in a warm brown panel without excessive nested cards.
buttons: Menu button is cream with cocoa text. Close button can be a circular cream icon button plus label. Primary CTA is strawberry red and full-width inside the drawer. Phone action is secondary, with a cream outline or muted cocoa-brown chip. Link rows use subtle pressed states rather than boxed cards.
states: Closed, drawer open, drawer slide transition, backdrop tap target, active nav item, focus-visible, and escape-close behavior. Drawer should lock body scroll while open.
accessibility: Use dialog semantics or a labelled navigation region with focus trapping while the drawer is open. Move focus to the close button when opened and return focus to the menu button when closed. Ensure the backdrop is not the only way to close. Keep drawer links large and readable.
implementation_notes: In Header.tsx, render the mobile drawer in a portal or fixed layer with aria-modal behavior. Add a body[data-nav-open] scroll lock class in global.css. Use tokens.css for drawer width, overlay color, gold separator, drawer shadow, and motion duration. Keep nav content sourced from siteContent.ts.
risks: A drawer is more interactive than the current panel and requires careful focus management. If the drawer becomes too dark without enough cream spacing, it may feel heavy, so separators and typography hierarchy must stay refined.
gpt_image_20_prompt: |
Create a 390x844 mobile UI mockup board for Strawberry Group showing BOTH states in one readable mobile screenshot composition: the closed top navigation at the top and the open navigation state below it in the same 390x844 frame. Design direction: Velvet Drawer.

Brand context: premium Polish event dessert stand offering strawberries in chocolate. Preserve a dark chocolate/cocoa header, thin gold accent, warm cream surfaces, strawberry-red primary CTA, generated strawberry logo, Strawberry Group S.C. wordmark, and elegant event tone.

Closed state: compact sticky cocoa header with thin gold top rule, strawberry logo and wordmark on the left, a refined warm-cream Menu control on the right with hamburger icon, smaller and more balanced than the current oversized pill.

Open state: show a right-side dark cocoa drawer over a softly dimmed hero background. The drawer should occupy most, but not all, of the screen width. Include a top row with brand mark and a cream Zamknij close control. Stack large readable links: Oferta, Pakiety, Jak działamy, Eventy, Kontakt, using thin gold or cocoa-brown separators and small arrow indicators. At the bottom, include a contact block with KONTAKT BEZPOŚREDNI, +48 514 214 567, and a full-width strawberry-red Sprawdź termin CTA.

Make it feel like a premium event service, not a generic app drawer. Avoid unreadable contact sheets, fake browser chrome, stock-photo collage, decorative orbs/blobs/bokeh, irrelevant device mockups, copied proprietary assets, generic SaaS tab bars, one-note purple/blue palettes, beige-only palettes, card-inside-card nesting, hidden brand logo, tiny touch targets, and persistent controls that block the lead form.

Option 3 - Gold Rail Menu

name: Gold Rail Menu
summary: Turn the open mobile menu into an elegant vertical navigation rail with a thin gold line, large serif numbering, and compact action buttons. This option leans into the premium editorial character of the hero typography instead of using chunky rounded cards.
why_it_fits: The landing page hero uses oversized editorial serif type and a warm luxury dessert atmosphere. A gold-rail menu echoes that language, making navigation feel like part of the brand story rather than a utility overlay.
mobile_closed_state: Dark cocoa header with logo and wordmark, plus a minimal cream circular or capsule menu button. Add a tiny gold vertical separator between logo and wordmark to match the desktop header context. The button label can remain Menu, but the shape should be calmer and less inflated.
mobile_open_state: Open panel appears as a dark translucent cocoa sheet under the header. A thin vertical gold rail runs down the left side of the nav list. Each item has a small number, for example 01, 02, and a large cream label. The active or highlighted item uses strawberry-red text accent or a small red dot. Contact actions sit below the rail as clean horizontal pills.
buttons: Primary Sprawdź termin is strawberry red with a subtle arrow. Phone is a cream-outline button. Menu/close button keeps cream fill and cocoa iconography. Nav items are not boxed; they are spacious rows connected by the gold rail.
states: Closed, open, active section, focus-visible on rail items, pressed state on CTA, and scroll-safe behavior when the nav is taller than the screen. Motion can be a gentle fade plus staggered link reveal.
accessibility: Decorative numbers must not replace text labels. Screen readers should read normal labels only. Maintain contrast for gold accents against cocoa. Keep the close button in the same top-right location as the menu button for predictable operation. Avoid using only color to show active state.
implementation_notes: In Header.tsx, render a MobileNavRail list with CSS counters or explicit index labels hidden from assistive tech. Use tokens.css for gold rail color, line width, nav item gap, and serif display size. In global.css, add reduced-motion handling for staggered reveal.
risks: The editorial style is more distinctive and may require careful tuning so it does not look like a restaurant menu. Long Polish labels such as Jak działamy need adequate line-height and spacing.
gpt_image_20_prompt: |
Create a 390x844 mobile UI mockup board for Strawberry Group showing BOTH states in one readable mobile screenshot composition: the closed top navigation at the top and the open navigation state below it in the same 390x844 frame. Design direction: Gold Rail Menu.

Brand context: premium Polish event dessert stand offering strawberries in chocolate. Preserve a dark chocolate/cocoa header, thin gold accent, warm cream surfaces, strawberry-red primary CTA, generated strawberry logo, Strawberry Group S.C. wordmark, and elegant event tone.

Closed state: sticky dark cocoa header with logo and wordmark on the left, a subtle gold separator near the wordmark, and a refined cream Menu button on the right with hamburger icon. Keep the button smaller than the current oversized mobile pill.

Open state: below the header, show a dark translucent cocoa navigation sheet over the hero image. Use a thin vertical gold rail on the left. Place the links as spacious editorial rows connected to the rail: 01 Oferta, 02 Pakiety, 03 Jak działamy, 04 Eventy, 05 Kontakt. Use cream typography, small strawberry-red active accents, and no heavy rectangular nesting. Below the links, add a cream-outline phone button +48 514 214 567 and a strawberry-red Sprawdź termin CTA.

The composition should feel premium, editorial, chocolate-and-gold, and clearly mobile-first. Avoid unreadable contact sheets, fake browser chrome, stock-photo collage, decorative orbs/blobs/bokeh, irrelevant device mockups, copied proprietary assets, generic SaaS tab bars, one-note purple/blue palettes, beige-only palettes, card-inside-card nesting, hidden brand logo, tiny touch targets, and persistent controls that block the lead form.

Option 4 - Booking-First Split Sheet

name: Booking-First Split Sheet
summary: Rework the mobile menu around the primary customer action: checking availability. The open state presents a compact nav list plus a booking-focused action area, making the CTA prominent without letting controls block the rest of the landing page.
why_it_fits: The screenshots show two important actions competing: Menu and Sprawdź dostępność terminu. This direction clarifies the hierarchy by keeping navigation simple and making Sprawdź termin the clear commercial action inside the open menu.
mobile_closed_state: Header has logo and wordmark left, then two compact controls on the right: a small strawberry-red Termin chip and a cream icon-only or short-label menu button. On very narrow screens, keep Menu text but avoid a huge pill.
mobile_open_state: A split sheet opens below the header. Top area contains the nav links in a clean two-column or single-column layout depending on available space. Bottom area is a warm cocoa booking card with date/check availability messaging, phone number, and the main red CTA. The sheet should be less tall than the current open panel and avoid stacking multiple large bordered boxes.
buttons: Termin chip is the primary quick action in closed state. Open-state CTA is larger and red. Phone button is secondary. Menu close button is cream with cocoa icon and Zamknij. Link buttons are simple text rows with generous tap areas.
states: Closed with visible quick booking chip, open menu, close state, focus-visible, active link, CTA pressed state, and mobile viewport with hero content still visible below. Ensure controls do not remain fixed over the lead form after the hero section.
accessibility: Two controls in the header must have distinct labels: Sprawdź termin and Otwórz menu. Avoid duplicate ambiguous buttons. Use logical tab order: logo, booking chip, menu, close, links, phone, CTA. Maintain 44px minimum touch size even for the compact chip.
implementation_notes: In Header.tsx, add an optional mobile quick CTA rendered from siteContent.ts. CSS should use container queries or breakpoint rules to collapse the quick CTA if space is tight. Add tokens for compact CTA height, split sheet padding, and booking panel background. Confirm that fixed header z-index does not cover form inputs lower on the page.
risks: Adding a second header control can crowd the mobile header if not carefully sized. The quick booking chip must not hide or shrink the logo, because brand recognition is important in the current design.
gpt_image_20_prompt: |
Create a 390x844 mobile UI mockup board for Strawberry Group showing BOTH states in one readable mobile screenshot composition: the closed top navigation at the top and the open navigation state below it in the same 390x844 frame. Design direction: Booking-First Split Sheet.

Brand context: premium Polish event dessert stand offering strawberries in chocolate. Preserve a dark chocolate/cocoa header, thin gold accent, warm cream surfaces, strawberry-red primary CTA, generated strawberry logo, Strawberry Group S.C. wordmark, and elegant event tone.

Closed state: sticky dark cocoa header with logo and wordmark on the left. On the right, show a compact strawberry-red Termin chip and a smaller warm-cream Menu button with hamburger icon. Keep both controls readable and at least 44px tall, without crowding the logo.

Open state: below the header, show a split navigation sheet. The upper area has simple large nav links: Oferta, Pakiety, Jak działamy, Eventy, Kontakt, using clean rows and subtle gold dividers. The lower area is a warm cocoa booking-focused panel with KONTAKT BEZPOŚREDNI, +48 514 214 567, and a prominent strawberry-red Sprawdź termin CTA. Include a clear Zamknij close state in the top control.

Make the CTA hierarchy obvious: booking first, navigation second, while keeping the hero background visible and not blocking future lead form areas. Avoid unreadable contact sheets, fake browser chrome, stock-photo collage, decorative orbs/blobs/bokeh, irrelevant device mockups, copied proprietary assets, generic SaaS tab bars, one-note purple/blue palettes, beige-only palettes, card-inside-card nesting, hidden brand logo, tiny touch targets, and persistent controls that block the lead form.

Option 5 - Floating Cocoa Command Bar

name: Floating Cocoa Command Bar
summary: Move from a large header menu pill to a compact floating command bar beneath the logo row. The closed state separates brand identity from actions, and the open state expands the command bar into a soft cocoa panel with navigation and booking actions.
why_it_fits: The current header is visually strong but cramped on mobile because the logo and oversized menu pill share one row. This direction gives the brand its own calm row and places mobile actions in a controlled floating bar that feels premium and intentional.
mobile_closed_state: Top row is a slim dark cocoa brand header with logo and wordmark. Directly below, a floating rounded cocoa/cream command bar contains Menu and Sprawdź termin as two clear controls. The bar overlaps the hero slightly but does not obscure the main headline.
mobile_open_state: The command bar expands downward into a rounded cocoa panel. The top of the panel keeps two actions: Zamknij and Sprawdź termin. Links appear below as a simple vertical list with cream text, gold separators, and one subtle strawberry-red accent. Phone action is placed at the bottom as a secondary cream-outline pill.
buttons: Command bar buttons use compact segmented styling: cream Menu, red Sprawdź termin, and dark cocoa container. Close state uses X icon plus Zamknij. Avoid large full-width pills in the header; reserve full-width treatment for the expanded CTA only if needed.
states: Closed command bar, expanded command panel, sticky behavior at top, focus-visible, segment pressed states, active link, and scroll behavior once the user moves beyond the hero. The expanded panel should collapse after link click.
accessibility: Because this introduces a second row, ensure heading content is not hidden under the sticky header by adding proper top padding. Use descriptive button labels and avoid icon-only controls. The expanded panel should have a clear accessible name such as Nawigacja główna.
implementation_notes: In Header.tsx, split mobile header into BrandRow and MobileCommandBar. Use global.css to calculate sticky offsets and prevent overlap with anchor targets. Add tokens.css variables for command bar radius, segmented button gap, sticky offset, and panel shadow. Keep content-driven labels in siteContent.ts.
risks: The floating bar is the boldest layout change and must be tested against the hero headline so it does not cover key text. It may require extra spacing at the top of the hero on mobile.
gpt_image_20_prompt: |
Create a 390x844 mobile UI mockup board for Strawberry Group showing BOTH states in one readable mobile screenshot composition: the closed top navigation at the top and the open navigation state below it in the same 390x844 frame. Design direction: Floating Cocoa Command Bar.

Brand context: premium Polish event dessert stand offering strawberries in chocolate. Preserve a dark chocolate/cocoa header, thin gold accent, warm cream surfaces, strawberry-red primary CTA, generated strawberry logo, Strawberry Group S.C. wordmark, and elegant event tone.

Closed state: show a slim dark cocoa brand row with the strawberry logo and Strawberry Group S.C. wordmark. Under it, place a floating rounded command bar that slightly overlaps the hero image but does not cover the headline. The command bar contains a cream Menu segment with hamburger icon and a strawberry-red Sprawdź termin segment.

Open state: the floating command bar expands into a rounded cocoa navigation panel. The top control changes to Zamknij with an X icon while the red booking action remains visible. Below, show large readable links: Oferta, Pakiety, Jak działamy, Eventy, Kontakt, with thin gold separators and cream typography. At the bottom, add a secondary phone pill +48 514 214 567.

Keep the design premium, warm, chocolate-toned, and clearly connected to the landing page hero. Avoid unreadable contact sheets, fake browser chrome, stock-photo collage, decorative orbs/blobs/bokeh, irrelevant device mockups, copied proprietary assets, generic SaaS tab bars, one-note purple/blue palettes, beige-only palettes, card-inside-card nesting, hidden brand logo, tiny touch targets, and persistent controls that block the lead form.