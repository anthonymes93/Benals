import { useEffect, useRef, useState } from 'react';

interface UseInViewOptions {
  /** How much of the element must be visible before it's considered "in view". */
  threshold?: number;
  /** Shrinks the bottom of the viewport so reveals trigger a bit before the edge. */
  rootMargin?: string;
}

/**
 * Reports once when the observed element first scrolls into view, then stops
 * watching — used to drive one-time scroll-reveal animations. Users with
 * `prefers-reduced-motion` get `isInView: true` immediately (content just
 * renders in its final state, no motion to opt out of).
 */
export function useInView<T extends HTMLElement>({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' }: UseInViewOptions = {}) {
  const ref = useRef<T>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(node);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isInView };
}
