import type { GalleryImage } from '@/types';

/**
 * Placeholder project photography. These are stock photos standing in for
 * real project photos, not completed Benals Construction work — swap each
 * `src` for a real photo when it's available and everything downstream
 * (Gallery page, filters, grid layout) keeps working unchanged. Keep
 * `category` accurate when you do, since it drives the filter buttons.
 */
export const galleryImages: GalleryImage[] = [
  {
    src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Sketching out project plans before work begins',
    width: 1000,
    height: 750,
    category: 'Renovations',
  },
  {
    src: 'https://images.unsplash.com/photo-1503594384566-461fe158e797?auto=format&fit=crop&w=1000&q=80',
    alt: 'Finished home exterior with new siding',
    width: 1000,
    height: 750,
    category: 'Renovations',
  },
  {
    src: 'https://images.unsplash.com/photo-1602028915047-37269d1a73f7?auto=format&fit=crop&w=1000&q=80',
    alt: 'Completed kitchen with island and pendant lighting',
    width: 1000,
    height: 667,
    category: 'Kitchens & Bathrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1000&q=80',
    alt: 'Finished bathroom with a freestanding tub',
    width: 1000,
    height: 750,
    category: 'Kitchens & Bathrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1560440021-33f9b867899d?auto=format&fit=crop&w=1000&q=80',
    alt: 'Kitchen with wood accents and a farmhouse-style dining table',
    width: 1000,
    height: 750,
    category: 'Kitchens & Bathrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
    alt: 'Open-concept living space after a renovation',
    width: 1000,
    height: 1250,
    category: 'Renovations',
  },
  {
    src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&w=1000&q=80',
    alt: 'Shaking hands on a completed project',
    width: 1000,
    height: 667,
    category: 'Property Improvements',
  },
  {
    src: 'https://images.unsplash.com/photo-1618221469555-7f3ad97540d6?auto=format&fit=crop&w=1000&q=80',
    alt: 'Finished living room with updated finishes',
    width: 1000,
    height: 1250,
    category: 'Property Improvements',
  },
  {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    alt: 'Renovated living and kitchen area with an open layout',
    width: 1000,
    height: 667,
    category: 'Kitchens & Bathrooms',
  },
  {
    src: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=80',
    alt: 'Living room with fireplace after a full renovation',
    width: 1000,
    height: 750,
    category: 'Renovations',
  },
  {
    src: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1000&q=80',
    alt: 'Foundation and framing work on a residential construction site',
    width: 1000,
    height: 750,
    category: 'Basements',
  },
  {
    src: 'https://images.unsplash.com/photo-1494891848038-7bd202a2afeb?auto=format&fit=crop&w=1000&q=80',
    alt: 'Modern commercial building exterior with glass and steel detailing',
    width: 1000,
    height: 1250,
    category: 'Commercial',
  },
  {
    src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
    alt: 'Modern office interior hallway',
    width: 1000,
    height: 750,
    category: 'Commercial',
  },
  {
    src: 'https://images.unsplash.com/photo-1489514354504-1653aa90e34e?auto=format&fit=crop&w=1000&q=80',
    alt: 'Crew member setting rebar for an outdoor structure',
    width: 1000,
    height: 750,
    category: 'Outdoor',
  },
];
