# GPT-5.5 Pro Verification Prompt: Strawberry Group Motion Plan

Jestes GPT-5.5 Pro / Extended Pro w projekcie ChatGPT `praca Daniel`.

Twoje zadanie: zweryfikuj motion plan i prompt pack przygotowany dla landing page Strawberry Group. To jest checkpoint przed wygenerowaniem mockupow/storyboardow i przed implementacja GSAP/SVG/smooth scroll.

## Materialy

Dolaczam:
- motion plan + gpt-image-20 prompt pack: `2026-05-19-gpt-55-pro-motion-mockup-response.md`
- screenshoty referencyjne desktop/mobile calego kontekstu strony:
  - hero desktop
  - pakiety desktop
  - galeria desktop
  - kontakt desktop
  - modal kalkulatora desktop
  - modal pakietow desktop
  - hero mobile
  - pakiety mobile
  - galeria mobile
  - kontakt mobile

## Kontekst

Strona jest juz mocno dopracowana wizualnie: premium event/gastronomia, editorial serif, ivory/cocoa/red, duze zdjecia truskawek w czekoladzie, header/floating CTA, sekcja pakietow ze scroll narrative, galeria karuzelowa, kalkulator/modal i formularz.

Uzytkownik chce:
- fajne, ale spokojne animacje SVG i GSAP,
- smooth scroll,
- mockupy/storyboardy animacji wygenerowane pozniej z promptow,
- brak przebudowy layoutu i brak ryzyka zepsucia obecnych dopracowanych sekcji.

## Zweryfikuj

Ocen plan i prompty jak senior motion designer + senior UI/UX designer.

Sprawdz:
1. Czy motion thesis pasuje do strony i marki.
2. Czy lista `Do not animate` chroni obecny layout przed typowymi bledami.
3. Czy signature animation `chocolate-flow stroke` ma sens i nie idzie w cartoon/krople/dekoracje.
4. Czy motion system jest praktyczny do wdrozenia w React/Vite, bez layout shiftu.
5. Czy `gpt-image-20` prompty sa wystarczajaco precyzyjne, screenshot-driven i nie prowadza do redesignu UI.
6. Czy recommended first mockups sa dobrze dobrane.
7. Czy implementation plan jest bezpieczny technicznie: GSAP tylko tam gdzie potrzebny, CSS tam gdzie wystarczy, reduced-motion fallback.
8. Czy verification plan ma wystarczajace kryteria PASS/FAIL.

## Oczekiwany format odpowiedzi

Podaj:

1. Verdict: `APPROVE`, `APPROVE WITH CHANGES`, albo `BLOCK`.
2. Najwazniejsze ryzyka, maksymalnie 8 punktow.
3. Konkretne poprawki do prompt packa, jesli sa potrzebne.
4. Konkretne poprawki do implementation planu, jesli sa potrzebne.
5. Finalna lista 5 promptow/mockupow, ktore powinny isc jako pierwsze.
6. Finalne kryteria pass/fail dla post-change GPT Pro Review.

Nie implementuj kodu. Nie projektuj od nowa calej strony. Zweryfikuj tylko plan i prompty.
