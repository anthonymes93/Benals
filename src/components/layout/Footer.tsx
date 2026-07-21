import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Container } from '@/components/ui/Container';
import { Logo } from '@/components/common/Logo';
import { primaryNav } from '@/data/navigation';
import { services } from '@/data/services';
import { siteConfig } from '@/data/siteConfig';

// Footer stays a fixed, glanceable height — link to the full list rather
// than listing all 14 services here.
const FOOTER_SERVICE_COUNT = 6;

export function Footer() {
  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-100">
      <Container className="py-14 sm:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo inverse />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-ink-200">
              {siteConfig.description}
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
              Navigate
            </h2>
            <ul className="mt-4 space-y-2.5">
              {primaryNav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="text-sm text-ink-200 hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {services.slice(0, FOOTER_SERVICE_COUNT).map((service) => (
                <li key={service.slug}>
                  <Link
                    to={`/services#${service.slug}`}
                    className="text-sm text-ink-200 hover:text-white"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="text-sm font-semibold text-white hover:text-tertiary-300">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-semibold tracking-wide text-white uppercase">
              Get in Touch
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-200">
              <li>
                <a
                  href={siteConfig.phone.href}
                  className="flex items-start gap-2.5 hover:text-white"
                >
                  <Phone className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.phone.display}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="flex items-start gap-2.5 hover:text-white"
                >
                  <Mail className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {siteConfig.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                Serving {siteConfig.location.region}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-8 text-sm text-ink-300 sm:flex-row sm:items-center sm:justify-between">
          <p>
            Built by <a href="https://anthonymeszaros.com">Anthony Meszaros</a>
          </p>
          <p>Proudly serving {siteConfig.location.areasServed.slice(0, 3).join(', ')}, and beyond.</p>
        </div>
      </Container>
    </footer>
  );
}
