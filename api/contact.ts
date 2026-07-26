import { Resend } from 'resend';

/**
 * Contact form endpoint. Runs server-side only — this is the one place the
 * Resend API key and the owner's private inbox address are allowed to exist.
 * Never move this logic into browser code.
 *
 * This file must stay self-contained: Vercel builds api/ separately from the
 * Vite app (no access to the `@/` alias or anything under src/), so business
 * info that the email templates need is duplicated here as plain constants
 * rather than imported from src/data/siteConfig.
 */
const BUSINESS_NAME = 'Benals Construction';
const BUSINESS_PHONE_DISPLAY = '(905) 394-2408';
const BUSINESS_PHONE_HREF = 'tel:+19053942408';
const BUSINESS_WEBSITE = 'https://www.benals.ca';

const MAX_LENGTHS = {
  name: 200,
  email: 320,
  phone: 40,
  service: 200,
  message: 8000,
  company: 200,
} as const;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const GENERIC_VALIDATION_ERROR = 'Please complete all required fields.';
const GENERIC_SEND_ERROR = "We couldn't send your message.";

interface ContactPayload {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  company: string;
}

function jsonResponse(status: number, body: unknown): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}

function getStringField(body: Record<string, unknown>, field: string): string {
  const value = body[field];
  return typeof value === 'string' ? value.trim() : '';
}

/** Escapes text before it's interpolated into an HTML email body. */
function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function validate(payload: ContactPayload): string | null {
  if (!payload.name || !payload.email || !payload.message) {
    return GENERIC_VALIDATION_ERROR;
  }

  if (
    payload.name.length > MAX_LENGTHS.name ||
    payload.email.length > MAX_LENGTHS.email ||
    payload.phone.length > MAX_LENGTHS.phone ||
    payload.service.length > MAX_LENGTHS.service ||
    payload.message.length > MAX_LENGTHS.message ||
    payload.company.length > MAX_LENGTHS.company
  ) {
    return 'One or more fields exceed the maximum allowed length.';
  }

  if (!EMAIL_PATTERN.test(payload.email)) {
    return 'Please enter a valid email address.';
  }

  return null;
}

function buildOwnerEmail(payload: ContactPayload) {
  const receivedAt = new Date().toLocaleString('en-CA', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'America/Toronto',
  });

  const name = escapeHtml(payload.name);
  const email = escapeHtml(payload.email);
  const phone = escapeHtml(payload.phone || 'Not provided');
  const service = escapeHtml(payload.service || 'Not specified');
  const message = escapeHtml(payload.message).replace(/\n/g, '<br>');

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="margin-bottom: 16px;">New website inquiry</h2>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 6px 0; font-weight: bold; width: 120px; vertical-align: top;">Name</td>
          <td style="padding: 6px 0;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Email</td>
          <td style="padding: 6px 0;"><a href="mailto:${email}">${email}</a></td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Phone</td>
          <td style="padding: 6px 0;">${phone}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Service</td>
          <td style="padding: 6px 0;">${service}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Received</td>
          <td style="padding: 6px 0;">${escapeHtml(receivedAt)}</td>
        </tr>
        <tr>
          <td style="padding: 6px 0; font-weight: bold; vertical-align: top;">Source</td>
          <td style="padding: 6px 0;">${escapeHtml(BUSINESS_NAME)} contact form</td>
        </tr>
      </table>
      <p style="font-weight: bold; margin-top: 20px; margin-bottom: 6px;">Message</p>
      <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
    </div>
  `;

  const text = [
    'New website inquiry',
    '',
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || 'Not provided'}`,
    `Service: ${payload.service || 'Not specified'}`,
    `Received: ${receivedAt}`,
    `Source: ${BUSINESS_NAME} contact form`,
    '',
    'Message:',
    payload.message,
  ].join('\n');

  return {
    subject: `New website inquiry from ${payload.name}`,
    html,
    text,
  };
}

function buildCustomerEmail(payload: ContactPayload) {
  const firstName = escapeHtml(payload.name.split(' ')[0] || payload.name);
  const service = escapeHtml(payload.service || 'Not specified');
  const message = escapeHtml(payload.message).replace(/\n/g, '<br>');
  const businessName = escapeHtml(BUSINESS_NAME);
  const phoneDisplay = escapeHtml(BUSINESS_PHONE_DISPLAY);
  const websiteDisplay = escapeHtml(BUSINESS_WEBSITE.replace(/^https?:\/\//, ''));

  const html = `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 560px; margin: 0 auto; color: #1a1a1a;">
      <h2 style="margin-bottom: 12px;">Thank you for contacting ${businessName}</h2>
      <p>Hi ${firstName},</p>
      <p>
        Thank you for contacting ${businessName}. We've received your request and will
        review the details you submitted.
      </p>
      <p>
        If your request is urgent, please call us directly at
        <a href="${BUSINESS_PHONE_HREF}">${phoneDisplay}</a>.
      </p>
      <p style="font-weight: bold; margin-top: 20px; margin-bottom: 6px;">A copy of your message</p>
      <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
        <tr>
          <td style="padding: 6px 0; font-weight: bold; width: 120px; vertical-align: top;">Service</td>
          <td style="padding: 6px 0;">${service}</td>
        </tr>
      </table>
      <p style="white-space: pre-wrap; line-height: 1.5;">${message}</p>
      <p style="margin-top: 24px;">
        Thank you,<br>
        ${businessName}<br>
        <a href="${BUSINESS_WEBSITE}">${websiteDisplay}</a>
      </p>
    </div>
  `;

  const text = [
    `Hi ${payload.name.split(' ')[0] || payload.name},`,
    '',
    `Thank you for contacting ${BUSINESS_NAME}. We've received your request and will review the details you submitted.`,
    '',
    `If your request is urgent, please call us directly at ${BUSINESS_PHONE_DISPLAY}.`,
    '',
    'A copy of your message:',
    `Service: ${payload.service || 'Not specified'}`,
    payload.message,
    '',
    'Thank you,',
    BUSINESS_NAME,
    BUSINESS_WEBSITE,
  ].join('\n');

  return {
    subject: `We received your request — ${BUSINESS_NAME}`,
    html,
    text,
  };
}

/**
 * Named per-method export — Vercel's Node runtime only recognizes a
 * Request-in/Response-out signature via named HTTP-method exports (GET,
 * POST, ...). A `default` export returning a Response is silently ignored
 * (the request just hangs until it times out), which is what caused the
 * contact form's 500s in production.
 */
export async function POST(request: Request): Promise<Response> {
  let rawBody: Record<string, unknown>;
  try {
    rawBody = (await request.json()) as Record<string, unknown>;
  } catch {
    return jsonResponse(400, { success: false, error: GENERIC_VALIDATION_ERROR });
  }

  if (!rawBody || typeof rawBody !== 'object') {
    return jsonResponse(400, { success: false, error: GENERIC_VALIDATION_ERROR });
  }

  const payload: ContactPayload = {
    name: getStringField(rawBody, 'name'),
    email: getStringField(rawBody, 'email'),
    phone: getStringField(rawBody, 'phone'),
    service: getStringField(rawBody, 'service'),
    message: getStringField(rawBody, 'message'),
    company: getStringField(rawBody, 'company'),
  };

  // Honeypot — bots fill every field, real users never see or fill this one.
  if (payload.company) {
    return jsonResponse(200, { success: true });
  }

  const validationError = validate(payload);
  if (validationError) {
    return jsonResponse(400, { success: false, error: validationError });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const recipientEmail = process.env.CONTACT_TO_EMAIL;
  const senderEmail = process.env.CONTACT_FROM_EMAIL;

  const missingVariables = [
    !apiKey && 'RESEND_API_KEY',
    !recipientEmail && 'CONTACT_TO_EMAIL',
    !senderEmail && 'CONTACT_FROM_EMAIL',
  ].filter(Boolean);

  if (missingVariables.length > 0 || !apiKey || !recipientEmail || !senderEmail) {
    console.error('Missing environment variables:', missingVariables);
    return jsonResponse(500, { success: false, error: GENERIC_SEND_ERROR });
  }

  const resend = new Resend(apiKey);
  const ownerEmail = buildOwnerEmail(payload);

  try {
    const { error } = await resend.emails.send({
      from: senderEmail,
      to: recipientEmail,
      replyTo: payload.email,
      subject: ownerEmail.subject,
      html: ownerEmail.html,
      text: ownerEmail.text,
    });

    if (error) {
      console.error('Resend failed to send the owner notification email:', error);
      return jsonResponse(500, { success: false, error: GENERIC_SEND_ERROR });
    }
  } catch (err) {
    console.error('Unexpected error sending the owner notification email:', err);
    return jsonResponse(500, { success: false, error: GENERIC_SEND_ERROR });
  }

  // Customer confirmation is best-effort — the owner already has the lead,
  // so a failure here must never make the form look like it failed.
  try {
    const customerEmail = buildCustomerEmail(payload);
    const { error } = await resend.emails.send({
      from: senderEmail,
      to: payload.email,
      subject: customerEmail.subject,
      html: customerEmail.html,
      text: customerEmail.text,
    });

    if (error) {
      console.error('Resend failed to send the customer confirmation email:', error);
    }
  } catch (err) {
    console.error('Unexpected error sending the customer confirmation email:', err);
  }

  return jsonResponse(200, { success: true });
}
