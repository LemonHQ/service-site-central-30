
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
    id: 'expanding-and-standardizing-motor-insurance-for-a-digital-future',
    title: 'Expanding and standardizing motor insurance for a digital future',
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
    id: 'e-commerce-platform-redesign',
    title: 'E-Commerce Platform Redesign',
    client: 'Retail Universe',
    industry: 'Retail',
    services: ['UI/UX Design', 'Web Development', 'Conversion Optimization'],
    summary: 'Completely reimagining the digital shopping experience for a major retailer, resulting in a 65% increase in conversion rates and 40% boost in average order value.',
    challenge: 'Retail Universe was experiencing high cart abandonment rates and poor mobile conversion. Their e-commerce platform was difficult to navigate, slow to load, and didn\'t effectively showcase their products. They needed a complete redesign that would improve the customer journey and increase sales.',
    solution: 'Our team conducted extensive user research and developed a completely new e-commerce experience. We redesigned the product browsing and checkout flows, implemented a responsive design optimized for all devices, and integrated advanced product recommendation algorithms. We also rebuilt the backend infrastructure to improve page load times and handle high traffic volumes.',
    results: 'The new platform launched with immediate positive impact. Conversion rates increased by 65%, average order value grew by 40%, and mobile purchases doubled. Page load times were reduced by 60%, and the improved search functionality led to customers finding products 3x faster.',
    testimonial: {
      quote: "Our customers have been raving about the new shopping experience. It's intuitive, fast, and actually makes shopping online enjoyable. The metrics speak for themselves – this redesign has transformed our business.",
      author: 'Michael Chen',
      position: 'VP of Digital, Retail Universe'
    },
    featuredImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      'https://images.unsplash.com/photo-1551239262-61cf00f7f55d'
    ],
    date: '2023-06-22'
  },
  {
    id: 'healthcare-patient-portal',
    title: 'Healthcare Patient Portal',
    client: 'MediCare Health Network',
    industry: 'Healthcare',
    services: ['Application Development', 'UX Research', 'Systems Integration'],
    summary: 'Created an intuitive patient portal for a leading healthcare provider that improved patient engagement and streamlined administrative processes.',
    challenge: 'MediCare Health Network was struggling with patient engagement and administrative overhead. Patients had difficulty accessing their medical records, scheduling appointments, and communicating with their healthcare providers. Staff were overwhelmed with paperwork and manual processes, leading to inefficiencies and frustration.',
    solution: 'We developed a comprehensive patient portal that integrated with their existing electronic health record system. The portal included features for appointment scheduling, secure messaging with providers, prescription refill requests, and access to test results and medical records. We conducted extensive usability testing with patients of all ages to ensure the interface was intuitive for everyone.',
    results: 'The patient portal led to a 70% reduction in phone calls for appointment scheduling, a 50% decrease in no-show appointments, and a 90% patient satisfaction rating. Staff reported saving an average of 15 hours per week on administrative tasks, allowing them to focus more on patient care.',
    testimonial: {
      quote: "This patient portal has transformed how we interact with patients. The interface is so intuitive that even our elderly patients have adopted it enthusiastically. It's improved care coordination and patient satisfaction dramatically.",
      author: 'Dr. Lisa Patel',
      position: 'Chief Medical Officer, MediCare Health Network'
    },
    featuredImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7',
    images: [
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
      'https://images.unsplash.com/photo-1526256262350-7da7584cf5eb',
      'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d'
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
