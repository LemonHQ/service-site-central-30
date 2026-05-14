## Problem

The project already has SSR + prerendering wired up (`npm run build` runs `build:client` → `build:server` → `build:prerender`), so every route in `prerender.js` produces a static `dist/<route>.html`. But only the **body** is server-rendered. The `<head>` comes from the static `index.html` template, which contains hardcoded homepage tags (title, description, OG, canonical, JSON-LD).

Per-page SEO is currently set client-side by `useSEO()` in a `useEffect`. That works for users but **not for crawlers** — Google's social previewers, LinkedIn, Slack, Facebook, and most SEO tools fetch the static HTML and never run the `useEffect`. So every prerendered page ships the homepage head.

## Fix: render the head on the server with `react-helmet-async`

Adopt `react-helmet-async` so per-route head tags are produced during SSR and injected into the prerendered HTML. The existing `getSEOMetadata(seoPage, seoData)` machinery and per-page `seoPage` props on `MainLayout` already provide route-specific metadata — we just need to emit it via `<Helmet>` instead of `useEffect`, and inject Helmet's output into the template at prerender time.

### Steps

1. **Install dependency**
   - `react-helmet-async`

2. **Create `src/components/seo/SEOHead.tsx`**
   - Pure component that calls `getSEOMetadata(seoPage, seoData)` and renders a `<Helmet>` with: `<title>`, description, canonical, all `og:*`, twitter card tags, article meta where applicable, AI meta, and a per-route JSON-LD `<script type="application/ld+json">` (Article for blog/insight, CaseStudy for case studies, default WebPage otherwise) using the existing `generateStructuredData()` utility.
   - Uses absolute URLs based on a fixed production origin (`https://lemonhq.co.uk`) instead of `window.location.origin` so SSR produces correct canonical/og:url. Falls back to `window.location.origin` only when not provided in metadata.

3. **Update `src/components/layout/MainLayout.tsx`**
   - Replace the `useSEO(seoMetadata, …)` call with `<SEOHead seoPage={seoPage} seoData={seoData} aiMetadata={aiMetadata} />` rendered inside the layout.
   - Keep `useAISEO` removed in favor of static AI meta tags emitted by `SEOHead` (so they're in the prerendered HTML too).

4. **Update `index.html` (template)**
   - Add a `<!--app-head-->` placeholder right before `</head>`.
   - Remove the hardcoded **homepage-specific** tags so they don't conflict with per-route Helmet output: `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<link rel="canonical">`, all `og:*`, all `twitter:*`, `ai-content-summary`, `ai-purpose`, `ai-content-type`.
   - Keep sitewide static items: charset, viewport, CSP, frame/content-type/referrer headers, GA/Vector snippets, favicon, hero preload, `google-site-verification`, robots, language/distribution/rating, and the sitewide `Organization` + `WebSite` JSON-LD blocks.

5. **Update `src/main.tsx`**
   - Wrap the app with `<HelmetProvider>` (outside `BrowserRouter`) so client-side hydration also manages the head.

6. **Update `src/entry-server.tsx`**
   - Wrap `<StaticRouter><App /></StaticRouter>` in `<HelmetProvider context={helmetContext}>`.
   - After `renderToString`, read `helmetContext.helmet` and return `{ html, head }` where `head` concatenates `helmet.title.toString() + helmet.priority.toString() + helmet.meta.toString() + helmet.link.toString() + helmet.script.toString()`.

7. **Update `prerender.js`**
   - Destructure `{ html, head } = render(url)`.
   - Replace `<!--app-html-->` with `html` and `<!--app-head-->` with `head` in the template before writing the file.

8. **Verify**
   - Run the build, then grep a few prerendered files to confirm unique `<title>`, `<meta name="description">`, `<link rel="canonical">`, and `og:*` per route:
     - `dist/index.html` (homepage)
     - `dist/about.html`
     - `dist/case-studies/reimagining-patient-experience.html`
     - `dist/blog/traditional-vs-ai-search.html`

### Notes on scope

- All existing per-page `seoPage` / `seoData` props on `MainLayout` (already set on every route) keep working unchanged — only the rendering mechanism switches from `useEffect` to `<Helmet>`.
- Dynamic routes (`/services/:serviceSlug`, `/services/:serviceSlug/:subServiceSlug`) are not in `prerender.js`'s static list. Their per-page SEO will still work for users and JS-executing crawlers (Googlebot) via Helmet's client-side update, but social-preview crawlers won't see unique tags for those routes until they're added to the prerender list. I can add the full set of service slugs to `routesToPrerender` in the same change if you want; otherwise we leave that for a follow-up.
- No design or content changes — purely SEO infrastructure.
