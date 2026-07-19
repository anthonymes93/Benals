import { Section } from '@/components/ui/Section';
import { SectionHeading } from '@/components/ui/SectionHeading';

const STEPS = [
  {
    number: '01',
    title: 'Tell us about the project',
    description: 'Call or send a message with what you have in mind. We\'ll ask a few questions to understand the scope.',
  },
  {
    number: '02',
    title: 'We visit and measure',
    description: "We walk the site with you, take measurements, and talk through options before anything is priced.",
  },
  {
    number: '03',
    title: 'You get a written estimate',
    description: "A clear breakdown of cost and timeline, no vague allowances hiding surprises for later.",
  },
  {
    number: '04',
    title: 'Work starts on schedule',
    description: "Once you sign off, we book the date and keep you updated as the job moves along.",
  },
];

export function ProcessSteps() {
  return (
    <Section background="tint">
      <SectionHeading
        eyebrow="How It Works"
        title="From first call to finished job"
        description="A straightforward process so you always know what happens next."
      />

      <ol className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {STEPS.map((step) => (
          <li key={step.number} className="relative pl-14">
            <span
              className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-full bg-navy-900 font-display text-sm font-bold text-white"
              aria-hidden="true"
            >
              {step.number}
            </span>
            <h3 className="text-lg text-navy-950">{step.title}</h3>
            <p className="mt-2 text-[15px] leading-relaxed text-neutral-600">
              {step.description}
            </p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
