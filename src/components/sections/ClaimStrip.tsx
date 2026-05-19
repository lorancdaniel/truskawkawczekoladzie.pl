import { claims } from '../../data/siteContent';
import { Reveal } from '../ui/Reveal';

export function ClaimStrip() {
  return (
    <Reveal className="claim-strip" id="oferta">
      {claims.map(({ title, text, Icon }) => (
        <article key={title}>
          <Icon aria-hidden="true" size={24} />
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      ))}
    </Reveal>
  );
}
