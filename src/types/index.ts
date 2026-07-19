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
 * A high-level service category (e.g. "Renovations & Interior Improvements").
 * Each category groups several related services under one card/section
 * rather than every individual service getting its own page. `slug` doubles
 * as the anchor id on the Services page (#slug) and is stable enough to
 * become a dedicated route (/services/slug) later without touching this
 * shape — a future single-service page just needs a new route that reads
 * `getCategoryBySlug` and, if it needs more detail than `items` provides,
 * an additional optional field here.
 */
export interface ServiceCategory {
  slug: string;
  title: string;
  /** One-line summary used on homepage cards and previews. */
  summary: string;
  /** Longer description used on the services page. */
  description: string;
  icon: LucideIcon;
  image: ImageAsset;
  /** Individual services included in this category. */
  items: string[];
  /** Optional short disclaimer shown under the category (e.g. permit timelines vary). */
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
