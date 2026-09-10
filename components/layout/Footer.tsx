import Link from 'next/link';
import { PHONE_NUMBER, EMAIL, ADDRESS, whatsappLink, DEFAULT_WA_MESSAGE } from '@/lib/constants';

const quickLinks = [
  { href: '/vehicles', label: 'Our Fleet' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/makkah-airport-transfer', label: 'Makkah Airport Transfer' },
  { href: '/jeddah-airport-to-makkah-taxi', label: 'Jeddah to Makkah Taxi' },
  { href: '/madinah-transport', label: 'Madinah Transport' },
  { href: '/hajj-transport-services', label: 'Hajj Transport' },
  { href: '/group-transport', label: 'Group Transport' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact' },
];

export default function Footer() {
  const waHref = whatsappLink(DEFAULT_WA_MESSAGE);

  return (
    <footer className="bg-bg-surface border-t border-border-subtle mt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand column */}
          <div>
            <div className="font-display text-xl text-gold font-semibold mb-3">
              Umrah Transport Saudia
            </div>
            <p className="text-text-secondary text-sm leading-relaxed mb-4">
              Private pilgrim transport across Makkah, Madinah, and Jeddah. Fixed fares from 200 SAR. Available 24/7.
            </p>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-4 py-2 inline-flex"
            >
              Book via WhatsApp
            </a>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-text-secondary text-sm hover:text-gold transition-colors no-underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-text-primary font-semibold text-sm uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li>
                <span className="text-text-secondary block text-xs uppercase tracking-wider mb-1">WhatsApp / Phone</span>
                <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-gold hover:text-gold-hover no-underline">
                  {PHONE_NUMBER}
                </a>
              </li>
              <li>
                <span className="text-text-secondary block text-xs uppercase tracking-wider mb-1">Email</span>
                <a href={`mailto:${EMAIL}`} className="text-gold hover:text-gold-hover no-underline">
                  {EMAIL}
                </a>
              </li>
              <li>
                <span className="text-text-secondary block text-xs uppercase tracking-wider mb-1">Address</span>
                <span>{ADDRESS}</span>
              </li>
              <li>
                <span className="text-text-secondary block text-xs uppercase tracking-wider mb-1">Hours</span>
                <span>Open 24 hours · 7 days a week</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-text-secondary">
          <p>&copy; {new Date().getFullYear()} Umrah Transport Saudia. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/faq" className="hover:text-gold transition-colors no-underline">FAQ</Link>
            <Link href="/contact" className="hover:text-gold transition-colors no-underline">Contact</Link>
            <Link href="/llms.txt" className="hover:text-gold transition-colors no-underline">llms.txt</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
