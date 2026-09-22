import type { Metadata } from 'next';
import Link from 'next/link';
import { whatsappLink, PHONE_NUMBER, EMAIL, ADDRESS } from '@/lib/constants';
import { breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { generateLocaleAlternates } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'About Umrah Transport Saudia — Private Pilgrim Transport in Makkah',
    description:
      'Umrah Transport Saudia is a Makkah-based private transport company for Umrah and Hajj pilgrims. Fixed fares, professional drivers, 24/7 availability.',
    alternates: generateLocaleAlternates('/about', locale),
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  const waHref = whatsappLink('Hello, I\'d like to learn more about Umrah Transport Saudia before booking.');

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'About', url: '/about' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'About Us', href: '/about' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            About Umrah Transport Saudia
          </h1>
          <p className="answer-block">
            Umrah Transport Saudia is a Makkah-based private transport company specialising in pilgrim
            transfers across Saudi Arabia. We provide fixed-price, privately hired vehicles — from
            sedan to coach — for Umrah and Hajj travellers arriving from around the world.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-display font-light text-text-primary mb-5">Our Mission</h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>Every pilgrim deserves a journey that is calm, comfortable, and free from uncertainty. We exist to remove the stress of ground transport from the Umrah experience — so you can focus entirely on worship.</p>
              <p>We do this through straightforward fixed pricing, professional licensed drivers, and communication via WhatsApp in the language you are most comfortable with.</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-display font-light text-text-primary mb-5">Where We Operate</h2>
            <ul className="space-y-3">
              {[
                { place: 'Makkah', desc: 'City transfers, Haram-area hotels, Mina, Arafat, Muzdalifah' },
                { place: 'Jeddah Airport', desc: 'Arrivals and departures from King Abdulaziz International Airport' },
                { place: 'Madinah', desc: 'Intercity transfers and city transfers including Masjid an-Nabawi' },
                { place: 'Taif', desc: 'Day trips and transfers from Makkah or Jeddah' },
              ].map((item) => (
                <li key={item.place} className="flex items-start gap-3">
                  <span className="text-gold mt-0.5">·</span>
                  <div>
                    <span className="text-text-primary font-medium text-sm">{item.place}</span>
                    <span className="text-text-secondary text-sm"> — {item.desc}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-8">Our Commitment</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { title: 'Fixed Pricing', desc: 'No meters. No surprises. The fare quoted is the fare paid.' },
              { title: 'Muslim Drivers', desc: 'All drivers are Muslim and fully authorised to enter Makkah.' },
              { title: 'Languages', desc: 'We serve pilgrims in English, Arabic, Urdu, and Indonesian.' },
            ].map((item) => (
              <div key={item.title} className="bg-bg-surface border border-border-subtle rounded-xl p-6">
                <h3 className="text-text-primary font-semibold mb-2">{item.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-heading mb-6">Contact Information</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <dl className="space-y-4 text-sm">
              {[
                { dt: 'WhatsApp / Phone', dd: PHONE_NUMBER, href: `tel:${PHONE_NUMBER.replace(/\s/g, '')}` },
                { dt: 'Email', dd: EMAIL, href: `mailto:${EMAIL}` },
                { dt: 'Address', dd: ADDRESS, href: null },
                { dt: 'Hours', dd: 'Open 24 hours · 7 days a week', href: null },
              ].map((item) => (
                <div key={item.dt}>
                  <dt className="text-text-secondary text-xs uppercase tracking-wider mb-1">{item.dt}</dt>
                  <dd>
                    {item.href ? (
                      <a href={item.href} className="text-gold hover:text-gold-hover no-underline">{item.dd}</a>
                    ) : (
                      <span className="text-text-primary">{item.dd}</span>
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="flex flex-col gap-3">
              <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp text-sm px-6 py-3">
                Message Us on WhatsApp
              </a>
              <Link href="/contact" className="btn-outline text-sm px-6 py-3 text-center no-underline">
                Contact Page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
