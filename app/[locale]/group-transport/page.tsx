import type { Metadata } from 'next';
import { whatsappLink, PHONE_NUMBER } from '@/lib/constants';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import FareTable from '@/components/ui/FareTable';

export const metadata: Metadata = {
  title: 'Group Transport for Umrah & Hajj — Vans & Coaches for Pilgrim Groups',
  description:
    'Group transport for Umrah and Hajj delegations in Saudi Arabia. 13-seat vans and 50-seat coaches. Fixed fares, licensed drivers, multi-day programmes. Book via WhatsApp.',
};

type Props = { params: Promise<{ locale: string }> };

const faqs = [
  {
    question: 'What is the largest vehicle you offer for groups?',
    answer:
      'Our largest vehicle is the King Long 50-seat coach, ideal for large mosque groups, tour agency packages, and institutional Hajj delegations. For mid-size groups, the Toyota Hiace (13 seats) is available.',
  },
  {
    question: 'Can you arrange multiple vehicles for a large group?',
    answer:
      'Yes. We coordinate convoys of multiple vehicles — combining Hiace vans, Staria MPVs, and King Long coaches — to accommodate any group size with consistent pickup and coordination.',
  },
  {
    question: 'Do you offer multi-day group transport programmes?',
    answer:
      'Yes. We provide dedicated vehicles with drivers for multi-day Umrah programmes, Hajj itineraries, and group tours covering Makkah, Madinah, Jeddah, and Taif.',
  },
  {
    question: 'Can travel agencies book on behalf of clients?',
    answer:
      'Yes. We regularly work with travel agencies and tour operators providing pilgrim packages. Contact us via WhatsApp to discuss wholesale or bulk booking arrangements.',
  },
];

export default async function GroupTransportPage({ params }: Props) {
  const { locale } = await params;
  const waMsg = 'Hello, I need group transport for Umrah. Our group has [X] people. Can you advise on vehicles and pricing?';
  const waHref = whatsappLink(waMsg);

  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Group Transport', url: '/group-transport' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'Group Transport', href: '/group-transport' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Group Transport for Umrah & Hajj
          </h1>
          <p className="answer-block">
            Umrah Transport Saudia provides private group transport for Umrah and Hajj delegations of
            all sizes — from a 7-seat MPV for families to a 50-seat King Long coach for institutional
            groups. Fixed fares, licensed drivers, multi-day programmes available.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-8">
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
              Get a Group Quote
            </a>
            <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="btn-outline text-base px-8 py-4">
              {PHONE_NUMBER}
            </a>
          </div>
        </div>
      </section>

      {/* Group size guide */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-8">Which Vehicle for Your Group?</h2>
          <div className="space-y-4">
            {[
              { range: '1–4 people', vehicle: 'Toyota Camry', from: 200, note: 'Sedan — ideal for small family or individual pilgrims' },
              { range: '5–7 people', vehicle: 'Hyundai Staria or GMC Yukon XL', from: 200, note: 'MPV or SUV — family groups with luggage' },
              { range: '8–13 people', vehicle: 'Toyota Hiace', from: 250, note: 'Minibus — extended family or small group delegation' },
              { range: '14–50 people', vehicle: 'King Long Bus', from: 300, note: 'Full-size coach — mosque groups, travel agency packages' },
              { range: '50+ people', vehicle: 'Multiple vehicles', from: null, note: 'Contact us for a convoy arrangement and group pricing' },
            ].map((row) => (
              <div key={row.range} className="bg-bg-primary border border-border-subtle rounded-xl p-5 flex flex-col sm:flex-row sm:items-center gap-4">
                <div className="shrink-0 w-24 text-center">
                  <div className="text-gold font-semibold text-sm">{row.range}</div>
                </div>
                <div className="h-px sm:h-8 sm:w-px bg-border-subtle" />
                <div className="flex-1">
                  <div className="text-text-primary font-medium text-sm">{row.vehicle}</div>
                  <div className="text-text-secondary text-xs mt-0.5">{row.note}</div>
                </div>
                {row.from && (
                  <div className="shrink-0 text-right">
                    <div className="text-gold font-semibold">From {row.from} SAR</div>
                    <div className="text-text-secondary text-xs">per vehicle</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vehicles */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-3">Full Fleet & Pricing</h2>
          <p className="text-text-secondary text-sm mb-6">All fares per vehicle · Fixed pricing · Group discounts available on multi-day bookings</p>
          <FareTable />
        </div>
      </section>

      {/* Group services */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-8">Group Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {[
              { title: 'Mosque & Community Groups', desc: 'Organised Umrah delegations from mosques and Islamic centres. We coordinate vehicles, timing, and hotel drop-offs.' },
              { title: 'Travel Agency Packages', desc: 'We work with travel agencies providing Umrah and Hajj packages, offering reliable ground transport for their clients.' },
              { title: 'Corporate Hajj Programmes', desc: 'Institutional Hajj transport for companies and organisations with staff performing Hajj — multi-day scheduling and coordination.' },
              { title: 'Multi-City Group Itineraries', desc: 'Full Umrah itinerary transport: Jeddah arrival → Makkah → Madinah → Jeddah departure, coordinated for groups.' },
            ].map((service) => (
              <div key={service.title} className="card p-5">
                <h3 className="text-text-primary font-semibold text-sm mb-2">{service.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary" aria-labelledby="group-faq">
        <div className="max-w-3xl mx-auto">
          <h2 id="group-faq" className="section-heading mb-8">Group Transport FAQ</h2>
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
          <h2 className="section-heading mb-4">Get a Group Transport Quote</h2>
          <p className="text-text-secondary mb-6">Tell us your group size, route, and programme dates. We'll recommend the best vehicle combination and confirm pricing.</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            Message Us on WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
