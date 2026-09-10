import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema } from '@/lib/schema';
import JsonLd from '@/components/schema/JsonLd';
import BreadcrumbNav from '@/components/ui/BreadcrumbNav';
import { whatsappLink } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Blog — Umrah & Hajj Travel Guides for Pilgrims',
  description:
    'Practical guides for Umrah and Hajj pilgrims: airport transfers, packing advice, Makkah transport, Madinah visits, and more.',
};

type Props = { params: Promise<{ locale: string }> };

const placeholderPosts = [
  {
    slug: 'jeddah-airport-to-makkah-guide',
    title: 'Jeddah Airport to Makkah: Complete Transfer Guide for Pilgrims',
    excerpt: 'Everything pilgrims need to know about the journey from King Abdulaziz International Airport to Makkah — transfer options, journey time, costs, and practical tips.',
    category: 'Airport Transfers',
    date: '2025-01-15',
  },
  {
    slug: 'umrah-transport-guide-makkah',
    title: 'How to Get Around Makkah During Umrah: Transport Options Explained',
    excerpt: 'A practical guide to transport in Makkah for Umrah pilgrims — private taxis, hotel shuttles, and what to expect during peak season.',
    category: 'Makkah Transport',
    date: '2025-01-10',
  },
  {
    slug: 'makkah-to-madinah-transfer',
    title: 'Makkah to Madinah Transfer: What to Expect on the Journey',
    excerpt: 'The ~450 km journey between the two holy cities, travel time, vehicle options, and how to plan your combined Umrah itinerary.',
    category: 'Intercity Travel',
    date: '2025-01-05',
  },
  {
    slug: 'hajj-transport-planning',
    title: 'Planning Hajj Transport: Mina, Arafat, and Muzdalifah',
    excerpt: 'How to arrange private transport for the Hajj ritual sites — Mina, the plain of Arafat, Muzdalifah — and why booking early matters.',
    category: 'Hajj',
    date: '2024-12-20',
  },
];

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const waHref = whatsappLink('Hello, I have a question about Umrah transport.');

  return (
    <>
      <JsonLd data={breadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Blog', url: '/blog' },
      ])} />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <BreadcrumbNav items={[
          { name: 'Home', href: '/' },
          { name: 'Blog', href: '/blog' },
        ]} />
      </div>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-primary">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-display font-light text-text-primary mb-6">
            Pilgrim Travel Guides
          </h1>
          <p className="answer-block">
            Practical guides for Umrah and Hajj pilgrims covering airport transfers, getting around
            Makkah and Madinah, Hajj transport planning, and what to expect at each stage of your
            pilgrimage journey.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-bg-surface">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {placeholderPosts.map((post) => (
              <article key={post.slug} className="card p-6 flex flex-col gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-xs bg-gold/10 text-gold border border-gold/20 rounded-full px-3 py-1">
                    {post.category}
                  </span>
                  <time className="text-text-secondary text-xs" dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                  </time>
                </div>
                <h2 className="text-text-primary font-semibold leading-tight">{post.title}</h2>
                <p className="text-text-secondary text-sm leading-relaxed flex-1">{post.excerpt}</p>
                <div className="pt-2">
                  <span className="text-gold text-sm">Coming soon →</span>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-12 bg-bg-primary border border-border-subtle rounded-2xl p-8 text-center">
            <p className="text-text-secondary mb-4">Have a question not covered here? Ask us directly.</p>
            <a href={waHref} target="_blank" rel="noopener noreferrer" className="btn-whatsapp px-6 py-3">
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
