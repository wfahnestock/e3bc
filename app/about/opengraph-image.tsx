import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt =
  "About Beth Eppler — founder of Ecubed Business Consulting, York, Pennsylvania";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "About",
    title: "Beth has sat in your chair.",
    subtitle:
      "M.Acc. · Former Controller in the construction trades · QBO Certified · York, PA",
  });
}
