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
    title: 'Hajj Transport Services — Private Transfers Mina, Arafat, Muzdalifah',
    description:
      'Private Hajj transport in Saudi Arabia. Transfers between Makkah, Mina, Arafat, and Muzdalifah. Coaches and SUVs for groups of all sizes. Book via WhatsApp.',
    alternates: generateLocaleAlternates('/hajj-transport-services', locale),
  };
}

const faqs = [
  {
    question: 'Do you cover Mina, Arafat, and Muzdalifah during Hajj?',
    answer:
      'Yes. We provide private transport between Makkah, Mina, Arafat, and Muzdalifah — the key locations of the Hajj ritual itinerary. Routes must be booked in advance during Hajj season.',
  },
  {
    question: 'Which vehicles are best for Hajj transport?',
    answer:
      'For large Hajj delegations, the King Long 50-seat coach is the most economical per-person option. For smaller family groups, the Toyota Hiace (13 seats) or GMC Yukon XL (7 seats) offer more flexibility.',
  },
  {
    question: 'Do you need to book Hajj transport in advance?',
    answer:
      'Yes — advance booking is strongly recommended for Hajj season. The holy sites experience extreme demand during Hajj and vehicles fill up quickly. Contact us as early as possible.',
  },
  {
    question: 'Can you arrange multi-day Hajj itinerary transport?',
    answer:
      'Yes. We can arrange dedicated vehicles for multi-day Hajj programmes covering the full ritual sequence: Makkah, Mina (8 Dhul Hijjah), Arafat (9 Dhul Hijjah), Muzdalifah (night), back to Mina, then Makkah.',
  },
  {
    question: 'Do you serve institutional Hajj delegations?',
    answer:
      'Yes. We work with travel agencies, mosque groups, and corporate Hajj programmes requiring multiple coaches, coordinator vehicles, and multi-day itinerary management.',
  },
];

export default async function HajjTransportPage({ params }: Props) {
  const { locale } = await params;
  const waMsg = 'Hello, I need private transport for Hajj — including Mina, Arafat, and Muzdalifah routes. Can you provide a quote?';
  const waHref = whatsappLink(waMsg);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Hajj Transport Services', url: '/hajj-transport-services' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'Hajj Transport', href: '/hajj-transport-services' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Hajj Transport Services
          </h1>
          <p className="answer-block">
            Umrah Transport Saudia provides private Hajj transport between Makkah, Mina, Arafat, and
            Muzdalifah. We serve family groups and large delegations with vehicles from 7 to 50 seats.
            Advance booking is essential. Contact us via WhatsApp for itinerary planning and pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
              Book Hajj Transport
            </a>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="btn-outline text-base px-8 py-4">
              {PHONE_NUMBER}
            </a>
          </div>
          <div className="mt-5 inline-flex items-center gap-2 text-xs text-gold bg-gold/10 border border-gold/20 rounded-full px-4 py-2">
            ⚠ Hajj season transport books out early — contact us as soon as possible
          </div>
        </div>
      </section>

      {/* Hajj locations */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-8">Locations We Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { place: 'Makkah (Masjid al-Haram)', desc: 'Hotel pickups, Tawaf scheduling, Haram-area transfers throughout Hajj.' },
              { place: 'Mina', desc: 'Transport to Mina on 8 Dhul Hijjah; Jamarat bridge transfers during the stoning days.' },
              { place: 'Arafat (Mount of Mercy)', desc: 'Critical Day of Arafah transport — the most important day of Hajj. Early booking essential.' },
              { place: 'Muzdalifah', desc: 'Night transport from Arafat to Muzdalifah and return to Mina after Fajr.' },
              { place: 'Jeddah Airport', desc: 'Pre- and post-Hajj airport transfers from and to King Abdulaziz International Airport.' },
              { place: 'Madinah', desc: 'Pre- or post-Hajj Madinah visit — intercity transfer and city site coverage.' },
            ].map((item) => (
              <div key={item.place} className="card p-5">
                <h3 className="text-text-primary font-semibold text-sm mb-2">{item.place}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-3">Vehicles for Hajj Groups</h2>
          <p className="text-text-secondary text-sm mb-6">From family vehicles to 50-seat coaches — all with licensed drivers.</p>
          <FareTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="hajj-faq">
        <div className="max-w-3xl mx-auto">
          <h2 id="hajj-faq" className="section-heading mb-8">Hajj Transport FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <details key={faq.question} className="bg-bg-primary border border-border-subtle rounded-xl">
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

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="section-heading mb-4">Plan Your Hajj Transport</h2>
          <p className="text-text-secondary mb-6">Send us your group size, Hajj programme dates, and required routes. We will build a custom itinerary and quote.</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            Get a Hajj Transport Quote
          </a>
        </div>
      </section>
    </>
  );
}
