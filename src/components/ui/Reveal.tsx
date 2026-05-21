import { createElement, type CSSProperties, type HTMLAttributes, type PropsWithChildren } from 'react';
import { useInView } from '../../hooks/useInView';

type RevealProps = PropsWithChildren<{
  className?: string;
  id?: string;
  delay?: number;
  duration?: number;
  animationType?: 'fade-in-up' | 'fade-in' | 'scale-up' | 'reveal-3d' | 'slide-in-left' | 'slide-in-right';
  as?: 'div' | 'section' | 'article' | 'span' | 'aside' | 'header' | 'footer' | 'nav';
}> & HTMLAttributes<HTMLElement>;

export function Reveal({
  className = '',
  id,
  delay,
  duration,
  animationType = 'fade-in-up',
  as: Component = 'section',
  children,
  ...rest
}: RevealProps) {
  const { ref, isVisible, canAnimate } = useInView<HTMLElement>();

  const style = {
    ...(delay !== undefined ? { '--reveal-delay': `${delay}ms` } : {}),
    ...(duration !== undefined ? { '--reveal-duration': `${duration}ms` } : {}),
    ...rest.style,
  } as CSSProperties;

  const animationClass = `reveal--${animationType}`;

  return createElement(
    Component,
    {
      ...rest,
      ref,
      id,
      style,
      className:
        `${className} reveal ${animationClass} ${canAnimate ? 'reveal--ready' : ''} ${isVisible ? 'is-visible' : ''}`.trim(),
    },
    children,
  );
}
