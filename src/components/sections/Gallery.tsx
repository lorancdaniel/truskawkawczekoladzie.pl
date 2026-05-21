import { useCallback, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import type { PointerEvent, TransitionEvent } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryItems } from '../../data/siteContent';
import { useMatchMedia } from '../../hooks/useMatchMedia';
import { Reveal } from '../ui/Reveal';

const LOOP_COPIES = 15;
const SWIPE_THRESHOLD = 42;
const DRAG_ACTIVATION = 8;

const positiveModulo = (value: number, modulo: number) => ((value % modulo) + modulo) % modulo;

export function Gallery() {
  const isMobileGallery = useMatchMedia('(max-width: 780px)');
  const totalSlides = galleryItems.length;
  const centerCycle = Math.floor(LOOP_COPIES / 2);
  const centerOffset = centerCycle * totalSlides;
  const slides = useMemo(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, cycleIndex) =>
        galleryItems.map((item, itemIndex) => ({
          item,
          itemIndex,
          position: cycleIndex * totalSlides + itemIndex,
        })),
      ).flat(),
    [totalSlides],
  );
  const [currentPosition, setCurrentPosition] = useState(centerOffset);
  const [isTransitionEnabled, setIsTransitionEnabled] = useState(true);
  const [offset, setOffset] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const currentPositionRef = useRef(currentPosition);
  const isAnimatingRef = useRef(false);
  const pendingStepsRef = useRef(0);
  const transitionFallbackRef = useRef<number | null>(null);
  const finishTransitionRef = useRef<() => void>(() => undefined);
  const pointerStartRef = useRef<{ x: number; y: number } | null>(null);
  const dragActiveRef = useRef(false);
  const transitionDuration = isMobileGallery ? 580 : 720;
  const transitionEasing = 'cubic-bezier(0.16, 1, 0.3, 1)';

  const activeIndex = positiveModulo(currentPosition, totalSlides);

  const getCenteredPosition = useCallback(
    (position: number) => centerOffset + positiveModulo(position, totalSlides),
    [centerOffset, totalSlides],
  );

  const shouldRebase = useCallback(
    (position: number) => position < totalSlides * 3 || position >= totalSlides * (LOOP_COPIES - 3),
    [totalSlides],
  );

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

  useLayoutEffect(() => {
    updateOffset(currentPosition);
    currentPositionRef.current = currentPosition;
  }, [currentPosition, updateOffset]);

  useEffect(() => {
    const handleResize = () => updateOffset(currentPosition);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [currentPosition, updateOffset]);

  const clearTransitionFallback = useCallback(() => {
    if (transitionFallbackRef.current === null) return;
    window.clearTimeout(transitionFallbackRef.current);
    transitionFallbackRef.current = null;
  }, []);

  const startPositionTransition = useCallback((targetPosition: number) => {
    clearTransitionFallback();
    isAnimatingRef.current = true;
    setIsTransitionEnabled(true);
    currentPositionRef.current = targetPosition;
    setCurrentPosition(targetPosition);
    transitionFallbackRef.current = window.setTimeout(() => {
      finishTransitionRef.current();
    }, transitionDuration + 140);
  }, [clearTransitionFallback, transitionDuration]);

  const continueWithQueuedStep = useCallback(() => {
    const pendingSteps = pendingStepsRef.current;

    if (pendingSteps === 0) {
      isAnimatingRef.current = false;
      return;
    }

    const step = pendingSteps > 0 ? 1 : -1;
    pendingStepsRef.current -= step;
    startPositionTransition(currentPositionRef.current + step);
  }, [startPositionTransition]);

  const finishTransition = useCallback(() => {
    clearTransitionFallback();

    const position = currentPositionRef.current;
    if (shouldRebase(position)) {
      const nextPosition = getCenteredPosition(position);

      if (nextPosition !== position) {
        setIsTransitionEnabled(false);
        currentPositionRef.current = nextPosition;
        setCurrentPosition(nextPosition);

        window.requestAnimationFrame(() => {
          window.requestAnimationFrame(() => {
            setIsTransitionEnabled(true);
            continueWithQueuedStep();
          });
        });
        return;
      }
    }

    continueWithQueuedStep();
  }, [clearTransitionFallback, continueWithQueuedStep, getCenteredPosition, shouldRebase]);

  useEffect(() => {
    finishTransitionRef.current = finishTransition;
  }, [finishTransition]);

  useEffect(() => clearTransitionFallback, [clearTransitionFallback]);

  const setPosition = useCallback((position: number | ((current: number) => number)) => {
    pendingStepsRef.current = 0;
    isAnimatingRef.current = false;
    const targetPosition = typeof position === 'function' ? position(currentPositionRef.current) : position;

    if (targetPosition === currentPositionRef.current) return;
    startPositionTransition(targetPosition);
  }, [startPositionTransition]);

  const setNearestItem = useCallback(
    (itemIndex: number) => {
      setPosition((current) => {
        const currentItem = positiveModulo(current, totalSlides);
        const forwardDelta = positiveModulo(itemIndex - currentItem, totalSlides);
        const backwardDelta = forwardDelta - totalSlides;
        return current + (Math.abs(forwardDelta) <= Math.abs(backwardDelta) ? forwardDelta : backwardDelta);
      });
    },
    [setPosition, totalSlides],
  );

  const handleTransitionEnd = (event: TransitionEvent<HTMLDivElement>) => {
    if (event.target !== trackRef.current || event.propertyName !== 'transform') return;

    finishTransition();
  };

  const enqueueStep = useCallback((step: number) => {
    if (isAnimatingRef.current) {
      pendingStepsRef.current = step;
      return;
    }

    startPositionTransition(currentPositionRef.current + step);
  }, [startPositionTransition]);

  const handlePrev = () => enqueueStep(-1);
  const handleNext = () => enqueueStep(1);

  const handlePointerDown = (event: PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    pointerStartRef.current = { x: event.clientX, y: event.clientY };
    dragActiveRef.current = false;
    setDragOffset(0);
    setIsDragging(false);
    if (typeof event.currentTarget.setPointerCapture === 'function') {
      event.currentTarget.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const pointerStart = pointerStartRef.current;
    if (!pointerStart) return;

    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;

    if (!dragActiveRef.current) {
      if (Math.abs(deltaX) < DRAG_ACTIVATION || Math.abs(deltaX) < Math.abs(deltaY) * 1.15) return;
      dragActiveRef.current = true;
      setIsDragging(true);
    }

    setDragOffset(deltaX * 0.88);
  };

  const resetDrag = () => {
    dragActiveRef.current = false;
    setDragOffset(0);
    setIsDragging(false);
  };

  const handlePointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const pointerStart = pointerStartRef.current;
    pointerStartRef.current = null;

    if (
      typeof event.currentTarget.hasPointerCapture === 'function' &&
      event.currentTarget.hasPointerCapture(event.pointerId)
    ) {
      event.currentTarget.releasePointerCapture(event.pointerId);
    }

    if (!pointerStart) return;

    const deltaX = event.clientX - pointerStart.x;
    const deltaY = event.clientY - pointerStart.y;
    resetDrag();

    if (Math.abs(deltaX) < SWIPE_THRESHOLD || Math.abs(deltaX) < Math.abs(deltaY) * 1.25) return;

    if (deltaX < 0) {
      handleNext();
      return;
    }

    handlePrev();
  };

  return (
    <Reveal 
      className="gallery-section" 
      animationType="fade-in" 
      duration={1400}
    >
      <div className="gallery-container">
        <div className="gallery-header">
          <div>
            <p className="eyebrow">Styl stoiska</p>
            <Reveal as="div" animationType="fade-in-up" delay={100} duration={1200}>
              <h2>Styl stoiska, który od razu pokazuje deser.</h2>
            </Reveal>
          </div>
          <Reveal as="div" animationType="fade-in-up" delay={200} duration={1200}>
            <p className="gallery-lead">
              Pokazujemy sposób podania, czekoladę, dodatki i doświadczenie, które goście widzą przy stoisku.
            </p>
          </Reveal>
        </div>

        <div className={`gallery-showcase ${isMobileGallery ? 'gallery-showcase--mobile-motion' : ''}`} aria-label="Galeria stylu stoiska">
          <div
            className="gallery-viewport"
            ref={viewportRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              pointerStartRef.current = null;
              resetDrag();
            }}
          >
            <div
              className={`gallery-track ${!isTransitionEnabled ? 'is-loop-resetting' : ''} ${isDragging ? 'is-dragging' : ''}`}
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              style={{
                transform: `translate3d(${offset + dragOffset}px, 0, 0)`,
                transition:
                  isTransitionEnabled && !isDragging
                    ? `transform ${transitionDuration}ms ${transitionEasing}`
                    : 'none',
              }}
            >
              {slides.map(({ item, itemIndex, position }) => {
                const isActive = position === currentPosition;
                const isInActiveWindow = Math.abs(position - currentPosition) <= 1;

                return (
                  <article
                    key={`${item.title}-${position}`}
                    className={`gallery-slide ${isActive ? 'is-active' : ''}`}
                    aria-current={isActive ? 'true' : undefined}
                    aria-hidden={!isInActiveWindow}
                    tabIndex={isInActiveWindow ? 0 : -1}
                    onFocus={() => {
                      if (isInActiveWindow) setPosition(position);
                    }}
                  >
                    <img
                      src={item.image}
                      alt={isInActiveWindow ? item.title : ''}
                      loading={Math.abs(position - currentPosition) <= 2 ? 'eager' : 'lazy'}
                      decoding="async"
                    />
                    <div className="gallery-slide-caption">
                      <div>
                        <p className="eyebrow">{item.kicker}</p>
                        <h3>{item.title}</h3>
                      </div>
                      <p>{item.text}</p>
                      <strong>{String(itemIndex + 1).padStart(2, '0')}</strong>
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
                  onClick={() => setNearestItem(index)}
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
