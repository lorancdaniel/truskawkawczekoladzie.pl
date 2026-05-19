import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';

const aboutProofs = [
  {
    kicker: '01 · Przy stoisku',
    title: 'Deser dzieje się przy gościach',
    text: 'Wybór dodatków, polew i dekoracji daje lekki moment interakcji bez przerywania eventu.',
  },
  {
    kicker: '02 · Organizacja',
    title: 'Proces nie spada na organizatora',
    text: 'Przyjeżdża stanowisko, obsługa i składniki, a po wydarzeniu zamykamy strefę.',
  },
  {
    kicker: '03 · Standard',
    title: 'Wygląd i porządek trzymają poziom',
    text: 'Ekspozycja, świeżość i płynne wydawanie są częścią usługi od początku do końca.',
  },
];

export function About() {
  return (
    <Reveal className="split-section split-section--proof" animationType="fade-in" duration={1400}>
      <div className="about-proof-header">
        <SectionHeading
          eyebrow="O nas"
          title="Deserowa atrakcja obsłużona jak pełny serwis."
          text="Tworzymy punkt, przy którym goście zatrzymują się, wybierają dodatki i dostają deser przygotowany na miejscu."
        />
        <Reveal as="aside" className="about-quality-mark" animationType="fade-in-up" delay={200} duration={1200}>
          <strong>Świeżość. Jakość. Doświadczenie.</strong>
          <p>Krótki podpis marki wzmacnia zaufanie bez budowania osobnej, pustej karty.</p>
        </Reveal>
      </div>
      <div className="about-board" aria-label="Jak wypełniamy obsługę atrakcji">
        {aboutProofs.map(({ kicker, title, text }, index) => (
          <Reveal
            as="article"
            key={kicker}
            delay={index * 120}
            duration={1300}
            animationType="reveal-3d"
          >
            <span>{kicker}</span>
            <h3>{title}</h3>
            <p>{text}</p>
          </Reveal>
        ))}
      </div>
    </Reveal>
  );
}
