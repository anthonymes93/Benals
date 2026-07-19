import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

const TONE_STYLES = {
  neutral: 'bg-ink-50 text-ink-800',
  primary: 'bg-primary-50 text-primary-700',
  secondary: 'bg-secondary-50 text-secondary-700',
  tertiary: 'bg-tertiary-50 text-tertiary-700',
} as const;

export type BadgeTone = keyof typeof TONE_STYLES;

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  inverse?: boolean;
  /** Color tone. Defaults to neutral — reach for primary/secondary/tertiary sparingly. */
  tone?: BadgeTone;
}

/** Small trust-signal pill, e.g. "Free Estimates" or "Licensed & Insured". */
export function Badge({ children, icon, className, inverse = false, tone = 'neutral' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium',
        inverse ? 'bg-white/10 text-white' : TONE_STYLES[tone],
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
