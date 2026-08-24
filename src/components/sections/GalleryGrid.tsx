import { Image } from '@/components/common/Image';
import { Reveal } from '@/components/ui/Reveal';
import type { ImageAsset } from '@/types';

interface GalleryGridProps {
  images: ImageAsset[];
  layout?: 'masonry' | 'grid';
}

/** Masonry-style photo grid for the Gallery page. */
export function GalleryGrid({ images, layout = 'masonry' }: GalleryGridProps) {
  if (layout === 'grid') {
    return (
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <Reveal
            key={image.src}
            variant="scale-in"
            delay={(index % 4) * 70}
            className="aspect-[3/4] overflow-hidden rounded-xl border border-ink-200"
          >
            <Image asset={image} />
          </Reveal>
        ))}
      </div>
    );
  }

  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {images.map((image, index) => (
        <Reveal
          key={image.src}
          variant="scale-in"
          delay={(index % 4) * 70}
          className="mb-4 overflow-hidden rounded-xl border border-ink-200 break-inside-avoid"
        >
          <Image asset={image} />
        </Reveal>
      ))}
    </div>
  );
}
