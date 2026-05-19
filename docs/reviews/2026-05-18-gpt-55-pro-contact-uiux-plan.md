# GPT-5.5 Pro Contact UI/UX Plan

Conversation: https://chatgpt.com/c/6a0b2a13-d65c-838b-a80d-e91e784c2293

Upload evidence: chrome-chatgpt-files-uploaded-prompt-sent; persistentChromeChatGptLogin=verified; persistentChromeChatGptDeveloperMode=verified; 16 readable PNG screenshots uploaded.

Prompt: /Users/danielloranc/Documents/truskawka/docs/reviews/2026-05-18-gpt-55-pro-contact-uiux-prompt.md

Screenshot manifest: /Users/danielloranc/Documents/truskawka/docs/reviews/assets/2026-05-18-contact-uiux/manifest.json

## GPT-5.5 Pro Response

Najważniejsza rekomendacja

Sekcja #kontakt nie powinna zostać jako luźny split: wielki tekst po lewej, karta formularza po prawej i dużo pustej przestrzeni. Najlepszy kierunek to premium conversion panel: pełnoszerokie cream tło, a w środku duży, zamknięty panel inspirowany sekcją kalkulatora — ciemny cocoa panel informacyjny po lewej + jasny, dobrze pogrupowany formularz po prawej.

To rozwiązuje trzy rzeczy naraz: kontakt staje się mocnym finałem landing page, formularz jest bardziej skanowalny, a przejście do ciemnego footera wygląda intencjonalnie, bez robienia z footera kolejnego CTA.

1. Problemy UI/UX P0/P1/P2/P3
P0 — krytyczne / do weryfikacji przed wdrożeniem

P0.1 — wejście na #kontakt wygląda niestabilnie lub niejednoznacznie.
Na desktopowym default view widać fragment poprzedniej grafiki i dużą pustą przestrzeń zanim zaczyna się właściwy kontakt. Dodatkowo mobilne PNG opisane jako top/middle/bottom kontaktu pokazują wcześniejsze sekcje strony, nie #kontakt. Jeżeli to realne zachowanie anchor route, użytkownik po kliknięciu „Sprawdź dostępność terminu” może nie trafić do formularza.

Decyzja: poprawić scroll-margin-top, top padding sekcji i punkt startu #kontakt, a po zmianie koniecznie zrobić ponowny mobile screenshot wejścia na /#kontakt.

P1 — główne problemy konwersji i architektury

P1.1 — sekcja nie ma wystarczająco mocnej architektury końcowego endpointu.
Obecny układ wygląda bardziej jak formularz doklejony na końcu strony niż świadomie zaprojektowany finał ścieżki: po hero, pakietach, kalkulatorze i galerii użytkownik powinien dostać jasny, mocny panel „teraz zostaw zapytanie”.

P1.2 — formularz nie ma wewnętrznej hierarchii.
Karta zaczyna się od pól, bez tytułu formularza, bez informacji co użytkownik dostanie po wysłaniu i bez grupowania typu: wydarzenie, kontakt, preferencje.

P1.3 — wszystkie pola są traktowane jak równie ważne.
Dla wyceny kluczowe są: data, lokalizacja, liczba gości, kontakt i zgoda. Pola typu „preferowany pakiet”, „typ wydarzenia” i szczegóły dodatkowe są pomocne, ale nie powinny wizualnie i walidacyjnie mieć tej samej wagi, chyba że biznesowo naprawdę są obowiązkowe.

P1.4 — walidacja tworzy zbyt duży ciężar poznawczy.
Na desktopie error summary pokazuje 10 pozycji. Na mobile zajmuje bardzo dużo miejsca i spycha pola. To działa formalnie, ale UX-owo komunikuje: „formularz jest trudny”.

P2 — problemy jakości, rytmu i relacji z footerem

P2.1 — lewa kolumna jest niedociążona.
Po dużym nagłówku i dwóch chipach kontaktowych zostaje ogromny pusty obszar. Prawa kolumna pracuje, lewa przestaje pomagać.

P2.2 — przejście do footera jest zbyt mechaniczne.
Footer jest poprawnie directory/sign-off, ale kontakt nie domyka się wystarczająco mocno. Między formularzem a footerem widać „pusty koniec”, nie zaprojektowane zamknięcie.

P2.3 — success state jest poprawny, ale nie dość jednoznaczny.
Komunikat sukcesu jest widoczny, jednak formularz poniżej wygląda jak pusty, aktywny formularz. Użytkownik może mieć sekundową wątpliwość, czy zapytanie zostało faktycznie wysłane, czy formularz się po prostu wyczyścił.

P2.4 — direct contact jest dobry, ale za mało strukturalny.
Telefon i e-mail są obecne, lecz powinny działać jako „szybka alternatywa” i element zaufania, nie tylko dwa pigułkowe linki pod nagłówkiem.

P3 — polish / micro-UX

P3.1 — focus + error state są czytelne, ale optycznie ciężkie.
Czerwone obramowanie, czerwone błędy i gruby focus ring razem robią dużo wizualnego szumu.

P3.2 — tekst e-maila na mobile powinien mieć kontrolowane łamanie i rozmiar.
W mobilnym widoku walidacji chip z e-mailem jest bardzo dominujący i zajmuje sporo miejsca przed formularzem.

P3.3 — textarea jest zbyt duża względem wartości pola.
„Informacje dodatkowe” nie powinny wizualnie dominować nad datą, lokalizacją i liczbą gości.

P3.4 — brakuje jasnego rozróżnienia pól wymaganych i opcjonalnych.
Użytkownik dowiaduje się o tym dopiero po błędzie.

2. Screenshot-driven recommendations
Screenshot / stan	Obserwacja	Problem użytkownika	Minimalistyczna zmiana	Oczekiwany efekt	Ryzyko
Desktop default contact-desktop-1920x1080-default	Widać fragment poprzedniej grafiki, dużo pustego cream obszaru, dopiero niżej nagłówek i formularz.	Użytkownik po anchorze nie dostaje natychmiast jasnego endpointu. Sekcja wygląda jak zaczęta za późno.	Zmniejszyć top padding, ustawić stabilny scroll-margin-top, usunąć przypadkowy „orphan” poprzedniej grafiki z pierwszego widoku.	Po kliknięciu CTA użytkownik od razu widzi: nagłówek kontaktu, szybki kontakt i formularz.	Zbyt agresywne zmniejszenie paddingu może pogorszyć oddech premium. Utrzymać 88–140 px top rhythm, nie 20–40 px.
Desktop default	Karta formularza zaczyna się od pól bez tytułu.	Użytkownik nie wie, ile to potrwa i co dokładnie otrzyma po wysłaniu.	Dodać header karty: „Zapytanie o termin i wycenę” + jedno zdanie o wyniku.	Formularz staje się zadaniem, a nie zbiorem pól.	Header zwiększa wysokość formularza, więc trzeba jednocześnie zmniejszyć inne odstępy i textarea.
Desktop footer closure contact-desktop-1920x1080-form-footer-closure	Lewa strona jest pusta, prawa kończy formularz, footer zaczyna się po dużej cream przestrzeni.	Sekcja nie ma silnego zamknięcia; footer wygląda jak kolejny blok po przerwie.	Zamknąć kontakt w jednym dużym panelu: cocoa intro + cream form. Footer zostawić directory.	Ciemny panel kontaktu optycznie przygotuje wejście w ciemny footer.	Panel może być zbyt ciężki, jeśli lewa strona będzie przeładowana. Trzymać tylko copy, contact links i krótkie „co przygotować”.
Desktop validation contact-desktop-1920x1080-validation-errors	Error summary z 10 pozycjami dominuje nad formularzem.	Użytkownik widzi dużo błędów i może zrezygnować.	Zmniejszyć liczbę pól wymaganych; summary skrócić do najważniejszych błędów + per-field errors.	Mniej frustracji, większa szansa poprawienia formularza.	Mniej wymaganych pól może dawać mniej danych. Zabezpieczenie: miękkie helpery i opcje „Nie wiem”.
Desktop select focus contact-desktop-1920x1080-select-focus	Focus jest widoczny, ale przy error state robi podwójny czerwony ciężar.	Stan jest dostępny, ale wizualnie agresywny.	Rozdzielić error border i focus ring: jeden ring focus, jeden border error, bez multiplikacji.	Lepsza czytelność i bardziej premium feel.	Za subtelny focus pogorszy dostępność. Ring musi zostać mocny.
Desktop success contact-desktop-1920x1080-success	Sukces widoczny na górze, ale pod nim pusty formularz wygląda jak gotowy do kolejnej akcji.	Użytkownik może mieć wątpliwość, czy zapytanie zostało wysłane.	Po sukcesie pokazać większy success panel z „co dalej” albo zachować wysłane dane jako read-only/summary.	Większa pewność i spokojniejsze domknięcie procesu.	Zastąpienie formularza sukces card utrudni wysłanie kolejnego zapytania. Dodać mały link „Wyślij kolejne zapytanie”.
Mobile validation/focus	Komunikat błędu i pola są czytelne, ale bardzo wysokie.	Na 390 px użytkownik przewija dużo zanim poprawi wszystkie pola.	Mobile summary: maks. 3 linki + informacja „pozostałe pola oznaczone poniżej”; pola full-width, mniejsze przerwy, scroll-margin-top na polach.	Mniej przeciążenia i lepsza korekta błędów.	Zbyt skondensowany summary może ukryć skalę problemu. Per-field errors muszą zostać.
Mobile files opisane jako contact top/middle/bottom	Dostarczone PNG pokazują hero/ofertę/o nas, nie default kontakt.	Nie da się potwierdzić mobile default wejścia do kontaktu na podstawie tych plików.	Po wdrożeniu zrobić ponowny screenshot /#kontakt na 390x844: top, form middle, bottom/footer.	Pewna weryfikacja anchor behavior i układu.	Brak — to konieczny QA artifact.
3. Visual architecture plan dla redesignu #kontakt
Kierunek układu

Rekomendowany układ:

Full-width cream section → centered conversion panel → dark footer.

Struktura:

TypeScript
<section id="kontakt" className="contact-section" aria-labelledby="contact-title">
  <div className="contact-shell">
    <div className="contact-panel">
      <aside className="contact-copy">
        ...
      </aside>

      <div className="contact-form-wrap">
        <LeadForm />
      </div>
    </div>
  </div>
</section>
Desktop grid

Dla 1920 px:

CSS
.contact-section {
  background: var(--cream);
  padding-block-start: clamp(96px, 8vw, 144px);
  padding-block-end: clamp(88px, 7vw, 128px);
  scroll-margin-top: calc(var(--header-height, 88px) + 24px);
}

.contact-shell {
  width: min(1800px, calc(100% - 104px));
  margin-inline: auto;
}

.contact-panel {
  display: grid;
  grid-template-columns: minmax(420px, 0.85fr) minmax(680px, 1.15fr);
  border: 1px solid rgba(64, 38, 28, 0.16);
  border-radius: 28px;
  overflow: hidden;
}

Na desktopie panel powinien mieć mniej więcej:

lewa część: 38–42% szerokości,

prawa część: 58–62% szerokości,

bez dużego pustego gapu między kolumnami,

prawa karta formularza nie powinna „pływać” samotnie.

Lewa część: contact-copy

Tło: cocoa/dark gradient, podobne do sekcji procesu/kalkulatora, ale mniej dramatyczne niż hero.

Hierarchia:

Eyebrow: WYCENA

H2 krótszy niż obecnie:
„Sprawdź termin i koszt stoiska.”

Body copy:
„Podaj datę, lokalizację i liczbę gości. Wrócimy z dostępnością, rekomendowanym pakietem i orientacyjną wyceną.”

Direct contact block:

Telefon jako mocniejszy link.

E-mail jako drugi kanał.

Krótki preparation block:

„Warto przygotować: data, miasto, liczba gości.”

„Nie znasz pakietu? Wybierz „Nie wiem”.”

To nie jest ozdobnik — ten blok redukuje niepewność przed formularzem.

Prawa część: LeadForm

Formularz powinien dostać własny header:

Zapytanie o stoisko
Termin, goście, lokalizacja — wystarczy, żeby zacząć.

Następnie grupy:

Grupa 1: Wydarzenie

Najpierw pola, które są bezpośrednio związane z dostępnością i kosztem:

Data wydarzenia

Miasto / lokalizacja wydarzenia

Szacowana liczba gości

Typ wydarzenia

Grupa 2: Kontakt

Imię i nazwisko

Telefon

Email

Rekomendacja product UX: wymagać telefonu albo emaila, niekoniecznie obu. Jeżeli biznesowo oba są konieczne, oznaczyć to jawnie już przy labelu, a nie dopiero w walidacji.

Grupa 3: Preferencje

Preferowany pakiet

Informacje dodatkowe

Informacje dodatkowe powinny być opcjonalne. To pole może mieć helper copy:
„Np. godziny obsługi, branding, kilka lokalizacji, uwagi logistyczne.”

Gęstość formularza

Na desktopie:

CSS
.lead-form__grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  column-gap: 24px;
  row-gap: 18px;
}

.lead-form__field--full {
  grid-column: 1 / -1;
}

textarea {
  min-height: 128px;
}

Docelowo default desktop 1920x1080 powinien pokazać większość formularza bez poczucia, że użytkownik trafił w połowę sekcji.

Relacja kontakt–footer

Footer zostaje directory/sign-off.

Zmienić tylko relację wizualną:

kontakt kończy się domkniętym panelem,

footer zaczyna się bez dodatkowego CTA,

między panelem kontaktu a footerem zostaje kontrolowany odstęp 80–120 px desktop / 56–72 px mobile,

można dodać subtelną linię lub cień separujący, ale nie nowy CTA.

4. Mobile / responsive plan dla 390x844
Stack order

Na mobile układ powinien iść tak:

WYCENA

H2

krótkie body copy

telefon + e-mail jako dwa pełnoszerokie, kompaktowe linki

mini blok „co przygotować”

formularz

footer directory

Nie zaczynać mobile od samego formularza bez kontekstu.

Breakpoint
CSS
@media (max-width: 960px) {
  .contact-panel {
    grid-template-columns: 1fr;
  }
}

Dla 390 px:

CSS
.contact-section {
  padding-block-start: 72px;
  padding-block-end: 64px;
}

.contact-shell {
  width: calc(100% - 32px);
}

.contact-copy,
.contact-form-wrap {
  padding: 28px 24px;
}

.contact-title {
  font-size: clamp(46px, 14vw, 64px);
  line-height: 0.95;
}
Mobile form

Na mobile wszystkie pola w jednej kolumnie:

CSS
.lead-form__grid {
  grid-template-columns: 1fr;
  row-gap: 16px;
}

input,
select,
textarea,
button {
  min-height: 48px;
  font-size: 16px;
}

Ważne: font-size: 16px dla inputów, żeby nie prowokować automatycznego zoomu na mobile.

Mobile validation

Po pustym submit:

focus idzie do error summary,

summary ma maksymalnie 3 główne linki,

reszta błędów jest przy polach,

pierwsze pole po summary powinno być widoczne w tym samym screenie albo tuż pod foldem,

linki w summary scrollują do pól z scroll-margin-top.

CSS
.lead-form [id] {
  scroll-margin-top: calc(var(--mobile-header-height, 96px) + 16px);
}
Mobile footer transition

Na mobile nie dodawać sticky CTA przy footerze. Formularz już jest CTA. Footer powinien wejść spokojnie jako directory:

po submit row: 56–72 px odstępu,

potem dark footer,

bez dodatkowego „Sprawdź termin” w footerze.

5. Senior UI designer pass
Centering / alignment

Obecnie kontakt jest szeroki, ale nie do końca „złożony”. Po redesignie:

lewa krawędź panelu ma siedzieć na tej samej osi co inne duże sekcje,

panel nie może być węższy optycznie niż kalkulator,

formularz nie powinien wyglądać jak osobna karta oderwana od copy,

H2 i form header powinny zaczynać się optycznie na podobnej wysokości.

Grid

Najlepszy rytm:

desktop: jeden panel 2-kolumnowy,

tablet: nadal 2 kolumny tylko do momentu, gdy prawa część ma minimum 620–680 px,

mobile: pełny stack.

Unikać układu: left 50% + right 50% przy długim formularzu. Formularz potrzebuje więcej szerokości.

Optical balance

Lewa część musi dostać funkcję, nie tylko tekst. Dlatego oprócz headingu powinna zawierać:

szybki kontakt,

krótkie „co przygotować”,

informację, że pakiet można dobrać później.

Wtedy przy długim formularzu lewa strona nie wygląda na pustą.

Spacing rhythm

Trzymać rytm 8 px:

sekcja: 96–144 px top, 88–128 px bottom,

panel padding desktop: 56–72 px,

panel padding mobile: 24–32 px,

grupy formularza: 28–36 px,

pola: 16–18 px gap,

error text: 6–8 px pod polem.

Typography

Zachować editorial serif dla H2. Formularz powinien być bardziej użytkowy:

label: sans, 14–15 px desktop, 16 px mobile, weight 700,

input text: 16 px,

helper/error: 13–14 px desktop, 15–16 px mobile,

H2 w kontakcie krótszy i bardziej decyzyjny niż obecnie.

Density

Obecny formularz jest wizualnie spokojny, ale za mało ustrukturyzowany. Po grupowaniu można go zrobić bardziej gęstym bez utraty premium feel.

Najważniejsze: nie powiększać formularza przez dodanie headera bez jednoczesnego ograniczenia pustych przestrzeni, textarea i liczby wymaganych błędów.

Component consistency

Direct contact chips powinny mieć taki sam radius i border logic jak inne pigułki strony.

Submit button powinien zostać brand red.

Secondary phone link przy submit może być tekstowy, nie drugi czerwony button.

Error/success surfaces powinny używać tej samej karty/panel logic co reszta strony.

Contrast

Cocoa left panel musi mieć:

cream text z dobrym kontrastem,

red accents tylko jako akcenty, nie duże bloki tekstu,

contact links czytelne także w hover/focus.

6. Accessibility i semantyka do zachowania/poprawy

Zachować:

natywne inputy, selecty, textarea,

natywne label relationships,

direct contact jako zwykłe tel: i mailto:,

success role="status" albo aria-live.

Poprawić:

Sekcja

TypeScript
<section id="kontakt" aria-labelledby="contact-title">

Formularz
Użyć fieldset i legend dla grup:

TypeScript
<fieldset>
  <legend>Wydarzenie</legend>
  ...
</fieldset>

Required / optional
Nie polegać tylko na kolorze albo błędzie po submit. Przy labelach dodać:

„wymagane”

albo „opcjonalne”

Walidacja

aria-invalid="true" na błędnych polach,

aria-describedby wskazujące error/helper text,

error summary z linkami do pól,

focus management: po submit z błędami focus na summary, po sukcesie focus na success message.

At least one contact method
Jeżeli email albo telefon są alternatywne, trzeba to opisać semantycznie:

Podaj telefon lub email, żebyśmy mogli wrócić z wyceną.

Focus states
Focus ring musi zostać mocny, ale nie powinien być wizualnie mylony z error state.

Touch targets
Na mobile:

input/button minimum 44–48 px wysokości,

checkbox minimum 24 px,

label checkboxa klikalny na całej szerokości tekstu.

7. Evidence limitations i dodatkowe screenshoty
Limitation

Trzy mobilne pliki opisane jako contact top/middle/bottom pokazują wcześniejsze sekcje strony, nie default #kontakt. Z tego powodu mobile default kontaktu i mobile footer transition nie są w pełni potwierdzone screenshotowo. Mobile validation i focus są natomiast czytelne i wystarczające do oceny stanu błędów.

Nie są też uchwycone:

mobile success,

loading/disabled submit,

natywne rozwinięte select menu,

mobile OS keyboard.

Czy potrzebne są dodatkowe screenshoty przed implementacją?

Nie jako blocker. Jest wystarczająco dużo danych, żeby wdrożyć redesign.

Wymagane po wdrożeniu przed akceptacją:

desktop default /#kontakt,

desktop validation,

desktop success,

desktop focus,

desktop contact/footer closure,

mobile /#kontakt top,

mobile form middle,

mobile form bottom + footer,

mobile validation,

mobile focus,

mobile success.

8. Czego nie ruszać teraz

Nie ruszać:

ogólnego brand direction: cream/cocoa/red, editorial serif, premium event feel,

hero, oferta, proces, pakiety, eventy, kalkulator i galeria poza ewentualnym spacingiem bezpośrednio przed kontaktem,

footera jako directory/sign-off,

numeru telefonu i e-maila,

natywnych controls formularza,

podstawowego local submit flow,

header offset/anchor behavior poza jego poprawą dla #kontakt,

nie dodawać CTA-heavy footera,

nie robić formularza w stylu SaaS dashboard albo generic CRM form.

9. Implementation order
Teraz

Naprawić wejście na #kontakt

scroll-margin-top,

top padding sekcji,

brak przypadkowego fragmentu galerii w pierwszym widoku kontaktu.

Przebudować ContactSection.tsx

nowy contact-shell,

contact-panel,

dark contact-copy,

jasny contact-form-wrap.

Dodać hierarchię copy

krótszy H2,

jedno konkretne zdanie o wyniku zapytania,

direct contact jako osobny blok,

mini „co przygotować”.

Przebudować LeadForm.tsx

header formularza,

fieldsets: wydarzenie, kontakt, preferencje,

lepsza kolejność pól,

helpery przy polach.

Zaktualizować validation.ts

ograniczyć wymagane pola,

Informacje dodatkowe jako opcjonalne,

rozważyć telefon albo email,

opcje „Nie wiem” jako realna droga bez błędu.

Poprawić error summary

desktop i mobile mniej przytłaczające,

linki do pól zachowane,

per-field errors zachowane.

Poprawić success state

success jako wyraźne domknięcie,

dodać „co dalej”,

nie zostawiać pustego formularza jako mylącego głównego widoku.

Dopiąć CSS w global.css

grid,

breakpoints,

field density,

focus/error/success states,

footer transition spacing.

Minimalna korekta Footer.tsx / footer CSS

tylko spacing/top relation,

bez nowych CTA.

Później

Preselect pakiet po kliknięciu „Zapytaj o Silver/Gold/Platinum”.

Analytics zdarzeń: start formularza, submit error, success, click tel/mail.

Backend lead capture / CRM integration.

Phone formatting i maska numeru.

Progressive form / modal z krokami, jeżeli formularz nadal okaże się zbyt długi.

Test A/B krótszego nagłówka kontaktu.

10. Acceptance criteria dla post-change screenshot verification
Desktop default — 1920x1080

Akceptacja, jeśli:

/#kontakt pokazuje właściwą sekcję kontaktu, nie fragment poprzedniej galerii jako główny element widoku,

w pierwszym viewport widać label, H2, direct contact i header formularza,

panel kontaktu jest wyrównany z globalnym gridem strony,

lewa część nie jest pusta po pierwszych 200–300 px,

formularz ma widoczne grupy i logiczną kolejność,

nie ma wrażenia przypadkowo doklejonej karty.

Desktop validation

Akceptacja, jeśli:

error summary jest widoczny, ale nie dominuje całego formularza,

liczba błędów jest ograniczona do realnie wymaganych pól,

pierwsze błędne pole jest widoczne blisko summary,

linki w summary działają,

każde błędne pole ma label, border/error text i aria-invalid,

focus po kliknięciu linku nie chowa pola pod headerem.

Desktop success

Akceptacja, jeśli:

success message jest natychmiast widoczny,

komunikat mówi, co dalej,

formularz nie wygląda jak przypadkowo wyczyszczony po submit,

użytkownik ma jasną opcję szybkiego kontaktu w pilnej sprawie,

layout nie skacze optycznie.

Desktop focus

Akceptacja, jeśli:

focus ring jest dobrze widoczny,

focus i error state są rozróżnialne,

ring nie jest ucięty przez overflow ani border radius,

select/input ma spójny stan z resztą systemu.

Desktop contact/footer transition

Akceptacja, jeśli:

po formularzu jest kontrolowany odstęp,

footer zaczyna się jako directory/sign-off,

nie ma dodatkowego CTA-heavy footer block,

ciemny footer jest optycznie przygotowany przez kontakt, a nie nagle doklejony.

Mobile top — 390x844

Akceptacja, jeśli:

/#kontakt ląduje na sekcji kontaktu, nie na hero/oferta/o nas,

w pierwszym widoku widać H2 i kontekst formularza,

telefon i e-mail są czytelne, nie powodują horizontal overflow,

heading nie jest ucięty,

nie ma wielkiego pustego obszaru przed treścią.

Mobile form middle

Akceptacja, jeśli:

pola są w jednej kolumnie,

każde pole ma minimum 44–48 px wysokości,

label i helper/error są czytelne,

grupy formularza są widoczne,

textarea nie dominuje nad kluczowymi polami.

Mobile form bottom + footer

Akceptacja, jeśli:

zgoda, submit i ewentualny tekst „pilne sprawy” są widoczne bez chaosu,

submit jest pełnoszeroki albo bardzo łatwy do trafienia,

footer zaczyna się po kontrolowanym odstępie,

footer nie zawiera nowego agresywnego CTA.

Mobile validation

Akceptacja, jeśli:

summary nie zajmuje większości viewportu,

pierwsze pole do poprawy jest szybko dostępne,

error text nie powoduje horizontal overflow,

focus po błędzie jest widoczny,

per-field errors są zachowane.

Mobile success

Akceptacja, jeśli:

success jest widoczny bez przewijania daleko w dół,

użytkownik wie, że zgłoszenie zostało zapisane,

jest jasna informacja, co wydarzy się dalej,

nie ma mylącego pustego formularza jako głównego elementu po sukcesie.
