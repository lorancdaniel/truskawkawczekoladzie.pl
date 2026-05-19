import { claims } from '../../data/siteContent';
import { Reveal } from '../ui/Reveal';

export function ClaimStrip() {
  return (
    <Reveal className="claim-strip" id="oferta" animationType="fade-in" duration={1400}>
      {claims.map(({ title, text, Icon }, index) => (
        <Reveal
          as="article"
          key={title}
          delay={index * 120}
          duration={1300}
          animationType="reveal-3d"
        >
          <Icon aria-hidden="true" size={24} />
          <h2>{title}</h2>
          <p>{text}</p>
        </Reveal>
      ))}
    </Reveal>
  );
}
