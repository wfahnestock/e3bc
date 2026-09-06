import {
  CREDENTIAL_DEGREE,
  CREDENTIAL_QBO,
  FOUNDER_NAME,
  FOUNDER_TITLE,
  SITE_COUNTY,
  SITE_EMAIL,
  SITE_LOCALITY,
  SITE_NAME,
  SITE_PROFILES,
  SITE_REGION,
  SITE_REGION_CODE,
  SITE_URL,
} from "@/lib/site";

/**
 * JSON-LD for the site. Search engines and AI assistants both use this to work
 * out that "Ecubed", "Beth Eppler" and e3bc.com are one identifiable business
 * in one identifiable place. Without it there is no entity to rank or cite.
 *
 * Stable `@id` values are what let the separate graphs on each page refer to
 * the same organization and person rather than describing new ones each time.
 */

const ORG_ID = `${SITE_URL}/#organization`;
const FOUNDER_ID = `${SITE_URL}/#founder`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/**
 * No `streetAddress`: the practice works from a home office and does not
 * receive clients there, so the street stays unpublished. Locality and region
 * are what carry the local signal, and they are the parts Google matches
 * against a service-area Business Profile.
 */
const address = {
  "@type": "PostalAddress",
  addressLocality: SITE_LOCALITY,
  addressRegion: SITE_REGION_CODE,
  addressCountry: "US",
} as const;

/**
 * York County first, then the state, then the country. The country entry is
 * not padding: remote engagements are genuinely available anywhere in the US,
 * and claiming only York would understate what the business accepts.
 */
const areaServed = [
  { "@type": "City", name: `${SITE_LOCALITY}, ${SITE_REGION}` },
  { "@type": "AdministrativeArea", name: `${SITE_COUNTY}, ${SITE_REGION}` },
  { "@type": "State", name: SITE_REGION },
  { "@type": "Country", name: "United States" },
];

const founder = {
  "@type": "Person",
  "@id": FOUNDER_ID,
  name: FOUNDER_NAME,
  jobTitle: FOUNDER_TITLE,
  worksFor: { "@id": ORG_ID },
  email: SITE_EMAIL,
  hasCredential: [
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "degree",
      educationalLevel: "Master's Degree",
      name: CREDENTIAL_DEGREE,
    },
    {
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: CREDENTIAL_QBO,
    },
  ],
  knowsAbout: [
    "Construction accounting",
    "Certified payroll",
    "Prevailing wage compliance",
    "Job costing",
    "Work-in-progress reporting",
    "Small business compliance",
  ],
};

const services = [
  {
    name: "Accounting & Consulting for Trades",
    description:
      "Job costing, certified payroll, prevailing wage, and tax compliance for construction trade contractors.",
    url: `${SITE_URL}/services#trades`,
  },
  {
    name: "HR & Administrative Guidance",
    description:
      "Hiring, onboarding, policy creation, conflict resolution, and process improvement for small teams.",
    url: `${SITE_URL}/services#hr`,
  },
  {
    name: "Small Business Compliance",
    description:
      "Licenses, permits, reporting deadlines, regulatory changes, and audit readiness.",
    url: `${SITE_URL}/services#compliance`,
  },
];

/**
 * `AccountingService` is a subtype of LocalBusiness, which is what ties the
 * business to York. Rich results for LocalBusiness generally need a street
 * address, so this is here for entity understanding rather than for a card in
 * the results page.
 */
export const organizationSchema = {
  "@type": "AccountingService",
  "@id": ORG_ID,
  name: SITE_NAME,
  alternateName: "Ecubed",
  url: SITE_URL,
  email: SITE_EMAIL,
  description:
    "Controller-level accounting, HR, and compliance for construction trade contractors and small businesses in York, Pennsylvania, with remote engagements available nationwide.",
  address,
  areaServed,
  founder: { "@id": FOUNDER_ID },
  employee: { "@id": FOUNDER_ID },
  sameAs: SITE_PROFILES,
  knowsLanguage: "en-US",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Services",
    itemListElement: services.map((service) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        url: service.url,
        provider: { "@id": ORG_ID },
        areaServed,
      },
    })),
  },
};

export const websiteSchema = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  publisher: { "@id": ORG_ID },
  inLanguage: "en-US",
};

export const founderSchema = founder;

/**
 * Breadcrumbs describe where a page sits in the site, which is how search
 * engines render a path instead of a bare URL under the title.
 */
export function breadcrumbSchema(
  trail: ReadonlyArray<{ name: string; path: string }>,
) {
  return {
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Home", path: "" }, ...trail].map(
      (crumb, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: crumb.name,
        item: `${SITE_URL}${crumb.path}`,
      }),
    ),
  };
}

/** Wraps one or more schema objects into a single connected graph. */
export function graph(...nodes: object[]) {
  return { "@context": "https://schema.org", "@graph": nodes };
}
