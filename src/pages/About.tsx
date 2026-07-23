import { Handshake, Users, Clock, Wrench } from 'lucide-react';
import babyPhoto from '@/assets/imgs/about4/babyoldpic.jpeg';
import threeKidsPhoto from '@/assets/imgs/about4/3kidsoldpic.jpeg';
import familyPhoto from '@/assets/imgs/about4/kidsoldphoto.jpeg';
import boyOnGrassPhoto from '@/assets/imgs/about4/boyongrass.jpeg';
import grandkidsPhoto from '@/assets/imgs/3kidsbycar.jpeg';
import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { WhyUsSection } from '@/components/sections/WhyUsSection';
import { CTASection } from '@/components/sections/CTASection';
import { Image } from '@/components/common/Image';
import { siteConfig } from '@/data/siteConfig';
import { cn } from '@/lib/cn';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

/**
 * Story photos — real family photos instead of stock imagery, arranged in a
 * small staggered set. Each entry is a self-contained { image, caption }
 * pair; the staggered offset (every second tile pushed down) is applied by
 * index in the grid below.
 */
const STORY_PHOTOS: { image: { src: string; alt: string; width: number; height: number }; caption?: string }[] = [
  {
    image: {
      src: babyPhoto,
      alt: 'An early family photo',
      width: 1536,
      height: 2048,
    },
  },
  {
    image: {
      src: threeKidsPhoto,
      alt: 'Family photo of three kids together',
      width: 1536,
      height: 2048,
    },
  },
  {
    image: {
      src: familyPhoto,
      alt: "Kyle, the owner, with his kids in the 1990s",
      width: 1536,
      height: 2048,
    },
    caption: "Kyle (the owner) and his kids in the 90's",
  },
  {
    image: {
      src: boyOnGrassPhoto,
      alt: 'One of the family, more recently',
      width: 1536,
      height: 2048,
    },
  },
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
                Benals Construction is a family-run general contractor proudly serving
                homeowners, landlords, and businesses throughout the Niagara Region. We
                specialize in renovations, additions, property maintenance, and a wide range of
                residential and commercial construction projects. Whether it's a small
                improvement or a larger renovation, we approach every job with honest
                communication, practical planning, and reliable workmanship.
              </p>
              <p>
                We believe a great project starts with trust. That's why we focus on straight
                answers, realistic expectations, and budget-conscious planning. We always look
                for ways to help our clients get the best value, from sourcing quality materials
                at competitive prices to working with trusted tradespeople we've built
                relationships with over the years. Our experience across many areas of
                construction allows us to coordinate projects efficiently while maintaining high
                standards of workmanship.
              </p>
              <p>
                As a family-run business, we believe in treating every customer with respect. We
                know your time is valuable, so we work hard to stay organized, communicate
                clearly, and complete projects as efficiently as possible without compromising
                quality. Our friendly crew takes pride in keeping job sites professional, treating
                your home or business with care, and making the renovation process as smooth as
                possible.
              </p>
              <p>
                That family-first approach isn't just a tagline. It's why we keep the number of
                active projects manageable, stay involved from the first site visit through the
                final walkthrough, and make sure you'll always know who to call if you have a
                question. Benals Construction is named after Kyle's grandchildren — Ben, Alex, and
                Serena — a reminder that the business is built on family values, honesty, and work
                we're proud to stand behind.
              </p>
              <p>
                Born and raised in the Niagara Region, Kyle has spent his life building
                relationships within the local community. We're proud to serve{' '}
                {siteConfig.location.areasServed.slice(0, 4).join(', ')}, and the surrounding area.
                If you're not sure whether your project falls within our service area, just ask —
                we're always happy to help.
              </p>
              <p className="font-semibold text-ink-800">
                35+ years of residential and commercial construction experience.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            {STORY_PHOTOS.map((photo, index) => (
              <figure key={photo.image.src} className={cn(index % 2 === 1 && 'mt-8 sm:mt-12')}>
                <div className="aspect-3/4 overflow-hidden rounded-xl">
                  <Image asset={photo.image} />
                </div>
                {photo.caption ? (
                  <figcaption className="mt-2.5 text-sm text-ink-600">{photo.caption}</figcaption>
                ) : null}
              </figure>
            ))}
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
              The name Benals Construction comes from owner Kyle's three grandchildren — Ben,
              Alex, and Serena. It's a small detail, but it says a lot about how this business is
              run: family comes first, and that same care carries through to every client and
              every project. The grandchildren even had a hand in the branding — the orange,
              blue, and pink you'll see across this site are the colours they picked.
            </>
          }
        />

        <div className="mx-auto mt-10 max-w-sm overflow-hidden rounded-xl">
          <Image
            asset={{
              src: grandkidsPhoto,
              alt: 'Ben, Alex, and Serena together',
              width: 1536,
              height: 2048,
            }}
          />
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
