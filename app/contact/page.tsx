import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Book a free 30-minute consult with Beth. Bring your biggest paperwork headache and leave with a clear next step. No pitch, no obligation.",
};

const NEXT_STEPS = [
  {
    number: "1",
    label: "Beth replies within one business day.",
    detail: "A real reply, not an autoresponder, to set a time.",
  },
  {
    number: "2",
    label: "A 30-minute call about your business.",
    detail: "Where the books stand, what’s overdue, what’s keeping you up.",
  },
  {
    number: "3",
    label: "A fixed-scope proposal.",
    detail:
      "What we’d fix first, what it costs, in writing. Take it or leave it, no follow-up pressure.",
  },
];

export default function ContactPage() {
  return (
    <section className="border-b border-line/[0.12]">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-16 px-6 pt-[76px] pb-[88px]">
        <div>
          <div className="mb-4 font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            Contact
          </div>
          <h1 className="mb-[18px] font-display text-[clamp(34px,4vw,52px)] leading-[1.08] font-bold tracking-[-0.02em] text-pretty">
            Book your free consult.
          </h1>
          <p className="mb-10 max-w-[52ch] text-lg leading-[1.65] text-ink-soft text-pretty">
            Thirty minutes with Beth. Bring your biggest paperwork headache,
            whether it&rsquo;s payroll, prevailing wage, or a filing
            you&rsquo;re not sure about, and leave with a clear next step. No
            pitch, no obligation.
          </p>

          <div className="mb-[18px] font-mono text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
            What happens next
          </div>
          <div className="grid border-t border-line/15">
            {NEXT_STEPS.map((step) => (
              <div
                key={step.number}
                className="flex gap-[18px] border-b border-line/15 py-[18px]"
              >
                <span className="font-mono text-sm font-semibold text-accent">
                  {step.number}
                </span>
                <p className="text-base leading-[1.55]">
                  <strong className="font-semibold">{step.label}</strong>{" "}
                  {step.detail}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-9 rounded-[6px] border border-line/15 bg-paper-mute px-[26px] py-6">
            <div className="mb-2.5 font-mono text-xs font-semibold tracking-[0.14em] text-ink-faint uppercase">
              Not ready for a call?
            </div>
            <p className="text-base leading-relaxed">
              Email a question instead:{" "}
              <a
                href="mailto:beth@e3bc.com"
                className="font-semibold text-accent hover:underline"
              >
                beth@e3bc.com
              </a>
              . Short questions get short, useful answers.
            </p>
          </div>
        </div>

        <div className="w-full max-w-[520px] justify-self-end">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
