import { vehicles } from '@/lib/vehicles';
import { whatsappLink } from '@/lib/constants';

export default function FareTable() {
  return (
    <div className="overflow-x-auto rounded-xl border border-border-subtle">
      <table className="w-full text-sm" aria-label="Vehicle pricing table">
        <thead>
          <tr className="bg-bg-elevated border-b border-border-subtle">
            <th scope="col" className="text-start px-4 py-3 text-text-secondary font-medium text-xs uppercase tracking-wider">Vehicle</th>
            <th scope="col" className="text-start px-4 py-3 text-text-secondary font-medium text-xs uppercase tracking-wider">Type</th>
            <th scope="col" className="text-center px-4 py-3 text-text-secondary font-medium text-xs uppercase tracking-wider">Seats</th>
            <th scope="col" className="text-end px-4 py-3 text-text-secondary font-medium text-xs uppercase tracking-wider">From (SAR)</th>
            <th scope="col" className="text-center px-4 py-3 text-text-secondary font-medium text-xs uppercase tracking-wider sr-only">Book</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border-subtle">
          {vehicles.map((v) => {
            const waMsg = `Hello, I'm interested in the ${v.name} (${v.seats} seats). Can you send me availability and pricing?`;
            return (
              <tr key={v.slug} className="bg-bg-surface hover:bg-bg-elevated transition-colors">
                <td className="px-4 py-4">
                  <div className="font-medium text-text-primary">{v.name}</div>
                </td>
                <td className="px-4 py-4 text-text-secondary">{v.type}</td>
                <td className="px-4 py-4 text-center text-text-secondary">{v.seats}</td>
                <td className="px-4 py-4 text-end">
                  <span className="text-gold font-semibold">{v.priceFrom}</span>
                </td>
                <td className="px-4 py-4 text-center">
                  <a
                    href={whatsappLink(waMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs bg-success/10 text-success border border-success/20 rounded-full px-3 py-1 hover:bg-success/20 transition-colors no-underline"
                    aria-label={`Book ${v.name} via WhatsApp`}
                  >
                    Book
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
