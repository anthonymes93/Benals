import type { ReactNode } from 'react';
import { Phone } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Image } from '@/components/common/Image';
import { siteConfig } from '@/data/siteConfig';
import { cn } from '@/lib/cn';
import type { ImageAsset } from '@/types';

/** Cycled across trust-point bullets for subtle decorative variety. */
const DOT_TONES = ['bg-primary-500', 'bg-secondary-500', 'bg-tertiary-500'];

interface HeroProps {
  eyebrow?: string;
  title: ReactNode;
  description: ReactNode;
  image: ImageAsset;
  trustPoints?: string[];
}

/** Homepage hero: headline + CTAs on one side, a photo on the other. */
export function Hero({ eyebrow, title, description, image, trustPoints }: HeroProps) {
  return (
    <div className="relative overflow-hidden bg-ink-950">
      <Container className="grid grid-cols-1 items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-28">
        <div>
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
            <Button href="/contact" variant="outlineInverse" size="lg">
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
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-xl lg:aspect-square">
          <Image asset={image} lazy={false} className="rounded-xl" />
        </div>
      </Container>
    </div>
  );
}
