import { useState } from 'react';
import type { FormEvent } from 'react';
import { CheckCircle2, AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField, TextareaField, SelectField } from '@/components/ui/FormField';
import { serviceCategories } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
import { submitContactForm } from '@/lib/contact';
import type { ContactFormStatus, ContactFormValues } from '@/types';

const EMPTY_VALUES: ContactFormValues = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
  company: '',
};

type FormErrors = Partial<Record<keyof ContactFormValues, string>>;

function validate(values: ContactFormValues): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = 'Please enter your name.';
  if (!values.email.trim()) {
    errors.email = 'Please enter your email.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "That email doesn't look right.";
  }
  if (!values.message.trim()) errors.message = 'Let us know a bit about the project.';

  return errors;
}

export function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>('idle');

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    setStatus('submitting');
    try {
      await submitContactForm(values);
      setStatus('success');
      setValues(EMPTY_VALUES);
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <Card className="flex flex-col items-start gap-3 border-ink-200 bg-ink-50">
        <CheckCircle2 className="h-8 w-8 text-ink-800" aria-hidden="true" />
        <h3 className="text-xl text-ink-950">Message sent</h3>
        <p className="text-ink-600">
          Thanks for reaching out. We typically respond within a business day or two. If it's
          urgent, call us at{' '}
          <a href={siteConfig.phone.href} className="font-semibold text-ink-900 underline">
            {siteConfig.phone.display}
          </a>
          .
        </p>
        <Button variant="outline" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </Card>
    );
  }

  return (
    <Card as="form" onSubmit={handleSubmit} noValidate aria-label="Contact form">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <InputField
          label="Name"
          name="name"
          autoComplete="name"
          required
          value={values.name}
          error={errors.name}
          onChange={(event) => updateField('name', event.target.value)}
        />
        <InputField
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          required
          value={values.email}
          error={errors.email}
          onChange={(event) => updateField('email', event.target.value)}
        />
        <InputField
          label="Phone"
          type="tel"
          name="phone"
          autoComplete="tel"
          hint="Optional, but it's the fastest way for us to reach you."
          value={values.phone}
          onChange={(event) => updateField('phone', event.target.value)}
        />
        <SelectField
          label="What do you need?"
          name="service"
          value={values.service}
          onChange={(event) => updateField('service', event.target.value)}
        >
          <option value="">Not sure yet</option>
          {serviceCategories.map((category) => (
            <option key={category.slug} value={category.title}>
              {category.title}
            </option>
          ))}
          <option value="Something else">Something else</option>
        </SelectField>
      </div>

      <div className="mt-5">
        <TextareaField
          label="Tell us about the project"
          name="message"
          required
          rows={5}
          value={values.message}
          error={errors.message}
          onChange={(event) => updateField('message', event.target.value)}
        />
      </div>

      {/* Honeypot — hidden from sighted and keyboard users, bots tend to fill every field. */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="company">Company</label>
        <input
          id="company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={values.company}
          onChange={(event) => updateField('company', event.target.value)}
        />
      </div>

      {status === 'error' ? (
        <div
          role="alert"
          className="mt-5 flex items-start gap-2.5 rounded-md bg-primary-50 p-4 text-sm text-primary-700"
        >
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <p>
            Something went wrong sending that. Please try again, or call us directly at{' '}
            <a href={siteConfig.phone.href} className="font-semibold underline">
              {siteConfig.phone.display}
            </a>
            .
          </p>
        </div>
      ) : null}

      <Button
        type="submit"
        variant="accent"
        size="lg"
        fullWidth
        className="mt-6"
        disabled={status === 'submitting'}
      >
        {status === 'submitting' ? 'Sending…' : 'Send Message'}
      </Button>
    </Card>
  );
}
