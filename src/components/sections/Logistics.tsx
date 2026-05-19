import { logistics } from '../../data/siteContent';
import { Reveal } from '../ui/Reveal';

const logisticsDetails = [
  'Przywozimy komplet potrzebny do pracy.',
  'Ustawiamy stanowisko i przygotowujemy strefę przed obsługą.',
  'Zespół prowadzi wydawanie i kontakt z gośćmi.',
  'Smaki, podanie i wygląd dopasowujemy do wydarzenia.',
  'Zamykamy stanowisko bez dodatkowej obsługi po stronie organizatora.',
];

export function Logistics() {
  return (
    <Reveal className="logistics-section">
      <div className="logistics-dock">
        <div className="logistics-dock__intro">
          <p className="eyebrow">Organizacja i logistyka</p>
          <h2>Mały zespół, kompletny backstage.</h2>
          <p>
            Do wyceny potrzebujemy terminu, miasta, typu wydarzenia, liczby gości i informacji o
            miejscu ustawienia stoiska. Resztę operacyjnie układamy po naszej stronie.
          </p>
          <div className="logistics-dock__meta" aria-label="Zakres obsługi">
            <span>
              <strong>2 osoby</strong>
              obsługa w pakiecie
            </span>
            <span>
              <strong>5 etapów</strong>
              od transportu do demontażu
            </span>
          </div>
        </div>
        <div className="logistics-stack" aria-label="Zakres organizacji i logistyki">
          {logistics.map((item, index) => (
            <Reveal
              as="article"
              className="logistics-stack__item"
              key={item}
              delay={index * 120}
              duration={1300}
              animationType="reveal-3d"
            >
              <b aria-hidden="true">{String(index + 1).padStart(2, '0')}</b>
              <div>
                <h3>{item}</h3>
                <p>{logisticsDetails[index]}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
