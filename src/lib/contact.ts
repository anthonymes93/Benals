import type { ContactFormValues } from '@/types';

/**
 * Submits the contact form to an external form-handling endpoint.
 *
 * This project ships with no backend, so submission is delegated to a form
 * endpoint configured via VITE_CONTACT_FORM_ENDPOINT (see .env.example).
 * It works as-is with form-to-email services like Formspree
 * (https://formspree.io) or Netlify Forms, or with a custom serverless
 * function that accepts a JSON POST — swap the endpoint, no component
 * changes needed.
 *
 * Until an endpoint is configured, submission throws so the UI surfaces the
 * failure clearly rather than pretending the message was sent.
 */
export async function submitContactForm(values: ContactFormValues): Promise<void> {
  const endpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

  if (!endpoint) {
    throw new Error(
      'Contact form endpoint is not configured. Set VITE_CONTACT_FORM_ENDPOINT in .env (see .env.example).',
    );
  }

  // Honeypot: bots fill every field, real users never see or fill this one.
  if (values.company) {
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      name: values.name,
      email: values.email,
      phone: values.phone,
      service: values.service,
      message: values.message,
    }),
  });

  if (!response.ok) {
    throw new Error('The form endpoint rejected the submission.');
  }
}
