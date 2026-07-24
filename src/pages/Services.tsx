import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { CTASection } from '@/components/sections/CTASection';
import { services } from '@/data/services';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function Services() {
  useDocumentTitle('Services');
  const { hash } = useLocation();

  useEffect(() => {
    if (!hash) return;
    // Wait a tick for layout to settle (fonts, etc.) before measuring/scrolling.
    const id = window.setTimeout(() => {
      document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 50);
    return () => window.clearTimeout(id);
  }, [hash]);

  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything Benals Construction takes on, in one place"
        description="14 services, listed individually below. Jump to the one you need, or get in touch if you're not sure where your project fits."
      />

      <nav aria-label="Services" className="border-b border-ink-200 bg-white">
        <div className="mx-auto flex max-w-(--container-content) flex-wrap gap-2 px-5 py-5 sm:px-6 lg:px-8">
          {services.map((service) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="rounded-full border border-ink-200 px-3.5 py-1.5 text-sm font-medium text-ink-700 transition-colors hover:border-tertiary-300 hover:text-tertiary-600"
            >
              {service.title}
            </a>
          ))}
        </div>
      </nav>

      <Section background="paper">
        <div className="flex flex-col gap-8">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.slug} variant="fade-up">
                <Card
                  as="article"
                  id={service.slug}
                  className="scroll-mt-24 p-6 sm:p-8 lg:p-10"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-tertiary-50 text-tertiary-600">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h2 className="mt-5 text-2xl text-ink-950">{service.title}</h2>
                  <p className="mt-3 max-w-3xl leading-relaxed text-ink-600">{service.longDescription}</p>

                  {service.bullets ? (
                    <ul className="mt-5 grid max-w-3xl grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                      {service.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2.5 text-[15px] text-ink-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-500" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  ) : null}

                  {service.note ? (
                    <p className="mt-5 max-w-3xl text-sm text-ink-500 italic">{service.note}</p>
                  ) : null}

                  <Button href="/contact" variant="primary" className="mt-7 self-start">
                    Request a Free Estimate
                  </Button>
                </Card>
              </Reveal>
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
