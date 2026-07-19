import { Outlet, ScrollRestoration } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { StickyCallBar } from '@/components/layout/StickyCallBar';
import { SkipToContent } from '@/components/layout/SkipToContent';

/** Root shell for every route: header, routed page content, footer, and the mobile call bar. */
export function Layout() {
  return (
    <>
      <SkipToContent />
      <Header />
      <main id="main-content" className="flex-1 pb-20 sm:pb-0">
        <Outlet />
      </main>
      <Footer />
      <StickyCallBar />
      <ScrollRestoration />
    </>
  );
}
