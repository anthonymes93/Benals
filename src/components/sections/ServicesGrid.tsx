import { ServiceCard } from '@/components/sections/ServiceCard';
import { Reveal } from '@/components/ui/Reveal';
import type { Service } from '@/types';

interface ServicesGridProps {
  services: Service[];
}

export function ServicesGrid({ services }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {services.map((service, index) => (
        <Reveal key={service.slug} variant="fade-up" delay={Math.min(index * 60, 300)} className="h-full">
          <ServiceCard service={service} />
        </Reveal>
      ))}
    </div>
  );
}
