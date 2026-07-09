import Link from "next/link";

type CtaBandProps = {
  title: string;
  body: string;
};

/** Dark call-to-action band used at the bottom of the About and Services pages. */
export function CtaBand({ title, body }: CtaBandProps) {
  return (
    <section className="bg-navy text-cream">
      <div className="mx-auto flex max-w-[1180px] flex-wrap items-center justify-between gap-7 px-6 py-[72px]">
        <div>
          <h2 className="mb-2.5 font-display text-[clamp(26px,3vw,36px)] font-bold tracking-[-0.02em] text-pretty">
            {title}
          </h2>
          <p className="max-w-[52ch] text-[17px] leading-relaxed text-mist">
            {body}
          </p>
        </div>
        <Link
          href="/contact"
          className="rounded-[4px] bg-primary px-7 py-[15px] text-base font-semibold whitespace-nowrap text-primary-bright transition-opacity hover:opacity-90"
        >
          Book a free consult
        </Link>
      </div>
    </section>
  );
}
