import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { primaryNav } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import { Logo } from '@/components/common/Logo';
import { MobileNav } from '@/components/layout/MobileNav';
import { cn } from '@/lib/cn';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 h-16 border-b border-neutral-200 bg-white/95 backdrop-blur-sm">
      <Container className="flex h-full items-center justify-between">
        <Logo />

        <nav className="hidden lg:block" aria-label="Primary">
          <ul className="flex items-center gap-1">
            {primaryNav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      'block rounded-md px-3.5 py-2 text-[15px] font-medium text-neutral-700 transition-colors hover:text-navy-950',
                      isActive && 'text-navy-950',
                    )
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={siteConfig.phone.href}
            className="hidden items-center gap-1.5 text-[15px] font-semibold text-navy-950 hover:text-brand-red-600 sm:flex"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone.display}
          </a>
          <Button href="/contact" variant="accent" size="sm" className="hidden sm:inline-flex">
            Free Estimate
          </Button>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-navy-950 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </Container>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  );
}
