import type { Metadata } from 'next';
import { whatsappLink } from '@/lib/constants';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import { vehicles } from '@/lib/vehicles';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { generateLocaleAlternates } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Pricing — Private Umrah Transport Fares in Saudi Arabia',
    description:
      'Transparent, fixed fares for private Umrah and Hajj transport in Saudi Arabia. Toyota Camry from 200 SAR, Hiace from 250 SAR, King Long Bus from 300 SAR. Per vehicle, not per person.',
    alternates: generateLocaleAlternates('/pricing', locale),
  };
}

const pricingFaqs = [
  {
    question: 'Are fares per person or per vehicle?',
    answer:
      'All fares listed are per vehicle, not per person. A family of 5 travelling in a Toyota Hiace pays the same as a solo pilgrim in that same vehicle.',
  },
  {
    question: 'What does the starting fare include?',
    answer:
      'The starting fare covers a point-to-point private transfer with a licensed driver and air-conditioning. Luggage is included at no extra charge. Waiting time beyond 15 minutes may incur an additional charge — confirmed at booking.',
  },
  {
    question: 'Are there any hidden fees?',
    answer:
      'No. We do not add airport fees, fuel surcharges, or booking fees. The fare quoted when you book is the fare you pay.',
  },
  {
    question: 'How is the final fare determined?',
    answer:
      'The starting fares shown are minimum fares. Your final fare depends on the exact route distance, any waiting requirements, and multi-stop needs. We confirm the exact fare via WhatsApp before you travel.',
  },
  {
    question: 'Do you offer discounts for multi-day bookings?',
    answer:
      'Yes. Multi-day bookings and repeat customers receive preferential rates. Contact us via WhatsApp to discuss your programme.',
  },
];

export default async function PricingPage({ params }: Props) {
  const { locale } = await params;
  const waHref = whatsappLink('Hello, I would like to get a price for a private Umrah transport booking.');

  return (
    <>
      <JsonLd data={faqSchema(pricingFaqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Pricing', url: '/pricing' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'Pricing', href: '/pricing' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Transparent Pricing
          </h1>
          <p className="answer-block">
            All fares below are fixed starting prices in Saudi Riyals (SAR) per vehicle — not per
            person. Final pricing is confirmed when you book via WhatsApp based on your exact route
            and requirements. No meters, no surge fees, no hidden charges.
          </p>
        </div>
      </section>

      {/* Main pricing table */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto rounded-xl border border-border-subtle">
            <table className="w-full text-sm" aria-label="Full vehicle pricing table">
              <thead>
                <tr className="bg-bg-elevated border-b border-border-subtle">
                  <th scope="col" className="text-start px-5 py-4 text-text-secondary font-medium text-xs uppercase tracking-wider">Vehicle</th>
                  <th scope="col" className="text-center px-5 py-4 text-text-secondary font-medium text-xs uppercase tracking-wider">Type</th>
                  <th scope="col" className="text-center px-5 py-4 text-text-secondary font-medium text-xs uppercase tracking-wider">Seats</th>
                  <th scope="col" className="text-start px-5 py-4 text-text-secondary font-medium text-xs uppercase tracking-wider">Luggage</th>
                  <th scope="col" className="text-end px-5 py-4 text-text-secondary font-medium text-xs uppercase tracking-wider">From (SAR)</th>
                  <th scope="col" className="px-5 py-4 text-text-secondary font-medium text-xs uppercase tracking-wider text-center">Book</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-subtle">
                {vehicles.map((v) => {
                  const waMsg = `Hello, I'd like to book the ${v.name} (${v.seats} seats). Please send availability and pricing.`;
                  return (
                    <tr key={v.slug} className="bg-bg-surface hover:bg-bg-elevated transition-colors">
                      <td className="px-5 py-5">
                        <div className="font-semibold text-text-primary">{v.name}</div>
                        <div className="text-text-secondary text-xs mt-0.5 max-w-xs">{v.shortDescription.split('.')[0]}</div>
                      </td>
                      <td className="px-5 py-5 text-center text-text-secondary">{v.type}</td>
                      <td className="px-5 py-5 text-center">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-bg-elevated text-text-primary text-sm font-medium">{v.seats}</span>
                      </td>
                      <td className="px-5 py-5 text-text-secondary text-xs">{v.luggage}</td>
                      <td className="px-5 py-5 text-end">
                        <span className="text-gold font-bold text-xl">{v.priceFrom}</span>
                        <div className="text-text-secondary text-xs">SAR / trip</div>
                      </td>
                      <td className="px-5 py-5 text-center">
                        <a
                          href={whatsappLink(waMsg)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-whatsapp text-xs px-4 py-2"
                          aria-label={`Book ${v.name}`}
                        >
                          Book
                        </a>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-text-secondary text-sm">
            Prices are starting fares in Saudi Riyals (SAR) per vehicle per trip. Final fare confirmed at booking.
          </p>
        </div>
      </section>

      {/* Pricing notes */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-display font-semibold text-text-primary mb-4">What's Always Included</h2>
            <ul className="space-y-2">
              {[
                'Licensed professional driver',
                'Air-conditioned vehicle',
                'Luggage (no extra charge)',
                'Fixed fare — confirmed before travel',
                'WhatsApp communication with driver',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                  <span className="text-gold mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-display font-semibold text-text-primary mb-4">Payment</h2>
            <div className="space-y-3 text-text-secondary text-sm leading-relaxed">
              <p>Payment is made in Saudi Riyals (SAR) in cash on completion of the journey. Bank transfer is available for advance bookings — details provided at time of booking.</p>
              <p>No deposit is required for standard single-trip bookings. Multi-day programmes may require advance payment — confirmed at booking.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="pricing-faq">
        <div className="max-w-3xl mx-auto">
          <h2 id="pricing-faq" className="section-heading mb-8">Pricing FAQ</h2>
          <div className="space-y-4">
            {pricingFaqs.map((faq) => (
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
          <h2 className="section-heading mb-4">Get an Exact Quote</h2>
          <p className="text-text-secondary mb-6">Tell us your route, date, and group size for a confirmed fare.</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            WhatsApp for a Quote
          </a>
        </div>
      </section>
    </>
  );
}
