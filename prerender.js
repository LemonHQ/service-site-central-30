import fs from 'node:fs'
import path from 'node:path'
import url from 'node:url'

const __dirname = path.dirname(url.fileURLToPath(import.meta.url))
const toAbsolute = (p) => path.resolve(__dirname, p)

const template = fs.readFileSync(toAbsolute('dist/index.html'), 'utf-8')
const { render } = await import('./dist/server/entry-server.js')

// Define all routes that match App.tsx
const routesToPrerender = [
  '/',
  // Direct service landing pages
  '/unify-brand-experiences',
  '/digitalize-product-lines',
  '/expand-product-offerings',
  '/scale-digital-experiences',
  '/pilot-emerging-tech',
  '/standardize-digital-portfolio',
  // Approach pages
  '/approach/co-create',
  '/approach/co-innovate',
  '/approach/co-create-legacy',
  '/approach/extend',
  '/approach/co-create-assessment',
  '/webinar-signup',
  '/co-innovate-webinar',
  // Industry pages
  '/industries/insurance',
  '/industries/finance',
  '/industries/healthcare',
  '/industries/retail',
  // Legal pages
  '/privacy-policy',
  '/terms-and-conditions',
  '/cookie-policy',
  '/disclaimer',
  // General pages
  '/about',
  '/contact',
  '/insights',
  '/insights-1',
  '/blog',
  '/case-studies',
  '/case-studies-1',
  '/getting-started',
  '/lead-qualification',
  '/thank-you',
  '/cv-submission',
  // Individual case study pages
  '/case-studies/standardizing-motor-insurance-for-a-digital-future',
  '/case-studies/reimagining-patient-experience',
  '/case-studies/driving-multi-market-d2c-sales',
  '/case-studies/digital-policy-and-claims-using-ai',
  '/case-studies/how-abdul-latif-jameel-established-its-market-leadership',
  '/case-studies/how-meraas-used-a-live-pilot-to-strategize-the-next-major-rewards-ecosystem',
  '/case-studies/standardizing-intellectual-property-management',
  '/case-studies/building-a-composable-digital-brand-engine',
  // Individual insight pages
  '/insight/personalization-a-usd-2-trillion-opportunity',
  '/insight/scaling-digital-how-traditional-brands-can-win-with-d2c-strategies',
  '/insight/how-generative-ai-is-reshaping-brand-and-product-discovery'
  // NOTE: Dynamic routes like /blog/:postId and /case-studies/:caseStudyId 
  // need to be added manually when creating new content
]

;(async () => {
  for (const url of routesToPrerender) {
    const appHtml = render(url);
    const html = template.replace(`<!--app-html-->`, appHtml)

    const filePath = `dist${url === '/' ? '/index' : url}.html`
    const fullPath = toAbsolute(filePath)
    
    // Ensure directory exists before writing file
    const dir = path.dirname(fullPath)
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true })
    }
    
    fs.writeFileSync(fullPath, html)
    console.log('pre-rendered:', filePath)
  }
})()