import { renderOgImage, OG_SIZE, OG_CONTENT_TYPE } from "@/lib/og-image";

export const alt =
  "Ecubed Business Consulting — controller-level accounting for subcontractors";
export const size = OG_SIZE;
export const contentType = OG_CONTENT_TYPE;

export default function Image() {
  return renderOgImage({
    eyebrow: "Consulting & accounting for the construction trades",
    title: "Controller-level accounting for subcontractors",
    subtitle: "Payroll, prevailing wage, job costing, compliance.",
  });
}
