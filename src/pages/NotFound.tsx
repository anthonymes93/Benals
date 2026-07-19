import { Section } from '@/components/ui/Section';
import { Button } from '@/components/ui/Button';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function NotFound() {
  useDocumentTitle('Page Not Found');

  return (
    <Section background="paper" className="text-center">
      <p className="font-display text-sm font-semibold tracking-wide text-brand-red-600 uppercase">
        404
      </p>
      <h1 className="mt-3 text-4xl">That page doesn't exist</h1>
      <p className="mx-auto mt-4 max-w-md text-lg text-neutral-600">
        The page you're looking for may have moved. Head back home, or get in touch if you were
        expecting to find something specific.
      </p>
      <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
        <Button href="/" variant="primary" size="lg">
          Back to Home
        </Button>
        <Button href="/contact" variant="outline" size="lg">
          Contact Us
        </Button>
      </div>
    </Section>
  );
}
