import Link from 'next/link';
import type { Vehicle } from '@/lib/vehicles';
import { whatsappLink } from '@/lib/constants';

export default function VehicleCard({ vehicle, locale }: { vehicle: Vehicle; locale: string }) {
  const waMessage = `Hello, I'm interested in booking the ${vehicle.name} for Umrah transport. Can you help me?`;
  const waHref = whatsappLink(waMessage);
  const vehiclePath = locale === 'en' ? `/vehicles/${vehicle.slug}` : `/${locale}/vehicles/${vehicle.slug}`;

  return (
    <article className="card group flex flex-col">
      {/* Image placeholder */}
      <div className="aspect-video bg-bg-elevated relative overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center text-text-secondary text-sm">
          <div className="text-center">
            <div className="text-3xl mb-2">🚗</div>
            <span className="text-xs text-text-secondary">{vehicle.name}</span>
          </div>
        </div>
        <div className="absolute top-3 start-3 bg-bg-primary/90 rounded-full px-3 py-1 text-xs text-gold font-medium">
          {vehicle.type}
        </div>
      </div>

      <div className="p-5 flex flex-col flex-1 gap-4">
        {/* Header */}
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-text-primary font-semibold text-lg leading-tight">{vehicle.name}</h3>
            <p className="text-text-secondary text-sm mt-0.5">{vehicle.seats} seats · {vehicle.luggage}</p>
          </div>
          <div className="text-right shrink-0">
            <div className="text-gold font-semibold text-lg">From {vehicle.priceFrom} SAR</div>
            <div className="text-text-secondary text-xs">per trip</div>
          </div>
        </div>

        {/* Short description */}
        <p className="text-text-secondary text-sm leading-relaxed">{vehicle.shortDescription}</p>

        {/* Ideal for */}
        <div>
          <p className="text-xs text-text-secondary uppercase tracking-wider mb-2">Ideal for</p>
          <div className="flex flex-wrap gap-1.5">
            {vehicle.idealFor.map((item) => (
              <span
                key={item}
                className="inline-block text-xs bg-bg-elevated text-text-secondary px-2 py-1 rounded-full border border-border-subtle"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2 mt-auto pt-2">
          <Link href={vehiclePath} className="btn-outline text-sm px-4 py-2 flex-1 text-center no-underline">
            Details
          </Link>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-sm px-4 py-2 flex-1 text-center"
          >
            Book
          </a>
        </div>
      </div>
    </article>
  );
}
