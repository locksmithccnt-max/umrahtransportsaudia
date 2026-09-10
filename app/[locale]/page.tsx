import type { Metadata } from 'next';
import Link from 'next/link';
import { vehicles } from '@/lib/vehicles';
import { whatsappLink, BOOKING_WA_MESSAGE, PHONE_NUMBER } from '@/lib/constants';
import VehicleCard from '@/components/ui/VehicleCard';
import FareTable from '@/components/ui/FareTable';
import JsonLd from '@/components/schema/JsonLd';
import { faqSchema } from '@/lib/schema';
import { generateLocaleAlternates } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Private Umrah & Hajj Transport — Makkah, Jeddah, Madinah',
    description:
      'Private taxi, SUV, van and bus for Umrah and Hajj pilgrims. Fares from 200 SAR. Jeddah Airport to Makkah transfers. Available 24/7. Book via WhatsApp.',
    alternates: generateLocaleAlternates('/', locale),
  };
}

const homeFaqs = [
  {
    question: 'How do I book a vehicle for Umrah transport?',
    answer:
      'Send a WhatsApp message to +966 56 913 8258 with your pickup location, destination, date, time, and number of passengers. We confirm availability and fare within minutes.',
  },
  {
    question: 'Are fares per person or per vehicle?',
    answer:
      'All fares are per vehicle, not per person. A family of 6 travelling in a GMC Yukon XL pays the same as a solo pilgrim in the same vehicle.',
  },
  {
    question: 'Do you operate 24 hours a day?',
    answer:
      'Yes. We operate 24 hours a day, 7 days a week — including Fajr departures and late-night airport arrivals from King Abdulaziz International Airport, Jeddah.',
  },
  {
    question: 'Can you transfer me from Jeddah Airport to Makkah?',
    answer:
      'Yes. Jeddah Airport to Makkah is our most-booked route. Share your flight number and we track it for delays — no extra charge.',
  },
  {
    question: 'Which languages do your drivers speak?',
    answer:
      'Our team communicates in English, Arabic, Urdu, and can assist Malay and Indonesian-speaking pilgrims. WhatsApp is our primary booking channel for all nationalities.',
  },
];

const trustPoints = [
  {
    icon: '🔒',
    title: 'Fixed Pricing',
    desc: 'The fare you see is the fare you pay. No meters, no surge pricing, no hidden extras.',
  },
  {
    icon: '🕐',
    title: 'Available 24/7',
    desc: 'We operate around the clock — early Fajr runs, late-night airport pickups, Hajj season included.',
  },
  {
    icon: '✅',
    title: 'Licensed Drivers',
    desc: 'All drivers hold valid Saudi transport licences and know every Umrah and Hajj route.',
  },
  {
    icon: '🚌',
    title: 'Every Group Size',
    desc: 'One pilgrim or fifty — sedan, SUV, van, or coach, we have the right vehicle.',
  },
];

const popularRoutes = [
  { from: 'Jeddah Airport (JED)', to: 'Makkah City', note: 'Most popular — flight tracking included', href: '/jeddah-airport-to-makkah-taxi' },
  { from: 'Makkah', to: 'Madinah', note: 'Intercity pilgrimage transfer', href: '/madinah-transport' },
  { from: 'Makkah City', to: 'Mina / Arafat / Muzdalifah', note: 'Hajj itinerary coverage', href: '/hajj-transport-services' },
  { from: 'Makkah', to: 'Taif', note: 'Day trip or extended stay', href: '/contact' },
];

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  const waHref = whatsappLink(BOOKING_WA_MESSAGE);

  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      {/* ── Hero ─────────────────────────────────────────── */}
      <section className="relative bg-bg-primary pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Subtle gold gradient orb */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gold opacity-[0.04] rounded-full blur-3xl pointer-events-none"
        />

        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-bg-elevated border border-border-subtle rounded-full px-4 py-1.5 mb-6 text-xs text-text-secondary">
            <span className="w-1.5 h-1.5 rounded-full bg-success inline-block" />
            Available 24/7 · Fixed Fares · WhatsApp Booking
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-light text-text-primary leading-tight mb-6">
            Private Transport for<br />
            <span className="text-gold">Umrah & Hajj</span> Pilgrims
          </h1>

          <p className="answer-block text-start max-w-2xl mx-auto mb-8">
            Umrah Transport Saudia provides private taxi, SUV, van, and bus hire for Umrah and Hajj
            pilgrims across Makkah, Madinah, and Jeddah. Fares start from 200 SAR. Book instantly
            via WhatsApp — fixed pricing, no hidden fees, available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
              <WhatsAppIcon />
              Book via WhatsApp
            </a>
            <Link href={`/${locale === 'en' ? '' : locale}vehicles`} className="btn-outline text-base px-8 py-4 no-underline">
              View Our Fleet
            </Link>
          </div>

          <p className="mt-6 text-text-secondary text-sm">
            Makkah &nbsp;·&nbsp; Jeddah Airport &nbsp;·&nbsp; Madinah &nbsp;·&nbsp; Taif
          </p>
        </div>
      </section>

      {/* ── Fleet overview ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="fleet-heading">
        <div className="max-w-6xl mx-auto">
          <div className="mb-10">
            <h2 id="fleet-heading" className="section-heading">Our Fleet</h2>
            <p className="section-subheading">Five vehicles for every group size and budget — all privately hired, air-conditioned, fixed-price.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} locale={locale} />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href={`/${locale === 'en' ? '' : locale}vehicles`} className="btn-outline no-underline">
              View All Vehicles & Details
            </Link>
          </div>
        </div>
      </section>

      {/* ── Fare table ───────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="pricing-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h2 id="pricing-heading" className="section-heading">Transparent Pricing</h2>
            <p className="section-subheading">Fixed starting fares per vehicle — confirmed when you book.</p>
          </div>
          <FareTable />
          <p className="mt-4 text-text-secondary text-sm">
            All fares are per vehicle, not per person. Final price confirmed at booking based on your exact route.{' '}
            <Link href="/pricing" className="text-gold hover:text-gold-hover no-underline">Full pricing details →</Link>
          </p>
        </div>
      </section>

      {/* ── Popular routes ────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="routes-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 id="routes-heading" className="section-heading">Popular Routes</h2>
            <p className="section-subheading">Fixed fares on every route — no surprises on arrival.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {popularRoutes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                className="card p-5 no-underline group block"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-gold">
                    <RouteIcon />
                  </div>
                  <div>
                    <div className="text-text-primary font-medium text-sm">
                      {route.from}
                      <span className="text-text-secondary mx-2">→</span>
                      {route.to}
                    </div>
                    <div className="text-text-secondary text-xs mt-1">{route.note}</div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Trust signals ─────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="why-heading">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10 text-center">
            <h2 id="why-heading" className="section-heading">Why Pilgrims Choose Us</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {trustPoints.map((point) => (
              <div key={point.title} className="bg-bg-surface border border-border-subtle rounded-xl p-6">
                <div className="text-2xl mb-3">{point.icon}</div>
                <h3 className="text-text-primary font-semibold mb-2">{point.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{point.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="faq-heading">
        <div className="max-w-3xl mx-auto">
          <div className="mb-10">
            <h2 id="faq-heading" className="section-heading">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {homeFaqs.map((faq) => (
              <details
                key={faq.question}
                className="bg-bg-primary border border-border-subtle rounded-xl group"
              >
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-text-primary font-medium text-sm">
                  {faq.question}
                  <span className="text-gold text-lg leading-none shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed border-t border-border-subtle pt-4 mt-0">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/faq" className="text-gold hover:text-gold-hover text-sm no-underline">
              See all FAQs →
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA banner ────────────────────────────────────── */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="section-heading mb-4">Ready to Book Your Transfer?</h2>
          <p className="text-text-secondary mb-8">
            Message us on WhatsApp — we respond within minutes, day or night.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
              <WhatsAppIcon />
              Book via WhatsApp
            </a>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="btn-outline text-base px-8 py-4">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function RouteIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 8 16 12 12 16" />
      <line x1="8" y1="12" x2="16" y2="12" />
    </svg>
  );
}
