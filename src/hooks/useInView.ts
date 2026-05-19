import { useEffect, useRef, useState } from 'react';

export function useInView<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const canAnimate = typeof window !== 'undefined' && 'IntersectionObserver' in window;
  const [isVisible, setIsVisible] = useState(() => !canAnimate);

  useEffect(() => {
    const node = ref.current;
    if (!node || isVisible) return undefined;
    if (!canAnimate) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.16 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [canAnimate, isVisible]);

  return { ref, isVisible, canAnimate };
}
