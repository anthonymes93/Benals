import { ServiceCard } from '@/components/sections/ServiceCard';
import type { ServiceCategory } from '@/types';

interface ServicesGridProps {
  categories: ServiceCategory[];
}

export function ServicesGrid({ categories }: ServicesGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {categories.map((category) => (
        <ServiceCard key={category.slug} category={category} />
      ))}
    </div>
  );
}
