import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Three fixed-scope services: accounting and consulting for the construction trades, HR and administrative guidance, and small business compliance.",
};

const TRADES_CELLS = [
  {
    title: "Accounting System Setup",
    body: "A chart of accounts and workflow built for job-based work, not a generic template.",
  },
  {
    title: "Cost Accounting",
    body: "Know what every job actually costs (labor, materials, overhead) before it eats your margin.",
  },
  {
    title: "Prevailing Wage",
    body: "Certified payroll and wage determinations handled correctly, so public work stays worth bidding.",
  },
  {
    title: "Payroll",
    body: "Crews paid right and on time, with withholdings and filings that never fall behind.",
  },
  {
    title: "Estimating",
    body: "Bids grounded in your real cost data, so you win work you can actually make money on.",
  },
  {
    title: "Project Management",
    body: "Change orders, pay applications, and schedules kept current and billable.",
  },
  {
    title: "Tax Compliance",
    body: "Quarterly and annual obligations tracked and met. No April surprises.",
  },
  {
    title: "Contract Review",
    body: "Payment terms, retainage, and risk clauses flagged before you sign, not after you’re stuck.",
  },
];

const HR_ITEMS = [
  { label: "Hiring & onboarding", detail: "find, vet, and start people the right way" },
  { label: "Policy creation", detail: "handbooks and rules that hold up when tested" },
  { label: "Conflict resolution", detail: "handle disputes before they become departures" },
  { label: "Scheduling", detail: "crews and coverage without the daily scramble" },
  { label: "Document management", detail: "the paperwork findable when it matters" },
  { label: "Process improvement", detail: "office workflows that stop wasting your hours" },
];

const COMPLIANCE_ITEMS = [
  { label: "Licenses & permits", detail: "obtained, renewed, and never lapsed" },
  { label: "Reporting requirements", detail: "federal, state, and local filings on schedule" },
  { label: "Regulatory changes", detail: "plain-English briefings on what applies to you" },
  { label: "Audit readiness", detail: "records organized so a review is an errand, not a crisis" },
];

function ChecklistRow({ label, detail }: { label: string; detail: string }) {
  return (
    <div className="flex gap-3.5 border-b border-line/15 py-3.5">
      <span className="font-mono text-[13px] text-accent">→</span>
      <span className="text-base">
        <strong className="font-semibold">{label}</strong>: {detail}
      </span>
    </div>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* Services intro */}
      <section className="border-b border-line/[0.12]">
        <div className="mx-auto max-w-[1180px] px-6 pt-[76px] pb-14">
          <div className="mb-4 font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            Services
          </div>
          <h1 className="mb-[18px] max-w-[20ch] font-display text-[clamp(34px,4vw,52px)] leading-[1.08] font-bold tracking-[-0.02em] text-pretty">
            Three services. One goal: a business that runs clean.
          </h1>
          <p className="mb-[30px] max-w-[60ch] text-lg leading-relaxed text-ink-mute text-pretty">
            Every engagement is fixed-scope and priced up front. Start with the
            one that hurts most.
          </p>
          <div className="flex flex-wrap gap-2.5">
            <a
              href="#trades"
              className="border border-line/30 px-[15px] py-[9px] font-mono text-[13px] text-primary transition-colors hover:border-primary/60"
            >
              01 · Accounting &amp; Consulting for Trades
            </a>
            <a
              href="#hr"
              className="border border-line/30 px-[15px] py-[9px] font-mono text-[13px] text-primary transition-colors hover:border-primary/60"
            >
              02 · HR &amp; Administrative Guidance
            </a>
            <a
              href="#compliance"
              className="border border-line/30 px-[15px] py-[9px] font-mono text-[13px] text-primary transition-colors hover:border-primary/60"
            >
              03 · Small Business Compliance
            </a>
          </div>
        </div>
      </section>

      {/* 01 · Trades */}
      <section id="trades" className="bg-navy text-cream">
        <div className="mx-auto max-w-[1180px] px-6 pt-20 pb-[88px]">
          <div className="mb-[18px] flex flex-wrap items-center gap-3.5">
            <span className="font-mono text-[13px] text-gold">01</span>
            <span className="border border-gold/50 px-2 py-[3px] font-mono text-[11px] font-semibold tracking-[0.1em] text-gold uppercase">
              Core focus
            </span>
          </div>
          <h2 className="mb-[18px] max-w-[24ch] font-display text-[clamp(30px,3.6vw,44px)] leading-[1.1] font-bold tracking-[-0.02em] text-pretty">
            Accounting &amp; Consulting for Trades
          </h2>
          <p className="mb-12 max-w-[62ch] text-lg leading-relaxed text-mist text-pretty">
            The full back office of a construction firm: job costing, certified
            payroll, prevailing wage, tax compliance. Run by a former
            Controller who has done this work inside the industry, not just
            advised on it.
          </p>
          <div className="mb-10 grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-px border border-cream/15 bg-cream/15">
            {TRADES_CELLS.map((cell) => (
              <div key={cell.title} className="bg-navy px-[22px] py-6">
                <h3 className="mb-2 font-display text-[17px] font-semibold">
                  {cell.title}
                </h3>
                <p className="text-[15px] leading-[1.55] text-mist-dim">
                  {cell.body}
                </p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="font-mono text-xs tracking-[0.1em] text-mist-faint uppercase">
                Works in your stack
              </span>
              <span className="border border-cream/30 px-[13px] py-[7px] font-mono text-[13px]">
                Procore
              </span>
              <span className="border border-cream/30 px-[13px] py-[7px] font-mono text-[13px]">
                Trimble
              </span>
              <span className="border border-cream/30 px-[13px] py-[7px] font-mono text-[13px]">
                GCPay
              </span>
            </div>
            <Link
              href="/contact"
              className="rounded-[4px] bg-primary px-[26px] py-3.5 text-base font-semibold text-primary-bright transition-opacity hover:opacity-90"
            >
              Book now
            </Link>
          </div>
        </div>
      </section>

      {/* 02 · HR */}
      <section id="hr" className="border-b border-line/[0.12]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-12 px-6 py-20">
          <div>
            <div className="mb-4 font-mono text-[13px] text-ink-faint">02</div>
            <h2 className="mb-4 font-display text-[clamp(28px,3.2vw,40px)] leading-[1.12] font-bold tracking-[-0.02em] text-pretty">
              HR &amp; Administrative Guidance
            </h2>
            <p className="mb-7 max-w-[52ch] text-[17px] leading-[1.65] text-ink-mute text-pretty">
              People problems are the ones that keep owners up at night. Get
              practical counsel on managing a crew before a bad hire, a missing
              policy, or an unresolved conflict turns into a real cost.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-[4px] bg-primary px-[26px] py-3.5 text-base font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Book now
            </Link>
          </div>
          <div className="grid border-t border-line/15">
            {HR_ITEMS.map((item) => (
              <ChecklistRow key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      {/* 03 · Compliance */}
      <section id="compliance">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-12 px-6 pt-20 pb-[88px]">
          <div>
            <div className="mb-4 font-mono text-[13px] text-ink-faint">03</div>
            <h2 className="mb-4 font-display text-[clamp(28px,3.2vw,40px)] leading-[1.12] font-bold tracking-[-0.02em] text-pretty">
              Small Business Compliance
            </h2>
            <p className="mb-7 max-w-[52ch] text-[17px] leading-[1.65] text-ink-mute text-pretty">
              The rules change; the deadlines don&rsquo;t care. We keep your
              licenses, permits, and filings current, and we tell you
              what&rsquo;s coming before it becomes a fine.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-[4px] bg-primary px-[26px] py-3.5 text-base font-semibold text-paper transition-opacity hover:opacity-90"
            >
              Book now
            </Link>
          </div>
          <div className="grid border-t border-line/15">
            {COMPLIANCE_ITEMS.map((item) => (
              <ChecklistRow key={item.label} {...item} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure where to start?"
        body="Bring your biggest headache to a free consult. Beth will tell you what to fix first."
      />
    </>
  );
}
