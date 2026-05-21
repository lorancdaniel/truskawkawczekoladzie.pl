import { faqItems, serviceOfferings, siteMeta, siteUrl } from '../data/seo';

export function buildStructuredDataGraph() {
  const organizationId = `${siteUrl}/#organization`;
  const websiteId = `${siteUrl}/#website`;
  const businessId = `${siteUrl}/#localbusiness`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': organizationId,
        name: siteMeta.businessName,
        url: siteUrl,
        logo: siteMeta.logoUrl,
        email: siteMeta.email,
        telephone: siteMeta.phone,
        description: siteMeta.description,
        slogan: siteMeta.tagline,
        areaServed: siteMeta.areaServed,
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: siteMeta.phone,
          email: siteMeta.email,
          contactType: 'customer service',
          availableLanguage: ['pl'],
          areaServed: siteMeta.areaServed,
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: siteUrl,
        name: siteMeta.title,
        description: siteMeta.description,
        inLanguage: siteMeta.language,
        publisher: { '@id': organizationId },
      },
      {
        '@type': ['LocalBusiness', 'FoodEstablishment'],
        '@id': businessId,
        name: siteMeta.businessName,
        url: siteUrl,
        image: siteMeta.ogImage,
        logo: siteMeta.logoUrl,
        description: siteMeta.description,
        telephone: siteMeta.phone,
        email: siteMeta.email,
        priceRange: '$$',
        servesCuisine: 'Desery — truskawki w czekoladzie',
        areaServed: {
          '@type': 'Country',
          name: siteMeta.areaServed,
        },
        parentOrganization: { '@id': organizationId },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Pakiety cateringowe deserów eventowych',
          itemListElement: serviceOfferings.map((service, index) => ({
            '@type': 'Offer',
            position: index + 1,
            itemOffered: {
              '@type': 'Service',
              name: service.name,
              description: service.description,
              provider: { '@id': businessId },
              areaServed: siteMeta.areaServed,
            },
            priceSpecification: {
              '@type': 'PriceSpecification',
              priceCurrency: 'PLN',
              minPrice: service.priceFrom,
              maxPrice: service.priceTo,
              unitText: 'za osobę',
            },
          })),
        },
      },
      {
        '@type': 'Service',
        '@id': `${siteUrl}/#catering-service`,
        name: 'Catering deserowy — stoisko z truskawkami w czekoladzie',
        description:
          'Mobilne, interaktywne stoisko deserowe z świeżymi owocami, czekoladą i dodatkami. Pełna obsługa eventowa: transport, montaż, serwis i demontaż.',
        provider: { '@id': businessId },
        areaServed: siteMeta.areaServed,
        serviceType: 'Catering deserowy na eventy',
        offers: serviceOfferings.map((service) => ({
          '@type': 'Offer',
          name: service.name,
          description: service.description,
          priceSpecification: {
            '@type': 'PriceSpecification',
            priceCurrency: 'PLN',
            minPrice: service.priceFrom,
            maxPrice: service.priceTo,
            unitText: 'za osobę',
          },
        })),
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faqItems.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${siteUrl}/#breadcrumb`,
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Strawberry Group — truskawki w czekoladzie',
            item: siteUrl,
          },
        ],
      },
    ],
  };
}
