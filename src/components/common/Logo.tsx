import { Link } from 'react-router-dom';
import { cn } from '@/lib/cn';

interface LogoProps {
  inverse?: boolean;
  className?: string;
}

/**
 * Text-only wordmark — "Ben" / "al" / "s" each in a solid, vivid brand color
 * (the same saturated orange/blue/pink used by the CTA button, no gradient),
 * "Construction" in ink on the light header and white on the dark footer.
 */
export function Logo({ inverse = false, className }: LogoProps) {
  return (
    <Link
      to="/"
      className={cn(
        'inline-flex items-center font-display text-[23px] font-bold tracking-tight',
        className,
      )}
    >
      <span className="leading-none">
        <span className={inverse ? 'text-cta-orange-bright' : 'text-cta-orange'}>Ben</span>
        <span className={inverse ? 'text-outline-blue-bright' : 'text-outline-blue'}>al</span>
        <span className={inverse ? 'text-cta-pink-bright' : 'text-cta-pink'}>s</span>
        <span className={inverse ? 'text-white' : 'text-ink-950'}> Construction</span>
      </span>
    </Link>
  );
}
