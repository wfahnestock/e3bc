import Link from "next/link";

const HANDLED_ITEMS = [
  "Certified payroll & prevailing wage",
  "Job costing & work-in-progress",
  "Cash-flow forecasting",
  "Licenses, permits & reporting",
  "Hiring, onboarding & HR policy",
];

const TRADES = [
  "Electrical",
  "Plumbing",
  "HVAC",
  "Framing",
  "Drywall",
  "Concrete",
  "Excavation",
  "Roofing",
  "Painting",
  "Low-voltage",
];

const TESTIMONIALS = [
  {
    quote:
      "[Client testimonial. A concrete result, e.g. “Beth cleaned up two years of books before our bond renewal.”]",
    name: "[Name]",
    company: "[Trade Contracting Co.]",
  },
  {
    quote:
      "[Client testimonial, e.g. “Certified payroll used to eat my Sundays. Now it just gets done.”]",
    name: "[Name]",
    company: "[Company]",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy text-cream">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-center gap-14 px-6 pt-[88px] pb-24">
          <div className="max-w-[640px]">
            <div className="mb-[22px] font-mono text-[13px] font-medium tracking-[0.12em] text-gold uppercase">
              Consulting &amp; accounting for the construction trades
            </div>
            <h1 className="mb-6 font-display text-[clamp(38px,4.6vw,60px)] leading-[1.06] font-bold tracking-[-0.02em] text-pretty">
              Controller-level accounting for subcontractors
            </h1>
            <p className="mb-[34px] max-w-[54ch] text-[19px] leading-relaxed text-mist text-pretty">
              Payroll, prevailing wage, job costing, compliance. All handled by
              someone who has actually run the books inside a construction
              firm. You stay on the tools. We keep you out of trouble.
            </p>
            <div className="flex flex-wrap items-center gap-3.5">
              <Link
                href="/contact"
                className="rounded-[4px] bg-primary px-7 py-[15px] text-base font-semibold text-primary-bright transition-opacity hover:opacity-90"
              >
                Book a free consult
              </Link>
              <Link
                href="/services"
                className="rounded-[4px] border border-cream/35 px-6 py-[15px] text-base font-semibold text-cream transition-colors hover:border-cream/60"
              >
                See services
              </Link>
            </div>
            <div className="mt-[30px] flex flex-wrap items-center gap-3.5">
              <span className="inline-flex items-center gap-1.5 border border-gold/50 px-2.5 py-[5px] font-mono text-[11px] font-semibold tracking-[0.1em] text-gold uppercase">
                <span aria-hidden="true">✓</span> QBO Certified
              </span>
              <span className="font-mono text-[13px] text-mist-faint">
                At our office or yours
              </span>
            </div>
          </div>
          <div className="w-full max-w-[420px] justify-self-center">
            <div className="overflow-hidden rounded-[6px] bg-paper text-ink shadow-[0_24px_60px_oklch(0.1_0.03_279/0.45)]">
              <div className="flex items-center justify-between border-b border-line/[0.14] px-[22px] py-4">
                <span className="font-mono text-[11px] font-semibold tracking-[0.14em] uppercase">
                  Handled for you
                </span>
                <span className="font-mono text-[11px] text-accent">
                  monthly
                </span>
              </div>
              <div className="grid">
                {HANDLED_ITEMS.map((item, i) => (
                  <div
                    key={item}
                    className={`flex items-baseline justify-between gap-4 px-[22px] py-3.5 ${
                      i < HANDLED_ITEMS.length - 1
                        ? "border-b border-line/10"
                        : ""
                    }`}
                  >
                    <span className="text-[15px] font-medium">{item}</span>
                    <span className="font-mono text-[13px] text-accent">✓</span>
                  </div>
                ))}
              </div>
              <div className="bg-paper-mute px-[22px] py-[13px] font-mono text-xs text-ink-faint">
                Fixed scope · No surprise invoices
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who this is for */}
      <section className="border-b border-line/[0.12]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(300px,1fr))] items-start gap-10 px-6 py-[72px]">
          <div>
            <div className="mb-3.5 font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              Who this is for
            </div>
            <h2 className="mb-4 font-display text-[clamp(26px,3vw,36px)] leading-[1.15] font-bold tracking-[-0.015em] text-pretty">
              Built for subcontractors and small trade businesses.
            </h2>
            <p className="max-w-[56ch] text-[17px] leading-[1.65] text-ink-mute text-pretty">
              You run a crew of 2 to 30. You bid your own work. And the
              paperwork keeps piling up faster than you can clear it: payroll,
              certified reports, licenses, taxes. That&rsquo;s who this is for.
              We also work with other small businesses that need HR,
              operations, and compliance help.
            </p>
          </div>
          <div className="flex flex-wrap content-start gap-2.5 pt-11">
            {TRADES.map((trade) => (
              <span
                key={trade}
                className="border border-line/25 px-[15px] py-[9px] font-mono text-[13px] text-ink-dim"
              >
                {trade}
              </span>
            ))}
            <span className="border border-dashed border-line/30 px-[15px] py-[9px] font-mono text-[13px] text-ink-faint">
              + other small businesses
            </span>
          </div>
        </div>
      </section>

      {/* Service pillars */}
      <section>
        <div className="mx-auto max-w-[1180px] px-6 pt-20 pb-[88px]">
          <div className="mb-11 flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="font-display text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.015em]">
              Three ways we help.
            </h2>
            <Link
              href="/services"
              className="text-[15px] font-semibold text-accent hover:underline"
            >
              All services →
            </Link>
          </div>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] border-t border-line/[0.18]">
            <div className="-mt-0.5 border-t-[3px] border-primary pt-[34px] pr-[30px] pb-[38px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[13px] text-ink-faint">01</span>
                <span className="border border-primary/50 px-2 py-[3px] font-mono text-[11px] font-semibold tracking-[0.1em] text-accent uppercase">
                  Core focus
                </span>
              </div>
              <h3 className="mb-3 font-display text-[22px] font-bold tracking-[-0.01em]">
                Accounting &amp; Consulting for Trades
              </h3>
              <p className="mb-[18px] text-base leading-relaxed text-ink-mute text-pretty">
                Job costing, certified payroll, prevailing wage, and tax
                compliance. Set up right and kept clean, month after month.
              </p>
              <Link
                href="/services#trades"
                className="text-[15px] font-semibold text-accent hover:underline"
              >
                Details →
              </Link>
            </div>
            <div className="-mt-0.5 border-t-[3px] border-transparent pt-[34px] pr-[30px] pb-[38px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[13px] text-ink-faint">02</span>
              </div>
              <h3 className="mb-3 font-display text-[22px] font-bold tracking-[-0.01em]">
                HR &amp; Administrative Guidance
              </h3>
              <p className="mb-[18px] text-base leading-relaxed text-ink-mute text-pretty">
                Hiring, onboarding, policies, and conflict resolution, so crew
                problems get solved before they turn into legal ones.
              </p>
              <Link
                href="/services#hr"
                className="text-[15px] font-semibold text-accent hover:underline"
              >
                Details →
              </Link>
            </div>
            <div className="-mt-0.5 border-t-[3px] border-transparent pt-[34px] pb-[38px]">
              <div className="mb-4 flex items-center gap-3">
                <span className="font-mono text-[13px] text-ink-faint">03</span>
              </div>
              <h3 className="mb-3 font-display text-[22px] font-bold tracking-[-0.01em]">
                Small Business Compliance
              </h3>
              <p className="mb-[18px] text-base leading-relaxed text-ink-mute text-pretty">
                Licenses, permits, reporting deadlines, and regulatory changes,
                tracked and handled before they cost you money.
              </p>
              <Link
                href="/services#compliance"
                className="text-[15px] font-semibold text-accent hover:underline"
              >
                Details →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="border-y border-line/[0.12] bg-paper-mute">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-14 px-6 py-20">
          <div>
            <div className="mb-3.5 font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              Why owners trust Ecubed
            </div>
            <h2 className="mb-6 font-display text-[clamp(26px,3vw,36px)] leading-[1.15] font-bold tracking-[-0.015em] text-pretty">
              Credentials that come from the field, not just the classroom.
            </h2>
            <div className="grid border-t border-line/15">
              <div className="flex gap-4 border-b border-line/15 py-4">
                <span className="pt-0.5 font-mono text-[13px] text-accent">
                  →
                </span>
                <p className="text-base leading-[1.55]">
                  <strong className="font-semibold">
                    Master&rsquo;s in Accounting
                  </strong>
                  , with over 15 years of experience in public and private
                  accounting.
                </p>
              </div>
              <div className="flex gap-4 border-b border-line/15 py-4">
                <span className="pt-0.5 font-mono text-[13px] text-accent">
                  →
                </span>
                <p className="text-base leading-[1.55]">
                  <strong className="font-semibold">
                    Controller in the trades.
                  </strong>{" "}
                  Managed the books, payroll, and compliance inside the
                  industry you work in.
                </p>
              </div>
              <div className="flex gap-4 border-b border-line/15 py-4">
                <span className="pt-0.5 font-mono text-[13px] text-accent">
                  →
                </span>
                <p className="text-base leading-[1.55]">
                  <strong className="font-semibold">
                    Built and ran her own profitable business.
                  </strong>{" "}
                  She&rsquo;s also helped other owners pull back from the edge
                  of bankruptcy.
                </p>
              </div>
            </div>
            <Link
              href="/about"
              className="mt-6 inline-block text-[15px] font-semibold text-accent hover:underline"
            >
              Meet Beth →
            </Link>
          </div>
          <div className="grid content-start gap-5">
            {TESTIMONIALS.map((t) => (
              <div
                key={t.quote}
                className="rounded-[6px] border border-line/15 bg-paper p-7"
              >
                <div className="font-display text-[34px] leading-[0.5] font-extrabold text-primary">
                  “
                </div>
                <p className="mt-3.5 mb-4 font-mono text-sm leading-[1.7] text-ink-faint">
                  {t.quote}
                </p>
                <div className="text-sm font-semibold text-ink-soft">
                  {t.name}{" "}
                  <span className="font-normal text-ink-ghost">
                    · {t.company}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy text-cream">
        <div className="mx-auto max-w-[1180px] px-6 py-[88px] text-center">
          <h2 className="mb-4 font-display text-[clamp(30px,3.6vw,44px)] font-bold tracking-[-0.02em] text-pretty">
            Get the books off your plate.
          </h2>
          <p className="mx-auto mb-[34px] max-w-[52ch] text-lg leading-relaxed text-mist text-pretty">
            A free 30-minute consult. Bring your biggest paperwork headache and
            leave with a clear next step, whether or not we end up working
            together.
          </p>
          <div className="flex flex-wrap justify-center gap-3.5">
            <Link
              href="/contact"
              className="rounded-[4px] bg-primary px-7 py-[15px] text-base font-semibold text-primary-bright transition-opacity hover:opacity-90"
            >
              Book a free consult
            </Link>
            <a
              href="mailto:beth@e3bc.com"
              className="rounded-[4px] border border-cream/35 px-6 py-[15px] text-base font-semibold text-cream transition-colors hover:border-cream/60"
            >
              Or email a question
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
