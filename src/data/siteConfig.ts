/**
 * Central business information. Every placeholder below (phone, email, hours)
 * is formatted correctly and wired through the whole site — replace the values
 * once real details are confirmed and nothing else needs to change.
 */
export const siteConfig = {
  name: 'Benals Construction',
  shortName: 'Benals',
  tagline: 'General contracting for the Niagara Region',
  description:
    'Benals Construction is a general contractor based in the Niagara Region, handling renovations, additions, and custom build-outs for homeowners and businesses.',

  phone: {
    display: '(905) 555-0142',
    href: 'tel:+19055550142',
  },
  email: 'info@benalsconstruction.ca',

  location: {
    region: 'Niagara Region, Ontario',
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

  hours: [
    { days: 'Monday – Friday', time: '7:30 AM – 5:00 PM' },
    { days: 'Saturday', time: 'By appointment' },
    { days: 'Sunday', time: 'Closed' },
  ],

  social: {
    facebook: '',
    instagram: '',
  },
} as const;
