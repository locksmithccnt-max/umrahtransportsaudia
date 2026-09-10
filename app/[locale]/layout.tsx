import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { routing } from '@/i18n/routing';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import StickyBar from '@/components/layout/StickyBar';
import JsonLd from '@/components/schema/JsonLd';
import { businessSchema, webSiteSchema } from '@/lib/schema';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const metadata: Metadata = {
  metadataBase: new URL('https://umrahtransportsaudia.com'),
  title: {
    default: 'Umrah Transport Saudia — Private Pilgrim Transport in Makkah',
    template: '%s | Umrah Transport Saudia',
  },
  description:
    'Private taxi, SUV, van and bus hire for Umrah and Hajj pilgrims in Makkah, Jeddah and Madinah. Fixed fares from 200 SAR. Book via WhatsApp.',
  keywords: [
    'Umrah transport',
    'Makkah taxi',
    'Jeddah airport to Makkah',
    'Hajj transport',
    'private transfer Makkah',
    'pilgrim taxi Saudi Arabia',
    'Umrah transport Makkah',
    'Hajj bus Saudi Arabia',
    'airport transfer Jeddah Makkah',
  ],
  authors: [{ name: 'Umrah Transport Saudia' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['ar_SA', 'ur_PK', 'id_ID'],
    url: 'https://umrahtransportsaudia.com',
    siteName: 'Umrah Transport Saudia',
    title: 'Umrah Transport Saudia — Private Pilgrim Transport in Makkah',
    description:
      'Private taxi, SUV, van and bus for Umrah and Hajj pilgrims in Makkah, Jeddah and Madinah. Fixed fares from 200 SAR. Book via WhatsApp.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Umrah Transport Saudia — Private Pilgrim Transport in Makkah',
    description: 'Private taxi, SUV, van and bus for Umrah & Hajj pilgrims. Fixed fares from 200 SAR. Book via WhatsApp.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-snippet': -1, 'max-image-preview': 'large' },
  },
  verification: {
    google: '8WDp6XqSEWcHB6KuSEuCzCwV-6fGfroYg7heDWUNB5o',
  },
  alternates: {
    canonical: 'https://umrahtransportsaudia.com',
    languages: {
      'en': 'https://umrahtransportsaudia.com',
      'ar': 'https://umrahtransportsaudia.com/ar',
      'ur': 'https://umrahtransportsaudia.com/ur',
      'id': 'https://umrahtransportsaudia.com/id',
      'x-default': 'https://umrahtransportsaudia.com',
    },
  },
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'en' | 'ar' | 'ur' | 'id')) {
    notFound();
  }

  const messages = await getMessages();
  const isRTL = locale === 'ar' || locale === 'ur';

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className="has-sticky-bar">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-bg-primary text-text-primary min-h-screen flex flex-col">
        <NextIntlClientProvider messages={messages}>
          <JsonLd data={businessSchema} />
          <JsonLd data={webSiteSchema()} />
          <Header locale={locale} />
          <main className="flex-1">{children}</main>
          <Footer />
          <StickyBar />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
