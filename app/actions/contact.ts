"use server";

import { sendContactEmail } from "@/lib/mailer";

export type ContactResult = { ok: true } | { ok: false; error: string };

const MAX_FIELD_LENGTH = 200;
const MAX_MESSAGE_LENGTH = 5000;
// Deliberately permissive — real validation is the mail server's job.
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

export async function sendContactMessage(
  formData: FormData,
): Promise<ContactResult> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const businessType = String(formData.get("businessType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  // Honeypot: hidden from humans, bots fill it in. Pretend success so
  // spammers get no signal that they were filtered.
  const honeypot = String(formData.get("company") ?? "");

  if (honeypot) {
    return { ok: true };
  }

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in your name, email, and message." };
  }
  if (!EMAIL_PATTERN.test(email)) {
    return { ok: false, error: "That email address doesn’t look right." };
  }
  if (
    name.length > MAX_FIELD_LENGTH ||
    email.length > MAX_FIELD_LENGTH ||
    message.length > MAX_MESSAGE_LENGTH
  ) {
    return { ok: false, error: "That message is too long to send." };
  }

  try {
    await sendContactEmail({ name, email, businessType, message });
    return { ok: true };
  } catch (error) {
    // Log the real cause server-side only; never expose SMTP details.
    console.error("Contact form send failed:", error);
    return {
      ok: false,
      error:
        "Something went wrong sending your message. Please email us directly at beth@e3bc.com.",
    };
  }
}
