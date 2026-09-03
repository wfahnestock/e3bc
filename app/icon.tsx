import { ImageResponse } from "next/og";
import { brandFontOptions } from "@/lib/fonts";

// Browser tab / bookmark icon: the E³ mark from the site header.
// Colors are the hex equivalents of the oklch brand tokens (satori, which
// renders this, doesn't support oklch()).
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  const fontOptions = await brandFontOptions();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#4f46cd",
          color: "#f4f7fb",
          fontFamily: "Archivo",
          // Inset from the edges like the header logo mark, while staying
          // large enough to read at the 16px browsers actually draw.
          fontSize: 22,
          fontWeight: 700,
          letterSpacing: "-0.04em",
          lineHeight: 1,
        }}
      >
        E³
      </div>
    ),
    { ...size, ...fontOptions },
  );
}
