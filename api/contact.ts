import { Resend } from 'resend';
import { siteConfig } from '../src/data/siteConfig';

/**
 * Contact form endpoint. Runs server-side only — this is the one place the
 * Resend API key and the owner's private inbox address are allowed to exist.
 * Never move this logic into browser code.
 */

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
const GENERIC_SEND_ERROR = 'We could not send your message. Please call or email us directly.';

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
          <td style="padding: 6px 0;">${escapeHtml(siteConfig.name)} contact form</td>
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
    `Source: ${siteConfig.name} contact form`,
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
  const businessName = escapeHtml(siteConfig.name);
  const phoneDisplay = escapeHtml(siteConfig.phone.display);
  const websiteDisplay = escapeHtml(siteConfig.website.replace(/^https?:\/\//, ''));

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
        <a href="${siteConfig.phone.href}">${phoneDisplay}</a>.
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
        <a href="${siteConfig.website}">${websiteDisplay}</a>
      </p>
    </div>
  `;

  const text = [
    `Hi ${payload.name.split(' ')[0] || payload.name},`,
    '',
    `Thank you for contacting ${siteConfig.name}. We've received your request and will review the details you submitted.`,
    '',
    `If your request is urgent, please call us directly at ${siteConfig.phone.display}.`,
    '',
    'A copy of your message:',
    `Service: ${payload.service || 'Not specified'}`,
    payload.message,
    '',
    'Thank you,',
    siteConfig.name,
    siteConfig.website,
  ].join('\n');

  return {
    subject: `We received your request — ${siteConfig.name}`,
    html,
    text,
  };
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== 'POST') {
    return jsonResponse(405, { success: false, error: 'Method not allowed.' });
  }

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
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !toEmail || !fromEmail) {
    console.error(
      'Contact form is missing required environment variables:',
      !apiKey ? 'RESEND_API_KEY' : null,
      !toEmail ? 'CONTACT_TO_EMAIL' : null,
      !fromEmail ? 'CONTACT_FROM_EMAIL' : null,
    );
    return jsonResponse(500, { success: false, error: GENERIC_SEND_ERROR });
  }

  const resend = new Resend(apiKey);
  const ownerEmail = buildOwnerEmail(payload);

  try {
    const { error } = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
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
      from: fromEmail,
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
