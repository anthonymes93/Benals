import { Phone } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';

interface CTASectionProps {
  title?: string;
  description?: string;
}

/** Closing conversion band — reusable at the bottom of every page. */
export function CTASection({
  title = "Ready to talk about your project?",
  description = "Tell us what you're planning and we'll get back to you with straight answers and a free estimate.",
}: CTASectionProps) {
  return (
    <Section background="dark">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
        <div className="max-w-xl">
          <h2 className="text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mt-3 text-lg text-ink-100">{description}</p>
        </div>
        <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
          <Button
            href={siteConfig.phone.href}
            variant="accent"
            size="lg"
            leftIcon={<Phone className="h-5 w-5" aria-hidden="true" />}
          >
            Call {siteConfig.phone.display}
          </Button>
          <Button href="/contact" variant="outlineInverse" size="lg">
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </Section>
  );
}
