
export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  services: string[];
  summary: string;
  challenge: string;
  solution: string;
  results: string;
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  featuredImage: string;
  images: string[];
  date: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: 'standardizing-motor-insurance-for-a-digital-future',
    title: 'Standardizing motor insurance for a digital future',
    client: 'Liva',
    industry: 'Finance',
    services: ['Digitalize Product Lines', 'Expand Product Offerings', 'Standardize Digital Portfolio'],
    summary: 'Transforming a fragmented, 3rd party reliant model into a scalable, digital-first experience to unlock new reach, capabilities and influence',
    challenge: `<p><strong>Liva faced major hurdles in scaling its sales channels across direct customers, partners, and brokers.</strong> The existing experience was fragmented and inconsistent&mdash;separate portals served each segment, creating isolated silos. This setup made it costly and inefficient to roll out new features, offers, or capabilities, as each had to be implemented multiple times across different platforms.</p><p>Compounding the challenge was Liva&rsquo;s overreliance on third-party brokers for renewals. This not only made repeat business unpredictable but also prevented Liva from building direct relationships with policyholders. The lack of first-party data limited the brand&rsquo;s ability to make informed product or marketing decisions, while customer acquisition remained costly with minimal long-term impact.</p><p>For Liva&mdash;a multi-line insurer&mdash;owning the customer relationship was critical. It was the key to unlocking retention, enabling cross-sell opportunities, and staying ahead of digital-first competitors in an increasingly direct-to-customer market.</p>`,
    solution: `<p>A unified, modern experience that reimagined the entire motor insurance journey &mdash;standardizing across all customer segments while enabling full policy lifecycle management with flexibility to add new products and channels.&nbsp;</p><p><strong> Convenience at Scale </strong> : By integrating directly with the national vehicle licensing authority, customers could receive real-time quotes and complete purchases through a simplified two-step journey. One-click renewals and digital self-service options&mdash;such as canceling, transferring, or updating policies&mdash;were introduced for the first time, reducing dependency on offline channels and significantly improving customer convenience.</p>
                <p><strong> Control over the customer relationship. </strong> Policyholders could now renew directly with Liva instead of through brokers, enabling the insurer to retain repeat business and gather first-party data. With visibility, Liva could now target direct customers with precision and accuracy&mdash;driving acquisition efficiency and better campaign performance.</p>
                <p><strong> Expansion of distribution channels. </strong> Beyond D2C, it enabled Liva to expand its offerings to partners, brokers, and enterprise clients&mdash;all from the same standardized infrastructure. Existing relationships, such as with Omantel, were also leveraged&mdash;tailoring exclusive offerings for Omantel Green customers and enabling policy purchases using telecom credit lines and EMI (Equated Monthly Installment) options.&nbsp;</p>`,
    results: `<p>The modernization and expansion of Liva&rsquo;s platform delivered measurable impact across business outcomes - operations, growth, and customer engagement.</p>
<p><strong>Expanded customer base through direct renewals</strong><strong><br /></strong>A major outcome was the shift from broker-led to direct customer relationships. Many broker-acquired policyholders returned to renew directly with Liva, reducing acquisition costs and enabling the brand to build its own data-rich customer base.</p>
<p><strong>Access to underserved segments</strong><strong><br /></strong>By offering flexible payment options through Omantel and simplifying the digital journey, Liva reached new, previously underserved customer segments&mdash;broadening its market and driving long-term growth potential.</p>
<p><strong>Operational efficiencies through digitalization</strong><strong><br /></strong>Digitalizing policy lifecycle services streamlined internal processes, cut down manual workload, and accelerated turnaround times across quoting, renewal, and servicing. Sales teams were able to pursue leads and close more deals quicker.</p>
<p><strong>Enhanced customer experience</strong><strong><br /></strong>The self-service platform delivered a frictionless experience&mdash;making it easier for customers to manage policies end-to-end. This increased satisfaction, loyalty, and repeat engagement.</p>
<p><strong>Multi-channel scalability:</strong><strong><br /></strong>With support for enterprise clients, brokers, and direct sales from a single platform, Liva scaled its reach efficiently&mdash;enabling new business models and revenue streams without added complexity.</p>`,
    featuredImage: '/assets/imgs/d2c.png',
    images: [
      '/assets/imgs/quote.png',
      '/assets/imgs/driver.png',
      '/assets/imgs/success.png',
      '/assets/imgs/renew.png',
      '/assets/imgs/d2c.png',
    ],
    date: '2025-12-01'
  },
  {
    id: 'reimagining-product-experience',
    title: 'Reimagining product Experience',
    client: 'Abbott Diabetes Care',
    industry: 'Healthcare',
    services: ['Unify Brand experiences', 'Standardize Digital Portfolio', 'Expand Product Offerings'],
    summary: 'How Abbott FSL reimagined its product experience eco-system',
    challenge: "<p>Abbott's Freestyle Libre, a revolutionary continuous glucose monitoring (CGM) product, was already changing how patients manage diabetes. But market awareness around CGMs was still low, and physical FSL Experience Centers in KSA, UAE, Oman, and Egypt—set up for patient education and sales—were no longer scalable post-pandemic. </p><p>Abbott needed a digital path forward, but its traditional distribution model posed a major hurdle. Selling directly wasn't an option. Distributors operated large, siloed back-office systems, and past attempts to deploy an off-the-shelf D2D2C platform had failed due to rigid assumptions and lack of localization.</p>",
    solution: `<p>We launched a multi-market discovery and ecosystem mapping initiative, engaging end users, partners, and frontline stakeholders across the four target markets. Through in-depth user research and local partner interviews, we uncovered market-specific needs:</p>
                <ul>
                  <li>In Egypt, customers preferred monthly subscriptions</li>
                  <li>In Oman, convenience and home delivery were top priorities</li>
                  <li>In KSA, access was limited outside major cities</li>
                  <li>In UAE, customers wanted digital support and payment flexibility</li>
                </ul>
                <p>We translated these insights into a unified digital roadmap for the Freestyle Libre ecosystem, including:</p>
                <ul>
                  <li>Customer personas per market</li>
                  <li>Multi-market commerce platform architecture</li>
                  <li>POS, distributor, and end-user journey flows</li>
                  <li>Mockups for localized digital storefronts and service layers</li>
                </ul>
                <p>A flexible service design model that worked within Abbott&rsquo;s global brand and compliance constraints</p>`,
    results: `<ul>
                <li>Enabled Abbott to&nbsp;realize 1st-party customer&nbsp;data was possible for the first time</li>
                <li>Distributors&nbsp;could envision&nbsp;a new sales channel apart from the retail path to higher-margin digital sales</li>
                <li>Delivered a platform framework that balanced compliance, control, and local flexibility</li>
                <li>Abstracted back-office and logistical complexity through digital architecture</li>
                <li>Set the foundation for long-term, scalable D2D2C commerce across emerging markets</li>
              </ul>`,
    featuredImage: '/assets/imgs/fsl-cover.png',
    images: [
      '/assets/imgs/fsl-web.png',
      '/assets/imgs/fsl-dash.png',
      '/assets/imgs/fsl-ecomm.png',
      '/assets/imgs/fsl-pos.png',
      '/assets/imgs/fsl-web.png',
      '/assets/imgs/Customer-journey-map.png',
      '/assets/imgs/FSL-persona.png'
    ], 
    date: '2023-04-18'
  },
  {
    id: 'driving-multi-market-d2c-sales',
    title: 'Driving multi-market D2C sales',
    client: 'DAMAC Properties',
    industry: 'Real Estate',
    services: ['Expand Product Offerings', 'Scale Digital Experiences', 'Digitalize Product Lines'],
    summary: 'How DAMAC turned around a tradtional property selling model into a high-converting D2C sales engine',
    challenge: 'With a growing portfolio of properties across the Middle East markets, DAMAC was facing a backlog of unsold property units and overwhelmed sales teams chasing cold leads. The traditional model of roadshows, events, and offline sales meant delays, double bookings, and missed opportunities. DAMAC wanted to cut time-to-close, capture early buyer intent, and give its sales teams real-time visibility into available inventory—especially during international campaigns and events.',
    solution: 'We co-created and delivered a multi-market D2C mobile app that let customers view real-time unit availability, express interest, and reserve properties on the spot with a down payment. The platform served as a single source of truth for both customers and DAMAC sales teams, ensuring that inventory was always current, synced across geographies, and instantly bookable. This allowed DAMAC to pre-qualify leads, reduce sales friction, and experiment with a direct-to-customer sales model without overhauling their core systems.',
    results: `<ul>
                <li>
                  <p>📈 5x increase in qualified leads</p>
                </li>
                <li>
                  <p>🔁 2x improvement in conversion rates</p>
                </li>
                <li>
                  <p>🌍 Expanded reach across global markets and roadshows</p>
                </li>
                <li>
                  <p>📲 New D2C channel unlocked for faster, more direct sales</p>
                </li>
                <li>
                  <p>✅ Eliminated double-booking and inventory visibility gaps</p>
                </li>
              </ul>`,
    featuredImage: '/assets/imgs/damac-connect.png',
    images: [
      '/assets/imgs/damac-connect-property.jpeg',
      '/assets/imgs/damac-connect-search.jpeg',
      '/assets/imgs/damac-connect-sign-up.jpeg',
      '/assets/imgs/damac-connect.png'
    ],
    date: '2016-10-05'
  },
  {
    id: 'digital-policy-and-claims-using-ai',
    title: 'Digital policy and claims using AI',
    client: 'Liva Insurance (formerly RSA Insurance)',
    industry: 'Finance',
    services: ['Unify Brand experiences', 'Standardize Digital Portfolio', 'Expand Product Offerings'],
    summary: 'How RSA slashed compliance bottlenecks and unified policy & claims with one smart AI move',
    challenge: "Liva's policy issuance and claims processing journeys were fragmented due to differing compliance checks, legacy system silos, and inconsistent intake processes. Customers had to navigate entirely separate experiences for buying a policy and registering a claim—each with its own set of identity, ownership, and driver-related verifications. Internally, back-office systems operated in isolation, enforcing distinct business rules and document validation protocols. This not only created operational inefficiencies but also added friction to the customer experience.",
    solution: `<p>We designed and deployed a unified compliance intake platform that acts as a single point of entry across policy and claims journeys. At its core is an AI-powered OCR engine that standardizes, validates, and extracts key data from uploaded documents&mdash;regardless of source or system destination.</p>
                <ul>
                <li>The platform was built to be:</li>
                <li>Scalable across lines of business and use cases</li>
                <li>Portable for integration into both internal tools and customer-facing apps</li>
                <li>Extensible to support future regulatory or business requirements</li>
                </ul>
                <p>This eliminated the need for customers to repeat information or re-upload documents and dramatically reduced dependency on back-office teams for verification tasks. The result was a more fluid and consistent experience across products, powered by a shared compliance foundation.</p>`,
    results: `<ul>
                <li>Successfully integrated into 5+ internal back-office applications</li>
                <li>Fully embedded in motor insurance quote and buy flows</li>
                <li>Reduced manual verification load for operations teams</li>
                <li>Created a single, reusable compliance layer across multiple journeys</li>
                </ul>`,
    featuredImage: '/assets/imgs/kamal-cover.png',
    images: [
      '/assets/imgs/kamal-2.png',
      '/assets/imgs/kamal-3.png',
      '/assets/imgs/kamal-9.png',
      '/assets/imgs/kamal-1.png',
    ],
    date: '2023-06-22'
  },
  {
    id: 'how-abdul-latif-jameel-established-its-market-leadership',
    title: 'How Abdul Latif Jameel established its market leadership',
    client: 'Abdul Latif Jameel (Automotive & Diversified)',
    industry: 'Private Enterprise',
    services: ['Unify Brand experiences', 'Standardize Digital Portfolio', 'Expand Product Offerings'],
    summary: 'Staying ahead of evolving market trends in brand communications',
    challenge: `<p>As one of the oldest and most influential businesses in the MENA region, Abdul Latif Jameel (ALJ) had grown from a Toyota distributor into a global private enterprise with investments in real estate, renewable energy, finance, and advanced technologies. With such a broad and fast-evolving footprint, the leadership team needed a way to:</p>
                <ul>
                  <li>Showcase ALJ&rsquo;s global presence and impact to investors, governments, and manufacturing partners</li>
                  <li>Keep its international teams and executives informed of developments across regional markets</li>
                  <li>Do it all in a standardized, controlled, and brand-consistent way</li>
                </ul>
                <p>While ALJ had a strong website and social presence, it lacked a personalized, mobile-first channel to deliver tailored, timely insights.</p>`,
    solution: `<p>We developed the ALJ Insights mobile news digest app&mdash;a modern content channel tailored for global teams and strategic stakeholders.</p>
                <p>Key features included:</p>
                <ul>
                  <li>Curated news feeds based on region, sector, and role</li>
                  <li>Audio news and playlist-style updates</li>
                  <li>Real-time push notifications for important updates</li>
                  <li>CMS integration to allow cross-publishing from the ALJ web newsroom</li>
                </ul>
                <p>The solution gave ALJ a direct, data-driven content delivery channel that complemented its corporate presence while offering a more personalized, engaging experience.</p>`,
    results: `<ul>
                <li>
                  <p>📈 5x increase in engagement across content channels</p>
                </li>
                <li>
                  <p>📣 Significant amplification of strategic messaging and brand visibility</p>
                </li>
                <li>
                  <p>🚀 2.5% YoY growth in active readership</p>
                </li>
                <li>
                  <p>📱 1,000+ user sign-ups at launch</p>
                </li>
                <li>
                  <p>🌍 Launched in 2 languages for regional reach and relevance</p>
                </li>
              </ul>`,
    featuredImage: '/assets/imgs/ALJ-insights-cover.png',
    images: [
      '/assets/imgs/ALJ-Insights-action-panel.png',
      '/assets/imgs/ALJ-Insights-audio-news.png',
      '/assets/imgs/ALJ-Insights-home.png',
      '/assets/imgs/ALJ-Insights-media-gallery.png',
      '/assets/imgs/ALJ-Insights-news-playlist.png',
      '/assets/imgs/ALJ-Insights-swipe.png',
      '/assets/imgs/ALJ-Insights-voice-search.png',
      '/assets/imgs/ALJ-Insights-welcome.png',
    ],
    date: '2017-12-30'
  },
  {
    id: 'how-meraas-used-a-live-pilot-to-strategize-the-next-major-rewards-ecosystem',
    title: 'How MERAAS turned a live pilot to strategize for Dubai’s next major rewards ecosystem',
    client: 'Meraas Holding',
    industry: 'Private Enterprise',
    services: ['Pilot Emerging Tech', 'Standardize Digital Portfolio', 'Expand Product Offerings'],
    summary: 'Co-creating an idea to pilot for a new rewards eco-system program',
    challenge: `<p>Meraas is the developer behind some of Dubai&rsquo;s most iconic destinations&mdash;from Bluewaters Island to City Walk and La Mer. As both a major employer and leaseholder of commercial real estate, Meraas saw an opportunity to combine employee experience with ecosystem growth.</p>
                <p>The business goal was twofold:</p>
                <ul>
                  <li>Retain and engage talent with a meaningful rewards program</li>
                  <li>Pilot a future-facing retail loyalty ecosystem across its malls and venues</li>
                </ul>
                <p>However, there was no working product, no real customer data, and the business model was still evolving. Meraas needed a testable, measurable way to validate the concept internally before committing to a full-scale public rollout.</p>`,
    solution: `<p>We developed a mobile rewards app and rolled it out to select internal audiences&mdash;from executives to back-office staff. The platform allowed employees to:</p>
                <ul>
                  <li>Browse and redeem exclusive offers from 100+ participating retailers</li>
                  <li>Collect and spend points at Meraas-owned destinations</li>
                  <li>Share rewards with family members</li>
                  <li>Receive personalized deals based on preference and usage</li>
                </ul>
                <p>This closed-loop pilot provided an active testbed for engagement, merchant participation, and system performance.</p>`,
    results: `<ul>
                <li>📊 2x increase in footfall across key Meraas destinations</li>
                <li>📱 20% employee adoption rate within the pilot group</li>
                <li>🛍️ 100+ retail outlets onboarded across malls and shopping destinations</li>
                <li>🔍 Actionable data to inform future customer loyalty strategy</li>
              </ul>`,
    featuredImage: '/assets/imgs/my-meraas-cover.png',
    images: [
      '/assets/imgs/meraas-menu.jpeg',
      '/assets/imgs/meraas-offers.jpeg',
      '/assets/imgs/meraas-preferences.jpeg',
      '/assets/imgs/meraas-search.jpeg',
      '/assets/imgs/meraas-rewards.jpeg',
      '/assets/imgs/meraas-experiences.jpeg',
      '/assets/imgs/meraas-login.jpeg',
      '/assets/imgs/meraas-hero.png'
    ],
    date: '2017-12-30'
  }
];
