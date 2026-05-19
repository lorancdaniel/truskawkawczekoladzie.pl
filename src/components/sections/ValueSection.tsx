import { useEffect, useMemo, useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { dessertPackages } from '../../data/packages';
import { scrollToLeadForm } from '../../lib/dom';
import type { DesiredPackage } from '../../types/lead';
import { ModalSelectField } from '../form/fields';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

const eventTypes = ['Wesele', 'Event firmowy', 'Gala / bankiet', 'Plener', 'Strefa VIP'];

function formatCurrency(value: number) {
  return new Intl.NumberFormat('pl-PL', {
    maximumFractionDigits: 0,
    style: 'currency',
    currency: 'PLN',
  }).format(value);
}

export function ValueSection() {
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);
  const [isPackagesOpen, setIsPackagesOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [selectedPackageId, setSelectedPackageId] = useState<Exclude<DesiredPackage, 'nie_wiem'>>('gold');
  const [guestCountInput, setGuestCountInput] = useState('500');
  const [eventType, setEventType] = useState(eventTypes[0]);
  const [city, setCity] = useState('');

  const selectedPackage = useMemo(
    () => dessertPackages.find((pkg) => pkg.id === selectedPackageId) ?? dessertPackages[1],
    [selectedPackageId],
  );

  const guestCount = Math.max(50, Number(guestCountInput) || 50);
  const packagePricePerPerson = guestCount >= 800 ? selectedPackage.priceFrom800 : selectedPackage.priceUpTo800;
  const packageEstimate = guestCount * packagePricePerPerson;
  const typicalMin = guestCount * 22;
  const typicalMax = guestCount * 35;

  const calculatorRef = useRef<HTMLDivElement | null>(null);
  const packagesRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    document.body.classList.toggle('calculator-open', isCalculatorOpen || isPackagesOpen);
    return () => document.body.classList.remove('calculator-open');
  }, [isCalculatorOpen, isPackagesOpen]);

  useEffect(() => {
    if (!isCalculatorOpen && !isPackagesOpen) {
      return undefined;
    }

    const modalEl = isCalculatorOpen ? calculatorRef.current : isPackagesOpen ? packagesRef.current : null;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsCalculatorOpen(false);
        setIsPackagesOpen(false);
      }

      if (event.key === 'Tab' && modalEl) {
        const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusable = Array.from(modalEl.querySelectorAll(focusableElementsSelector)) as HTMLElement[];
        if (focusable.length > 0) {
          const first = focusable[0];
          const last = focusable[focusable.length - 1];
          if (event.shiftKey) {
            if (document.activeElement === first) {
              last.focus();
              event.preventDefault();
            }
          } else {
            if (document.activeElement === last) {
              first.focus();
              event.preventDefault();
            }
          }
        }
      }
    };

    // Auto-focus the first element (or close button) on open
    if (modalEl) {
      const focusableElementsSelector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
      const focusable = Array.from(modalEl.querySelectorAll(focusableElementsSelector)) as HTMLElement[];
      if (focusable.length > 0) {
        const closeBtn = focusable.find(el => el.classList.contains('calculator-close')) || focusable[0];
        closeBtn.focus();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCalculatorOpen, isPackagesOpen]);

  const openCalculator = () => {
    setStep(1);
    setIsCalculatorOpen(true);
  };

  const closeCalculator = () => setIsCalculatorOpen(false);
  const closePackages = () => setIsPackagesOpen(false);

  const choosePackageAndCalculate = (packageId: Exclude<DesiredPackage, 'nie_wiem'>) => {
    setSelectedPackageId(packageId);
    setIsPackagesOpen(false);
    setStep(2);
    setIsCalculatorOpen(true);
  };

  const goToLeadForm = () => {
    closeCalculator();
    window.setTimeout(() => scrollToLeadForm(selectedPackageId), 80);
  };

  const nextStep = () => setStep((current) => Math.min(3, current + 1));
  const previousStep = () => setStep((current) => Math.max(1, current - 1));

  return (
    <Reveal className="value-section" id="kalkulator" animationType="fade-in" duration={1400}>
      <Reveal className="value-section__copy" animationType="fade-in-up" delay={100} duration={1300}>
        <div>
          <p className="eyebrow">Dlaczego to się opłaca</p>
          <h2>Policz zakres zanim zapytasz o termin.</h2>
          <p className="lead">
            Mniej pustki, mocniejszy rytm i jeden jasny cel: otworzyć kalkulator, wybrać pakiet, podać
            podstawowe dane i dostać orientacyjny koszt.
          </p>
          <div className="value-section__actions">
            <Button type="button" onClick={openCalculator}>
              Otwórz kalkulator wydarzenia
            </Button>
            <Button type="button" variant="secondary" onClick={() => setIsPackagesOpen(true)}>
              Zobacz pakiety
            </Button>
          </div>
        </div>
        <div className="value-section__stats" aria-label="Skrót kalkulatora">
          <span>
            <strong>3 kroki</strong>
            <small>pakiet, dane, wynik</small>
          </span>
          <span>
            <strong>10–17 zł</strong>
            <small>orientacyjnie za osobę</small>
          </span>
        </div>
      </Reveal>
      <Reveal className="value-card" animationType="reveal-3d" delay={300} duration={1400} aria-label="Kalkulator kosztu wydarzenia">
        <div>
          <p>Panel orientacyjnej kalkulacji</p>
          <h3>Pakiet, goście, wynik.</h3>
          <p className="lead">
            Gość wybiera pakiet, wpisuje skalę wydarzenia i dostaje widełki kosztu, zanim przejdzie do
            formularza z konkretnym kontekstem rozmowy.
          </p>
        </div>
        <div className="value-card__metrics">
          <div>
            <strong>5 500–8 500 zł</strong>
            <small>pakiet Strawberry Group dla 500 gości</small>
          </div>
          <div>
            <strong>11 000–17 500 zł</strong>
            <small>typowa atrakcja eventowa tej skali</small>
          </div>
        </div>
      </Reveal>
       {isPackagesOpen && typeof document !== 'undefined' ? createPortal(
        <div className="calculator-modal package-modal" role="presentation">
          <div
            aria-labelledby="package-modal-title"
            aria-modal="true"
            className="package-modal__panel"
            role="dialog"
            ref={packagesRef}
          >
            <div className="package-modal__header">
              <p className="eyebrow">Pakiety</p>
              <h3 id="package-modal-title">Wybierz poziom obsługi.</h3>
              <p>
                Każdy pakiet obejmuje przygotowanie deserów i obsługę stoiska. Po wyborze możesz od razu
                przejść do kalkulacji.
              </p>
              <button aria-label="Zamknij pakiety" className="calculator-close" onClick={closePackages} type="button">
                <X aria-hidden="true" size={18} />
              </button>
            </div>
            <div className="package-modal__grid">
              {dessertPackages.map((pkg) => (
                <article className={`package-modal__card ${pkg.highlighted ? 'is-highlighted' : ''}`} key={pkg.id}>
                  <span>{pkg.badge}</span>
                  <h4>{pkg.name}</h4>
                  <p>{pkg.tagline}</p>
                  <ul>
                    {pkg.includes.slice(0, 4).map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <div className="package-modal__price">
                    <strong>
                      {pkg.priceFrom800}–{pkg.priceUpTo800} zł
                    </strong>
                    <small>za osobę</small>
                  </div>
                  <Button type="button" onClick={() => choosePackageAndCalculate(pkg.id)}>
                    Policz {pkg.name}
                  </Button>
                </article>
              ))}
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
      {isCalculatorOpen && typeof document !== 'undefined' ? createPortal(
        <div className="calculator-modal" role="presentation">
          <div
            aria-labelledby="calculator-title"
            aria-modal="true"
            className="calculator-modal__panel"
            role="dialog"
            ref={calculatorRef}
          >
            <aside className="calculator-modal__side">
              <p className="eyebrow">Kalkulator</p>
              <h3 id="calculator-title">Ustalmy zakres w trzy kroki.</h3>
              <div className="calculator-steps" aria-label="Etapy kalkulatora">
                <span aria-current={step === 1 ? 'step' : undefined} className={step === 1 ? 'is-active' : ''}>
                  <span className="sr-only">1 Pakiet</span>
                </span>
                <span aria-current={step === 2 ? 'step' : undefined} className={step === 2 ? 'is-active' : ''}>
                  <span className="sr-only">2 Dane</span>
                </span>
                <span aria-current={step === 3 ? 'step' : undefined} className={step === 3 ? 'is-active' : ''}>
                  <span className="sr-only">3 Kalkulacja</span>
                </span>
              </div>
              <p className="calculator-modal__note">
                Po kalkulacji przejdziesz do formularza z wybranym pakietem, skalą wydarzenia i kontekstem rozmowy.
              </p>
            </aside>
            <div className="calculator-modal__body">
              <button aria-label="Zamknij kalkulator" className="calculator-close" onClick={closeCalculator} type="button">
                <X aria-hidden="true" size={18} />
              </button>
              {step === 1 ? (
                <div className="calculator-step">
                  <h3>Co pasuje do wydarzenia?</h3>
                  <p>Wybierz punkt startowy, a wynik dopasuje się do skali i charakteru obsługi.</p>
                  <div className="calculator-packages">
                    {dessertPackages.map((pkg) => (
                      <button
                        aria-pressed={pkg.id === selectedPackageId}
                        className={`calculator-package ${pkg.id === selectedPackageId ? 'is-selected' : ''}`}
                        key={pkg.id}
                        onClick={() => setSelectedPackageId(pkg.id)}
                        type="button"
                      >
                        <span>{pkg.badge}</span>
                        <strong>{pkg.name}</strong>
                        <small>
                          {pkg.priceFrom800}–{pkg.priceUpTo800} zł/os.
                        </small>
                        <p>{pkg.tagline}</p>
                      </button>
                    ))}
                  </div>
                </div>
              ) : null}
              {step === 2 ? (
                <div className="calculator-step">
                  <h3>Ile osób obsłużymy?</h3>
                  <p>Minimum danych potrzebnych do pierwszego zakresu. Finalna wycena zależy od terminu i logistyki.</p>
                  <div className="calculator-fields">
                    <label>
                      Liczba gości
                      <input
                        inputMode="numeric"
                        onChange={(event) => setGuestCountInput(event.target.value.replace(/\D/g, ''))}
                        placeholder="np. 100"
                        type="text"
                        value={guestCountInput}
                      />
                    </label>
                    <ModalSelectField
                      id="calculatorEventType"
                      label="Typ wydarzenia"
                      value={eventType}
                      placeholder="Wybierz typ"
                      options={eventTypes.map((type) => ({ value: type, label: type }))}
                      onChange={(value) => setEventType(value)}
                    />
                    <label className="calculator-field--wide">
                      Miasto / lokalizacja
                      <input onChange={(event) => setCity(event.target.value)} placeholder="np. Warszawa" value={city} />
                    </label>
                  </div>
                </div>
              ) : null}
              {step === 3 ? (
                <div className="calculator-step">
                  <h3>Zakres orientacyjny</h3>
                  <div className="calculator-result">
                    <p>
                      Rekomendacja: {selectedPackage.name}, {guestCount} gości, {eventType}
                    </p>
                    <strong>{formatCurrency(packageEstimate)}</strong>
                    <p>
                      Typowa atrakcja eventowa dla tej skali: {formatCurrency(typicalMin)}–
                      {formatCurrency(typicalMax)}.
                    </p>
                  </div>
                  <p>
                    Ten wynik może przejść dalej do formularza. Doprecyzujemy termin, miasto i zakres personalizacji.
                  </p>
                </div>
              ) : null}
              <div className="calculator-actions">
                <Button disabled={step === 1} icon={false} onClick={previousStep} type="button" variant="secondary">
                  Wstecz
                </Button>
                {step < 3 ? (
                  <Button onClick={nextStep} type="button">
                    Dalej
                  </Button>
                ) : (
                  <Button onClick={goToLeadForm} type="button">
                    Przejdź do formularza
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body,
      ) : null}
    </Reveal>
  );
}
