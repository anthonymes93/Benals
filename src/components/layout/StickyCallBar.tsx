import { Phone, ClipboardList } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';
import { Button } from '@/components/ui/Button';

/** Persistent bottom action bar on small screens — keeps calling and quoting one tap away. */
export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex gap-2.5 border-t border-neutral-200 bg-white/95 p-3 backdrop-blur-sm sm:hidden">
      <Button
        href={siteConfig.phone.href}
        variant="outline"
        size="md"
        leftIcon={<Phone className="h-4 w-4" aria-hidden="true" />}
        fullWidth
      >
        Call Now
      </Button>
      <Button
        href="/contact"
        variant="accent"
        size="md"
        leftIcon={<ClipboardList className="h-4 w-4" aria-hidden="true" />}
        fullWidth
      >
        Free Estimate
      </Button>
    </div>
  );
}
