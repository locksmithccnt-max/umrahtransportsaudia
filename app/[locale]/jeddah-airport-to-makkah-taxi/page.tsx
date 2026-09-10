import type { Metadata } from 'next';
import { whatsappLink, PHONE_NUMBER } from '@/lib/constants';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import FareTable from '@/components/ui/FareTable';
import { generateLocaleAlternates } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Jeddah Airport to Makkah Taxi — Private Transfer from JED to Makkah',
    description:
      'Private taxi from Jeddah Airport (King Abdulaziz International) to Makkah hotels. Fixed fares from 200 SAR. 24/7 service, flight tracking, Muslim drivers. Book via WhatsApp.',
    alternates: generateLocaleAlternates('/jeddah-airport-to-makkah-taxi', locale),
  };
}

const faqs = [
  {
    question: 'How much does a taxi from Jeddah Airport to Makkah cost?',
    answer:
      'A private taxi from Jeddah Airport (JED) to Makkah starts from 200 SAR for a 4-seat sedan. Larger vehicles start from 200–300 SAR. All fares are per vehicle, not per person, and are fixed — no meters.',
  },
  {
    question: 'How long does the journey from Jeddah Airport to Makkah take?',
    answer:
      'The journey typically takes 60–90 minutes. During peak Umrah season or Hajj, allow up to 2 hours due to traffic on the Haramain Expressway.',
  },
  {
    question: 'Can non-Muslims take a taxi to Makkah?',
    answer:
      'Non-Muslims are not permitted to enter Makkah city limits. All Umrah Transport Saudia drivers are Muslim and fully authorised to enter the Haram zone.',
  },
  {
    question: 'Is there a shared taxi option?',
    answer:
      'We operate private hire vehicles only — you do not share with strangers. Your vehicle, your schedule.',
  },
  {
    question: 'What if my flight is delayed?',
    answer:
      'We track your flight in real time using your flight number. If your flight is delayed, your driver adjusts arrival time accordingly at no extra charge.',
  },
];

export default async function JeddahToMakkahPage({ params }: Props) {
  const { locale } = await params;
  const waMsg = 'Hello, I need a private taxi from Jeddah Airport to Makkah. Can you send me the fare and availability?';
  const waHref = whatsappLink(waMsg);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Jeddah Airport to Makkah Taxi', url: '/jeddah-airport-to-makkah-taxi' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'Jeddah Airport to Makkah Taxi', href: '/jeddah-airport-to-makkah-taxi' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Jeddah Airport to Makkah Taxi
          </h1>
          <p className="answer-block">
            Private taxi from King Abdulaziz International Airport (JED) to Makkah, operated by Umrah
            Transport Saudia. Fares start from 200 SAR per vehicle. All drivers are Muslim and
            authorised to enter Makkah. Flight tracking included. Book via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
              Book Jeddah–Makkah Transfer
            </a>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="btn-outline text-base px-8 py-4">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Key facts */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { value: '200 SAR', label: 'Starting fare' },
              { value: '60–90 min', label: 'Journey time' },
              { value: '~80 km', label: 'Distance' },
              { value: '24/7', label: 'Availability' },
            ].map((stat) => (
              <div key={stat.label} className="bg-bg-primary border border-border-subtle rounded-xl p-5 text-center">
                <div className="text-2xl font-display font-semibold text-gold mb-1">{stat.value}</div>
                <div className="text-text-secondary text-xs">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fares */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="fares-jed">
        <div className="max-w-4xl mx-auto">
          <h2 id="fares-jed" className="section-heading mb-3">Vehicle Options & Fares</h2>
          <p className="text-text-secondary text-sm mb-6">Per vehicle · Fixed pricing · No meters</p>
          <FareTable />
        </div>
      </section>

      {/* Route details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-6">The Jeddah–Makkah Route</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4 text-text-secondary text-sm leading-relaxed">
              <p>The route from Jeddah Airport to Makkah follows the Haramain Expressway — a modern, well-maintained highway connecting the airport to the Makkah ring road.</p>
              <p>Distances to key Makkah landmarks from the airport:</p>
              <ul className="space-y-2 mt-2">
                {[
                  'Masjid al-Haram (Grand Mosque): ~88 km',
                  'Abraj Al-Bait (Clock Tower) area: ~87 km',
                  'Aziziyah district: ~82 km',
                  'Mina: ~95 km',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-gold shrink-0">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-text-primary font-semibold mb-4 text-sm uppercase tracking-wider">What's Included</h3>
              <ul className="space-y-2">
                {[
                  'Meet and greet in arrivals hall',
                  'Name board with your name',
                  'Flight delay tracking at no extra charge',
                  'Luggage assistance',
                  'Air-conditioned private vehicle',
                  'Muslim driver authorised for Makkah',
                  'Fixed fare — confirmed before you travel',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="jed-faq">
        <div className="max-w-3xl mx-auto">
          <h2 id="jed-faq" className="section-heading mb-8">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-bg-surface border border-border-subtle rounded-xl">
                <summary className="flex items-center justify-between gap-4 px-5 py-4 cursor-pointer list-none text-text-primary font-medium text-sm">
                  {faq.question}
                  <span className="text-gold text-lg leading-none shrink-0">+</span>
                </summary>
                <div className="px-5 pb-5 text-text-secondary text-sm leading-relaxed border-t border-border-subtle pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="section-heading mb-4">Ready to Book?</h2>
          <p className="text-text-secondary mb-6">Share your flight number, hotel address, and group size. We confirm your driver and fare immediately.</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            Book via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
