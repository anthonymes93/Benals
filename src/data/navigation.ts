import type { NavItem } from '@/types';

/**
 * Primary site navigation. Add a page component under src/pages, a route in
 * src/routes/AppRoutes.tsx, then append it here — the header and mobile menu
 * both read from this list, so nothing else needs to change.
 */
export const primaryNav: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];
