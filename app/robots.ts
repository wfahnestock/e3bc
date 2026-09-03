import type { MetadataRoute } from "next";
import { SITE_URL as BASE_URL } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        // Search engines: full access. Note we deliberately do NOT block
        // /_next/ — Google renders pages with their CSS and JS, so blocking
        // those assets would hurt rankings far more than it saves bandwidth.
        userAgent: "*",
        allow: "/",
        // Honored by Bing, Yandex, and most well-behaved crawlers (Googlebot
        // ignores it and self-throttles). Ten seconds between requests is
        // ample for a four-page site and caps runaway crawl loops.
        crawlDelay: 10,
      },
      // --- Optional: block AI training/scraper bots ---
      // These crawl far more aggressively than search engines. Blocking them
      // protects bandwidth and keeps the site out of AI training sets — but
      // it also reduces the chance of being recommended when someone asks an
      // AI assistant for a construction accountant. That's a business call
      // for the client. To enable, uncomment this block and redeploy.
      // {
      //   userAgent: [
      //     "GPTBot",
      //     "ClaudeBot",
      //     "CCBot",
      //     "Google-Extended",
      //     "PerplexityBot",
      //     "Bytespider",
      //     "meta-externalagent",
      //   ],
      //   disallow: "/",
      // },
    ],
    sitemap: `${BASE_URL}/sitemap.xml`,
    host: BASE_URL,
  };
}
