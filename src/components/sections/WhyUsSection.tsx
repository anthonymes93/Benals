import { Wallet, MessageSquare, CalendarClock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Reveal } from '@/components/ui/Reveal';
import { cn } from '@/lib/cn';

/** Cycled across icon chips for subtle decorative variety — primary carries the most weight. */
const ICON_TONES = [
  'bg-primary-50 text-primary-600',
  'bg-secondary-50 text-secondary-600',
  'bg-primary-50 text-primary-600',
  'bg-tertiary-50 text-tertiary-600',
];

interface WhyUsPoint {
  icon: LucideIcon;
  title: string;
  description: string;
}

const DEFAULT_POINTS: WhyUsPoint[] = [
  {
    icon: MessageSquare,
    title: 'Straight answers',
    description:
      "You'll get a reliable, honest answer about cost, timeline, and what the job actually involves — before you commit to anything.",
  },
  {
    icon: CalendarClock,
    title: 'Schedules we keep',
    description:
      'One crew sees your project through, start to finish. No disappearing for two weeks partway through the job.',
  },
  {
    icon: Wallet,
    title: 'Budget-conscious planning',
    description:
      'We plan carefully so your money goes into the work itself, not into fixing avoidable mistakes.',
  },
  {
    icon: MapPin,
    title: 'Local to Niagara',
    description:
      'We know the area and the trades who work in it, because this is where we work every day.',
  },
];

interface WhyUsSectionProps {
  points?: WhyUsPoint[];
  eyebrow?: string;
  title?: string;
  description?: string;
}

export function WhyUsSection({
  points = DEFAULT_POINTS,
  eyebrow = 'Why Benals',
  title = 'Contracting done the way it should be',
  description = 'No surprises on the invoice, no guesswork about the schedule.',
}: WhyUsSectionProps) {
  return (
    <Section background="white">
      <Reveal variant="fade-up">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point, index) => {
          const Icon = point.icon;
          const chipTone = ICON_TONES[index % ICON_TONES.length];
          return (
            <Reveal key={point.title} variant="fade-up" delay={index * 90}>
              <div className={cn('flex h-11 w-11 items-center justify-center rounded-lg', chipTone)}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg text-ink-950">{point.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                {point.description}
              </p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
