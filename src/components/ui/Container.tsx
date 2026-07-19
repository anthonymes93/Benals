import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface ContainerProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  /** Use the narrower reading-width measure for long-form text content. */
  narrow?: boolean;
}

/** Centers content and applies the site's consistent horizontal gutters. */
export function Container({
  as: Tag = 'div',
  children,
  className,
  narrow = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        'mx-auto w-full px-5 sm:px-6 lg:px-8',
        narrow ? 'max-w-(--container-narrow)' : 'max-w-(--container-content)',
        className,
      )}
    >
      {children}
    </Tag>
  );
}
