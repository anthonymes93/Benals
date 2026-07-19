import { useState } from 'react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { GalleryGrid } from '@/components/sections/GalleryGrid';
import { CTASection } from '@/components/sections/CTASection';
import { galleryImages } from '@/data/galleryImages';
import { GALLERY_CATEGORIES } from '@/types';
import type { GalleryCategory } from '@/types';
import { cn } from '@/lib/cn';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

type FilterValue = GalleryCategory | 'All';

const FILTERS: FilterValue[] = ['All', ...GALLERY_CATEGORIES];

export function Gallery() {
  useDocumentTitle('Gallery');
  const [filter, setFilter] = useState<FilterValue>('All');

  const filteredImages =
    filter === 'All' ? galleryImages : galleryImages.filter((image) => image.category === filter);

  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A look at the kind of work we do"
        description="These photos are placeholders while we put together a set from recent Niagara Region projects — check back soon for the real thing."
      />

      <Section background="paper" spacing={false} className="py-8">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by category">
          {FILTERS.map((option) => {
            const isActive = option === filter;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={isActive}
                onClick={() => setFilter(option)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'border-tertiary-600 bg-tertiary-600 text-white'
                    : 'border-ink-200 text-ink-700 hover:border-tertiary-300 hover:text-tertiary-600',
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </Section>

      <Section background="paper" className="pt-0">
        {filteredImages.length > 0 ? (
          <GalleryGrid images={filteredImages} />
        ) : (
          <p className="text-ink-600">No photos in this category yet — check back soon.</p>
        )}
      </Section>

      <CTASection
        title="Want your project featured here next?"
        description="Get in touch and let's talk about what you're planning."
      />
    </>
  );
}
