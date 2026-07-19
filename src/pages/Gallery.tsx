import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { CTASection } from '@/components/sections/CTASection';
import { galleryImages } from '@/data/galleryImages';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function Gallery() {
  useDocumentTitle('Gallery');

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look at the kind of work we do"
        description="These photos are placeholders while we put together a set from recent Niagara Region projects — check back soon for the real thing."
      />

      <Section background="paper">
        <GalleryGrid images={galleryImages} />
      </Section>

      <CTASection
        title="Want your project featured here next?"
        description="Get in touch and let's talk about what you're planning."
      />
    </>
  );
}
