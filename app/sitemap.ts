import type { MetadataRoute } from 'next';
import { vehicles } from '@/lib/vehicles';

const BASE_URL = 'https://umrahtransportsaudia.com';
const locales = ['en', 'ar', 'ur', 'id'] as const;

function localeUrl(locale: string, path: string): string {
  const prefix = locale === 'en' ? '' : `/${locale}`;
  return `${BASE_URL}${prefix}${path}`;
}

const staticRoutes: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
}> = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/vehicles', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/makkah-airport-transfer', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/jeddah-airport-to-makkah-taxi', priority: 0.95, changeFrequency: 'monthly' },
  { path: '/madinah-transport', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/hajj-transport-services', priority: 0.85, changeFrequency: 'monthly' },
  { path: '/group-transport', priority: 0.80, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.75, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.60, changeFrequency: 'yearly' },
  { path: '/contact', priority: 0.65, changeFrequency: 'yearly' },
  { path: '/blog', priority: 0.55, changeFrequency: 'weekly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const route of staticRoutes) {
    for (const locale of locales) {
      entries.push({
        url: localeUrl(locale, route.path),
        lastModified: now,
        changeFrequency: route.changeFrequency,
        priority: route.priority,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, localeUrl(loc, route.path)])
          ),
        },
      });
    }
  }

  for (const vehicle of vehicles) {
    const path = `/vehicles/${vehicle.slug}`;
    for (const locale of locales) {
      entries.push({
        url: localeUrl(locale, path),
        lastModified: now,
        changeFrequency: 'monthly',
        priority: 0.85,
        alternates: {
          languages: Object.fromEntries(
            locales.map((loc) => [loc, localeUrl(loc, path)])
          ),
        },
      });
    }
  }

  return entries;
}
