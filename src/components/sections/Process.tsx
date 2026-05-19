import { processSteps } from '../../data/siteContent';
import { Reveal } from '../ui/Reveal';

export function Process() {
  return (
    <Reveal className="process-section" id="jak-dziala">
      <div className="process-board">
        <div className="process-board__intro">
          <p className="eyebrow">Jak działa stoisko</p>
          <h2>Jeden prosty proces od zapytania do ostatniego kubka.</h2>
          <p>
            Nie musisz organizować osobnej obsługi deseru. Przyjeżdżamy z gotowym stanowiskiem,
            składnikami i rytmem pracy.
          </p>
        </div>
        <div className="process-grid">
          {processSteps.map(({ title, text, Icon }, index) => (
            <Reveal
              as="article"
              key={title}
              delay={index * 120}
              duration={1300}
              animationType="reveal-3d"
            >
              <div className="process-step__meta">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <Icon aria-hidden="true" size={24} />
              </div>
              <div className="process-step__copy">
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
