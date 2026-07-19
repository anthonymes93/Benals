import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card } from '@/components/ui/Card';
import type { Service } from '@/types';

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const Icon = service.icon;

  return (
    <Card as="article" interactive className="flex h-full flex-col">
      <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-navy-50 text-navy-800">
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="mt-5 text-xl text-navy-950">{service.title}</h3>
      <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-neutral-600">
        {service.summary}
      </p>
      <Link
        to="/services"
        className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-brand-red-600"
      >
        Learn more
        <ArrowRight className="h-4 w-4" aria-hidden="true" />
      </Link>
    </Card>
  );
}
