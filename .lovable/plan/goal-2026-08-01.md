Migrate Google Analytics to the Lovable connector

> **Build pre-requisite:** A CSS build error is currently blocking the project (`src/styles/components.css` uses `@layer components` without a matching `@tailwind components` directive in the same file). This needs to be fixed before the app can be built and the GA migration verified. It can be fixed in the same build session as the GA migration.


## Goal
Replace the hardcoded Google Analytics Measurement ID with the Lovable-managed Google Analytics connector so the ID is controlled as a project secret and can be rotated without code changes.

## Current state
- `src/services/analytics.ts` hardcodes `GA_MEASUREMENT_ID = 'G-F9MRP3Y6SL'` and dynamically loads the gtag script only after analytics cookie consent is granted.
- `index.html` has a placeholder comment saying GA will be loaded conditionally; the actual script injection is handled by `src/services/analytics.ts`.
- The Google Analytics connector exists in this workspace (`connector_id: google_analytics`), but no Google Analytics connection is currently linked to the project.
- Google Search Console is already connected, so the Lovable API key and connector flows are already working for this project.

## Plan
1. **Connect the Google Analytics connector**
   - Call `standard_connectors--connect` with `connector_id: "google_analytics"` so the user can pick or create a workspace connection.
   - After a successful link, the env var `VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY` will be injected into the project.

2. **Update the analytics service to read the connector secret**
   - In `src/services/analytics.ts`, replace the hardcoded `const GA_MEASUREMENT_ID = 'G-F9MRP3Y6SL';` with:
     ```ts
     const GA_MEASUREMENT_ID = import.meta.env.VITE_LOVABLE_CONNECTOR_GOOGLE_ANALYTICS_API_KEY;
     ```
   - Keep the existing cookie-consent-gated loading and page/event tracking logic intact.
   - Add a guard so the service logs a clear warning (in dev) if the env var is missing, and does not attempt to load GA in production when it is missing.

3. **Clean up the fallback comment in `index.html`**
   - Update the comment to reflect that GA is now initialized via the connector-driven analytics service.

4. **Verify the build and runtime behavior**
   - Run `npm run build` to confirm the env var reference is resolved correctly and the app still builds.
   - After a preview build, check that the gtag script is loaded when analytics cookies are accepted and that page view events are sent to the connector-provided Measurement ID.

## Technical notes
- Google Analytics is a frontend-only connector (no gateway). The env var is injected by the connector and read via `import.meta.env` in browser code, matching the existing Vite setup.
- The existing conditional loading preserves the cookie-consent UX; no changes to `src/components/privacy/CookieConsentBanner.tsx` or `src/services/cookieConsent.ts` are required.
- No Supabase Edge Function or backend code changes are needed because GA runs entirely in the browser.
