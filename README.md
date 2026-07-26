# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.
# Benals

## Contact form email (Resend)

The contact form posts to the `/api/contact` Vercel serverless function, which sends
notification emails through [Resend](https://resend.com). The Resend API key is never
exposed to the browser.

1. Create or use a Resend account.
2. [Verify the sending domain](https://resend.com/docs/dashboard/domains/introduction) you'll send from (e.g. `your-verified-domain.com`).
3. Create a **sending-only** API key (not full access) in the Resend dashboard.
4. Copy `.env.example` to `.env` and fill in the three variables locally:
   - `RESEND_API_KEY` — the sending-only API key from step 3.
   - `CONTACT_TO_EMAIL` — the owner's inbox that should receive submissions.
   - `CONTACT_FROM_EMAIL` — the verified sender, e.g. `Benals Website <website@your-verified-domain.com>`.
5. Add the same three variables in the Vercel project's Environment Variables settings, for both **Production** and **Preview**.
6. Redeploy after adding or changing Vercel environment variables — they only take effect on new deployments.
