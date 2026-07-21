/**
 * Central business information.
 *
 * ⚠️ PLACEHOLDER VALUES — every value below is a temporary stand-in, not
 * confirmed client information. `phone` and `email` need to be replaced with
 * the real details before launch; nothing else in the codebase needs to
 * change when you do, since every page reads from here.
 */
export const siteConfig = {
  name: 'Benals Construction',
  shortName: 'Benals',
  tagline: 'Construction and renovation services for the Niagara Region',
  description:
    'Benals Construction is a family-run general contractor based in the Niagara Region, handling renovations, additions, and property improvements for homeowners, landlords, and businesses.',

  /** PLACEHOLDER — replace with the real business line before launch. */
  phone: {
    display: '(905) 394-2408',
    href: 'tel:+19053942408',
  },
  /** PLACEHOLDER — replace with the real business email before launch. */
  email: 'benalsconstruction@gmail.com',

  location: {
    region: 'Niagara Region, Ontario',
    /** Reasonable defaults based on the Niagara Region — adjust if the real service area differs. */
    areasServed: [
      'St. Catharines',
      'Niagara Falls',
      'Welland',
      'Niagara-on-the-Lake',
      'Thorold',
      'Fonthill',
      'Grimsby',
    ],
  },

  social: {
    facebook: '',
    instagram: '',
  },
} as const;
