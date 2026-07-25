import { useEffect, useState } from 'react';
import { useHeroEntrance } from '@/hooks/useHeroEntrance';
import type { ImageAsset } from '@/types';

interface HeroSlideshowProps {
  images: ImageAsset[];
  /** How long each image stays fully active before crossfading to the next, in ms. */
  intervalMs?: number;
  /** Crossfade duration, in ms. */
  fadeMs?: number;
}

const ZOOM_SCALE = 1.06;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Full-bleed, continuously looping background slideshow for the homepage
 * hero. Crossfades between images and slowly zooms whichever one is active
 * (a "Ken Burns" effect) — pure opacity/transform, no layout impact, so it
 * can sit behind the hero content with `position: absolute`.
 *
 * All images mount up front instead of being added to the DOM one at a
 * time, so the whole set is fetched immediately and no slide ever pops in
 * blank — simpler and more robust than tracking "preload the next one".
 *
 * The zoom uses inline `transform`/`transition` (not Tailwind's `scale-*`
 * utilities, which target the newer standalone CSS `scale` property) so the
 * transition and the property it's animating are guaranteed to match.
 *
 * The first slide's activation is gated behind `useHeroEntrance` (the same
 * double-rAF-safe mount trigger the hero text/image entrance uses): without
 * it, React's very first commit would already have image 0 at its "active"
 * scale/opacity with nothing painted beforehand to transition from, so the
 * opening zoom would jump straight to its end state instead of animating.
 *
 * Reduced-motion users get a static first frame: the site's global CSS
 * forces every transition to ~0ms for them, which would turn a crossfade
 * into an abrupt flash every cycle rather than a smooth fade — freezing on
 * one image is the safer reading of "reduce motion" here.
 */
export function HeroSlideshow({ images, intervalMs = 4000, fadeMs = 650 }: HeroSlideshowProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [reducedMotion] = useState(prefersReducedMotion);
  const started = useHeroEntrance();

  useEffect(() => {
    if (reducedMotion || images.length <= 1) return;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);

    return () => window.clearInterval(id);
  }, [images.length, intervalMs, reducedMotion]);

  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      {images.map((image, index) => {
        const isActive = started && index === activeIndex;
        return (
          <img
            key={image.src}
            src={image.src}
            alt=""
            loading="eager"
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
            style={{
              opacity: isActive ? 1 : 0,
              transform: `scale(${isActive && !reducedMotion ? ZOOM_SCALE : 1})`,
              transition: reducedMotion
                ? `opacity ${fadeMs}ms ease-out`
                : `opacity ${fadeMs}ms ease-out, transform ${intervalMs + fadeMs}ms ease-out`,
            }}
          />
        );
      })}
    </div>
  );
}
