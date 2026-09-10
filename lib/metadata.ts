import type { Metadata } from 'next';
import { SITE_URL } from './constants';

const locales = ['en', 'ar', 'ur', 'id'] as const;

function localeHref(locale: string, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return locale === 'en'
    ? `${SITE_URL}${cleanPath}`
    : `${SITE_URL}/${locale}${cleanPath}`;
}

/**
 * Generates canonical + hreflang alternates for a given base path.
 * Pass the locale-agnostic path (e.g. '/vehicles', '/pricing').
 * The canonical is always the English (default) URL.
 */
export function generateAlternates(path: string): NonNullable<Metadata['alternates']> {
  const cleanPath = path === '/' ? '' : path;
  return {
    canonical: `${SITE_URL}${cleanPath || '/'}`,
    languages: Object.fromEntries([
      ...locales.map((loc) => [loc, localeHref(loc, cleanPath || '/')]),
      ['x-default', `${SITE_URL}${cleanPath || '/'}`],
    ]),
  };
}

/**
 * Generates locale-specific canonical (self-referencing) + hreflang alternates.
 * Use inside generateMetadata when you have access to the current locale.
 */
export function generateLocaleAlternates(
  path: string,
  currentLocale: string
): NonNullable<Metadata['alternates']> {
  const cleanPath = path === '/' ? '' : path;
  return {
    canonical: localeHref(currentLocale, cleanPath || '/'),
    languages: Object.fromEntries([
      ...locales.map((loc) => [loc, localeHref(loc, cleanPath || '/')]),
      ['x-default', `${SITE_URL}${cleanPath || '/'}`],
    ]),
  };
}
