/**
 * Canonical site URL, resolved at build time.
 * Netlify provides `URL` automatically; `SITE_URL` overrides it if the
 * production domain ever differs from the Netlify primary domain.
 */
export const SITE_URL = (
  process.env.SITE_URL ??
  process.env.URL ??
  "https://e3bc.com"
).replace(/\/$/, "");

export const SITE_NAME = "Ecubed Business Consulting";
