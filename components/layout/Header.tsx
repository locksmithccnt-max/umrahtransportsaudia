'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { whatsappLink, BOOKING_WA_MESSAGE } from '@/lib/constants';

const navLinks = [
  { href: '/vehicles', label: 'Our Fleet' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/makkah-airport-transfer', label: 'Airport Transfer' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
];

const localeLabels: Record<string, string> = {
  en: 'EN',
  ar: 'عر',
  ur: 'اردو',
  id: 'ID',
};

export default function Header({ locale }: { locale: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const waHref = whatsappLink(BOOKING_WA_MESSAGE);

  const isActive = (href: string) => pathname.includes(href);

  return (
    <header className="sticky top-0 z-40 bg-bg-primary/95 backdrop-blur-sm border-b border-border-subtle">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 no-underline" aria-label="Umrah Transport Saudia — Home">
            <span className="text-gold font-display text-lg font-semibold tracking-tight">
              Umrah Transport
            </span>
            <span className="text-text-secondary font-body text-sm hidden sm:block">Saudia</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale === 'en' ? '' : locale}${link.href}`}
                className={`px-3 py-2 text-sm rounded-lg transition-colors no-underline ${
                  isActive(link.href)
                    ? 'text-gold bg-gold/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA + locale */}
          <div className="hidden md:flex items-center gap-3">
            {/* Locale switcher */}
            <div className="flex items-center gap-1">
              {Object.entries(localeLabels).map(([loc, label]) => (
                <Link
                  key={loc}
                  href={loc === 'en' ? '/' : `/${loc}`}
                  className={`px-2 py-1 text-xs rounded no-underline transition-colors ${
                    locale === loc
                      ? 'text-gold font-semibold'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                  aria-label={`Switch to ${loc}`}
                >
                  {label}
                </Link>
              ))}
            </div>
            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-sm px-4 py-2"
            >
              <WhatsAppIcon />
              Book Now
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors rounded-lg hover:bg-bg-elevated"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            {menuOpen ? <XIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border-subtle bg-bg-surface"
        >
          <nav className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1" aria-label="Mobile navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${locale === 'en' ? '' : locale}${link.href}`}
                className={`px-4 py-3 text-sm rounded-lg transition-colors no-underline ${
                  isActive(link.href)
                    ? 'text-gold bg-gold/10'
                    : 'text-text-secondary hover:text-text-primary hover:bg-bg-elevated'
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border-subtle">
              {Object.entries(localeLabels).map(([loc, label]) => (
                <Link
                  key={loc}
                  href={loc === 'en' ? '/' : `/${loc}`}
                  className={`px-3 py-1.5 text-sm rounded no-underline transition-colors ${
                    locale === loc
                      ? 'text-gold font-semibold bg-gold/10'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  {label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

function MenuIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
