import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-navy-deep text-fog-dim">
      <div className="mx-auto grid max-w-[1180px] grid-cols-[repeat(auto-fit,minmax(240px,1fr))] gap-10 px-6 pt-14 pb-10">
        <div>
          <div className="mb-3.5 flex items-center gap-2.5">
            <div className="grid size-[30px] place-items-center bg-paper font-mono text-[13px] font-semibold text-ink">
              E³
            </div>
            <span className="font-display text-base font-bold text-cream">
              Ecubed Business Consulting
            </span>
          </div>
          <p className="max-w-[38ch] text-sm leading-relaxed">
            Consulting and accounting for the construction trades, and the
            small businesses that keep this economy running.
          </p>
        </div>
        <div className="grid content-start gap-2.5">
          <div className="mb-1 font-mono text-[11px] font-semibold tracking-[0.14em] text-fog-faint uppercase">
            Explore
          </div>
          <Link
            href="/about"
            className="text-sm text-fog transition-colors hover:text-cream"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-sm text-fog transition-colors hover:text-cream"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-sm text-fog transition-colors hover:text-cream"
          >
            Contact
          </Link>
        </div>
        <div className="grid content-start gap-2.5">
          <div className="mb-1 font-mono text-[11px] font-semibold tracking-[0.14em] text-fog-faint uppercase">
            Get in touch
          </div>
          <a
            href="mailto:beth@e3bc.com"
            className="text-sm text-fog transition-colors hover:text-cream"
          >
            beth@e3bc.com
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61576769070458"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-fog transition-colors hover:text-cream"
          >
            Facebook
          </a>
        </div>
      </div>
      <div className="border-t border-cream/[0.12]">
        <div className="mx-auto flex max-w-[1180px] flex-wrap justify-between gap-4 px-6 py-[18px] font-mono text-xs text-fog-faint">
          <span>© 2026 Ecubed Business Consulting</span>
          <span>Books kept clean. Deadlines kept quiet.</span>
        </div>
      </div>
    </footer>
  );
}
