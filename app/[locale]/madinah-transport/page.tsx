import type { Metadata } from 'next';
import { whatsappLink, PHONE_NUMBER } from '@/lib/constants';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import FareTable from '@/components/ui/FareTable';

export const metadata: Metadata = {
  title: 'Madinah Transport — Private Transfer Makkah to Madinah & City Transfers',
  description:
    'Private transport between Makkah and Madinah, and city transfers in Madinah including Masjid an-Nabawi. Fixed fares, licensed drivers. Book via WhatsApp.',
};

type Props = { params: Promise<{ locale: string }> };

const faqs = [
  {
    question: 'How far is Makkah from Madinah?',
    answer:
      'Makkah and Madinah are approximately 450 km apart by road. The journey typically takes 4.5–5.5 hours by private car, using the main highway.',
  },
  {
    question: 'Can you take us to the Prophet\'s Mosque in Madinah?',
    answer:
      'Yes. Transfers to and from Masjid an-Nabawi (the Prophet\'s Mosque) and the surrounding hotel areas in Madinah are among our most requested city transfers.',
  },
  {
    question: 'Do you offer city transfers within Madinah?',
    answer:
      'Yes. We offer city transfers within Madinah including the Prophet\'s Mosque, Quba Mosque, Masjid al-Qiblatayn, the date market, and other sites of significance for pilgrims.',
  },
  {
    question: 'Can I book a Makkah–Madinah–Jeddah multi-stop transfer?',
    answer:
      'Yes. Multi-leg itineraries covering Jeddah Airport, Makkah, and Madinah are available. Contact us via WhatsApp with your full itinerary for a combined quote.',
  },
];

export default async function MadinahTransportPage({ params }: Props) {
  const { locale } = await params;
  const waMsg = 'Hello, I need private transport between Makkah and Madinah. Can you help with pricing and availability?';
  const waHref = whatsappLink(waMsg);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Madinah Transport', url: '/madinah-transport' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'Madinah Transport', href: '/madinah-transport' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Madinah Transport
          </h1>
          <p className="answer-block">
            Umrah Transport Saudia provides private transfer between Makkah and Madinah, and city
            transfers within Madinah including Masjid an-Nabawi. Fixed fares, licensed drivers,
            available 24/7. Book via WhatsApp for immediate confirmation.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
              Book Madinah Transfer
            </a>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="btn-outline text-base px-8 py-4">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="madinah-routes">
        <div className="max-w-4xl mx-auto">
          <h2 id="madinah-routes" className="section-heading mb-8">Madinah Routes We Cover</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { route: 'Makkah → Madinah', detail: 'Intercity private transfer, approx. 4.5–5.5 hours' },
              { route: 'Jeddah Airport → Madinah', detail: 'Direct airport to Madinah hotel transfer' },
              { route: 'Madinah City Transfers', detail: 'Prophet\'s Mosque, Quba, date market, Uhud, and more' },
              { route: 'Madinah → Makkah', detail: 'Return intercity transfer for post-Madinah Umrah' },
              { route: 'Madinah → Jeddah Airport', detail: 'Departure transfer from Madinah to JED' },
              { route: 'Multi-day Madinah Programme', detail: 'Full-day or multi-day hire for group itineraries' },
            ].map((item) => (
              <div key={item.route} className="card p-5">
                <div className="text-text-primary font-semibold text-sm mb-1">{item.route}</div>
                <div className="text-text-secondary text-xs">{item.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="madinah-vehicles">
        <div className="max-w-4xl mx-auto">
          <h2 id="madinah-vehicles" className="section-heading mb-3">Vehicle Options</h2>
          <p className="text-text-secondary text-sm mb-6">All fares per vehicle · Fixed pricing · Long-distance comfort</p>
          <FareTable />
        </div>
      </section>

      {/* Madinah sites */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-6">Sites We Serve in Madinah</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              'Masjid an-Nabawi (Prophet\'s Mosque)',
              'Masjid Quba',
              'Masjid al-Qiblatayn',
              'Masjid al-Jumu\'ah',
              'Al-Baqi\' Cemetery',
              'Uhud Mountain',
              'Al-Madinah Date Market',
              'Madinah Old Town',
              'Hotels in central Madinah',
            ].map((site) => (
              <div key={site} className="bg-bg-primary border border-border-subtle rounded-lg px-3 py-2.5 text-text-secondary text-xs flex items-start gap-2">
                <span className="text-gold shrink-0">·</span>
                {site}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="madinah-faq">
        <div className="max-w-3xl mx-auto">
          <h2 id="madinah-faq" className="section-heading mb-8">Madinah Transport FAQ</h2>
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
          <h2 className="section-heading mb-4">Book Your Madinah Transfer</h2>
          <p className="text-text-secondary mb-6">Tell us your route, date, and group size. We confirm your vehicle and fare promptly.</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            Book via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
