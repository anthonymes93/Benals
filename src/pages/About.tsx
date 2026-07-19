import { HardHat, FileCheck, Handshake, Wrench } from 'lucide-react';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Image } from '@/components/common/Image';
import { siteConfig } from '@/data/siteConfig';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const STORY_IMAGE = {
  src: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80',
  alt: 'Reviewing project plans together at the table',
  width: 1200,
  height: 1400,
};

const APPROACH_POINTS = [
  {
    icon: Handshake,
    title: 'We start with a real conversation',
    description: 'Before anything gets priced, we talk through what you actually want out of the space.',
  },
  {
    icon: FileCheck,
    title: 'Paperwork handled properly',
    description: 'Permits, inspections, and documentation are part of the job, not an afterthought.',
  },
  {
    icon: HardHat,
    title: 'One crew, start to finish',
    description: "The people who quote the job are the people who show up to build it.",
  },
  {
    icon: Wrench,
    title: 'We fix what we find',
    description: "Older homes surprise you. When we find something behind the wall, we tell you before we keep going.",
  },
];

export function About() {
  useDocumentTitle('About');

  return (
    <>
      <PageHeader
        eyebrow="About Benals"
        title="A Niagara Region contractor that treats your project like the only one that matters"
        description="We're a small crew that takes on a limited number of jobs at a time, on purpose, so every one of them gets the attention it needs."
      />

      <Section background="paper">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Approach"
              title="Built on being easy to work with"
              className="max-w-none"
            />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-neutral-600">
              <p>
                Benals Construction takes on renovations, additions, and build-outs across{' '}
                {siteConfig.location.region}. Most of the work comes from homeowners and business
                owners who want a straight answer about cost, timeline, and what the job actually
                involves before they commit to anything.
              </p>
              <p>
                That means fewer jobs running at once, a crew that stays with a project from
                the first site visit to the final walkthrough, and updates you don't have to
                chase down.
              </p>
              <p>
                We work throughout {siteConfig.location.areasServed.slice(0, 4).join(', ')}, and the
                surrounding area — if you're not sure whether your project is in range, just ask.
              </p>
            </div>
          </div>
          <div className="aspect-3/4 overflow-hidden rounded-xl">
            <Image asset={STORY_IMAGE} />
          </div>
        </div>
      </Section>

      <WhyUsSection
        points={APPROACH_POINTS}
        eyebrow="How We Work"
        title="What that looks like on your job site"
        description="A few habits we don't compromise on, job after job."
      />

      <CTASection />
    </>
  );
}
