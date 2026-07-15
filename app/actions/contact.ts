"use server";

import { sendContactEmail } from "@/lib/mailer";

export type ContactResult = { ok: true } | { ok: false; error: string };

const TURNSTILE_VERIFY_URL =
  process.env.TURNSTILE_VERIFY_URL ??
  "https://challenges.cloudflare.com/turnstile/v0/siteverify";

/**
 * Verifies a Cloudflare Turnstile token. Returns true when valid.
 * If TURNSTILE_SECRET_KEY is not configured, verification is skipped so the
 * form keeps working before Turnstile is set up — the honeypot still applies.
 */
async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    console.warn(
      "TURNSTILE_SECRET_KEY not set — skipping bot verification on contact form.",
    );
    return true;
  }
  if (!token) return false;

  const res = await fetch(TURNSTILE_VERIFY_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ secret, response: token }),
  });
  if (!res.ok) {
    // Cloudflare itself unreachable/erroring. Fail closed: better to make a
    // visitor retry than to open a bypass whenever the check has a hiccup.
    console.error("Turnstile siteverify request failed:", res.status);
    return false;
  }
  const data = (await res.json()) as { success: boolean };
  return data.success === true;
}

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

  const turnstileToken = String(formData.get("cf-turnstile-response") ?? "");
  if (!(await verifyTurnstile(turnstileToken))) {
    return {
      ok: false,
      error:
        "We couldn’t verify you’re human. Please try again — or email us directly at beth@e3bc.com.",
    };
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
