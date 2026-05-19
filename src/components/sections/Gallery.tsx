import { useCallback, useEffect, useRef, useState } from 'react';
import type { TransitionEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../../data/siteContent';
import { Reveal } from '../ui/Reveal';

export function Gallery() {
  const totalSlides = galleryItems.length;
  const slides = [
    galleryItems[totalSlides - 1],
    ...galleryItems,
    galleryItems[0],
  ];
  const [currentPosition, setCurrentPosition] = useState(1);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [offset, setOffset] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);

  const activeIndex = (currentPosition - 1 + totalSlides) % totalSlides;

  const updateOffset = useCallback((position: number) => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    if (!track || !viewport) return;

    const activeSlide = track.children[position] as HTMLElement | undefined;
    if (!activeSlide) return;

    const centeredOffset =
      viewport.clientWidth / 2 - (activeSlide.offsetLeft + activeSlide.offsetWidth / 2);
    setOffset(centeredOffset);
  }, []);

  useEffect(() => {
    updateOffset(currentPosition);
  }, [currentPosition, updateOffset]);

  useEffect(() => {
    const handleResize = () => updateOffset(currentPosition);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPosition, updateOffset]);

  useEffect(() => {
    if (!isTransitionEnabled) {
      const raf = requestAnimationFrame(() => setIsTransitionEnabled(true));
      return () => cancelAnimationFrame(raf);
    }
  }, [isTransitionEnabled]);

  const setPosition = useCallback((position: number) => {
    if (!isTransitionEnabled) return;
    setCurrentPosition(position);
  }, [isTransitionEnabled]);

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== trackRef.current || event.propertyName !== 'transform') return;

    if (currentPosition === 0) {
      setIsTransitionEnabled(false);
      setCurrentPosition(totalSlides);
    }

    if (currentPosition === totalSlides + 1) {
      setIsTransitionEnabled(false);
      setCurrentPosition(1);
    }
  };

  const handlePrev = () => setPosition(currentPosition - 1);
  const handleNext = () => setPosition(currentPosition + 1);

  return (
    <Reveal 
      className="gallery-section" 
      id="oferta" 
      animationType="fade-in" 
      duration={1400}
    >
      <div className="gallery-container">
        <div className="gallery-header">
          <div>
            <p className="eyebrow">Styl stoiska</p>
            <Reveal as="div" animationType="fade-in-up" delay={100} duration={1200}>
              <h2>Wizualny dowód bez udawania realizacji.</h2>
            </Reveal>
          </div>
          <Reveal as="div" animationType="fade-in-up" delay={200} duration={1200}>
            <p className="gallery-lead">
              Do czasu dodania prawdziwych zdjęć eventowych pokazujemy styl, składniki i typ doświadczenia.
            </p>
          </Reveal>
        </div>

        <div className="gallery-showcase" aria-label="Galeria stylu stoiska">
          <div className="gallery-viewport" ref={viewportRef}>
            <div
              className="gallery-track"
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translate3d(${offset}px, 0, 0)`,
                transition: isTransitionEnabled ? 'transform 720ms cubic-bezier(0.16, 1, 0.3, 1)' : 'none',
              }}
            >
              {slides.map((item, index) => {
                const isClone = index === 0 || index === totalSlides + 1;
                const isActive = index === currentPosition;

                return (
                  <article
                    key={`${item.title}-${index}`}
                    className={`gallery-slide ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    aria-hidden={isClone}
                    tabIndex={isClone ? -1 : 0}
                    onFocus={() => {
                      if (!isClone) setPosition(index);
                    }}
                    onMouseEnter={() => {
                      if (!isClone) setPosition(index);
                    }}
                  >
                    <img
                      src={item.image}
                      alt={isClone ? '' : item.title}
                      loading={index <= 2 ? 'eager' : 'lazy'}
                    />
                    <div className="gallery-slide-caption">
                      <div>
                        <p className="eyebrow">{item.kicker}</p>
                        <h3>{item.title}</h3>
                      </div>
                      <p>{item.text}</p>
                      <strong>{String(((index - 1 + totalSlides) % totalSlides) + 1).padStart(2, '0')}</strong>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="gallery-controls">
            <button
              type="button"
              className="gallery-nav-btn"
              onClick={handlePrev}
              aria-label="Poprzednie zdjęcie"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="gallery-dots" aria-label="Wybierz zdjęcie">
              {galleryItems.map((_, index) => (
                <button
                  type="button"
                  key={index}
                  className={`gallery-dot ${activeIndex === index ? 'is-active' : ''}`}
                  aria-label={`Pokaż zdjęcie ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  onClick={() => setPosition(index + 1)}
                />
              ))}
            </div>

            <button
              type="button"
              className="gallery-nav-btn"
              onClick={handleNext}
              aria-label="Następne zdjęcie"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  );
}
