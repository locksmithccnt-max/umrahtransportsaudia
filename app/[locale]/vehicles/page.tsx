import type { Metadata } from 'next';
import { vehicles } from '@/lib/vehicles';
import { whatsappLink } from '@/lib/constants';
import VehicleCard from '@/components/ui/VehicleCard';
import FareTable from '@/components/ui/FareTable';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import JsonLd from '@/components/schema/JsonLd';
import { faqSchema } from '@/lib/schema';
import { generateLocaleAlternates } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Our Fleet — Private Vehicles for Umrah & Hajj Pilgrims',
    description:
      'Choose from 5 vehicles: Toyota Camry (4 seats), Hyundai Staria (7 seats), GMC Yukon XL (7 seats), Toyota Hiace (13 seats), King Long Bus (50 seats). Fares from 200 SAR.',
    alternates: generateLocaleAlternates('/vehicles', locale),
  };
}

const vehicleFaqs = [
  {
    question: 'Which vehicle should I choose for a family of 5?',
    answer:
      'The Hyundai Staria (7 seats, from 200 SAR) or GMC Yukon XL (7 seats, from 250 SAR) comfortably carry 5 passengers with luggage. The Staria has sliding doors for easier boarding; the Yukon XL offers more luggage space.',
  },
  {
    question: 'Can I book more than one vehicle for a large group?',
    answer:
      'Yes. We can arrange a convoy of vehicles for large groups. For 14–50 pilgrims, the Toyota Hiace (13 seats) or King Long Bus (50 seats) is often the most economical choice.',
  },
  {
    question: 'Do vehicles have air conditioning?',
    answer:
      'All vehicles are fully air-conditioned. Saudi temperatures regularly exceed 40°C during Umrah and Hajj seasons, so climate control is standard across our entire fleet.',
  },
  {
    question: 'Are child seats available?',
    answer:
      'Child seats are available on request. Please mention this when booking via WhatsApp and we will arrange one for your journey.',
  },
];

export default async function VehiclesPage({ params }: Props) {
  const { locale } = await params;
  const waHref = whatsappLink('Hello, I need help choosing a vehicle for Umrah transport. Can you advise?');

  return (
    <>
      <JsonLd data={faqSchema(vehicleFaqs)} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[{ name: 'Home', href: '/' }, { name: 'Our Fleet', href: '/vehicles' }]} />
      </div>

      {/* Header */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Our Fleet
          </h1>
          <p className="answer-block">
            Umrah Transport Saudia operates five vehicle types — from a 4-seat Toyota Camry to a
            50-seat King Long coach. All vehicles are privately hired, air-conditioned, and driven by
            licensed Saudi drivers. Fares start from 200 SAR per trip, per vehicle.
          </p>
        </div>
      </section>

      {/* Vehicle cards */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-label="Vehicle list">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {vehicles.map((vehicle) => (
              <VehicleCard key={vehicle.slug} vehicle={vehicle} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="compare-heading">
        <div className="max-w-4xl mx-auto">
          <h2 id="compare-heading" className="section-heading mb-3">Quick Comparison</h2>
          <p className="text-text-secondary text-sm mb-6">All fares per vehicle · Fixed pricing · No hidden fees</p>
          <FareTable />
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="fleet-faq-heading">
        <div className="max-w-3xl mx-auto">
          <h2 id="fleet-faq-heading" className="section-heading mb-8">Fleet FAQ</h2>
          <div className="space-y-4">
            {vehicleFaqs.map((faq) => (
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

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="section-heading mb-4">Not sure which vehicle to choose?</h2>
          <p className="text-text-secondary mb-6">Tell us your group size and we'll recommend the right option and confirm pricing.</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            Ask via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
