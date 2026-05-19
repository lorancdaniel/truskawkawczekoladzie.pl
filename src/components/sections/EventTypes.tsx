import { eventTypes } from '../../data/siteContent';
import { Reveal } from '../ui/Reveal';

export function EventTypes() {
  return (
    <Reveal className="events-section" id="eventy">
      <div className="events-stage">
        <div className="events-stage__copy">
          <p className="eyebrow">Dla jakich wydarzeń</p>
          <h2>Jedna mapa zastosowań, sześć gotowych kontekstów.</h2>
          <p>
            Od wesel po eventy firmowe: stoisko działa tam, gdzie liczy się rytm obsługi,
            dobra ekspozycja i lekka interakcja z gośćmi.
          </p>
        </div>
        <div className="event-map" aria-label="Typy wydarzeń dla stoiska Strawberry Group">
          {eventTypes.map(({ title, text, Icon }) => (
            <article className="event-map__card" key={title}>
              <Icon aria-hidden="true" size={24} />
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
