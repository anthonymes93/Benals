import type { ComponentPropsWithoutRef, ElementType, ReactNode } from 'react';
import { cn } from '@/lib/cn';

type CardOwnProps<T extends ElementType> = {
  as?: T;
  children: ReactNode;
  /** Subtle lift on hover — use for cards that are also links. */
  interactive?: boolean;
  className?: string;
};

type CardProps<T extends ElementType> = CardOwnProps<T> &
  Omit<ComponentPropsWithoutRef<T>, keyof CardOwnProps<T>>;

/** Base surface for service cards, info cards, and content tiles. Polymorphic via `as`. */
export function Card<T extends ElementType = 'div'>({
  as,
  children,
  className,
  interactive = false,
  ...rest
}: CardProps<T>) {
  const Tag = as ?? 'div';

  return (
    <Tag
      className={cn(
        'rounded-xl border border-ink-200 bg-white p-6 shadow-sm',
        interactive &&
          'transition-[transform,box-shadow,border-color] duration-200 ease-out hover:-translate-y-0.5 hover:shadow-md hover:border-tertiary-200',
        className,
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
}
