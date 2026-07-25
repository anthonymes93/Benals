import heroPhoto1 from '@/assets/imgs/herohome/1.jpeg';
import heroPhoto2 from '@/assets/imgs/herohome/2.jpeg';
import heroPhoto3 from '@/assets/imgs/herohome/3.jpeg';
import type { ImageAsset } from '@/types';

/**
 * Homepage hero background slideshow — exactly 3 images, shown in this
 * order (matching the 1/2/3 filenames in src/assets/imgs/herohome) on a
 * continuous loop. Swap the imports and alt text below with new photos
 * whenever they change — nothing else needs to change, `HeroSlideshow` just
 * renders whatever this list contains.
 */
export const heroImages: ImageAsset[] = [
  {
    src: heroPhoto1,
    alt: 'A hand sketching a floor plan beside a torn-paper reveal of a house under construction',
    width: 1254,
    height: 1254,
  },
  {
    src: heroPhoto2,
    alt: 'Attic renovation mid-progress with exposed insulation, framing, and tools staged on the floor',
    width: 1536,
    height: 1024,
  },
  {
    src: heroPhoto3,
    alt: 'A contractor reviewing blueprints in a bright, mid-renovation open-concept room',
    width: 1381,
    height: 1139,
  },
];
