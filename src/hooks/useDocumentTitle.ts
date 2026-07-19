import { useEffect } from 'react';
import { siteConfig } from '@/data/siteConfig';

/** Sets the browser tab title for the current page. Call once per page component. */
export function useDocumentTitle(title: string): void {
  useEffect(() => {
    document.title = `${title} | ${siteConfig.name}`;
  }, [title]);
}
