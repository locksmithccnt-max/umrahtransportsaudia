import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ar', 'ur', 'id'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
});
