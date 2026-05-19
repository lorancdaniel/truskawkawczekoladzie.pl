# GPT-5.5 Pro Motion Plan Verification Response

- Conversation: https://chatgpt.com/c/6a0c8263-7abc-8387-98b2-53d0aebc2f47
- Captured: 2026-05-19T16:23:36.568Z
- Source title: Projekt animacji landing page
- Note: persistent Chrome fresh upload was blocked by ChatGPT human verification after primary upload succeeded; verification was sent as a follow-up in the same project conversation that already contained the screenshot evidence pack.

---

Show less
Thought for 5m 24s
1. Verdict: APPROVE WITH CHANGES

Plan jest kierunkowo bardzo dobry: pasuje do marki, chroni istniejący layout, nie przesadza z GSAP i dobrze traktuje reduced motion. Najważniejsza korekta: prompt pack powinien jeszcze mocniej zabezpieczać przed „redesignem przez generator” oraz przed storyboardami, które pokazują nieistniejące stany UI. Implementacyjnie trzeba dopisać kilka guardów: hysteresis dla header/floating CTA, brak initial hidden content przed JS, cleanup GSAP timelines i ostrożność z carousel clone reset.

2. Najważniejsze ryzyka

Prompt 4 / Packages może sprowokować halucynację kolejnego pakietu, bo screenshot pokazuje głównie Silver, a prompt mówi o przejściu do następnego aktywnego stanu. Lepiej pokazać aktywację aktualnej karty Silver niż wymyślać treść kolejnej karty.

Header → floating CTA handoff jest zbyt ważny, żeby zostawić go na później. Obecna logika headera jest złożona, więc ten storyboard powinien wejść do pierwszej piątki mockupów.

chocolate-flow stroke ma sens, ale musi pozostać abstrakcyjnym stroke’em. Każda sugestia „drip”, „liquid”, „splash” lub dosłownej czekolady pcha stronę w cartoon/dekorację.

GSAP może łatwo stać się nadmiarowy. Plan dobrze mówi „CSS first”, ale implementation plan powinien wyraźnie zakazać ScrollSmoother / globalnego smooth-scroll hijackingu na tym etapie.

Hero entrance nie może ukrywać treści do momentu załadowania JS. Jeśli klasy wejściowe będą ustawione źle, użytkownik zobaczy pusty hero albo opóźniony content.

Carousel micro-ruch może rozjechać się z infinite clone reset. Trzeba animować tylko child elements aktywnego realnego slajdu i wyłączać dodatkowe animacje podczas natychmiastowego resetu klona.

Backdrop blur w modalach może być kosztowny na mobile. Lepiej używać głównie opacity/dim, a blur traktować jako minimalny albo opcjonalny.

Reduced motion musi obejmować także JS smooth scroll. Sam CSS prefers-reduced-motion nie wystarczy, jeśli helper nadal wywołuje scrollIntoView({ behavior: "smooth" }).

3. Konkretne poprawki do prompt packa
Globalny prefix do doda­nia na początku każdego promptu

Dodaj przed każdym promptem taki blok:

Use the supplied screenshot as a locked visual reference. Preserve the existing UI exactly: same layout, typography scale, line breaks, colors, spacing, button shapes, shadows, card sizes, photo crop, logo/header, and visible text. This is a motion storyboard, not a redesign.

All motion indicators must be annotation overlays only: translucent ghosts, thin arrows, tiny timing labels, and stroke direction marks. Do not add new UI components, decorative elements, new illustrations, new product content, new icons, new badges, or altered copy.

Keep the original page underneath crisp and readable. No motion blur, no cinematic effects, no extra glow, no bokeh, no blobs, no confetti, no chocolate drips, no liquid splashes.

To powinno znacząco ograniczyć ryzyko, że gpt-image-20 potraktuje prompt jak zadanie kreatywnego redesignu.

Prompt 1 — Desktop hero

Dobry. Dodałbym tylko:

Do not split or change the hero headline line breaks. The line-reveal masks must follow the exact existing lines from the screenshot.

I doprecyzowanie:

The annotation layer should be subtle and secondary. The final frame must still look like the real landing page first, and a motion spec second.
Prompt 2 — Mobile hero

Dobry, ale nie powinien iść w pierwszej piątce, jeśli masz tylko pięć slotów. Mobile hero jest ważny, ale można go zrobić zaraz po pierwszej fali. Do promptu dodaj:

Do not increase the hero height, do not move the CTA stack lower, and do not create horizontal overflow. Preserve the current mobile crop and exact CTA positions.
Prompt 3 — Header/floating CTA handoff

Ten prompt powinien wejść do pierwszej piątki. Obecna wersja jest dobra, ale używanie dwóch screenshotów może sprowokować generator do sklejania dwóch różnych widoków. Lepiej zrobić storyboard z mini-keyframes.

Zmień deliverable na:

Deliverable: one 1920x1080 technical storyboard with three small horizontal keyframes inside the same canvas: 
A) header CTA active, floating CTA hidden;
B) 120ms crossfade handoff;
C) floating CTA active, header CTA faded.
Use the real page style from the supplied screenshots, but do not invent a new layout.

Dodaj:

The three keyframes must preserve the same page geometry. Only CTA opacity, y position, and scale annotations change.
Prompt 4 — Packages scroll narrative

Ten prompt wymaga najważniejszej korekty. Nie każ generatorowi pokazywać kolejnego pakietu, jeśli nie ma go w referencji.

Zamiast:

The package list at bottom-left changes active state from “01 Silver” toward the next package...

daj:

Show the current Silver package becoming active during scroll. Use a ghosted previous neutral state of the same Silver card and a solid final active state. Do not show or invent the next package card content.

Zamiast:

Card text transitions opacity + y 8px; do not move the whole card.

daj:

Only the existing visible Silver card text may receive ghosted opacity/y annotations. Do not alter or replace the copy.

Dodaj też:

Do not create a pinned-scroll effect in the image. This is a calm active-state transition spec, not a new scrollytelling layout.
Prompt 5 — Gallery carousel

Dobry, ale warto ograniczyć motion blur i ryzyko blank frames.

Dodaj:

Do not use motion blur. Show movement through crisp translucent ghost outlines only.

Dodaj też:

During the clone reset, no extra content animation should be shown. The storyboard should communicate that the infinite loop remains visually seamless.
Prompt 6 — Calculator modal

Dobry i powinien iść w pierwszej piątce. Doprecyzowałbym blur:

Backdrop should be primarily opacity dimming. If blur is shown, keep it extremely subtle and avoid a heavy frosted-glass effect.

Dodaj focus guidance:

Show a small focus note indicating that focus lands on the modal heading or first meaningful interactive element after the entrance completes.
Prompt 7 — Package modal

Dobry jako druga fala. Dodałbym:

Do not dim Silver and Platinum so much that comparison becomes harder. They should remain fully readable.
Prompt 8 — Contact form

Dobry i powinien iść w pierwszej piątce. Najważniejsza poprawka: success/error nie może sugerować layout shift.

Zmień:

Success state: a calm success confirmation area appears near the form bottom/top of button area...

na:

Success state: show a calm confirmation in a reserved or overlay-style area that does not push the form layout down. The submit button area and floating CTA must remain stable.

Dodaj:

Validation messages should appear in pre-reserved space or as a non-disruptive inline overlay. Do not move neighboring fields.
4. Konkretne poprawki do implementation planu

Dodać motion guard jako pierwszy krok techniczny
Centralnie wykrywać prefers-reduced-motion i używać go zarówno w CSS, jak i w helperach JS. Reduced motion ma wyłączać: smooth scroll, parallax/scale settle, stagger, stroke draw, carousel micro-pan i scrub.

Nie używać ScrollSmoother / globalnego smooth scroll hijackingu w pierwszej implementacji
Smooth anchor scroll powinien być przewidywalny, krótki i możliwy do przerwania. GSAP ScrollTo może wejść tylko dla kontrolowanego anchor scrolla, nie dla całej strony.

Dopisać zasadę: no initial invisible content before JS
Hero i sekcje nie mogą startować jako niewidoczne, jeśli JS się opóźni. Animacje wejścia powinny być progressive enhancement, nie warunek zobaczenia treści.

Header/floating CTA potrzebuje hysteresis
Próg przełączenia powinien mieć margines albo stabilizację, żeby nie było migotania przy scrollowaniu wokół jednego punktu. To jest ważniejsze niż bardziej wyrafinowany easing.

GSAP timelines muszą być scoped i sprzątane po unmount
Szczególnie modale, hero i ewentualne packages. Review powinno sprawdzać brak warningów i brak aktywnych tweenów po zamknięciu modala.

ScrollTrigger tylko po potwierdzeniu wartości w mockupach
Packages mogą zacząć od IntersectionObserver i klas aktywnych. ScrollTrigger dopiero, jeśli storyboard pokaże, że synchronizowany motion daje realną wartość.

Carousel: animacje tylko wewnątrz slajdu, nie na tracku poza istniejącą logiką
Track/infinite loop zostaje nietknięty. Dodatkowe animacje nie mogą odpalać się podczas clone reset.

Modal motion powiązać z focus management
Po open: focus do headingu lub pierwszego sensownego elementu. Po step change: focus do headingu kroku albo wybranego control. Po close: focus wraca do triggera.

Mobile form/floating CTA
Na mobile sprawdzić stan z aktywną klawiaturą. Floating CTA nie może zasłaniać pól, checkboxa ani submit buttona; może wymagać czasowego ukrycia/redukcji podczas focus w formularzu.

Backdrop/filter performance
Unikać ciężkiego backdrop-filter jako obowiązkowego efektu. Na słabszych urządzeniach dim opacity wystarczy.

5. Finalna lista 5 promptów/mockupów, które powinny iść jako pierwsze

Prompt 1 — Desktop hero page-load storyboard
Definiuje główny język ruchu, timing i premium ton.

Prompt 3 — Header to floating CTA handoff
Największe ryzyko logiczne i konwersyjne. Powinien wejść wcześniej niż mobile hero.

Prompt 4 — Packages desktop scroll narrative
Najtrudniejsza sekcja do utrzymania premium bez chaosu.

Prompt 6 — Calculator modal entrance and step focus
Kluczowy decyzyjny flow użytkownika.

Prompt 8 — Contact form focus, validation, submit success
Najbliżej konwersji; musi być czytelny i stabilny.

Następny po pierwszej piątce: Prompt 2 — Mobile hero. Mobile hero jest ważny, ale przy limicie pięciu pierwszych mockupów większe ryzyko ma header/floating CTA handoff.

6. Finalne kryteria pass/fail dla post-change GPT Pro Review
Global motion

PASS

Ruch wygląda premium, spokojnie i gastronomicznie/eventowo.

Animacje wzmacniają decyzję: oferta → pakiety → styl → kalkulator/formularz.

Brak bounce, elastic, confetti, blobs, bokeh, cartoon chocolate, drip/splash efektów.

Animowane są głównie transform, opacity i SVG stroke.

FAIL

Motion staje się dekoracją, demo efektów lub reklamową animacją.

Pojawia się jakikolwiek layout shift przez animowanie wymiarów, spacingu albo reflow tekstu.

Strona wygląda mniej premium niż przed animacjami.

Hero

PASS

Hero entrance kończy się w około 700–850 ms.

Header, headline, body, CTA i statystyki pojawiają się w czytelnej kolejności.

Duży headline zachowuje line breaks i nie skacze.

CTA jest dostępne szybko, bez czekania na długi reveal.

FAIL

Tekst zmienia układ podczas animacji.

Hero photo robi ciężki parallax/zoom.

Content jest niewidoczny przed załadowaniem JS.

Mobile hero ma overflow albo CTA spada za nisko.

Header/floating CTA

PASS

Handoff jest płynny, krótki i bez flickera.

Nie ma agresywnego morphowania między oddalonymi elementami.

Floating CTA nie zasłania formularza, modali ani kluczowych treści.

Przy scrollowaniu góra/dół próg przełączenia jest stabilny.

FAIL

CTA migocze przy granicy scrolla.

Dwa CTA konkurują wizualnie zbyt długo.

Floating CTA blokuje submit, checkbox, pola formularza lub modal controls.

Handoff wymaga przebudowy layoutu/headera.

Packages

PASS

Active state pomaga porównać pakiety.

Karta i ceny są stabilne.

Stroke/border emphasis jest subtelny i premium.

Mobile pozostaje prosty, bez ciężkiego scrollytellingu.

FAIL

Sekcja robi się chaotyczna wertykalnie.

Karty „latają”, skalują się agresywnie albo zmieniają wysokość.

Cena lub copy animują się w sposób utrudniający czytanie.

ScrollTrigger/observer wybiera zły aktywny pakiet przy szybkim scrollu.

Gallery carousel

PASS

Infinite loop działa bez pustych slajdów.

Clone reset jest niewidoczny.

Dots, tekst i obraz są zsynchronizowane.

Micro-pan obrazu jest bardzo subtelny albo wyłączony, jeśli szkodzi.

FAIL

Pojawiają się blank frames.

Track reset jest widoczny.

Tekst aktywnego slajdu nie zgadza się z obrazem.

Animacje child elements opóźniają zmianę slajdu.

Modals

PASS

Modal open/close jest krótki, spokojny i stabilny.

Step transitions są czytelne.

Focus trap, Escape, close button i return focus działają.

Body scroll lock działa.

Reduced motion usuwa scale/y/stagger.

FAIL

Modal popuje agresywnie, bounce’uje albo zoomuje.

Focus ginie po zmianie kroku.

Strona scrolluje się pod modalem.

Backdrop blur jest ciężki i powoduje jank.

Contact form

PASS

Focus state jest wyraźny, elegancki i keyboard-friendly.

Validation pojawia się bez shake i bez layout jump.

Submit/loading/success są spokojne i jednoznaczne.

Floating CTA nie blokuje interakcji z formularzem.

FAIL

Pola lub sąsiednie elementy przesuwają się przy błędach.

Brak focus-visible.

Success/error zakrywa lub przesuwa formularz.

Submit state wygląda jak nieskończony spinner bez feedbacku.

Smooth scroll / anchors

PASS

Anchor scroll jest przewidywalny, krótki i ląduje z poprawnym offsetem pod header.

User input może przerwać scroll.

Reduced motion daje instant jump.

Wszystkie CTA prowadzą do właściwych sekcji.

FAIL

Scroll jest zbyt wolny, gumowy albo scroll-jackingowy.

Anchor ląduje pod headerem/floating CTA.

Reduced motion nadal robi smooth scroll.

Scroll walczy z browserem lub mobile keyboard.

Reduced motion

PASS

Po prefers-reduced-motion: reduce wyłączone są: smooth scroll, hero scale, parallax/scrub, stagger, stroke draw i carousel micro-pan.

Treści pozostają natychmiast czytelne.

Focus, validation i stany aktywne nadal są widoczne.

FAIL

Jakakolwiek główna animacja dalej działa w pełnej wersji.

Reduced motion psuje affordance albo ukrywa stan aktywny.

JS ignoruje preferencję mimo poprawnego CSS.

Technical stability

PASS

Zero console errors/warnings.

Brak GSAP timeline leaks po unmount/close.

Brak widocznego CLS od motion.

Interakcje działają na desktop i mobile.

Carousel przechodzi minimum 30 next/prev bez desync.

FAIL

Console errors, GSAP warnings, memory/tween leaks.

Jank przy modalach, carouselu lub scrollu.

Animacje blokują kliknięcia.

Zmiany motion wymagają przebudowy layoutu zamiast progressive enhancement.

DEVELOPER MODE

Extended Pro
ChatGPT can make mistakes. Check important info.