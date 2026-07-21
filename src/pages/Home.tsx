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
  useDocumentTitle('Construction & Renovation Services in the Niagara Region');

  return (
    <>
      <Hero
        eyebrow="Niagara Region Construction & Renovation"
        title="Reliable construction and renovation services for homes and businesses across Niagara."
        description="Benals Construction plans and builds renovation, construction, and property improvement projects — with straightforward communication from your first call to the final walkthrough."
        image={HERO_IMAGE}
        trustPoints={['Residential & commercial projects', 'Serving all of Niagara Region', 'Free estimates']}
      />

      <Section background="tint">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Services for homes and businesses across Niagara"
            description="From property maintenance to full builds, here's the complete range of work we take on."
          />
          <Button href="/services" variant="outline" className="shrink-0">
            Explore Our Services
          </Button>
        </div>
        <div className="mt-12">
          <ServicesGrid services={services} />
        </div>
      </Section>

      <WhyUsSection />

      <ProcessSteps />

      <Section background="white" narrow>
        <SectionHeading
          align="center"
          eyebrow="Why 'Benals'"
          title="A name that comes from family"
          description="Benals Construction is named after the owner's grandchildren — Ben, Alex, and Serena — who also picked the orange, blue, and pink you'll see throughout this site. It's a family business, and that shows in how we treat every project and every client."
        />
        <div className="mt-6 text-center">
          <Button href="/about" variant="outline">
            Learn About Benals
          </Button>
        </div>
      </Section>

      <CTASection />
    </>
  );
}
