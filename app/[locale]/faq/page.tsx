import type { Metadata } from 'next';
import { whatsappLink } from '@/lib/constants';
import { faqSchema, breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { generateLocaleAlternates } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'FAQ — Umrah & Hajj Transport Questions Answered',
    description:
      'Answers to common questions about private Umrah and Hajj transport in Saudi Arabia: booking, pricing, vehicles, routes, and payment.',
    alternates: generateLocaleAlternates('/faq', locale),
  };
}

const allFaqs = [
  {
    category: 'Booking',
    items: [
      { question: 'How do I book a vehicle?', answer: 'Send a WhatsApp message to +966 57 306 7785 with your pickup location, destination, date, time, and number of passengers. We confirm availability and fare within minutes.' },
      { question: 'How far in advance do I need to book?', answer: 'For standard transfers, same-day and next-day bookings are usually available. For Hajj season transport, we strongly recommend booking weeks in advance due to very high demand.' },
      { question: 'Can I change or cancel a booking?', answer: 'Yes. Contact us via WhatsApp as early as possible if you need to change or cancel. We accommodate changes when possible. Cancellation terms for multi-day bookings are confirmed at the time of booking.' },
      { question: 'Do you accept bookings from travel agencies?', answer: 'Yes. We work with travel agencies and tour operators on a wholesale and referral basis. Contact us via WhatsApp or email to discuss arrangements.' },
    ],
  },
  {
    category: 'Pricing',
    items: [
      { question: 'Are fares per person or per vehicle?', answer: 'All fares are per vehicle, not per person. A family of 6 in a Toyota Hiace pays the same as a solo pilgrim in the same vehicle.' },
      { question: 'Are there hidden fees or airport charges?', answer: 'No. We do not add surcharges, fuel supplements, or booking fees. The fare quoted at booking is the fare you pay.' },
      { question: 'What payment methods do you accept?', answer: 'Cash (SAR) on completion of the journey, and bank transfer for advance multi-day bookings. Payment details are provided at booking.' },
    ],
  },
  {
    category: 'Vehicles & Drivers',
    items: [
      { question: 'Are your drivers licensed?', answer: 'Yes. All drivers hold valid Saudi transport licences and are experienced on Umrah and Hajj routes.' },
      { question: 'Are your drivers Muslim?', answer: 'Yes. All drivers are Muslim — a requirement to enter Makkah city limits. Non-Muslim drivers are not permitted in the Haram zone.' },
      { question: 'Do vehicles have air conditioning?', answer: 'Yes. All vehicles are fully air-conditioned. This is standard — non-negotiable given Saudi temperatures.' },
      { question: 'What luggage can I bring?', answer: 'Luggage is included at no extra charge. For large groups with heavy luggage, let us know in advance so we recommend the right vehicle capacity.' },
    ],
  },
  {
    category: 'Routes & Services',
    items: [
      { question: 'Do you serve Jeddah Airport?', answer: 'Yes. Jeddah Airport (King Abdulaziz International, JED) to Makkah is our most-booked route. We provide meet-and-greet and flight tracking.' },
      { question: 'Do you operate in Madinah?', answer: 'Yes. We provide intercity transfers between Makkah and Madinah, and city transfers within Madinah including the Prophet\'s Mosque area.' },
      { question: 'Do you cover Hajj routes (Mina, Arafat, Muzdalifah)?', answer: 'Yes. Hajj-specific transport for the ritual sites is available. Advance booking is essential — contact us early for Hajj season.' },
      { question: 'Do you operate 24 hours?', answer: 'Yes. We operate 24 hours, 7 days a week — including Fajr departures and late-night airport arrivals.' },
    ],
  },
];

export default async function FaqPage({ params }: Props) {
  const { locale } = await params;
  const waHref = whatsappLink('Hello, I have a question about Umrah transport. Can you help?');

  const flatFaqs = allFaqs.flatMap((cat) => cat.items);

  return (
    <>
      <JsonLd data={faqSchema(flatFaqs)} />
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'FAQ', url: '/faq' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'FAQ', href: '/faq' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Frequently Asked Questions
          </h1>
          <p className="answer-block">
            Answers to the most common questions pilgrims ask before booking private Umrah and Hajj
            transport in Saudi Arabia. If your question is not answered here, message us on WhatsApp
            — we respond within minutes.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-3xl mx-auto space-y-12">
          {allFaqs.map((cat) => (
            <div key={cat.category}>
              <h2 className="text-lg font-semibold text-gold mb-5 uppercase tracking-wider text-sm">{cat.category}</h2>
              <div className="space-y-3">
                {cat.items.map((faq) => (
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
          ))}
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary text-center">
        <div className="max-w-xl mx-auto">
          <h2 className="section-heading mb-4">Still Have Questions?</h2>
          <p className="text-text-secondary mb-6">Message us on WhatsApp and we will answer within minutes.</p>
          <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-base px-8 py-4">
            Ask via WhatsApp
          </a>
        </div>
      </section>
    </>
  );
}
