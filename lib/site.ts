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

/**
 * GA4 measurement ID. It ships in the page source and is public by design, so
 * it lives here as configuration rather than in an environment variable. An
 * env var would only add a way for analytics to silently stop reporting.
 */
export const GA_MEASUREMENT_ID = "G-NV075SXZ9K";
