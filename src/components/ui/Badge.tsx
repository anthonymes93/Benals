import type { ReactNode } from 'react';
import { cn } from '@/lib/cn';

interface BadgeProps {
  children: ReactNode;
  icon?: ReactNode;
  className?: string;
  inverse?: boolean;
}

/** Small trust-signal pill, e.g. "Free Estimates" or "Licensed & Insured". */
export function Badge({ children, icon, className, inverse = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-medium',
        inverse
          ? 'bg-white/10 text-white'
          : 'bg-navy-50 text-navy-800',
        className,
      )}
    >
      {icon}
      {children}
    </span>
  );
}
