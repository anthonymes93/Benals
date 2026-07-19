import type { LucideIcon } from 'lucide-react';

export interface ImageAsset {
  /** Image URL. Swap this to a local asset path once real photography is available. */
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  slug: string;
  title: string;
  /** One-line summary used on cards and previews. */
  summary: string;
  /** Longer description used on the services page. */
  description: string;
  icon: LucideIcon;
  image: ImageAsset;
  /** Short bullet list of what's included. */
  highlights: string[];
}

export interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Honeypot field — must stay empty. Not shown to real users. */
  company: string;
}

export type ContactFormStatus = 'idle' | 'submitting' | 'success' | 'error';
