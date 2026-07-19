import type { ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';
import { Container } from '@/components/ui/Container';

const BACKGROUND_STYLES = {
  paper: 'bg-paper',
  white: 'bg-white',
  navy: 'bg-navy-950 text-white',
  tint: 'bg-navy-50',
} as const;

interface SectionProps {
  as?: ElementType;
  id?: string;
  children: ReactNode;
  className?: string;
  background?: keyof typeof BACKGROUND_STYLES;
  /** Set false to remove the default vertical rhythm, e.g. for a hero that manages its own spacing. */
  spacing?: boolean;
  containerClassName?: string;
  narrow?: boolean;
}

/** Standard full-width section band with consistent vertical rhythm and background. */
export function Section({
  as: Tag = 'section',
  id,
  children,
  className,
  background = 'paper',
  spacing = true,
  containerClassName,
  narrow = false,
}: SectionProps) {
  return (
    <Tag
      id={id}
      className={cn(
        BACKGROUND_STYLES[background],
        spacing && 'py-16 sm:py-20 lg:py-24',
        className,
      )}
    >
      <Container className={containerClassName} narrow={narrow}>
        {children}
      </Container>
    </Tag>
  );
}
