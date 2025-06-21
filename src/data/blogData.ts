
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  featuredImage: string;
  publishDate: string;
  date: string;
  readTime: number;
  category: string;
  tags: string[];
  author: {
    name: string;
    avatar: string;
    role: string;
  };
}

export const blogPosts: BlogPost[] = [
  {
    id: "future-of-digital-transformation",
    title: "The Future of Digital Transformation in Enterprise",
    excerpt: "Exploring emerging trends and technologies shaping the next decade of enterprise digital transformation.",
    content: `
      <p>Digital transformation continues to evolve at an unprecedented pace, with enterprises worldwide adapting to new technologies and changing market demands.</p>
      
      <h3>Key Trends Shaping the Future</h3>
      <p>From AI-powered automation to edge computing, enterprises are leveraging cutting-edge technologies to create competitive advantages.</p>
      
      <h3>The Role of Leadership</h3>
      <p>Successful digital transformation requires strong leadership and a clear vision for the future of the organization.</p>
      
      <h3>Challenges and Opportunities</h3>
      <p>While challenges exist, the opportunities for growth and innovation through digital transformation are immense.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-15",
    date: "2024-01-15",
    readTime: 8,
    category: "Digital Strategy",
    tags: ["Digital Transformation", "Enterprise", "Strategy", "Innovation"],
    author: {
      name: "Sarah Johnson",
      avatar: "/assets/imgs/abdul-profile.jpg",
      role: "Digital Strategy Lead"
    }
  },
  {
    id: "consulting-industry-evolution",
    title: "How Consulting Firms Are Evolving in the Digital Age",
    excerpt: "An analysis of how traditional consulting firms are adapting their methodologies for digital-first enterprises.",
    content: `
      <p>The consulting industry is undergoing a significant transformation as firms adapt to serve digital-native clients and embrace new methodologies.</p>
      
      <h3>Traditional vs Digital Consulting</h3>
      <p>Legacy consulting approaches are being reimagined to address the speed and complexity of modern digital challenges.</p>
      
      <h3>New Partnership Models</h3>
      <p>Consulting firms are developing deeper, more collaborative relationships with their enterprise clients.</p>
      
      <h3>Technology Integration</h3>
      <p>The integration of advanced analytics, AI, and automation is becoming central to consulting delivery models.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-12",
    date: "2024-01-12",
    readTime: 6,
    category: "Industry Analysis",
    tags: ["Consulting", "Digital Transformation", "Partnership", "Innovation"],
    author: {
      name: "Mark Thompson",
      avatar: "/assets/imgs/husain-profile.jpg",
      role: "Industry Analyst"
    }
  },
  {
    id: "innovation-frameworks-2024",
    title: "Innovation Frameworks for Enterprise Scale",
    excerpt: "Proven frameworks and methodologies for driving innovation at enterprise scale in 2024 and beyond.",
    content: `
      <p>Innovation at enterprise scale requires structured approaches and proven frameworks that can deliver consistent results.</p>
      
      <h3>Structured Innovation Processes</h3>
      <p>Successful enterprises are implementing systematic approaches to innovation that balance creativity with execution.</p>
      
      <h3>Cross-Functional Collaboration</h3>
      <p>Breaking down silos and fostering collaboration across departments is essential for innovation success.</p>
      
      <h3>Measuring Innovation Impact</h3>
      <p>Developing metrics and KPIs to track innovation outcomes and ROI is crucial for sustained investment.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-10",
    date: "2024-01-10",
    readTime: 7,
    category: "Innovation",
    tags: ["Innovation", "Enterprise", "Frameworks", "Strategy"],
    author: {
      name: "Dr. Emily Chen",
      avatar: "/assets/imgs/abdul-profile.jpg",
      role: "Innovation Consultant"
    }
  },
  {
    id: "digital-leadership-skills",
    title: "Essential Skills for Digital Transformation Leaders",
    excerpt: "The key competencies and skills that digital transformation leaders need to succeed in today's enterprise environment.",
    content: `
      <p>Digital transformation leadership requires a unique blend of technical understanding, strategic thinking, and people management skills.</p>
      
      <h3>Technical Acumen</h3>
      <p>Leaders need sufficient technical knowledge to make informed decisions about technology investments and capabilities.</p>
      
      <h3>Change Management</h3>
      <p>Successfully leading digital transformation requires expertise in organizational change management and culture transformation.</p>
      
      <h3>Strategic Vision</h3>
      <p>The ability to translate business strategy into digital initiatives is fundamental to transformation success.</p>
    `,
    featuredImage: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
    publishDate: "2024-01-08",
    date: "2024-01-08",
    readTime: 5,
    category: "Leadership",
    tags: ["Leadership", "Skills", "Digital Transformation", "Management"],
    author: {
      name: "Robert Williams",
      avatar: "/assets/imgs/husain-profile.jpg",
      role: "Transformation Lead"
    }
  }
];
