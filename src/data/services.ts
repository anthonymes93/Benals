import {
  Hammer,
  Home,
  ChefHat,
  Layers,
  Fence,
  Building2,
} from 'lucide-react';
import type { Service } from '@/types';

/**
 * Service catalogue. This list drives the homepage preview grid and the
 * services page. To add a service, add an entry here — to give it its own
 * page later, add a route that reads the slug (see src/routes).
 */
export const services: Service[] = [
  {
    slug: 'home-renovations',
    title: 'Home Renovations',
    summary:
      'Full interior updates, from a single room to a whole-house overhaul.',
    description:
      "Whether you're updating one room or reworking the whole layout, we plan the job around how your home actually needs to function, then walk you through the sequence before any wall comes down. You get a clear scope, a realistic timeline, and one crew that sees it through.",
    icon: Hammer,
    image: {
      src: 'https://images.unsplash.com/photo-1517581177682-a085bb7ffb15?auto=format&fit=crop&w=1200&q=80',
      alt: 'Interior wall opened up to the framing during a renovation',
      width: 1200,
      height: 800,
    },
    highlights: [
      'Layout changes and structural work',
      'Flooring, trim, and finish carpentry',
      'Permit handling and inspection scheduling',
    ],
  },
  {
    slug: 'additions-extensions',
    title: 'Additions & Extensions',
    summary:
      'Extra square footage that matches your home instead of looking bolted on.',
    description:
      "Adding on to a house means tying new framing, rooflines, and siding into something that was already built — and getting it to look like it was always there. We handle the structural side and the finish work under one roof, so the addition reads as part of the house, not an afterthought.",
    icon: Home,
    image: {
      src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      alt: 'Crew pouring a concrete foundation for a new addition',
      width: 1200,
      height: 800,
    },
    highlights: [
      'Second-storey and rear additions',
      'Roofline and exterior matching',
      'Engineering coordination where required',
    ],
  },
  {
    slug: 'kitchen-bathroom-remodels',
    title: 'Kitchen & Bathroom Remodels',
    summary: 'The two rooms that get used hardest, rebuilt to hold up.',
    description:
      "Kitchens and bathrooms carry more plumbing, electrical, and daily wear than any other room in the house, so sequencing matters. We coordinate the trades, protect the rest of your home from dust and disruption, and keep you posted on what's happening and when.",
    icon: ChefHat,
    image: {
      src: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern kitchen with a large island and pendant lighting',
      width: 1200,
      height: 800,
    },
    highlights: [
      'Cabinetry, countertops, and tile work',
      'Plumbing and electrical coordination',
      'Layout redesign for better flow',
    ],
  },
  {
    slug: 'basement-finishing',
    title: 'Basement Finishing',
    summary: 'Turning unused space into a room you actually spend time in.',
    description:
      "A finished basement is only as good as what's behind the drywall. We start with moisture control and proper insulation, then build out the space, whether that's a rec room, a home office, or a self-contained suite.",
    icon: Layers,
    image: {
      src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80',
      alt: 'Foundation and framing work on a residential construction site',
      width: 1200,
      height: 800,
    },
    highlights: [
      'Moisture control and proper insulation',
      'Framing, electrical, and drywall',
      'Legal secondary suite build-outs',
    ],
  },
  {
    slug: 'decks-outdoor-structures',
    title: 'Decks & Outdoor Structures',
    summary: 'Built for Niagara winters, not just one good summer.',
    description:
      "A deck or structure that's built to handle freeze-thaw cycles year after year needs the right footings and materials from the start. We build decks, porches, and outdoor structures sized and detailed for how you'll actually use the space.",
    icon: Fence,
    image: {
      src: 'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?auto=format&fit=crop&w=1200&q=80',
      alt: 'Crew member setting rebar for an outdoor structure',
      width: 1200,
      height: 800,
    },
    highlights: [
      'Frost-depth footings for our climate',
      'Composite and pressure-treated options',
      'Railings, pergolas, and covered porches',
    ],
  },
  {
    slug: 'commercial-build-outs',
    title: 'Commercial Build-Outs',
    summary: 'Interior fit-outs for retail, office, and hospitality spaces.',
    description:
      "Commercial work runs on a schedule, usually with a business trying to open, reopen, or keep operating around it. We plan the sequence to minimize downtime and keep you updated as the job moves, so there are no surprises before opening day.",
    icon: Building2,
    image: {
      src: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=1200&q=80',
      alt: 'Modern commercial building exterior with glass and steel detailing',
      width: 1200,
      height: 800,
    },
    highlights: [
      'Retail, office, and restaurant fit-outs',
      'Scheduling built around your opening date',
      'Code compliance and inspection coordination',
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}
