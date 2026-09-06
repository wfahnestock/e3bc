/**
 * Renders a JSON-LD block. Per the Next.js guidance, this is a plain `script`
 * tag rather than `next/script`, because structured data is read by crawlers
 * from the markup and is not executable code that needs a loading strategy.
 *
 * `<` is escaped so a stray angle bracket in any string can never close the
 * script tag early and inject markup.
 */
export function JsonLd({ schema }: { schema: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema).replace(/</g, "\\u003c"),
      }}
    />
  );
}
