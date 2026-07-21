import {
  Wrench,
  Home,
  Hammer,
  Bath,
  Layers,
  HardHat,
  KeyRound,
  PaintRoller,
  Palette,
  Sun,
  Building,
  Building2,
  Stethoscope,
  GraduationCap,
} from 'lucide-react';
import type { Service } from '@/types';

/**
 * The full, confirmed list of Benals Construction services — the single
 * source of truth for both the homepage card grid and the Services page.
 * Order here is the approved display order; `order` is kept explicit too so
 * it stays meaningful even if this array is ever re-sorted programmatically.
 * To add a service: add an entry here (and bump the `order` of anything
 * after it) — no other file needs a service list of its own.
 */
export const services: Service[] = [
  {
    id: 'property-maintenance',
    slug: 'property-maintenance',
    title: 'Property Maintenance',
    order: 1,
    icon: Wrench,
    shortDescription:
      'Reliable repairs, upkeep, and practical improvements for residential and rental properties.',
    longDescription:
      "Not every job is a full renovation. We handle the smaller, ongoing work that keeps a property in good shape — repairs, upkeep, and practical fixes for homeowners, landlords, and property managers alike. It's a practical way to stay ahead of small issues before they become bigger ones.",
    bullets: ['General repairs', 'Ongoing maintenance', 'Small renovations', 'Interior and exterior upkeep'],
  },
  {
    id: 'additions',
    slug: 'additions',
    title: 'Additions',
    order: 2,
    icon: Home,
    shortDescription:
      'Well-planned additions that create more usable space and fit naturally with the existing property.',
    longDescription:
      "Adding onto a property means tying new framing, rooflines, and finishes into something that already exists — and getting it to look like it was always there. We handle the planning and the build together, so the addition reads as part of the property instead of an obvious add-on.",
    bullets: ['Second-storey and rear additions', 'Roofline and exterior matching', 'Structural planning and coordination'],
  },
  {
    id: 'renovations',
    slug: 'renovations',
    title: 'Renovations',
    order: 3,
    icon: Hammer,
    shortDescription:
      'Interior and whole-property renovations handled with practical planning, reliable communication, and respect for the space.',
    longDescription:
      "Whether it's one room or the whole property, we plan the work around how the space actually gets used, protect the rest of the property while we work, and finish with materials that hold up. Clear communication throughout means you always know what's happening and why.",
    bullets: ['Whole-property and single-room renovations', 'Layout and structural changes', 'Finish carpentry and material selection'],
  },
  {
    id: 'bathroom-renovations',
    slug: 'bathroom-renovations',
    title: 'Bathroom Renovations',
    order: 4,
    icon: Bath,
    shortDescription:
      'Bathroom updates and complete renovations focused on function, comfort, cleanliness, and efficient workmanship.',
    longDescription:
      "Bathrooms carry more plumbing, electrical, and daily wear than almost any other room, so sequencing and material choice matter. We handle everything from a straightforward update to a full renovation, with an eye toward function and long-term cleanliness as much as looks.",
    bullets: ['Full renovations and smaller updates', 'Plumbing and electrical coordination', 'Tile, fixtures, and ventilation'],
  },
  {
    id: 'legal-basement-apartments',
    slug: 'legal-basement-apartments',
    title: 'Legal Basement Apartments',
    order: 5,
    icon: Layers,
    shortDescription:
      'Basement conversions and apartment construction with attention to planning, layout, permits, and long-term usability.',
    longDescription:
      "Turning a basement into a legal apartment involves more than finishing the space — layout, egress, ceiling height, and separation all factor into the plan from the start. We coordinate the construction alongside the permit process and design for long-term usability, not just passing inspection once.",
    bullets: ['Basement conversions and new apartment construction', 'Layout and permit-related planning', 'Long-term usability and livability'],
    note: "Permit approval and timelines are set by the municipality, not by us. We coordinate the process closely, but we can't guarantee approval or a specific date.",
  },
  {
    id: 'home-building',
    slug: 'home-building',
    title: 'Home Building',
    order: 6,
    icon: HardHat,
    shortDescription:
      'Support for private home-building projects from early planning through construction and completion.',
    longDescription:
      "Building a home from the ground up, or supporting a private build you're managing yourself, takes coordination across a lot of moving parts. We're involved from early planning through construction and completion, working alongside the other people and permits a build requires.",
    bullets: ['Private home-building support', 'Planning through completion', 'Trade and schedule coordination'],
  },
  {
    id: 'airbnb-design-build-maintain',
    slug: 'airbnb-design-build-maintain',
    title: 'Airbnb Design, Build & Maintain',
    order: 7,
    icon: KeyRound,
    shortDescription:
      'Design, renovation, setup, and ongoing property support for short-term rental spaces.',
    longDescription:
      "Short-term rentals need to be designed and built for how guests actually use a space — durable finishes, efficient layouts, and a look that photographs well. We handle the design and build for Airbnb properties, then stay available for the upkeep that keeps a listing guest-ready between bookings.",
    bullets: ['Design and build for short-term rentals', 'Turnover-ready finishes and layouts', 'Ongoing property support'],
  },
  {
    id: 'drywall-finishing',
    slug: 'drywall-finishing',
    title: 'Drywall & Drywall Finishing',
    order: 8,
    icon: PaintRoller,
    shortDescription:
      'Drywall installation, repairs, taping, finishing, and preparation for a clean finished surface.',
    longDescription:
      "Drywall work is easy to notice when it's done poorly and invisible when it's done right. We handle installation, repairs, taping, and finishing to a clean, paint-ready surface, whether it's a small patch or a full room.",
    bullets: ['Installation and repairs', 'Taping and finishing', 'Surface preparation for paint'],
  },
  {
    id: 'interior-design',
    slug: 'interior-design',
    title: 'Interior Design',
    order: 9,
    icon: Palette,
    shortDescription:
      'Practical interior design guidance that helps clients make confident choices about layout, materials, finishes, and overall direction.',
    longDescription:
      "Choosing layouts, materials, and finishes gets overwhelming fast when there are too many options and no clear direction. We offer practical design guidance alongside the construction work, so decisions are grounded in what will actually work for the space and the budget.",
    bullets: ['Layout and material guidance', 'Finish selection', 'Coordinated with the construction timeline'],
  },
  {
    id: 'patios',
    slug: 'patios',
    title: 'Patios',
    order: 10,
    icon: Sun,
    shortDescription:
      'Patio design, construction, and installation for functional and comfortable outdoor spaces.',
    longDescription:
      "A patio gets more use when it's actually built for how you plan to use it, with materials and drainage suited to our climate. We handle the design, construction, and installation, from a simple patio to a more involved outdoor living space.",
    bullets: ['Design and layout planning', 'Construction and installation', 'Material options suited to the climate'],
  },
  {
    id: 'rentals',
    slug: 'rentals',
    title: 'Rentals',
    order: 11,
    icon: Building,
    shortDescription:
      'Repairs, renovations, turnovers, and ongoing improvements for landlords and rental property owners.',
    longDescription:
      "Rental properties take a different kind of wear than an owner-occupied home, and turnovers don't leave much room for delay. We handle repairs, renovations, and the improvements that come up between tenants, working directly with landlords and property owners to keep units in good shape.",
    bullets: ['Tenant turnover repairs and renovations', 'Ongoing property improvements', 'Direct coordination with landlords'],
  },
  {
    id: 'commercial-space-renovations',
    slug: 'commercial-space-renovations',
    title: 'Commercial Space Renovations',
    order: 12,
    icon: Building2,
    shortDescription:
      'Planning and renovation work for commercial interiors, offices, and other business spaces.',
    longDescription:
      "Commercial spaces come with their own scheduling pressure — a business trying to stay open, or a space that needs to be ready by a set date. We plan and renovate offices and other commercial interiors with that timeline in mind.",
    bullets: ['Office and commercial interior renovations', 'Planning around business schedules', 'Interior improvements and fit-outs'],
  },
  {
    id: 'doctors-waiting-rooms',
    slug: 'doctors-waiting-rooms',
    title: "Doctor's Waiting Rooms",
    order: 13,
    icon: Stethoscope,
    shortDescription:
      'Renovation and refresh work for medical waiting rooms and related interior spaces.',
    longDescription:
      "Medical waiting rooms and related spaces need to stay functional and welcoming while minimizing downtime for the practice. We take on renovation and refresh work for these spaces and can schedule around clinic hours where that helps reduce disruption.",
    bullets: ['Waiting room and reception renovations', 'Refresh and update work', 'Scheduling to reduce disruption where possible'],
  },
  {
    id: 'school-renovations',
    slug: 'school-renovations',
    title: 'School Renovations',
    order: 14,
    icon: GraduationCap,
    shortDescription:
      'Repairs, upgrades, drywall, and small renovation work for school and institutional spaces.',
    longDescription:
      "School and institutional spaces need repairs and upgrades handled carefully around a schedule that isn't flexible. We take on drywall, repairs, and small renovation work for these spaces, including scheduling around school hours or breaks where that helps.",
    bullets: ['Repairs and upgrades', 'Drywall and small renovation work', 'Scheduling around school hours where possible'],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
