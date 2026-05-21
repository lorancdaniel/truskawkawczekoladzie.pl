import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown } from 'lucide-react';
import { quickFacts } from '../../data/siteContent';
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion';
import { scrollToLeadForm } from '../../lib/dom';
import { Button } from '../ui/Button';

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useLayoutEffect(() => {
    const root = heroRef.current;
    if (!root || prefersReducedMotion) return undefined;

    const ctx = gsap.context(() => {
      const isMobile = window.matchMedia('(max-width: 780px)').matches;

      const timeline = gsap.timeline({
        defaults: { ease: 'power3.out' },
      });

      timeline
        .to('.hero .eyebrow', {
          opacity: 1,
          letterSpacing: '0.06em',
          duration: isMobile ? 0.75 : 0.9,
        })
        .to(
          '.hero .hero-line-mask',
          {
            clipPath: 'inset(0 0 0% 0)',
            duration: isMobile ? 0.95 : 1.15,
            stagger: 0.13,
            ease: 'power4.inOut',
          },
          isMobile ? 0.1 : 0.14,
        )
        .to(
          '.hero .hero__lead',
          {
            opacity: 1,
            filter: 'blur(0px)',
            duration: isMobile ? 0.72 : 0.88,
          },
          isMobile ? 0.28 : 0.38,
        )
        .to(
          '.hero__actions > *',
          {
            autoAlpha: 1,
            scale: 1,
            stagger: 0.08,
            duration: isMobile ? 0.62 : 0.72,
            ease: 'power2.out',
          },
          isMobile ? 0.44 : 0.54,
        )
        .to(
          '.hero__facts div',
          {
            opacity: 1,
            x: 0,
            stagger: 0.07,
            duration: isMobile ? 0.58 : 0.68,
          },
          isMobile ? 0.56 : 0.66,
        )
        .to(
          '.hero__hint div',
          {
            opacity: 1,
            y: 0,
            stagger: 0.06,
            duration: isMobile ? 0.55 : 0.65,
          },
          isMobile ? 0.66 : 0.76,
        );

      gsap.to('.hero__motion-path', {
        opacity: isMobile ? 0.28 : 0.42,
        duration: isMobile ? 1.2 : 1.55,
        ease: 'power2.inOut',
        delay: isMobile ? 0.35 : 0.48,
      });

      if (isMobile) {
        gsap.to('.hero__motion-line', {
          opacity: 0.38,
          scale: 1,
          duration: 1.25,
          ease: 'power2.out',
          delay: 0.32,
        });
      }
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
