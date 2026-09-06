import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbSchema, graph } from "@/lib/structured-data";

const TITLE = "Book a Free Consult";
const DESCRIPTION =
  "Book a free 30-minute consult with Beth Eppler of Ecubed Business Consulting in York, PA. Bring your biggest paperwork headache. No pitch, no obligation.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/contact",
    type: "website",
  },
  // `card` must be repeated — overriding `twitter` replaces the parent
  // object rather than merging, and the default is the small "summary" card.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
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
      <JsonLd
        schema={graph(breadcrumbSchema([{ name: "Contact", path: "/contact" }]))}
      />
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
            pitch, no obligation. We work with businesses across York County in
            person, and anywhere in the country remotely.
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
              Use the same form to send Beth a question directly, without
              booking a call. Short questions get short, useful answers.
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
