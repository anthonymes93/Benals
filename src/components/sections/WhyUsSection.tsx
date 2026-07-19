import { ShieldCheck, MessageSquare, CalendarClock, MapPin } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';
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
    icon: ShieldCheck,
    title: 'Licensed and insured',
    description:
      "You're covered if something goes wrong, and we carry the paperwork to prove it before work starts.",
  },
  {
    icon: MessageSquare,
    title: 'Straight answers',
    description:
      "We tell you what a job actually involves, what it costs, and when it'll be done — before you commit to anything.",
  },
  {
    icon: CalendarClock,
    title: 'Schedules we keep',
    description:
      'One crew sees your project through. No disappearing for two weeks partway through the job.',
  },
  {
    icon: MapPin,
    title: 'Local to Niagara',
    description:
      'We know the building codes, the permit offices, and the weather here, because we work in it every day.',
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
      <SectionHeading eyebrow={eyebrow} title={title} description={description} />

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {points.map((point, index) => {
          const Icon = point.icon;
          const chipTone = ICON_TONES[index % ICON_TONES.length];
          return (
            <div key={point.title}>
              <div className={cn('flex h-11 w-11 items-center justify-center rounded-lg', chipTone)}>
                <Icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <h3 className="mt-4 text-lg text-ink-950">{point.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-600">
                {point.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
