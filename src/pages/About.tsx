import { Handshake, Users, Clock, Wrench } from 'lucide-react';
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

/**
 * Family photo placeholders. There are no real photos yet, so each slot
 * renders a simple tinted tile instead of a stock photo standing in for a
 * real person — swap `photo: undefined` for `photo: { src, alt, width,
 * height }` per person once real family photos are available, and update
 * the render below to use <Image asset={photo} /> when `photo` is set.
 */
const FAMILY_MEMBERS: { name: string; tone: string }[] = [
  { name: 'Ben', tone: 'bg-primary-50 text-primary-500' },
  { name: 'Alex', tone: 'bg-secondary-50 text-secondary-500' },
  { name: 'Serena', tone: 'bg-tertiary-50 text-tertiary-500' },
];

const APPROACH_POINTS = [
  {
    icon: Handshake,
    title: 'Real conversations, honest answers',
    description:
      "Before anything is priced, we talk through what you actually want — and tell you plainly what's realistic for your budget and timeline.",
  },
  {
    icon: Users,
    title: 'Coordinated trades, one point of contact',
    description:
      "Plumbing, electrical, framing, finishing — we bring in the right people for each part of the job and manage them so you don't have to.",
  },
  {
    icon: Clock,
    title: 'Respect for your time and property',
    description:
      "We show up when we say we will, keep the site tidy, and treat your home or business like it's ours to take care of.",
  },
  {
    icon: Wrench,
    title: 'Practical solutions, solid materials',
    description:
      'We aim for work that holds up — practical choices and good materials over whatever looks fine for a year.',
  },
];

export function About() {
  useDocumentTitle('About');

  return (
    <>
      <PageHeader
        eyebrow="About Benals"
        title="A family-run contractor built on straight answers and steady work"
        description="We're a small crew that takes on a limited number of jobs at a time, on purpose, so every one of them gets the attention it needs."
      />

      <Section background="paper">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Our Story"
              title="Niagara roots, family-first approach"
              className="max-w-none"
            />
            <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-ink-600">
              <p>
                Benals Construction is a family-run general contractor based in the Niagara
                Region. We take on renovations, additions, and property improvement projects for
                homeowners, landlords, and businesses — and we run the business the way you'd
                want a contractor to: straight answers, budget-conscious planning, and a crew
                that shows up when it says it will.
              </p>
              <p>
                That family-first approach isn't just a tagline. It's why we keep the number of
                active jobs manageable, why we stay with a project from the first site visit to
                the final walkthrough, and why you'll always know who to call with a question.
              </p>
              <p>
                We work throughout {siteConfig.location.areasServed.slice(0, 4).join(', ')}, and
                the surrounding area — if you're not sure whether your project is in range, just
                ask.
              </p>
            </div>
          </div>
          <div className="aspect-3/4 overflow-hidden rounded-xl">
            <Image asset={STORY_IMAGE} />
          </div>
        </div>
      </Section>

      <Section background="tint" narrow>
        <SectionHeading
          align="center"
          eyebrow="Where the Name Comes From"
          title="Ben, Alex, and Serena"
          description={
            <>
              The name Benals Construction comes from the owner's three grandchildren — Ben,
              Alex, and Serena. It's a small detail, but it says a lot about how this business is
              run: family comes first, and that same care carries through to every client and
              every project. The grandchildren even had a hand in the branding — the orange,
              blue, and pink you'll see across this site are the colours they picked.
            </>
          }
        />

        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
          {FAMILY_MEMBERS.map((member) => (
            <div
              key={member.name}
              className="flex aspect-square flex-col items-center justify-center gap-3 rounded-xl border border-ink-200 bg-white"
            >
              <div className={`flex h-14 w-14 items-center justify-center rounded-full ${member.tone}`}>
                <Users className="h-6 w-6" aria-hidden="true" />
              </div>
              <span className="text-sm font-medium text-ink-600">{member.name}</span>
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm text-ink-500">Family photos coming soon.</p>
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
