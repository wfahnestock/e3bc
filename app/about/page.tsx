import type { Metadata } from "next";
import Image from "next/image";
import { CtaBand } from "@/components/cta-band";

const TITLE = "About Beth";
const DESCRIPTION =
  "Beth holds a Master's Degree in Accounting, is QBO Certified, and served as Controller for a construction trades firm — managing payroll, job costing, and certified reporting.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/about" },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: "/about",
    type: "profile",
  },
  // `card` must be repeated — overriding `twitter` replaces the parent
  // object rather than merging, and the default is the small "summary" card.
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const WORK_PRINCIPLES = [
  {
    number: "01",
    title: "Plain English, always",
    body: "If you can read a set of plans, you can read your financials. We explain every number until you own it.",
  },
  {
    number: "02",
    title: "Fixed scope, no surprises",
    body: "You approve the scope and the price before work starts. The invoice matches. Every time.",
  },
  {
    number: "03",
    title: "Your systems, not ours",
    body: "We work inside the tools you already run: Procore, Trimble, GCPay, your payroll. No forced migration.",
  },
  {
    number: "04",
    title: "Teach, don’t gatekeep",
    body: "The goal is a business that runs clean without us. You’ll never be dependent on your consultant.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* About intro */}
      <section className="border-b border-line/[0.12]">
        <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-14 px-6 pt-[76px] pb-16">
          <div>
            <div className="mb-4 font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              About
            </div>
            <h1 className="mb-[22px] font-display text-[clamp(34px,4vw,52px)] leading-[1.08] font-bold tracking-[-0.02em] text-pretty">
              Beth has sat in your chair for over 5 years. And kept the books
              from it.
            </h1>
            <p className="mb-[18px] max-w-[58ch] text-lg leading-[1.65] text-ink-soft text-pretty">
              Beth holds a Master&rsquo;s Degree in Accounting and has spent
              years in public accounting before moving to the private sector,
              where she served as{" "}
              <strong className="font-semibold">
                the Controller for a construction trades firm
              </strong>
              , managing payroll, job costing, certified reporting, and
              benefits administration.
            </p>
            <p className="mb-[18px] max-w-[58ch] text-lg leading-[1.65] text-ink-soft text-pretty">
              She then built and ran her own profitable business, so she knows
              what it&rsquo;s like to make payroll from the owner&rsquo;s side
              of the table. Along the way she has helped businesses climb out
              of trouble, some of them on the edge of bankruptcy, by fixing the
              numbers first and the habits second.
            </p>
            <p className="max-w-[58ch] text-lg leading-[1.65] text-ink-soft text-pretty">
              <strong className="font-semibold">Ecubed Business Consulting </strong> exists to give small trade businesses the financial
              discipline of a firm ten times their size. It&rsquo;s taught, not
              gatekept, so owners understand their own numbers.
            </p>
          </div>
          <div className="grid w-full max-w-[400px] gap-4 justify-self-center">
            <Image
              src="/beth.jpg"
              alt="Beth, Founder and Principal of Ecubed Business Consulting"
              width={1506}
              height={2071}
              priority
              sizes="(max-width: 500px) 100vw, 400px"
              className="h-auto w-full border border-line/25"
            />
            <div className="flex flex-wrap justify-between gap-3 font-mono text-xs text-ink-faint">
              <span>Beth · Founder &amp; Principal</span>
              <span className="text-accent">M.Acc. Accounting</span>
            </div>
          </div>
        </div>
      </section>

      {/* CPA note */}
      <section className="border-b border-line/[0.12] bg-paper-mute">
        <div className="mx-auto max-w-[1180px] px-6 py-16">
          <div className="max-w-[820px] rounded-[6px] border border-line/20 bg-paper px-[38px] py-9">
            <div className="mb-3.5 font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
              A note on the CPA license
            </div>
            <h2 className="mb-3.5 font-display text-[clamp(22px,2.4vw,28px)] font-bold tracking-[-0.015em] text-pretty">
              CPA-level rigor at small-business rates. By design.
            </h2>
            <p className="text-[17px] leading-[1.65] text-ink-soft text-pretty">
              Beth is fully vetted for CPA licensure. The education, the
              experience, all of it. She chooses not to carry the license,
              because carrying it adds overhead that gets passed straight to
              clients. The work is held to the same standard; your rates
              aren&rsquo;t. When an engagement requires a signing CPA, she
              refers you to trusted partners and stays in the room.
            </p>
          </div>
        </div>
      </section>

      {/* How we work */}
      <section>
        <div className="mx-auto max-w-[1180px] px-6 pt-20 pb-[88px]">
          <h2 className="mb-10 font-display text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.015em]">
            How we work
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-9 border-t border-line/[0.18]">
            {WORK_PRINCIPLES.map((principle) => (
              <div key={principle.number} className="pt-[26px]">
                <div className="mb-3 font-mono text-[13px] text-accent">
                  {principle.number}
                </div>
                <h3 className="mb-2.5 font-display text-[19px] font-bold">
                  {principle.title}
                </h3>
                <p className="text-base leading-relaxed text-ink-mute text-pretty">
                  {principle.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Talk to Beth directly."
        body="No sales team, no handoff. The person on the free consult is the person who does the work."
      />
    </>
  );
}
