import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt = "Book a free consult with Ecubed Business Consulting";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Contact",
    title: "Book your free consult.",
    subtitle:
      "Thirty minutes with Beth. Bring your biggest paperwork headache.",
  });
}
