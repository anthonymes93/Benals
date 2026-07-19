import { Hero } from '@/components/sections/Hero';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CTASection } from '@/components/sections/CTASection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { services } from '@/data/services';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const HERO_IMAGE = {
  src: 'https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80',
  alt: 'Tradesperson in a hard hat working on an electrical panel',
  width: 1200,
  height: 1200,
};

export function Home() {
  useDocumentTitle('General Contractor in the Niagara Region');

  return (
    <>
      <Hero
        eyebrow="Niagara Region General Contractor"
        title="Renovations and additions, handled from first call to final walkthrough."
        description="Benals Construction plans, permits, and builds the project — with one crew who sees it through and keeps you in the loop the whole way."
        image={HERO_IMAGE}
        trustPoints={['Licensed & insured', 'Serving all of Niagara Region', 'Free written estimates']}
      />

      <WhyUsSection />

      <Section background="paper">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Services for homeowners and businesses"
            description="From a single remodel to a full addition, here's what we take on."
          />
          <Button href="/services" variant="outline" className="shrink-0">
            View all services
          </Button>
        </div>
        <div className="mt-12">
          <ServicesGrid services={services} />
        </div>
      </Section>

      <ProcessSteps />

      <CTASection />
    </>
  );
}
