import { ImageResponse } from "next/og";
import { brandFontOptions } from "@/lib/fonts";

// iOS home-screen icon. Apple applies its own rounded-corner mask, so the
// mark sits centered with room around it to avoid corner clipping.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          fontSize: 104,
          fontWeight: 700,
          letterSpacing: "-0.02em",
          lineHeight: 1,
        }}
      >
        E³
      </div>
    ),
    { ...size, ...fontOptions },
  );
}
