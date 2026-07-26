import { useRef, useState } from 'react';
import type { FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { InputField, TextareaField, SelectField } from '@/components/ui/FormField';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';
import { submitContactForm } from '@/lib/contact';
import type { ContactFormStatus, ContactFormValues } from '@/types';

const DEFAULT_ERROR_MESSAGE = "We couldn't send your message.";

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
  const navigate = useNavigate();
  const [values, setValues] = useState<ContactFormValues>(EMPTY_VALUES);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE);
  const isSubmittingRef = useRef(false);

  function updateField<K extends keyof ContactFormValues>(field: K, value: ContactFormValues[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (isSubmittingRef.current) return;

    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    isSubmittingRef.current = true;
    setStatus('submitting');
    try {
      await submitContactForm(values);
      setValues(EMPTY_VALUES);
      setErrors({});
      navigate('/thank-you');
    } catch (error) {
      setErrorMessage(error instanceof Error && error.message ? error.message : DEFAULT_ERROR_MESSAGE);
      setStatus('error');
      isSubmittingRef.current = false;
    }
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
          {services.map((service) => (
            <option key={service.slug} value={service.title}>
              {service.title}
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
            {errorMessage} Please try again, or contact us directly at{' '}
            <a href={siteConfig.phone.href} className="font-semibold underline">
              {siteConfig.phone.display}
            </a>{' '}
            or{' '}
            <a href={`mailto:${siteConfig.email}`} className="font-semibold underline">
              {siteConfig.email}
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
