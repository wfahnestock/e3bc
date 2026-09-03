/**
 * Loads the brand display font (Archivo) for use in generated images.
 *
 * Why this exists: `next/og` bundles only Geist Regular. Passing
 * `fontWeight: 700` without supplying a bold face is silently ignored —
 * satori cannot synthesise bold — so generated icons and social cards
 * render at regular weight unless a real bold font is provided here.
 *
 * The font is fetched from Google Fonts at build time. The site already
 * depends on Google Fonts during the build via `next/font/google`, so this
 * introduces no new class of build dependency. If the fetch fails we warn
 * loudly and fall back to the built-in font rather than failing the build.
 */

const FONTS_CSS_ENDPOINT =
  process.env.GOOGLE_FONTS_CSS_URL ?? "https://fonts.googleapis.com/css2";

export type LoadedFont = {
  name: string;
  data: ArrayBuffer;
  weight: 400 | 700;
  style: "normal";
};

// One fetch per weight per build, shared across all generated images.
const cache = new Map<number, Promise<ArrayBuffer | null>>();

async function fetchArchivo(weight: 400 | 700): Promise<ArrayBuffer | null> {
  const url = `${FONTS_CSS_ENDPOINT}?family=Archivo:wght@${weight}`;
  try {
    // No User-Agent header: Google then serves TrueType rather than woff2,
    // which is the format satori can actually parse.
    const cssRes = await fetch(url);
    if (!cssRes.ok) throw new Error(`CSS request returned ${cssRes.status}`);
    const css = await cssRes.text();

    const match = css.match(
      /src:\s*url\((.+?)\)\s*format\('(?:truetype|opentype)'\)/,
    );
    if (!match) throw new Error("no TrueType/OpenType source in CSS response");

    const fontRes = await fetch(match[1]);
    if (!fontRes.ok) throw new Error(`font request returned ${fontRes.status}`);
    return await fontRes.arrayBuffer();
  } catch (error) {
    console.warn(
      `[og] Could not load Archivo ${weight} — generated images will fall back to the default font. Cause:`,
      error,
    );
    return null;
  }
}

async function loadBrandFonts(): Promise<LoadedFont[]> {
  const weights: (400 | 700)[] = [400, 700];

  const results = await Promise.all(
    weights.map(async (weight) => {
      if (!cache.has(weight)) cache.set(weight, fetchArchivo(weight));
      const data = await cache.get(weight)!;
      return data
        ? ({ name: "Archivo", data, weight, style: "normal" } as LoadedFont)
        : null;
    }),
  );

  return results.filter((font): font is LoadedFont => font !== null);
}

/**
 * Font options to spread into an `ImageResponse` config.
 *
 * Returns `{}` — not `{ fonts: [] }` — when the fonts are unavailable.
 * This distinction matters: an empty `fonts` array *overrides* the bundled
 * default, and satori then throws "No fonts are loaded", failing the build.
 * Omitting the key lets it fall back to the built-in font instead.
 */
export async function brandFontOptions(): Promise<{ fonts?: LoadedFont[] }> {
  const fonts = await loadBrandFonts();
  return fonts.length > 0 ? { fonts } : {};
}
