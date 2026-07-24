import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { useInView } from '@/hooks/useInView';
import { cn } from '@/lib/cn';

const VARIANT_HIDDEN_STYLES = {
  'fade': 'opacity-0',
  'fade-up': 'opacity-0 translate-y-8',
  'slide-left': 'opacity-0 -translate-x-8',
  'slide-right': 'opacity-0 translate-x-8',
  'scale-in': 'opacity-0 scale-95',
} as const;

export type RevealVariant = keyof typeof VARIANT_HIDDEN_STYLES;

type RevealOwnProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: RevealVariant;
  /** Stagger delay in ms — pass `index * 80` (or similar) for groups of cards. */
  delay?: number;
};

type RevealProps<T extends ElementType> = RevealOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof RevealOwnProps<T>>;

/**
 * One-time scroll-triggered entrance animation. Wraps its children in the
 * chosen element (`as`, defaults to `div` — use `as="li"` etc. to keep
 * semantic markup intact inside lists) and transitions from the variant's
 * hidden state to fully visible the first time it enters the viewport.
 *
 * Pure opacity/transform, so it never causes layout shift, and it's inert
 * for `prefers-reduced-motion` users (see useInView) with the site's global
 * reduced-motion CSS as a second line of defense.
 */
export function Reveal<T extends ElementType = 'div'>({
  as,
  children,
  className,
  variant = 'fade-up',
  delay = 0,
  ...rest
}: RevealProps<T>) {
  const Tag = (as ?? 'div') as ElementType;
  const { ref, isInView } = useInView<HTMLElement>();

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-[opacity,transform] duration-[600ms] ease-out',
        isInView ? 'opacity-100 translate-x-0 translate-y-0 scale-100' : VARIANT_HIDDEN_STYLES[variant],
        className,
      )}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
