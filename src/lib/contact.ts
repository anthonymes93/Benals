import type { ContactFormValues } from '@/types';

interface ContactApiResponse {
  success: boolean;
  error?: string;
}

/**
 * Submits the contact form to the site's own /api/contact serverless
 * function, which sends the notification through Resend. Throws with a
 * user-facing message on failure so the form can surface it inline.
 */
export async function submitContactForm(values: ContactFormValues): Promise<void> {
  let response: Response;
  try {
    response = await fetch('/api/contact', {
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
        company: values.company,
      }),
    });
  } catch {
    throw new Error('Network error while sending your message.');
  }

  let data: ContactApiResponse | undefined;
  try {
    data = (await response.json()) as ContactApiResponse;
  } catch {
    // Fall through — response.ok / status still tells us whether it worked.
  }

  if (!response.ok || !data?.success) {
    throw new Error(data?.error || 'The form endpoint rejected the submission.');
  }
}
