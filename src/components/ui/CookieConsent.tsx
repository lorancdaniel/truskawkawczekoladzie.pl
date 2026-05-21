import { useState } from 'react';

const CONSENT_KEY = 'strawberry-group-cookie-consent';

function shouldShowConsent() {
  try {
    return window.localStorage.getItem(CONSENT_KEY) !== 'accepted';
  } catch {
    return true;
  }
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(shouldShowConsent);

  const acceptPolicy = () => {
    try {
      window.localStorage.setItem(CONSENT_KEY, 'accepted');
    } catch {
      // Consent still hides for this session when storage is unavailable.
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside className="cookie-consent" role="region" aria-label="Polityka cookies">
      <div>
        <span>Cookies</span>
        <strong>Krótka polityka prywatności strony.</strong>
        <p>
          Strona używa wyłącznie niezbędnych technologii do działania interfejsu i zapamiętania tej zgody.
          Nie zapisujemy danych z formularza w cookies.
        </p>
        <details>
          <summary>Polityka cookies</summary>
          <p>
            Pliki cookies lub podobne mechanizmy mogą obsługiwać podstawowe funkcje strony, bezpieczeństwo,
            preferencje użytkownika oraz stabilność formularza. Zgodę możesz wycofać, usuwając dane strony
            w ustawieniach przeglądarki.
          </p>
        </details>
      </div>
      <button type="button" onClick={acceptPolicy}>
        Akceptuję
      </button>
    </aside>
  );
}
