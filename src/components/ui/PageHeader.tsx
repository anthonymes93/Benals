import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { HeroReveal } from '@/components/ui/HeroReveal';
import { Image } from '@/components/common/Image';
import type { ImageAsset } from '@/types';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  /** Optional photo shown beside the text (right side on desktop, below on mobile). */
  image?: { asset: ImageAsset; caption?: string };
}

/**
 * Consistent banner used at the top of every interior page (non-home) — the
 * "hero" for those pages. Its content slides in from the left as one group,
 * same entrance as the homepage hero's text side. Most pages pass no image,
 * so there's no right-side slide by default; when `image` is supplied (the
 * About page's founder photo) it appears in its own right-sliding half.
 */
export function PageHeader({ eyebrow, title, description, image }: PageHeaderProps) {
  const text = (
    <HeroReveal variant="left">
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold tracking-wide text-primary-400 uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h1 className="max-w-2xl text-4xl text-white sm:text-5xl">{title}</h1>
      {description ? (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-100">{description}</p>
      ) : null}
    </HeroReveal>
  );

  return (
    <div className="border-b border-ink-800 bg-ink-950 py-14 sm:py-20">
      <Container>
        {image ? (
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1fr_320px]">
            {text}
            <HeroReveal variant="right" delay={120} className="mx-auto w-full max-w-[280px] lg:max-w-none">
              <figure>
                <div className="aspect-3/4 overflow-hidden rounded-xl">
                  <Image asset={image.asset} lazy={false} />
                </div>
                {image.caption ? (
                  <figcaption className="mt-2.5 text-center text-sm text-ink-100 lg:text-left">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            </HeroReveal>
          </div>
        ) : (
          text
        )}
      </Container>
    </div>
  );
}
