import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { Image } from '@/components/common/Image';
import { serviceCategories } from '@/data/services';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function Services() {
  useDocumentTitle('Services');
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Wait a tick for layout to settle (images, fonts) before measuring/scrolling.
    const id = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => window.clearTimeout(id);
  }, [hash]);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Built for how Niagara homes and businesses actually get used"
        description="Every project falls into one of the categories below. Jump to the one closest to yours, or get in touch if you're not sure where it fits."
      />

      <nav aria-label="Service categories" className="border-b border-ink-200 bg-white">
        <div className="mx-auto flex max-w-(--container-content) flex-wrap gap-2 px-5 py-5 sm:px-6 lg:px-8">
          {serviceCategories.map((category) => (
            <a
              key={category.slug}
              href={`#${category.slug}`}
              className="rounded-full border border-ink-200 px-3.5 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-tertiary-300 hover:text-tertiary-600"
            >
              {category.title}
            </a>
          ))}
        </div>
      </nav>

      <Section background="paper">
        <div className="flex flex-col gap-16">
          {serviceCategories.map((category, index) => {
            const Icon = category.icon;
            const imageFirst = index % 2 === 1;

            return (
              <Card
                key={category.slug}
                as="article"
                id={category.slug}
                className="scroll-mt-24 grid grid-cols-1 gap-8 overflow-hidden p-0 lg:grid-cols-2"
              >
                <div className={imageFirst ? 'lg:order-2' : ''}>
                  <div className="aspect-4/3 h-full w-full">
                    <Image asset={category.image} />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-tertiary-50 text-tertiary-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl text-ink-950">{category.title}</h2>
                  <p className="mt-3 leading-relaxed text-ink-600">{category.description}</p>

                  <ul className="mt-5 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[15px] text-ink-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {category.note ? (
                    <p className="mt-5 text-sm text-ink-500 italic">{category.note}</p>
                  ) : null}

                  <Button href="/contact" variant="primary" className="mt-7 self-start">
                    Request a Free Estimate
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>
      </Section>

      <CTASection
        title="Don't see exactly what you need?"
        description="Most projects don't fit neatly into a list. Tell us what you're working with and we'll let you know how we can help."
      />
    </>
  );
}
