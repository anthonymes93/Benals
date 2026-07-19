import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
  /** Set for use on the dark navy section background. */
  inverse?: boolean;
}

/** Consistent eyebrow + heading + description block used to open most sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
  inverse = false,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {eyebrow ? (
        <p
          className={cn(
            'mb-3 text-sm font-semibold tracking-wide uppercase',
            inverse ? 'text-primary-400' : 'text-primary-600',
          )}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        className={cn(
          'text-3xl sm:text-4xl',
          inverse && 'text-white',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-base leading-relaxed sm:text-lg',
            inverse ? 'text-ink-100' : 'text-ink-600',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
