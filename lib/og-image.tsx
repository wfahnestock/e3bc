import { ImageResponse } from "next/og";
import { brandFontOptions } from "@/lib/fonts";

// Social cards are rendered by satori, which doesn't support oklch(), so the
// brand palette is expressed here as the equivalent hex values that Tailwind
// compiles for fallback. Keep in sync with the tokens in app/globals.css.
const COLOR = {
  navy: "#202243",
  navyDeep: "#14152f",
  paper: "#f4f7fb",
  cream: "#eff2f7",
  gold: "#dbb970",
  primary: "#4f46cd",
  mist: "#c2c8d1",
} as const;

/** Standard Open Graph / Twitter card dimensions. */
export const OG_SIZE = { width: 1200, height: 630 };
export const OG_CONTENT_TYPE = "image/png";

type OgImageOptions = {
  /** Small uppercase line above the headline. */
  eyebrow: string;
  /** Main headline — keep under ~60 characters so it doesn't wrap awkwardly. */
  title: string;
  /** Optional supporting line under the headline. */
  subtitle?: string;
};

/**
 * Renders a branded 1200x630 social share card in the site's display font.
 * Falls back to the built-in font if Archivo can't be fetched at build time.
 */
export async function renderOgImage({
  eyebrow,
  title,
  subtitle,
}: OgImageOptions) {
  const fontOptions = await brandFontOptions();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: COLOR.navy,
          padding: "72px 80px",
          fontFamily: "Archivo",
        }}
      >
        {/* Accent rule */}
        <div
          style={{
            display: "flex",
            width: "120px",
            height: "8px",
            background: COLOR.primary,
          }}
        />

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: COLOR.gold,
              marginBottom: "24px",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 68,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: COLOR.cream,
              maxWidth: "900px",
            }}
          >
            {title}
          </div>
          {subtitle ? (
            <div
              style={{
                display: "flex",
                fontSize: 30,
                lineHeight: 1.4,
                color: COLOR.mist,
                marginTop: "24px",
                maxWidth: "840px",
              }}
            >
              {subtitle}
            </div>
          ) : null}
        </div>

        {/* Footer: logo mark + wordmark */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "18px",
            borderTop: `1px solid ${COLOR.navyDeep}`,
            paddingTop: "28px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              background: COLOR.primary,
              color: COLOR.paper,
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            E³
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: COLOR.cream,
            }}
          >
            Ecubed Business Consulting
          </div>
        </div>
      </div>
    ),
    { ...OG_SIZE, ...fontOptions },
  );
}
