import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Image } from '@/components/common/Image';
import type { ImageAsset } from '@/types';

interface GalleryPreviewProps {
  images: ImageAsset[];
}

/** Small homepage teaser for the full Gallery page — first four images in a clean grid. */
export function GalleryPreview({ images }: GalleryPreviewProps) {
  return (
    <Section background="tint">
      <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
        <SectionHeading
          eyebrow="Our Work"
          title="A look at the kind of projects we take on"
          description="From full renovations to outdoor builds — a preview of our project gallery."
        />
        <Button href="/gallery" variant="outline" className="shrink-0">
          View Our Work
        </Button>
      </div>

      <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-4">
        {images.slice(0, 4).map((image) => (
          <div key={image.src} className="aspect-square overflow-hidden rounded-xl border border-ink-200">
            <Image asset={image} />
          </div>
        ))}
      </div>
    </Section>
  );
}
