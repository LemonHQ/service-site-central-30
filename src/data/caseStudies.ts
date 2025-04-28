
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
    id: 'global-bank-digital-transformation',
    title: 'Global Bank Digital Transformation',
    client: 'First Global Bank',
    industry: 'Banking & Finance',
    services: ['UX Design', 'Mobile Development', 'Cloud Migration'],
    summary: 'Helping a leading global bank transform their customer experience with a modern digital banking platform that increased mobile transactions by 230%.',
    challenge: 'First Global Bank was struggling with an outdated digital infrastructure that was causing customer dissatisfaction and limiting growth. Their legacy systems were unable to support modern banking features, and their mobile app had poor ratings. They needed a complete digital transformation to remain competitive in an increasingly digital banking landscape.',
    solution: 'We implemented a comprehensive digital transformation strategy, rebuilding their entire digital banking ecosystem from the ground up. This included redesigning the user experience, developing new mobile applications for iOS and Android, and migrating their core banking services to a cloud-based infrastructure. We also implemented a microservices architecture to ensure scalability and future flexibility.',
    results: 'Within six months of launch, the bank saw a 230% increase in mobile transactions, a 45% reduction in customer service calls, and their app rating improved from 2.3 to 4.8 stars. Customer satisfaction scores increased by 35%, and the bank was able to launch new features at 4x their previous speed.',
    testimonial: {
      quote: 'The digital transformation executed by Elevate Digital has fundamentally changed how we serve our customers. We're now seen as an innovation leader in the banking sector.',
      author: 'Sarah Johnson',
      position: 'CTO, First Global Bank'
    },
    featuredImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
    images: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3',
      'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f',
      'https://images.unsplash.com/photo-1622675363311-3e1904dc1885'
    ],
    date: '2023-08-15'
  },
  {
    id: 'e-commerce-platform-redesign',
    title: 'E-Commerce Platform Redesign',
    client: 'Retail Universe',
    industry: 'Retail',
    services: ['UI/UX Design', 'Web Development', 'Conversion Optimization'],
    summary: 'Completely reimagining the digital shopping experience for a major retailer, resulting in a 65% increase in conversion rates and 40% boost in average order value.',
    challenge: 'Retail Universe was experiencing high cart abandonment rates and poor mobile conversion. Their e-commerce platform was difficult to navigate, slow to load, and didn't effectively showcase their products. They needed a complete redesign that would improve the customer journey and increase sales.',
    solution: 'Our team conducted extensive user research and developed a completely new e-commerce experience. We redesigned the product browsing and checkout flows, implemented a responsive design optimized for all devices, and integrated advanced product recommendation algorithms. We also rebuilt the backend infrastructure to improve page load times and handle high traffic volumes.',
    results: 'The new platform launched with immediate positive impact. Conversion rates increased by 65%, average order value grew by 40%, and mobile purchases doubled. Page load times were reduced by 60%, and the improved search functionality led to customers finding products 3x faster.',
    testimonial: {
      quote: 'Our customers have been raving about the new shopping experience. It's intuitive, fast, and actually makes shopping online enjoyable. The metrics speak for themselves – this redesign has transformed our business.',
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
      quote: 'This patient portal has transformed how we interact with patients. The interface is so intuitive that even our elderly patients have adopted it enthusiastically. It's improved care coordination and patient satisfaction dramatically.',
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
    challenge: 'The Metropolitan Council was facing increasing pressure to improve city services while reducing operational costs. Traffic congestion, energy efficiency, and public safety were major concerns for residents. They needed a technological solution that would make their city operations smarter and more responsive to citizens' needs.',
    solution: 'We designed and implemented a comprehensive smart city platform that integrated IoT sensors throughout the city infrastructure. This included smart traffic lights that adjusted to traffic patterns, energy management systems for public buildings, and a public safety network. We also developed a citizen-facing mobile app that provided real-time information and services to residents.',
    results: 'The implementation reduced traffic congestion by 30%, decreased energy consumption in public buildings by 25%, and improved emergency response times by 40%. The mobile app was downloaded by 65% of residents and has maintained a 4.7-star rating. The city has estimated annual savings of $4.2 million due to operational efficiencies.',
    testimonial: {
      quote: 'This smart city initiative has transformed how we serve our citizens. We're now able to be proactive rather than reactive, addressing issues before they impact residents. The data we're collecting is also helping us make better long-term planning decisions.',
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
