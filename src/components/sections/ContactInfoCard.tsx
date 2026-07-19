import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { siteConfig } from '@/data/siteConfig';

export function ContactInfoCard() {
  return (
    <Card className="bg-ink-950 text-white">
      <h3 className="text-xl text-white">Contact Details</h3>

      <ul className="mt-5 space-y-4">
        <li className="flex items-start gap-3">
          <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
          <div>
            <p className="text-sm text-ink-200">Call or text</p>
            <a href={siteConfig.phone.href} className="font-semibold text-white hover:underline">
              {siteConfig.phone.display}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
          <div>
            <p className="text-sm text-ink-200">Email</p>
            <a href={`mailto:${siteConfig.email}`} className="font-semibold text-white hover:underline">
              {siteConfig.email}
            </a>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <Clock className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
          <div>
            <p className="text-sm text-ink-200">Hours</p>
            <ul className="text-white">
              {siteConfig.hours.map((entry) => (
                <li key={entry.days}>
                  {entry.days}: {entry.time}
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary-400" aria-hidden="true" />
          <div>
            <p className="text-sm text-ink-200">Service area</p>
            <p className="text-white">{siteConfig.location.areasServed.join(', ')}</p>
          </div>
        </li>
      </ul>
    </Card>
  );
}
