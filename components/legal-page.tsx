import Link from "next/link";

/**
 * Shared shell for the privacy policy and terms pages.
 *
 * These are written in plain English on purpose. The About page commits to
 * "Plain English, always" as a working principle, and a wall of boilerplate
 * legalese would contradict the thing the rest of the site is selling.
 */
export function LegalPage({
  eyebrow,
  title,
  summary,
  lastUpdated,
  children,
}: {
  eyebrow: string;
  title: string;
  /**
   * Optional. One or two sentences saying what the page amounts to, in plain
   * terms. Omit it and the paragraph is not rendered at all, rather than
   * leaving an empty one behind.
   */
  summary?: string;
  /** ISO date, e.g. "2026-09-05". Rendered in long form. */
  lastUpdated: string;
  children: React.ReactNode;
}) {
  const formatted = new Date(`${lastUpdated}T00:00:00`).toLocaleDateString(
    "en-US",
    { year: "numeric", month: "long", day: "numeric" },
  );

  const hasSummary = Boolean(summary?.trim());

  return (
    <>
      <section className="border-b border-line/[0.12]">
        <div className="mx-auto max-w-[1180px] px-6 pt-[76px] pb-12">
          <div className="mb-4 font-mono text-xs font-semibold tracking-[0.14em] text-accent uppercase">
            {eyebrow}
          </div>
          <h1
            className={`${hasSummary ? "mb-[18px]" : "mb-7"} max-w-[20ch] font-display text-[clamp(34px,4vw,52px)] leading-[1.08] font-bold tracking-[-0.02em] text-pretty`}
          >
            {title}
          </h1>
          {hasSummary ? (
            <p className="mb-7 max-w-[62ch] text-lg leading-relaxed text-ink-mute text-pretty">
              {summary}
            </p>
          ) : null}
          <div className="font-mono text-[13px] text-ink-faint">
            Last updated{" "}
            <time dateTime={lastUpdated} className="text-accent">
              {formatted}
            </time>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-[1180px] px-6 pt-14 pb-[88px]">
          <div className="legal-prose max-w-[68ch]">{children}</div>

          <div className="mt-14 max-w-[68ch] border-t border-line/15 pt-7">
            <p className="text-base leading-relaxed text-ink-mute">
              Questions about this page? Email{" "}
              <a
                href="mailto:beth@e3bc.com"
                className="font-semibold text-accent hover:underline"
              >
                beth@e3bc.com
              </a>
              , or read the{" "}
              <Link
                href="/privacy"
                className="font-semibold text-accent hover:underline"
              >
                privacy policy
              </Link>{" "}
              and{" "}
              <Link
                href="/terms"
                className="font-semibold text-accent hover:underline"
              >
                terms of use
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
