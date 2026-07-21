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

/**
 * A single Benals Construction service. Every service is listed individually
 * (no grouping into categories) and rendered in `order` on both the
 * homepage grid and the Services page. `slug` doubles as the anchor id on
 * the Services page (#slug) and is stable enough to become a dedicated route
 * (/services/slug) later without touching this shape — a future
 * single-service page just needs a new route that reads `getServiceBySlug`.
 */
export interface Service {
  /** Stable unique identifier — currently mirrors `slug`. */
  id: string;
  slug: string;
  title: string;
  /** Where this service sits in the confirmed display order (1-based). */
  order: number;
  icon: LucideIcon;
  /** One or two sentences — used on the homepage card. */
  shortDescription: string;
  /** Fuller description used on the Services page. */
  longDescription: string;
  /** Optional supporting bullet points, shown on the Services page only. */
  bullets?: string[];
  /** Optional short disclaimer shown on the Services page only (e.g. permit timelines vary). */
  note?: string;
}

export const GALLERY_CATEGORIES = [
  'Renovations',
  'Kitchens & Bathrooms',
  'Basements',
  'Outdoor',
  'Commercial',
  'Property Improvements',
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number];

export interface GalleryImage extends ImageAsset {
  category: GalleryCategory;
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
