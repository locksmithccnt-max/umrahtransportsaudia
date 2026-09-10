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
    title: 'Makkah Airport Transfer — Private Taxi from Jeddah Airport to Makkah',
    description:
      'Private airport transfer from Jeddah Airport (JED) to Makkah. Fixed fares, flight tracking, 24/7. Book your Umrah airport taxi via WhatsApp. Fares from 200 SAR.',
    alternates: generateLocaleAlternates('/makkah-airport-transfer', locale),
  };
}

const faqs = [
  {
    question: 'How long is the drive from Jeddah Airport to Makkah?',
    answer:
      'The drive from King Abdulaziz International Airport (JED) to the Makkah city centre typically takes 60–90 minutes depending on traffic and the exact hotel location. During Hajj season, allow additional time.',
  },
  {
    question: 'Do you track our flight for delays?',
    answer:
      'Yes. Share your flight number when booking and we monitor it for delays. Your driver will adjust arrival time accordingly — no waiting charges for delayed flights.',
  },
  {
    question: 'Is there a meet-and-greet service at the airport?',
    answer:
      'Yes. Your driver will meet you at the arrivals hall with a name board. We coordinate the exact meeting point over WhatsApp before your flight lands.',
  },
  {
    question: 'Can I book a return trip (Makkah to Jeddah Airport)?',
    answer:
      'Yes. Return transfers from Makkah back to Jeddah Airport are available. Book both legs together or separately — we accommodate last-minute changes when possible.',
  },
  {
    question: 'Which terminal at Jeddah Airport do you pick up from?',
    answer:
      'King Abdulaziz International Airport has a North Terminal (domestic/international) and the Hajj Terminal (used during Hajj season). Confirm your terminal when booking and we will direct your driver accordingly.',
  },
];

export default async function MakkahAirportTransferPage({ params }: Props) {
  const { locale } = await params;
  const waMsg = 'Hello, I need an airport transfer from Jeddah Airport to Makkah. Can you help with pricing and availability?';
  const waHref = whatsappLink(waMsg);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Makkah Airport Transfer', url: '/makkah-airport-transfer' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'Makkah Airport Transfer', href: '/makkah-airport-transfer' },
        ]} />
      </div>

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Makkah Airport Transfer
          </h1>
          <p className="answer-block">
            Private taxi transfer from Jeddah's King Abdulaziz International Airport (JED) to Makkah,
            operated by Umrah Transport Saudia. Fixed fares from 200 SAR, flight tracking included,
            meet-and-greet in the arrivals hall. Available 24/7 — book via WhatsApp.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
              Book Airport Transfer
            </a>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="btn-outline text-base px-8 py-4">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="how-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="how-heading" className="section-heading mb-8">How Your Airport Transfer Works</h2>
          <ol className="space-y-6">
            {[
              { step: '1', title: 'Book via WhatsApp', desc: 'Send us your flight number, arrival date, hotel address in Makkah, and number of passengers. We confirm fare and driver within minutes.' },
              { step: '2', title: 'We Track Your Flight', desc: 'Your driver monitors your flight\'s real-time status. Delays and early arrivals are handled automatically — no extra charge.' },
              { step: '3', title: 'Meet at Arrivals', desc: 'Your driver meets you in the arrivals hall with a name board. We confirm the exact terminal meeting point over WhatsApp before you land.' },
              { step: '4', title: 'Comfortable Drive to Makkah', desc: 'Air-conditioned, private, direct — no shared shuttles. Pay the fixed fare in cash (SAR) on arrival at your hotel.' },
            ].map((item) => (
              <li key={item.step} className="flex gap-5">
                <div className="shrink-0 w-9 h-9 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold font-semibold text-sm">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-text-primary font-semibold mb-1">{item.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Fare table */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="fares-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="fares-heading" className="section-heading mb-3">Vehicle Options & Fares</h2>
          <p className="text-text-secondary text-sm mb-6">All fares are per vehicle, not per person. Choose based on group size.</p>
          <FareTable />
        </div>
      </section>

      {/* Airport info */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-display font-semibold text-text-primary mb-4">About Jeddah Airport</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p>King Abdulaziz International Airport (IATA: JED) is the primary gateway for international pilgrims arriving in Saudi Arabia for Umrah and Hajj.</p>
              <p>The airport operates a dedicated Hajj Terminal during the Hajj season. International arrivals typically use the main terminal complex.</p>
              <p>Makkah is approximately 80 km from the airport. Non-Muslim drivers are not permitted inside Makkah city limits — all our drivers are Muslim and fully authorised to enter.</p>
            </div>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-text-primary mb-4">Important Notes</h2>
            <ul className="space-y-3">
              {[
                'Share your flight number when booking so we can track it',
                'Our drivers are authorised to enter Makkah (non-Muslim drivers are not)',
                'Luggage is included — no extra charge for bags',
                'Payment in SAR cash on completion of journey',
                'Hajj season routes require advance booking — contact us early',
              ].map((note) => (
                <li key={note} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-gold mt-0.5 shrink-0">✓</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="transfer-faq">
        <div className="max-w-3xl mx-auto">
          <h2 id="transfer-faq" className="section-heading mb-8">Airport Transfer FAQ</h2>
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

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="section-heading mb-4">Book Your Airport Transfer Now</h2>
          <p className="text-text-secondary mb-6">Share your flight details on WhatsApp and we will confirm your driver and fare within minutes.</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            Book via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
