import type { MetadataRoute } from "next";

// Netlify sets URL to the site's primary address at build time. The fallback
// keeps local builds and previews working; override with SITE_URL if the
// production domain ever changes.
const BASE_URL = (
  process.env.SITE_URL ??
  process.env.URL ??
  "https://e3bc.com"
).replace(/\/$/, "");

// Every route in the app. Add new pages here when they're created.
const ROUTES = [
  { path: "", changeFrequency: "monthly", priority: 1 },
  { path: "/services", changeFrequency: "monthly", priority: 0.8 },
  { path: "/about", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.7 },
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  // Content is static, so build time is an honest "last modified" value.
  const lastModified = new Date();

  return ROUTES.map(({ path, changeFrequency, priority }) => ({
    url: `${BASE_URL}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
