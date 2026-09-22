import type { Metadata } from 'next';
import { whatsappLink, PHONE_NUMBER, EMAIL, ADDRESS } from '@/lib/constants';
import { breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { generateLocaleAlternates } from '@/lib/metadata';

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  return {
    title: 'Contact Umrah Transport Saudia — WhatsApp & Phone',
    description:
      'Contact Umrah Transport Saudia via WhatsApp at +966 57 306 7785. Book private transport for Umrah and Hajj in Makkah, Jeddah, and Madinah.',
    alternates: generateLocaleAlternates('/contact', locale),
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const waHref = whatsappLink('Hello, I need private transport for Umrah. Can you help me?');

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Contact', url: '/contact' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'Contact', href: '/contact' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Contact Us
          </h1>
          <p className="answer-block">
            The fastest way to reach Umrah Transport Saudia is via WhatsApp at +966 57 306 7785. We
            respond within minutes, day or night. You can also email us or visit our office in Makkah.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Primary contact */}
          <div>
            <h2 className="text-xl font-display font-semibold text-text-primary mb-6">Get in Touch</h2>
            <div className="space-y-5">
              <div>
                <div className="text-text-secondary text-xs uppercase tracking-wider mb-2">WhatsApp (Fastest)</div>
                <a
                  href={waHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-base px-6 py-3 w-full justify-center"
                >
                  Message on WhatsApp
                </a>
                <div className="text-text-secondary text-xs mt-2 text-center">Typical response: within minutes</div>
              </div>

              <div>
                <div className="text-text-secondary text-xs uppercase tracking-wider mb-2">Phone</div>
                <a
                  href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                  className="flex items-center gap-3 bg-bg-primary border border-border-subtle rounded-xl px-5 py-4 hover:border-gold/30 transition-colors no-underline group"
                >
                  <PhoneIcon />
                  <span className="text-text-primary font-medium">{PHONE_NUMBER}</span>
                </a>
              </div>

              <div>
                <div className="text-text-secondary text-xs uppercase tracking-wider mb-2">Email</div>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center gap-3 bg-bg-primary border border-border-subtle rounded-xl px-5 py-4 hover:border-gold/30 transition-colors no-underline"
                >
                  <EmailIcon />
                  <span className="text-text-primary font-medium">{EMAIL}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <h2 className="text-xl font-display font-semibold text-text-primary mb-6">Office Details</h2>
            <dl className="space-y-5 text-sm">
              <div>
                <dt className="text-text-secondary text-xs uppercase tracking-wider mb-1">Address</dt>
                <dd className="text-text-primary">{ADDRESS}</dd>
              </div>
              <div>
                <dt className="text-text-secondary text-xs uppercase tracking-wider mb-1">Hours</dt>
                <dd className="text-text-primary">Open 24 hours · 7 days a week</dd>
              </div>
              <div>
                <dt className="text-text-secondary text-xs uppercase tracking-wider mb-1">Languages</dt>
                <dd className="text-text-primary">English · Arabic · Urdu · Indonesian</dd>
              </div>
              <div>
                <dt className="text-text-secondary text-xs uppercase tracking-wider mb-1">Service Area</dt>
                <dd className="text-text-primary">Makkah · Jeddah Airport · Madinah · Taif</dd>
              </div>
            </dl>

            <div className="mt-8 bg-bg-primary border border-border-subtle rounded-xl p-5">
              <div className="text-text-secondary text-xs uppercase tracking-wider mb-3">When Messaging, Include:</div>
              <ul className="space-y-1.5">
                {[
                  'Pickup location',
                  'Destination',
                  'Date and time',
                  'Number of passengers',
                  'Any special requirements',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-text-secondary text-sm">
                    <span className="text-gold">·</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0" aria-hidden="true">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gold shrink-0" aria-hidden="true">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}
