import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { NavLink } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { primaryNav } from '@/data/navigation';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/cn';
import { useLockBodyScroll } from '@/hooks/useLockBodyScroll';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  useLockBodyScroll(isOpen);

  useEffect(() => {
    if (!isOpen) return;

    firstLinkRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') onClose();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return createPortal(
    <div
      id="mobile-menu"
      className={cn(
        'fixed inset-0 top-16 z-40 bg-ink-950 lg:hidden',
        isOpen ? 'block' : 'hidden',
      )}
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <nav className="flex h-full flex-col px-6 py-8" aria-label="Mobile">
        <ul className="flex flex-col gap-1">
          {primaryNav.map((item, index) => (
            <li key={item.href}>
              <NavLink
                ref={index === 0 ? firstLinkRef : undefined}
                to={item.href}
                onClick={onClose}
                className={({ isActive }) =>
                  cn(
                    'block rounded-md px-3 py-3.5 text-lg font-medium text-white',
                    isActive ? 'bg-white/10' : 'hover:bg-white/5',
                  )
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-col gap-3 border-t border-white/10 pt-6">
          <Button
            href={siteConfig.phone.href}
            variant="accent"
            size="lg"
            leftIcon={<Phone className="h-5 w-5" aria-hidden="true" />}
            fullWidth
          >
            Call {siteConfig.phone.display}
          </Button>
          <Button href="/contact" variant="outlineInverse" size="lg" onClick={onClose} fullWidth>
            Request a Free Estimate
          </Button>
        </div>
      </nav>
    </div>,
    document.body,
  );
}
