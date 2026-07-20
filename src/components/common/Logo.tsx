import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';
import { siteConfig } from '@/data/siteConfig';

interface LogoProps {
  inverse?: boolean;
  className?: string;
}

/**
 * Text wordmark placeholder. Replace the SVG mark below with the real logo
 * file when it's available — everything else that renders <Logo /> stays
 * the same.
 */
export function Logo({ inverse = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center gap-2.5 font-display text-lg font-bold tracking-tight',
        inverse ? 'text-white' : 'text-ink-950',
        className,
      )}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 48 48"
        aria-hidden="true"
        className="shrink-0"
      >
        <rect width="48" height="48" rx="10" fill="#010F29" />
        <path
          d="M15 12h11.5c4.14 0 7 2.6 7 6.4 0 2.66-1.46 4.55-3.6 5.4 2.7.75 4.4 2.8 4.4 5.9 0 4.2-3.1 7.3-7.6 7.3H15V12Zm10.6 10.9c2 0 3.3-1.1 3.3-2.9 0-1.8-1.3-2.9-3.3-2.9h-5.4v5.8h5.4Zm.6 11c2.2 0 3.6-1.25 3.6-3.15 0-1.9-1.4-3.15-3.6-3.15h-6v6.3h6Z"
          fill="#ffffff"
        />
        <rect x="15" y="34.5" width="21" height="3.5" fill="#AB4E17" />
      </svg>
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
