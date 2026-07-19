import { Image } from '@/components/common/Image';
import type { ImageAsset } from '@/types';

interface GalleryGridProps {
  images: ImageAsset[];
}

/** Masonry-style photo grid for the Gallery page. */
export function GalleryGrid({ images }: GalleryGridProps) {
  return (
    <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
      {images.map((image) => (
        <div
          key={image.src}
          className="mb-4 overflow-hidden rounded-xl border border-ink-200 break-inside-avoid"
        >
          <Image asset={image} />
        </div>
      ))}
    </div>
  );
}
