"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-line/[0.14] bg-paper/[0.94] backdrop-blur-[10px]">
      <div className="mx-auto flex min-h-[72px] max-w-[1180px] flex-wrap items-center justify-between gap-5 px-6">
        <Link href="/" className="flex items-center gap-[11px] py-3.5">
          <div className="grid size-[34px] place-items-center bg-primary font-mono text-sm font-semibold tracking-[-0.02em] text-paper">
            E³
          </div>
          <span className="font-display text-[17px] font-bold tracking-[-0.01em] text-ink">
            Ecubed{" "}
            <span className="font-medium text-ink-mute">
              Business Consulting
            </span>
          </span>
        </Link>
        <nav className="flex flex-wrap items-center gap-[26px]">
          {NAV_ITEMS.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                className={
                  active
                    ? "border-b-2 border-primary py-1 text-[15px] font-semibold text-ink"
                    : "py-1 text-[15px] font-medium text-ink-mute transition-colors hover:text-ink"
                }
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="rounded-[4px] bg-primary px-5 py-2.5 text-[15px] font-semibold text-paper transition-opacity hover:opacity-90"
          >
            Book a free consult
          </Link>
        </nav>
      </div>
    </header>
  );
}
