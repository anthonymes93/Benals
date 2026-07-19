import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { Home } from '@/pages/Home';
import { Services } from '@/pages/Services';
import { About } from '@/pages/About';
import { Gallery } from '@/pages/Gallery';
import { Contact } from '@/pages/Contact';
import { NotFound } from '@/pages/NotFound';

/**
 * Route table. To add a page: create it under src/pages, then add one entry
 * here — and to src/data/navigation.ts if it belongs in the header/footer nav.
 */
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/services', element: <Services /> },
      { path: '/about', element: <About /> },
      { path: '/gallery', element: <Gallery /> },
      { path: '/contact', element: <Contact /> },
      { path: '*', element: <NotFound /> },
    ],
  },
]);

export function AppRoutes() {
  return <RouterProvider router={router} />;
}
