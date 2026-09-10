import Link from 'next/link';
import JsonLd from '@/components/schema/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

interface BreadcrumbItem {
  name: string;
  href: string;
}

export default function BreadcrumbNav({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = items.map((item) => ({ name: item.name, url: item.href }));

  return (
    <>
      <JsonLd data={breadcrumbSchema(schemaItems)} />
      <nav aria-label="Breadcrumb" className="py-3">
        <ol className="flex items-center flex-wrap gap-x-2 gap-y-1 text-sm text-text-secondary">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;
            return (
              <li key={item.href} className="flex items-center gap-2">
                {isLast ? (
                  <span className="text-text-primary" aria-current="page">{item.name}</span>
                ) : (
                  <>
                    <Link href={item.href} className="hover:text-gold transition-colors no-underline">
                      {item.name}
                    </Link>
                    <ChevronIcon />
                  </>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

function ChevronIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="rtl:rotate-180">
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}
