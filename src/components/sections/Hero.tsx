import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowDown } from 'lucide-react';
import { quickFacts } from '../../data/siteContent';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { scrollToLeadForm } from '../../lib/dom';
import { Button } from '../ui/Button';

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    const root = heroRef.current;
    if (!root || prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const isMobile = window.innerWidth <= 768;

      // Wydłużone budżety czasowe dla luksusowego, spowolnionego efektu
      const d = isMobile ? 0.6 : 0.8;
      const lineD = isMobile ? 0.8 : 1.1;
      
      const timeline = gsap.timeline({
        defaults: { ease: 'power4.out' },
      });

      timeline
        .from('.hero .eyebrow', { opacity: 0, y: 16, duration: d })
        .from('.hero .hero-line-inner', { yPercent: 105, stagger: 0.14, duration: lineD }, isMobile ? 0.15 : 0.2)
        .from('.hero__lead', { opacity: 0, y: 20, duration: isMobile ? 0.7 : 0.9 }, isMobile ? 0.35 : 0.45)
        .from('.hero__actions > *', { opacity: 0, stagger: 0.1, y: 15, duration: d }, isMobile ? 0.55 : 0.65)
        .from('.hero__facts div', { opacity: 0, stagger: 0.08, y: 12, duration: d }, isMobile ? 0.7 : 0.8)
        .from('.hero__hint div', { opacity: 0, stagger: 0.08, y: 12, duration: d }, isMobile ? 0.7 : 0.8);

      gsap.fromTo(
        '.hero__motion-path',
        { opacity: 0, strokeDashoffset: 760 },
        { opacity: 0.56, strokeDashoffset: 0, duration: 2.2, ease: 'power3.out', delay: 0.3 },
      );
    }, root);

    return () => ctx.revert();
  }, [prefersReducedMotion]);

  return (
    <section className="hero" id="top" ref={heroRef}>
      <svg className="hero__motion-line" viewBox="0 0 760 260" aria-hidden="true" focusable="false">
        <path
          className="hero__motion-path"
          d="M32 116C126 24 218 22 305 83C378 134 426 198 516 171C594 148 629 70 728 64"
          pathLength="760"
        />
      </svg>
      <div className="hero__content">
        <p className="eyebrow">Interaktywne stoisko deserowe</p>
        <h1>
          <span className="hero-line-mask">
            <span className="hero-line-inner">Truskawki w czekoladzie</span>
          </span>{' '}
          <span className="hero-line-mask">
            <span className="hero-line-inner">jako atrakcja wydarzenia.</span>
          </span>
        </h1>
        <p className="hero__lead">
          Polskie truskawki, czekolada, dodatki i elegancka obsługa nawet do 1000 gości.
        </p>
        <div className="hero__actions">
          <Button type="button" onClick={() => scrollToLeadForm()}>
            Sprawdź dostępność terminu
          </Button>
          <a className="text-link" href="#pakiety">
            Zobacz pakiety <ArrowDown aria-hidden="true" size={17} />
          </a>
        </div>
        <div className="hero__facts" aria-label="Najważniejsze informacje">
          {quickFacts.map((fact) => (
            <div key={fact.value}>
              <strong>{fact.value}</strong>
              <span>{fact.label}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="hero__hint" aria-label="Najważniejsze zalety">
        <div>
          <strong>Świeże owoce</strong>
          <span>przygotowanie na miejscu</span>
        </div>
        <div>
          <strong>Interakcja</strong>
          <span>goście wybierają dodatki</span>
        </div>
        <div>
          <strong>Skala</strong>
          <span>proces dla dużych eventów</span>
        </div>
        <div>
          <strong>Organizacja</strong>
          <span>transport, montaż, obsługa</span>
        </div>
      </div>
    </section>
  );
}
