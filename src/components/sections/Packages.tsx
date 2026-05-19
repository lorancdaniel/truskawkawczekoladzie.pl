import { useEffect, useRef, useState } from 'react';
import { dessertPackages } from '../../data/packages';
import { scrollToLeadForm } from '../../lib/dom';
import type { DesiredPackage } from '../../types/lead';
import { Button } from '../ui/Button';
import { Reveal } from '../ui/Reveal';

export function Packages() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [activePackageId, setActivePackageId] = useState<Exclude<DesiredPackage, 'nie_wiem'>>('silver');

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    // Wyłączamy śledzenie na mobile, gdzie boczna belka postępu jest ukryta
    if (window.innerWidth <= 1100) return undefined;

    const cards = Array.from(section.querySelectorAll<HTMLElement>('[data-package-card]'));
    let timeoutId: number | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        const packageId = visible?.target.getAttribute('data-package-card') as Exclude<DesiredPackage, 'nie_wiem'> | null;
        
        if (packageId && packageId !== activePackageId) {
          if (timeoutId !== null) window.clearTimeout(timeoutId);
          timeoutId = window.setTimeout(() => {
            setActivePackageId(packageId);
          }, 80);
        }
      },
      { threshold: [0.38, 0.58, 0.76], rootMargin: '-18% 0px -28% 0px' },
    );

    cards.forEach((card) => observer.observe(card));
    return () => {
      observer.disconnect();
      if (timeoutId !== null) window.clearTimeout(timeoutId);
    };
  }, [activePackageId]);

  return (
    <Reveal className="packages-section packages-section--scroll" id="pakiety">
      <div className="packages-scroll-layout" ref={sectionRef}>
        <div className="packages-sticky">
          <p className="eyebrow">Pakiety</p>
          <h2>Trzy poziomy obsługi, przewijane jak historia wyboru.</h2>
          <p>
            Wybierz zakres, który pasuje do skali wydarzenia. Karty pokazują różnice w cenie,
            składnikach i poziomie interakcji bez gubienia eleganckiego rytmu strony.
          </p>
          <div className="packages-progress" aria-label="Pakiety">
            {dessertPackages.map((pkg, index) => (
              <span className={activePackageId === pkg.id ? 'is-active' : ''} key={pkg.id}>
                <b>{String(index + 1).padStart(2, '0')}</b>
                {pkg.name}
                <strong>
                  {pkg.priceFrom800}–{pkg.priceUpTo800} zł
                </strong>
              </span>
            ))}
          </div>
        </div>
        <div className="packages-stack">
          {dessertPackages.map((pkg, index) => (
            <article
              key={pkg.id}
              data-package-card={pkg.id}
              className={`package-card ${pkg.highlighted ? 'package-card--featured' : ''} ${
                activePackageId === pkg.id ? 'is-active' : ''
              }`}
            >
              <div className="package-card__index">0{index + 1}</div>
              <div className="package-card__top">
                <span>{pkg.badge}</span>
                <h3>{pkg.name}</h3>
                <p>{pkg.tagline}</p>
              </div>
              <p className="package-card__best">{pkg.bestFor}</p>
              <ul>
                {pkg.includes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
                <li>{pkg.staff}</li>
              </ul>
              <div className="price-row">
                <div>
                  <strong>{pkg.priceUpTo800} zł</strong>
                  <span>do 800 osób</span>
                </div>
                <div>
                  <strong>{pkg.priceFrom800} zł</strong>
                  <span>800+ osób</span>
                </div>
              </div>
              <div className="package-card__cta">
                <small>Ostateczna cena zależy od terminu i logistyki.</small>
                <Button type="button" variant={pkg.highlighted ? 'primary' : 'secondary'} onClick={() => scrollToLeadForm(pkg.id)}>
                  Zapytaj o {pkg.name}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
