
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
      '/assets/imgs/renew.png'
    ],
    date: '2025-12-01'
  },
  {
    id: 'digital-policy-and-claims-using-ai',
    title: 'Digital policy and claims using AI',
    client: 'Liva Insurance (formerly RSA Insurance)',
    industry: 'Finance',
    services: ['Unify Brand experiences', 'Standardize Digital Portfolio', 'Expand Product Offerings'],
    summary: 'How RSA slashed compliance bottlenecks and unified policy & claims with one smart AI move',
    challenge: 'Liva’s policy issuance and claims processing journeys were fragmented due to differing compliance checks, legacy system silos, and inconsistent intake processes. Customers had to navigate entirely separate experiences for buying a policy and registering a claim—each with its own set of identity, ownership, and driver-related verifications. Internally, back-office systems operated in isolation, enforcing distinct business rules and document validation protocols. This not only created operational inefficiencies but also added friction to the customer experience.',
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
    featuredImage: '/assets/imgs/kamal-1.png',
    images: [
      '/assets/imgs/kamal-2.png',
      '/assets/imgs/kamal-3.png',
      '/assets/imgs/kamal-9.png'
    ],
    date: '2023-06-22'
  },
  {
    id: 'healthcare-patient-portal',
    title: 'Driving multi-market D2C sales',
    client: 'DAMAC Properties',
    industry: 'Healthcare',
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
      '/assets/imgs/damac-connect-sign-up.jpeg'
    ],
    date: '2023-10-05'
  },
  {
    id: 'smart-city-infrastructure',
    title: 'Smart City Infrastructure',
    client: 'Metropolitan Council',
    industry: 'Government',
    services: ['IoT Integration', 'Data Analytics', 'Mobile App Development'],
    summary: 'Developed an integrated smart city platform that improved traffic flow by 30% and reduced energy consumption across public buildings by 25%.',
    challenge: "The Metropolitan Council was facing increasing pressure to improve city services while reducing operational costs. Traffic congestion, energy efficiency, and public safety were major concerns for residents. They needed a technological solution that would make their city operations smarter and more responsive to citizens' needs.",
    solution: 'We designed and implemented a comprehensive smart city platform that integrated IoT sensors throughout the city infrastructure. This included smart traffic lights that adjusted to traffic patterns, energy management systems for public buildings, and a public safety network. We also developed a citizen-facing mobile app that provided real-time information and services to residents.',
    results: 'The implementation reduced traffic congestion by 30%, decreased energy consumption in public buildings by 25%, and improved emergency response times by 40%. The mobile app was downloaded by 65% of residents and has maintained a 4.7-star rating. The city has estimated annual savings of $4.2 million due to operational efficiencies.',
    testimonial: {
      quote: "This smart city initiative has transformed how we serve our citizens. We're now able to be proactive rather than reactive, addressing issues before they impact residents. The data we're collecting is also helping us make better long-term planning decisions.",
      author: 'Robert Williams',
      position: 'Mayor, Metropolitan City'
    },
    featuredImage: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb',
    images: [
      'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df',
      'https://images.unsplash.com/photo-1544085311-11a028465b03',
      'https://images.unsplash.com/photo-1525785967371-87ba44b3e6cf'
    ],
    date: '2023-04-18'
  }
];
