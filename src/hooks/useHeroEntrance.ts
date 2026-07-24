import { useEffect, useState } from 'react';

/**
 * Drives hero sections' page-load entrance slide. Unlike the site's
 * scroll-triggered `useInView`, this always plays on mount — hero content is
 * above the fold, and on every SPA route change the page component (and its
 * hero) remounts fresh, replaying the animation automatically.
 *
 * A single `requestAnimationFrame` isn't reliable here: if the effect runs
 * before the browser's next paint, React can commit the "entered" update
 * before the hidden starting state was ever painted, and the browser skips
 * straight to the final frame with no transition to see. Waiting two frames
 * guarantees the offset starting position is actually painted first.
 */
export function useHeroEntrance() {
  const [entered, setEntered] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  useEffect(() => {
    const raf1 = requestAnimationFrame(() => {
      requestAnimationFrame(() => setEntered(true));
    });
    return () => cancelAnimationFrame(raf1);
  }, []);

  return entered;
}
