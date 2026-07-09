"use client";

import { useState } from "react";
import { sendContactMessage } from "@/app/actions/contact";

const inputClasses =
  "w-full rounded-[4px] border border-line/30 bg-paper px-[15px] py-[13px] text-base text-ink outline-none transition-colors focus:border-accent";

type Status = "idle" | "sending" | "sent";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    setStatus("sending");
    setError(null);

    const result = await sendContactMessage(new FormData(event.currentTarget));

    if (result.ok) {
      setStatus("sent");
    } else {
      setStatus("idle");
      setError(result.error);
    }
  }

  if (status === "sent") {
    return (
      <div className="grid gap-4 rounded-[6px] border border-line/[0.18] bg-card px-[34px] py-12 text-center shadow-[0_12px_40px_oklch(0.2_0.03_279/0.08)]">
        <div className="font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
          Message sent
        </div>
        <h2 className="font-display text-[26px] font-bold tracking-[-0.015em] text-pretty">
          Thanks — it&rsquo;s on Beth&rsquo;s desk.
        </h2>
        <p className="mx-auto max-w-[40ch] text-base leading-relaxed text-ink-mute">
          You&rsquo;ll get a real reply, not an autoresponder, within one
          business day.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-[22px] rounded-[6px] border border-line/[0.18] bg-card px-[34px] py-9 shadow-[0_12px_40px_oklch(0.2_0.03_279/0.08)]"
    >
      <div className="grid gap-2">
        <label htmlFor="c-name" className="text-sm font-semibold text-ink-dim">
          Name
        </label>
        <input
          id="c-name"
          name="name"
          type="text"
          required
          maxLength={200}
          placeholder="Your name"
          className={inputClasses}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="c-email" className="text-sm font-semibold text-ink-dim">
          Email
        </label>
        <input
          id="c-email"
          name="email"
          type="email"
          required
          maxLength={200}
          placeholder="you@company.com"
          className={inputClasses}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="c-type" className="text-sm font-semibold text-ink-dim">
          Business type
        </label>
        <select id="c-type" name="businessType" className={inputClasses}>
          <option value="Construction / trade subcontractor">
            Construction / trade subcontractor
          </option>
          <option value="Other small business">Other small business</option>
          <option value="Just getting started">Just getting started</option>
          <option value="Something else">Something else</option>
        </select>
      </div>
      <div className="grid gap-2">
        <label htmlFor="c-msg" className="text-sm font-semibold text-ink-dim">
          What&rsquo;s the headache?
        </label>
        <textarea
          id="c-msg"
          name="message"
          rows={5}
          required
          maxLength={5000}
          placeholder="e.g. Certified payroll is eating my weekends, and I think my last two filings were late…"
          className={`${inputClasses} resize-y leading-normal`}
        />
      </div>

      {/* Honeypot — hidden from people, tempting to bots. Submissions with
          this filled are silently dropped. */}
      <div aria-hidden="true" className="absolute -left-[9999px] h-0 overflow-hidden">
        <label htmlFor="c-company">Company</label>
        <input
          id="c-company"
          name="company"
          type="text"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <button
        type="submit"
        disabled={status === "sending"}
        className="cursor-pointer rounded-[4px] border-none bg-primary px-7 py-[15px] text-base font-semibold text-primary-bright transition-opacity hover:opacity-90 disabled:cursor-default disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send & book my consult"}
      </button>

      {error ? (
        <p
          role="alert"
          className="text-center font-mono text-xs text-[oklch(0.5_0.19_25)]"
        >
          {error}
        </p>
      ) : (
        <p className="text-center font-mono text-xs text-ink-ghost">
          Replies within one business day. Your info is never shared.
        </p>
      )}
    </form>
  );
}
