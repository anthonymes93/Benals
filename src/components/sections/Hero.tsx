import type { ReactNode } from 'react';
import { Phone, ClipboardList } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { HeroReveal } from '@/components/ui/HeroReveal';
import { HeroSlideshow } from '@/components/sections/HeroSlideshow';
import { siteConfig } from '@/data/siteConfig';
import { heroImages } from '@/data/heroImages';
import { cn } from '@/lib/cn';

/** Cycled across trust-point bullets for subtle decorative variety. */
const DOT_TONES = ['bg-primary-500', 'bg-secondary-500', 'bg-tertiary-500'];

interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  trustPoints?: string[];
}

/**
 * Homepage hero: full-bleed background slideshow (see `HeroSlideshow`) with
 * the headline, description, CTAs, and trust points layered on top. A
 * gradient overlay keeps the white text readable against every slide.
 */
export function Hero({ eyebrow, title, description, trustPoints }: HeroProps) {
  return (
    <div className="relative isolate flex min-h-[560px] items-center overflow-hidden bg-ink-950 py-20 sm:min-h-[620px] sm:py-24 lg:min-h-[700px] lg:py-32">
      <HeroSlideshow images={heroImages} />

      {/* Darkest over the text column on the left, easing off toward the right so the imagery still reads through. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-linear-to-r from-ink-950/85 via-ink-950/55 to-ink-950/30"
      />

      <Container className="relative z-10">
        <HeroReveal variant="left" className="max-w-2xl">
          {eyebrow ? (
            <p className="mb-4 text-sm font-semibold tracking-wide text-primary-400 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-4xl text-white sm:text-5xl lg:text-[3.25rem] lg:leading-[1.08]">
            {title}
          </h1>
          <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-100">
            {description}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button
              href={siteConfig.phone.href}
              variant="accent"
              size="lg"
              leftIcon={<Phone className="h-5 w-5" aria-hidden="true" />}
            >
              Call {siteConfig.phone.display}
            </Button>
            <Button
              href="/contact"
              variant="outlineSecondary"
              size="lg"
              leftIcon={
                <ClipboardList
                  className="h-5 w-5 text-outline-blue transition-colors duration-[250ms] ease-out group-hover:text-outline-blue-bright"
                  aria-hidden="true"
                />
              }
            >
              Request a Free Estimate
            </Button>
          </div>

          {trustPoints && trustPoints.length > 0 ? (
            <ul className="mt-9 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-200">
              {trustPoints.map((point, index) => (
                <li key={point} className="flex items-center gap-2">
                  <span
                    className={cn('h-1.5 w-1.5 rounded-full', DOT_TONES[index % DOT_TONES.length])}
                    aria-hidden="true"
                  />
                  {point}
                </li>
              ))}
            </ul>
          ) : null}
        </HeroReveal>
      </Container>
    </div>
  );
}
