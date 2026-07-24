import type { ReactNode } from 'react';
import { useHeroEntrance } from '@/hooks/useHeroEntrance';
import { cn } from '@/lib/cn';

type HeroRevealVariant = 'left' | 'right';

interface HeroRevealProps {
  children: ReactNode;
  variant: HeroRevealVariant;
  /** Stagger delay in ms — the image should start ~100-150ms after the text. */
  delay?: number;
  className?: string;
}

const OFFSET_CLASS: Record<HeroRevealVariant, string> = {
  left: '-translate-x-[130px]',
  right: 'translate-x-[130px]',
};

/**
 * Big, obvious page-load entrance used only by hero sections (the homepage
 * photo hero and the `PageHeader` banner every interior page uses) —
 * deliberately much stronger than the site's subtle scroll-triggered
 * `Reveal`, and always plays on mount rather than on scroll.
 *
 * Transitions `translate` (not `transform`): Tailwind's translate-x utilities
 * set the standalone CSS `translate` property, and `transition: transform`
 * does not cover it — that mismatch is what made earlier attempts snap
 * straight to their end position instead of visibly sliding.
 */
export function HeroReveal({ children, variant, delay = 0, className }: HeroRevealProps) {
  const entered = useHeroEntrance();

  return (
    <div
      className={cn(
        'transition-[opacity,translate] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]',
        entered ? 'translate-x-0 opacity-100' : cn(OFFSET_CLASS[variant], 'opacity-0'),
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
