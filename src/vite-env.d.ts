/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** POST endpoint for the contact form (Formspree, Netlify Forms, or a custom function). */
  readonly VITE_CONTACT_FORM_ENDPOINT?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
