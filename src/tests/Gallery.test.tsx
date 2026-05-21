import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Gallery } from '../components/sections/Gallery';

describe('Gallery', () => {
  it('keeps exactly one active slide during rapid navigation clicks', () => {
    render(<Gallery />);

    const next = screen.getByRole('button', { name: 'Następne zdjęcie' });

    for (let index = 0; index < 8; index += 1) {
      fireEvent.click(next);
    }

    const activeSlides = document.querySelectorAll('.gallery-slide.is-active');

    expect(activeSlides).toHaveLength(1);
    expect(document.querySelectorAll('.gallery-dot.is-active')).toHaveLength(1);
  });

  it('moves from the last visual item to the first without losing the active slide', () => {
    render(<Gallery />);

    const track = document.querySelector('.gallery-track');

    fireEvent.click(screen.getByRole('button', { name: 'Pokaż zdjęcie 4' }));
    fireEvent.click(screen.getByRole('button', { name: 'Następne zdjęcie' }));
    fireEvent.transitionEnd(track as Element, { propertyName: 'transform' });

    const activeSlides = document.querySelectorAll('.gallery-slide.is-active');

    expect(activeSlides).toHaveLength(1);
    expect(activeSlides[0]).toHaveTextContent('Świeża czekolada');
    expect(screen.getByRole('button', { name: 'Pokaż zdjęcie 1' })).toHaveAttribute('aria-current', 'true');
  });

  it('supports horizontal swipe gestures without losing the active slide', () => {
    render(<Gallery />);

    const viewport = document.querySelector('.gallery-viewport') as Element;
    const track = document.querySelector('.gallery-track') as Element;

    fireEvent.pointerDown(viewport, { pointerType: 'touch', clientX: 320, clientY: 120 });
    fireEvent.pointerUp(viewport, { pointerType: 'touch', clientX: 210, clientY: 126 });
    fireEvent.transitionEnd(track, { propertyName: 'transform' });

    const activeSlides = document.querySelectorAll('.gallery-slide.is-active');
    expect(activeSlides).toHaveLength(1);
    expect(screen.getByRole('button', { name: 'Pokaż zdjęcie 2' })).toHaveAttribute('aria-current', 'true');
  });
});
