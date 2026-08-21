/**
 * Renders a JSON-LD structured data block (schema.org) for the current page.
 * Usage: <JsonLd data={{ "@context": "https://schema.org", "@type": "...", ... }} />
 */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
