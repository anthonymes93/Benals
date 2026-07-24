import type { ReactNode } from 'react';
import { Container } from '@/components/ui/Container';
import { HeroReveal } from '@/components/ui/HeroReveal';

interface PageHeaderProps {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
}

/**
 * Consistent banner used at the top of every interior page (non-home) — the
 * "hero" for those pages. Its content slides in from the left as one group,
 * same entrance as the homepage hero's text side; it has no image, so there's
 * no right-side slide here.
 */
export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <div className="border-b border-ink-800 bg-ink-950 py-14 sm:py-20">
      <Container>
        <HeroReveal variant="left">
          {eyebrow ? (
            <p className="mb-3 text-sm font-semibold tracking-wide text-primary-400 uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-2xl text-4xl text-white sm:text-5xl">{title}</h1>
          {description ? (
            <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-100">
              {description}
            </p>
          ) : null}
        </HeroReveal>
      </Container>
    </div>
  );
}
