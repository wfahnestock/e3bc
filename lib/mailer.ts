import { Resend } from "resend";

export type ContactMessage = {
  name: string;
  email: string;
  businessType: string;
  message: string;
};

function requireEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }
  return value;
}

/**
 * Sends a contact-form submission to the business inbox via Resend.
 * Configuration comes from .env.local — see .env.example.
 * Throws on missing config or API failure; callers decide how to surface it.
 */
export async function sendContactEmail(contact: ContactMessage): Promise<void> {
  const apiKey = requireEnv("RESEND_API_KEY");
  // Must be an address on the domain verified in Resend
  // (or onboarding@resend.dev while testing before verification).
  const from = requireEnv("CONTACT_FROM");
  const to = requireEnv("CONTACT_TO");

  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from: `Ecubed Website <${from}>`,
    to,
    // Reply-To points at the visitor, so replying just works.
    replyTo: contact.email,
    subject: `Free consult request — ${contact.name}`,
    text: [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Business type: ${contact.businessType}`,
      ``,
      contact.message,
      ``,
      `—`,
      `Sent from the Ecubed Business Consulting website contact form`,
    ].join("\n"),
  });

  if (error) {
    throw new Error(`Resend send failed: ${error.name} — ${error.message}`);
  }
}
