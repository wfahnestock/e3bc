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

/**
 * Where the practice is based and who it serves. York County is the primary
 * market; remote work is available anywhere in the US, so the schema and the
 * on-page copy both say so rather than implying a hard geographic limit.
 */
export const SITE_LOCALITY = "York";
export const SITE_REGION_CODE = "PA";
export const SITE_REGION = "Pennsylvania";
export const SITE_COUNTY = "York County";

/** Reads as "York, PA" wherever a short location label is needed. */
export const SITE_LOCATION_SHORT = `${SITE_LOCALITY}, ${SITE_REGION_CODE}`;

/** Public contact address, also used as the schema email. */
export const SITE_EMAIL = "beth@e3bc.com";

/** Profiles that corroborate the business as the same entity. */
export const SITE_PROFILES = [
  "https://www.facebook.com/profile.php?id=61576769070458",
];

/** Founder identity. A full name is what makes the entity resolvable. */
export const FOUNDER_NAME = "Elizabeth Eppler";
export const FOUNDER_TITLE = "Founder & Principal";

/**
 * Credentials, written one way. These used to appear in four different forms
 * across the site ("Master's Degree in Accounting", "Master's in Accounting",
 * "M.S. Accounting", "M.Acc. Accounting"), which reads as carelessness on a
 * page whose whole job is to establish that the credentials are real.
 *
 * Long form is for prose, metadata, and schema. Short form is for chips,
 * captions, and social cards, where there is no room for the full phrase.
 * Use these rather than retyping the text.
 */
export const CREDENTIAL_DEGREE = "Master’s degree in Accounting";
export const CREDENTIAL_DEGREE_SHORT = "M.Acc.";
export const CREDENTIAL_QBO = "QuickBooks Online Certified";
export const CREDENTIAL_QBO_SHORT = "QBO Certified";
