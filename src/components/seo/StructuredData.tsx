import { buildStructuredDataGraph } from '../../lib/structuredData';

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(buildStructuredDataGraph()) }}
    />
  );
}
