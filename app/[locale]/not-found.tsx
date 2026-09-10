import Link from 'next/link';
import { whatsappLink, DEFAULT_WA_MESSAGE } from '@/lib/constants';

export default function LocaleNotFound() {
  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4 py-16">
      <div className="text-center max-w-md">
        <div className="text-8xl font-display font-light text-gold mb-4 leading-none">
          404
        </div>
        <h1 className="text-2xl font-semibold text-text-primary mb-4">
          Page not found
        </h1>
        <p className="text-text-secondary leading-relaxed mb-8">
          This page doesn&apos;t exist. You may have followed an old link, or the URL may have
          changed. Use the links below to get back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link href="/" className="btn-primary no-underline">
            Return Home
          </Link>
          <a
            href={whatsappLink(DEFAULT_WA_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp"
          >
            Contact Us on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
