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

  let data: unknown;
  try {
    data = await response.json();
  } catch {
    // Fall through — response.ok / status still tells us whether it worked.
  }

  const parsed = data && typeof data === 'object' ? (data as ContactApiResponse) : undefined;

  if (!response.ok || !parsed?.success) {
    // The server always sends a string `error` under its own contract, but
    // never trust that blindly — an unexpected response shape (a platform
    // error page, a proxy timeout body) must not end up stringified as
    // "[object Object]" in the UI.
    const message = typeof parsed?.error === 'string' && parsed.error ? parsed.error : undefined;
    throw new Error(message ?? 'The form endpoint rejected the submission.');
  }
}
