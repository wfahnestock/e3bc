import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt =
  "Services — accounting, HR, and compliance for the construction trades";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Services",
    title: "Three services. One goal: a business that runs clean.",
    subtitle: "Every engagement fixed-scope and priced up front.",
  });
}
