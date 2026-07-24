import heroPhoto from '@/assets/imgs/home/60d6a1e6-cc34-45cd-82f1-9540594cb672.jpeg';
import { Hero } from '@/components/sections/Hero';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { ProcessSteps } from '@/components/sections/ProcessSteps';
import { CTASection } from '@/components/sections/CTASection';
import { ServicesGrid } from '@/components/sections/ServicesGrid';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';
import { Reveal } from '@/components/ui/Reveal';
import { services } from '@/data/services';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const HERO_IMAGE = {
  src: heroPhoto,
  alt: 'Basement room mid-renovation with taped drywall, an open doorway, and renovation supplies on the floor',
  width: 1536,
  height: 2048,
};

export function Home() {
  useDocumentTitle('Construction & Renovation Services in the Niagara Region');

  return (
    <>
      <Hero
        eyebrow="We have vision for your inspiration!"
        title="Reliable construction and renovation services for homes and businesses across Niagara."
        description="Benals Construction plans and builds renovation, construction, and property improvement projects — with straightforward communication from your first call to the final walkthrough."
        image={HERO_IMAGE}
        trustPoints={['Residential & commercial projects', 'Serving all of Niagara Region', 'Free estimates', 'Turn unused spaces into useable spaces']}
      />

      <Section background="tint">
        <Reveal variant="fade-up" className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="What We Do"
            title="Services for homes and businesses across Niagara"
            description="From property maintenance to full builds, here's the complete range of work we take on."
          />
          <Button href="/services" variant="outline" className="shrink-0">
            Explore Our Services
          </Button>
        </Reveal>
        <div className="mt-12">
          <ServicesGrid services={services} />
        </div>
      </Section>

      <WhyUsSection />

      <ProcessSteps />

      <Section background="white" narrow>
        <Reveal variant="fade-up">
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
        </Reveal>
      </Section>

      <CTASection />
    </>
  );
}
