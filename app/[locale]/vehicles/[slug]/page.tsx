import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { vehicles, getVehicleBySlug } from '@/lib/vehicles';
import { whatsappLink } from '@/lib/constants';
import { vehicleProductSchema, faqSchema } from '@/lib/schema';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import FareTable from '@/components/ui/FareTable';

type Props = { params: Promise<{ locale: string; slug: string }> };

export async function generateStaticParams() {
  return vehicles.map((v) => ({ slug: v.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) return {};
  return {
    title: `${vehicle.name} — ${vehicle.seats}-Seat ${vehicle.type} · Umrah Transport`,
    description: `Book the ${vehicle.name} for private Umrah and Hajj transport in Makkah and Jeddah. ${vehicle.seats} seats. From ${vehicle.priceFrom} SAR per trip.`,
  };
}

export default async function VehicleDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const vehicle = getVehicleBySlug(slug);
  if (!vehicle) notFound();

  const waMessage = `Hello, I would like to book the ${vehicle.name} (${vehicle.seats} seats) for Umrah transport. Please send availability and pricing.`;
  const waHref = whatsappLink(waMessage);

  const vehicleFaqs = [
    {
      question: `How many people does the ${vehicle.name} seat?`,
      answer: `The ${vehicle.name} seats ${vehicle.seats} passengers and can accommodate ${vehicle.luggage}. It is ideal for ${vehicle.idealFor.join(', ')}.`,
    },
    {
      question: `What is the starting fare for the ${vehicle.name}?`,
      answer: `The ${vehicle.name} starts from ${vehicle.priceFrom} SAR per trip. This is a fixed per-vehicle fare — not per person. Final pricing is confirmed based on your exact route when you book.`,
    },
    {
      question: `Is the ${vehicle.name} air-conditioned?`,
      answer: `Yes. All vehicles in our fleet, including the ${vehicle.name}, are fully air-conditioned — essential for travel in Saudi Arabia's climate.`,
    },
    {
      question: `Can I book the ${vehicle.name} for multiple days?`,
      answer: `Yes. Multi-day bookings and full Hajj itinerary coverage (Mina, Arafat, Muzdalifah) are available for the ${vehicle.name}. Contact us via WhatsApp for a custom quote.`,
    },
  ];

  return (
    <>
      <JsonLd data={vehicleProductSchema(vehicle)} />
      <JsonLd data={faqSchema(vehicleFaqs)} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav
          items={[
            { name: 'Home', href: '/' },
            { name: 'Our Fleet', href: '/vehicles' },
            { name: vehicle.name, href: `/vehicles/${vehicle.slug}` },
          ]}
        />
      </div>

      {/* Hero */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs bg-bg-elevated border border-border-subtle text-text-secondary rounded-full px-3 py-1">{vehicle.type}</span>
            <span className="text-xs bg-bg-elevated border border-border-subtle text-text-secondary rounded-full px-3 py-1">{vehicle.seats} seats</span>
            <span className="text-xs bg-bg-elevated border border-border-subtle text-text-secondary rounded-full px-3 py-1">{vehicle.luggage}</span>
          </div>

          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            {vehicle.name}
          </h1>

          <p className="answer-block">
            {vehicle.shortDescription} Book instantly via WhatsApp — licensed driver, fixed fare, available 24/7.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-base px-8 py-4"
            >
              Book {vehicle.name} via WhatsApp
            </a>
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <span className="text-gold font-semibold text-xl">From {vehicle.priceFrom} SAR</span>
              <span>per trip</span>
            </div>
          </div>
        </div>
      </section>

      {/* Image placeholder */}
      <section className="bg-bg-surface py-1">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="aspect-video bg-bg-elevated rounded-xl flex items-center justify-center text-text-secondary">
            <div className="text-center">
              <div className="text-6xl mb-3">🚗</div>
              <p className="text-sm">{vehicle.name} — photo coming soon</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Description */}
          <div>
            <h2 className="text-xl font-display font-semibold text-text-primary mb-4">About this Vehicle</h2>
            <p className="text-text-secondary leading-relaxed">{vehicle.description}</p>
          </div>

          {/* Specs */}
          <div className="space-y-5">
            {/* Ideal for */}
            <div>
              <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-3">Ideal For</h3>
              <ul className="space-y-2">
                {vehicle.idealFor.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-3">Included</h3>
              <ul className="space-y-2">
                {vehicle.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-gold mt-0.5">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pricing */}
            <div className="bg-bg-elevated border border-border-subtle rounded-xl p-4">
              <div className="text-xs text-text-secondary uppercase tracking-wider mb-2">Starting Fare</div>
              <div className="text-3xl font-display font-light text-gold">{vehicle.priceFrom} SAR</div>
              <div className="text-text-secondary text-sm mt-1">Per vehicle · Per trip · Fixed price</div>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-sm px-5 py-2.5 mt-4 w-full justify-center"
              >
                Get Exact Fare & Book
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="vehicle-faq">
        <div className="max-w-3xl mx-auto">
          <h2 id="vehicle-faq" className="section-heading mb-8">About the {vehicle.name}</h2>
          <div className="space-y-4">
            {vehicleFaqs.map((faq) => (
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

      {/* Other vehicles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface" aria-labelledby="other-vehicles">
        <div className="max-w-4xl mx-auto">
          <h2 id="other-vehicles" className="section-heading mb-3">Compare All Vehicles</h2>
          <p className="text-text-secondary text-sm mb-6">All fares per vehicle · Fixed pricing</p>
          <FareTable />
        </div>
      </section>
    </>
  );
}
