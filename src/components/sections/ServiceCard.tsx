import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

/** Clickable service card — links straight to that service's section on the Services page. */
export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card as="article" interactive className="flex h-full flex-col">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-tertiary-50 text-tertiary-600">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl text-ink-950">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-600">
        {service.shortDescription}
      </p>
      <Link
        to={`/services#${service.slug}`}
        aria-label={`Learn more about ${service.title}`}
        className="group mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ink-800 hover:text-tertiary-600"
      >
        Learn more
        <ArrowRight
          className="h-4 w-4 transition-transform duration-200 ease-out group-hover:translate-x-0.5"
          aria-hidden="true"
        />
      </Link>
    </Card>
  );
}
