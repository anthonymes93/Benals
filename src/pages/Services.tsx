import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { CTASection } from '@/components/sections/CTASection';
import { Image } from '@/components/common/Image';
import { services } from '@/data/services';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function Services() {
  useDocumentTitle('Services');

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Built for how Niagara homes and businesses actually get used"
        description="Every job below is handled by the same crew from estimate to final walkthrough — no subbing out the parts we don't feel like doing."
      />

      <Section background="paper">
        <div className="flex flex-col gap-16">
          {services.map((service, index) => {
            const Icon = service.icon;
            const imageFirst = index % 2 === 1;

            return (
              <Card
                key={service.slug}
                as="article"
                id={service.slug}
                className="grid grid-cols-1 gap-8 overflow-hidden p-0 lg:grid-cols-2"
              >
                <div className={imageFirst ? 'lg:order-2' : ''}>
                  <div className="aspect-4/3 h-full">
                    <Image asset={service.image} />
                  </div>
                </div>
                <div className="flex flex-col justify-center p-6 sm:p-8 lg:p-10">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl text-navy-950">{service.title}</h2>
                  <p className="mt-3 leading-relaxed text-neutral-600">{service.description}</p>
                  <ul className="mt-5 space-y-2">
                    {service.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2.5 text-[15px] text-neutral-700">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-red-500" aria-hidden="true" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                  <Button href="/contact" variant="primary" className="mt-7 self-start">
                    Get a Free Estimate
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
