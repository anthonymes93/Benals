/** Visually hidden until focused — lets keyboard users bypass the header nav. */
export function SkipToContent() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-navy-950 focus:px-4 focus:py-2.5 focus:text-white"
    >
      Skip to content
    </a>
  );
}
