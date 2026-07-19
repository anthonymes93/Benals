import { Hammer, Home, Layers, KeyRound, Building2, Fence, Wrench } from 'lucide-react';
import type { ServiceCategory } from '@/types';

/**
 * Service categories. This list drives the homepage category grid and the
 * Services page sections — both read from the same array, so a new category
 * only needs to be added here once. Each `slug` is also the anchor id on the
 * Services page (/services#slug); see src/types for notes on turning a
 * category into its own route later.
 */
export const serviceCategories: ServiceCategory[] = [
  {
    slug: 'renovations-interior',
    title: 'Renovations & Interior Improvements',
    summary:
      'Full or partial renovations for any room in the house — kitchens, bathrooms, basements, and everything between.',
    description:
      "Most renovation projects start with one room and grow from there once you see what's possible. We handle whole-home renovations and single-room updates the same way: plan the layout around how you actually live, protect the rest of the house while we work, and finish with materials that hold up. Interior design support is available if you want help choosing finishes.",
    icon: Hammer,
    image: {
      src: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
      alt: 'Interior wall opened up to the framing during a renovation',
      width: 1200,
      height: 800,
    },
    items: [
      'Home renovations',
      'Whole-home renovations',
      'Kitchen renovations',
      'Bathroom renovations',
      'Basement renovations',
      'Interior renovations',
      'Interior design',
      'General home improvements',
    ],
  },
  {
    slug: 'construction-additions',
    title: 'Construction & Additions',
    summary: 'Additions and new builds, from early planning through the final walkthrough.',
    description:
      "Whether you're adding a second storey, building a custom home, or need a hand managing a private build from the ground up, we handle the structural work and the finishing under one roof. We're involved from the planning stage — drawings, permits, sequencing — through to completion, so the project has one point of contact the whole way.",
    icon: Home,
    image: {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      alt: 'Crew pouring a concrete foundation for a new addition',
      width: 1200,
      height: 800,
    },
    items: [
      'Home additions',
      'Custom home building',
      'Private home-building assistance',
      'Design and build',
      'Planning through completion',
    ],
  },
  {
    slug: 'legal-basement-apartments',
    title: 'Legal Basement Apartments',
    summary: 'Basement conversions and legal secondary suites, coordinated from planning to permits.',
    description:
      "Turning a basement into a legal apartment involves more than finishing the space — it means meeting building code for egress, ceiling height, fire separation, and more. We coordinate the permit and inspection process alongside the construction, and work with investment property owners who need the unit done right the first time.",
    icon: Layers,
    image: {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
      alt: 'Foundation and framing work on a residential construction site',
      width: 1200,
      height: 800,
    },
    items: [
      'Legal basement apartment construction',
      'Basement conversions',
      'Permit-related project coordination',
      'Investment property improvements',
      'Planning through completion',
    ],
    note: "Permit approval and timelines are set by the municipality, not by us. We coordinate the process closely, but we can't guarantee approval or a specific date.",
  },
  {
    slug: 'airbnb-rental-properties',
    title: 'Airbnb & Rental Properties',
    summary: 'Design, renovation, and upkeep for short-term rentals and long-term rental properties.',
    description:
      "Rental properties get used hard, whether it's a weekend Airbnb turnover or a long-term tenancy. We design and build spaces meant for that kind of use, renovate between tenants or bookings, and handle the repairs that come up along the way. For landlords managing multiple units, we can take ongoing maintenance off your plate.",
    icon: KeyRound,
    image: {
      src: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
      alt: 'Renovated bathroom with a glass shower, styled for a rental property',
      width: 1200,
      height: 800,
    },
    items: [
      'Airbnb design and build',
      'Short-term rental renovations',
      'Rental property renovations',
      'Tenant-related repairs',
      'Property improvements between tenants',
      'Landlord property maintenance',
    ],
  },
  {
    slug: 'commercial-institutional',
    title: 'Commercial & Institutional Projects',
    summary: 'Renovations for offices, medical spaces, schools, and other commercial interiors.',
    description:
      "Commercial spaces come with their own scheduling pressure — a business trying to stay open, a medical office that can't sit empty, a school working around the calendar. We take on office renovations, medical and doctor's office fit-outs, waiting rooms, and other institutional interiors, and can schedule evening or weekend work when that's what keeps a space running. Every project moves through the same planning-to-completion process, so there are no surprises before opening day.",
    icon: Building2,
    image: {
      src: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern commercial building exterior with glass and steel detailing',
      width: 1200,
      height: 800,
    },
    items: [
      'Commercial renovations',
      'Commercial spaces',
      'Office renovations',
      "Medical and doctor's office renovations",
      'Waiting-room renovations',
      'School renovations',
      'Weekend renovation scheduling where appropriate',
      'Interior commercial improvements',
      'Planning through completion',
    ],
  },
  {
    slug: 'outdoor-projects',
    title: 'Outdoor Projects',
    summary: 'Decks, patios, and outdoor living spaces built for the Niagara climate.',
    description:
      'A deck or patio gets more use when it\'s actually built for how you plan to use it — and built to handle our winters. We design, build, and install outdoor structures and living spaces, from a straightforward deck to a more involved backyard project.',
    icon: Fence,
    image: {
      src: 'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Crew member setting rebar for an outdoor structure',
      width: 1200,
      height: 800,
    },
    items: [
      'Decks',
      'Patios',
      'Outdoor structures',
      'Outdoor living improvements',
      'Design, build, and installation',
    ],
  },
  {
    slug: 'property-maintenance-repairs',
    title: 'Property Maintenance & Repairs',
    summary: 'General repairs and ongoing maintenance for homes and commercial properties.',
    description:
      "Not every job is a full renovation. We also take on smaller work — drywall repair and finishing, general repairs, and ongoing maintenance for both homes and commercial properties. It's a reliable way to keep a property in good shape without waiting for a bigger project to justify the call.",
    icon: Wrench,
    image: {
      src: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80',
      alt: 'Cleaning and maintaining a window as part of routine property upkeep',
      width: 1200,
      height: 800,
    },
    items: [
      'Property maintenance',
      'General repairs',
      'Ongoing maintenance',
      'Drywall',
      'Drywall finishing',
      'Small renovations',
      'Interior and exterior property improvements',
    ],
  },
];

export function getCategoryBySlug(slug: string): ServiceCategory | undefined {
  return serviceCategories.find((category) => category.slug === slug);
}
