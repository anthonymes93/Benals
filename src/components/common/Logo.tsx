import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/data/siteConfig';

interface LogoProps {
  inverse?: boolean;
  className?: string;
}

/** Text-only wordmark — "Benals" in the ink color, "Construction" in the primary accent. */
export function Logo({ inverse = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center font-display text-lg font-bold tracking-tight',
        inverse ? 'text-white' : 'text-ink-950',
        className,
      )}
    >
      <span className="leading-none">
        {siteConfig.shortName}
        <span className={inverse ? 'text-primary-400' : 'text-primary-600'}>
          {' '}
          Construction
        </span>
      </span>
    </Link>
  );
}
