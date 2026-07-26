import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { siteConfig } from '@/data/siteConfig';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

const PAGE_DESCRIPTION = 'Thank you for contacting Benals Construction in the Niagara Region.';

/** Sets the page's meta description while mounted, restoring the site default on unmount. */
function usePageDescription(description: string) {
  useEffect(() => {
    const meta = document.querySelector('meta[name="description"]');
    const previous = meta?.getAttribute('content') ?? null;
    meta?.setAttribute('content', description);

    return () => {
      if (previous !== null) meta?.setAttribute('content', previous);
    };
  }, [description]);
}

export function ThankYou() {
  useDocumentTitle('Thank You');
  usePageDescription(PAGE_DESCRIPTION);

  return (
    <Section background="paper" className="text-center">
      <div className="mx-auto flex max-w-lg flex-col items-center">
        <CheckCircle2 className="h-14 w-14 text-ink-800" aria-hidden="true" />
        <h1 className="mt-5 text-4xl text-ink-950">Thank You for Reaching Out</h1>
        <p className="mt-4 text-lg leading-relaxed text-ink-600">
          Your message has been sent to {siteConfig.name}. We'll review the details and get back
          to you as soon as we can.
        </p>
        <p className="mt-2 text-ink-600">Need to speak with someone sooner? Call us directly.</p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button href={siteConfig.phone.href} variant="accent" size="lg">
            Call {siteConfig.shortName}
          </Button>
          <Button href="/" variant="outline" size="lg">
            Return Home
          </Button>
        </div>

        <Button href="/services" variant="ghost" size="sm" className="mt-4">
          View our services
        </Button>
      </div>
    </Section>
  );
}
