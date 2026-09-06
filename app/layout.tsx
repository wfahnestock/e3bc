import type { Metadata } from "next";
import { Archivo, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { JsonLd } from "@/components/json-ld";
import {
  founderSchema,
  graph,
  organizationSchema,
  websiteSchema,
} from "@/lib/structured-data";
import {
  FOUNDER_NAME,
  GA_MEASUREMENT_ID,
  SITE_LOCATION_SHORT,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Exactly 60 characters, so search engines don't truncate it. The specialty
// and the location lead, because those are what contractors actually search.
const HOME_TITLE = `Construction Accounting York PA | ${SITE_NAME}`;
// 144 characters, inside the ~160 Google renders.
const DESCRIPTION = `Accounting, payroll, prevailing wage, and compliance for small businesses and construction trades in ${SITE_LOCATION_SHORT}. Remote work available nationwide.`;

export const metadata: Metadata = {
  // Resolves relative metadata URLs — including the generated social share
  // images — into the absolute URLs that social platforms require.
  metadataBase: new URL(SITE_URL),
  title: {
    default: HOME_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: DESCRIPTION,
  applicationName: SITE_NAME,
  // `keywords` is deliberately gone: no major engine has used it since 2009.
  authors: [{ name: FOUNDER_NAME }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "en_US",
    url: "/",
    title: HOME_TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    // Renders the generated 1200x630 card at full width.
    card: "summary_large_image",
    title: HOME_TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: { telephone: false },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${sourceSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        {/* One connected graph, declared once. Every page's own schema refers
            back to these nodes by @id instead of redescribing the business.
            It lives inside <body> because a raw <script> is not valid as a
            child of <html>, unlike next/script, which hoists itself. */}
        <JsonLd
          schema={graph(organizationSchema, websiteSchema, founderSchema)}
        />
      </body>
      {/* Analytics loads in production only, so local builds and `npm run dev`
          never report traffic into the live property. */}
      {process.env.NODE_ENV === "production" ? (
        <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />
      ) : null}
    </html>
  );
}
