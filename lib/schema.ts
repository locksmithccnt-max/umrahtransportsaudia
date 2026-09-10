import { Vehicle } from './vehicles';

const SITE_URL = 'https://umrahtransportsaudia.com';
const PHONE = '+966569138258';
const EMAIL = 'info@umrahtransportsaudia.com';

export const businessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'TaxiService'],
  name: 'Umrah Transport Saudia',
  description:
    'Private taxi, SUV, van and bus transport for Umrah and Hajj pilgrims across Makkah, Jeddah and Madinah. Fixed fares from 200 SAR.',
  url: SITE_URL,
  telephone: PHONE,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Al Hedaya Road',
    addressLocality: 'Makkah',
    postalCode: '24242',
    addressCountry: 'SA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.3891,
    longitude: 39.8579,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    opens: '00:00',
    closes: '23:59',
  },
  currenciesAccepted: 'SAR',
  paymentAccepted: 'Cash, Bank Transfer',
  areaServed: [
    { '@type': 'City', name: 'Makkah' },
    { '@type': 'City', name: 'Jeddah' },
    { '@type': 'City', name: 'Madinah' },
    { '@type': 'City', name: 'Taif' },
  ],
  priceRange: '200–2000 SAR',
  sameAs: [],
};

export function vehicleProductSchema(vehicle: Vehicle, locale: string = 'en') {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: vehicle.name,
    description: vehicle.description,
    category: 'Pilgrim Transport',
    image: `${SITE_URL}${vehicle.image}`,
    offers: {
      '@type': 'Offer',
      priceCurrency: 'SAR',
      price: vehicle.priceFrom,
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: vehicle.priceFrom,
        priceCurrency: 'SAR',
        unitText: 'per trip',
        description: 'Starting price per trip — final price confirmed on booking',
      },
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'LocalBusiness',
        name: 'Umrah Transport Saudia',
        telephone: PHONE,
        url: SITE_URL,
      },
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

export function webSiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Umrah Transport Saudia',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}
