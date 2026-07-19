import { PageHeader } from '@/components/ui/PageHeader';
import { Section } from '@/components/ui/Section';
import { ContactForm } from '@/components/sections/ContactForm';
import { ContactInfoCard } from '@/components/sections/ContactInfoCard';
import { useDocumentTitle } from '@/hooks/useDocumentTitle';

export function Contact() {
  useDocumentTitle('Contact');

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Tell us about your project"
        description="Call for the fastest response, or send the details below and we'll get back to you within one business day."
      />

      <Section background="paper">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_22rem]">
          <ContactForm />
          <ContactInfoCard />
        </div>
      </Section>
    </>
  );
}
