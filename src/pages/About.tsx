
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import CtaSection from '../components/ui/CtaSection';
import ProductJourney from '../components/homepage/ProductJourney';
import TeamMemberDrawer, { TeamMember } from '../components/about/TeamMemberDrawer';
import { 
  CheckCircle, Clock, Users, Lightbulb, Target 
} from 'lucide-react';

const About = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Team members with expanded data
  const teamMembers: TeamMember[] = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      bio: '15+ years of experience in digital product strategy for Fortune 500 companies.',
      fullBio: 'Sarah founded ElevateDigital in 2010 after leading digital transformation initiatives at several Fortune 500 companies. With an MBA from Harvard Business School and a background in computer science, she combines business acumen with deep technical knowledge to help enterprises navigate the complex digital landscape. Sarah is a frequent speaker at industry conferences and has been recognized as one of the Top 50 Women in Tech by Forbes.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=776&q=80',
      linkedin: 'https://linkedin.com/in/sarahjohnson',
      email: 'sarah.johnson@elevatedigital.com'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      bio: 'Former tech lead at major tech companies with expertise in enterprise architecture.',
      fullBio: 'Michael brings over 20 years of experience in enterprise software development and architecture. Before joining ElevateDigital, he was the VP of Engineering at a leading cloud services provider and previously held senior positions at Google and Microsoft. He specializes in scalable architecture, cloud infrastructure, and helping enterprises modernize their technology stacks. Michael holds a Ph.D. in Computer Science from MIT and has numerous patents in distributed systems.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
      linkedin: 'https://linkedin.com/in/michaelchen',
      email: 'michael.chen@elevatedigital.com'
    },
    {
      name: 'Alicia Rodriguez',
      role: 'Head of Design',
      bio: 'Award-winning designer specializing in brand identity and user experience design.',
      fullBio: "Alicia leads our design practice, bringing a unique blend of creative vision and strategic thinking to client projects. Her work has been recognized with multiple industry awards, including Red Dot and IDEA Design Awards. Before ElevateDigital, she was Design Director at a global branding agency, working with brands like Nike, Apple, and Coca-Cola. Alicia holds a Master's in Design from Rhode Island School of Design and teaches UX design at several leading universities.",
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80',
      linkedin: 'https://linkedin.com/in/aliciarodriguez',
      twitter: 'https://twitter.com/aliciarodesign',
      email: 'alicia.rodriguez@elevatedigital.com'
    },
    {
      name: 'David Park',
      role: 'Product Strategy Director',
      bio: 'Product strategy expert with experience launching over 30 successful enterprise products.',
      fullBio: "David specializes in product strategy and go-to-market planning for enterprise software and services. In his career spanning 18 years, he has helped launch over 30 successful products across fintech, healthcare, and retail sectors. Prior to ElevateDigital, David was a Senior Product Manager at Salesforce and a consultant with McKinsey's Digital Practice. He holds an MBA from Wharton and is certified in Agile and Design Thinking methodologies.",
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      linkedin: 'https://linkedin.com/in/davidpark',
      email: 'david.park@elevatedigital.com'
    }
  ];

  // Values
  const values = [
    {
      title: 'Innovation First',
      description: 'We challenge conventional thinking to create breakthrough solutions that drive real business value.'
    },
    {
      title: 'Client Partnership',
      description: 'We work as extensions of your team, aligning closely with your goals and culture.'
    },
    {
      title: 'Data-Driven Decisions',
      description: 'We base our strategies and recommendations on solid research and quantifiable metrics.'
    },
    {
      title: 'Quality Without Compromise',
      description: 'We maintain the highest standards in everything we deliver, from strategy to implementation.'
    }
  ];

  // Handle team member click
  const handleTeamMemberClick = (member: TeamMember) => {
    setSelectedTeamMember(member);
    setDrawerOpen(true);
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6">About ElevateDigital</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-100">
              We're a team of scaling experts enabling multi-product, multi-market enterprise brands create digital eco-system ready brands, product and customers experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Our Story" 
                subtitle="Founded in 2008, LemonHQ has grown from a boutique strategic digital consultancy to an eco-system digital partner for enterprise brands worldwide looking to launch, scale and expand their digital-firt portfolios."
              />
              <p className="text-gray-600 mb-6">
                Our journey began with a simple mission: to help businesses create digital-first products that truly serve their customers' needs today and tomorrow. Over the years, we've expanded our capabilities and expertise, but that core mission remains unchanged.
              </p>
              <p className="text-gray-600">
                Today, we work with leading enterprise brands across regulated sectors, bringing together strategic thinking, design excellence, and technical expertise to solve complex eco-system challenges and create exceptional digital-first experiences.
              </p>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 bg-gray-200 rounded-lg">
                {/* Replace with actual image */}
                <div className="w-full h-full bg-gray-300 rounded-lg"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-gray-50" id="approach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Approach" 
            subtitle="We combine strategic thinking, design excellence, and technical expertise to deliver exceptional results."
            centered
          />

          {/* Product Journey Section */}
          <ProductJourney />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="order-2 md:order-1 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <Clock className="w-10 h-10 text-brand-400 mb-4" />
                  <h3 className="font-semibold mb-2">Rapid Iteration</h3>
                  <p className="text-gray-600 text-sm">Fast feedback cycles for continuous improvement</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <Users className="w-10 h-10 text-brand-400 mb-4" />
                  <h3 className="font-semibold mb-2">User-Centered</h3>
                  <p className="text-gray-600 text-sm">Deep understanding of user needs drives decisions</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <Lightbulb className="w-10 h-10 text-brand-400 mb-4" />
                  <h3 className="font-semibold mb-2">Innovation Focus</h3>
                  <p className="text-gray-600 text-sm">Creative solutions to complex problems</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center text-center">
                  <Target className="w-10 h-10 text-brand-400 mb-4" />
                  <h3 className="font-semibold mb-2">Results-Driven</h3>
                  <p className="text-gray-600 text-sm">Clear focus on business outcomes</p>
                </div>
              </div>
            </div>
            
            <div className="order-1 md:order-2">
              <h3 className="text-2xl font-semibold mb-4 text-brand-700">A Holistic Method</h3>
              <p className="text-gray-600 mb-6">
                Our approach integrates strategic platform thinking with human-centered design and technological expertise. We don't just focus on what's possible today; we help you build for the future while delivering immediate value.
              </p>
              
              <div className="space-y-4 mb-6">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Collaborative partnership model with your team</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Data-backed insights that drive decisions</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Multi-stage product design to reduce risk</p>
                </div>
                
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-brand-400 mr-3 flex-shrink-0 mt-1" />
                  <p className="text-gray-600">Scalable solutions designed for digital enterprise needs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Values" 
            subtitle="The principles that guide our work and define our culture"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-500 font-semibold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-gray-50" id="team">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading 
            title="Our Leadership Team" 
            subtitle="Meet the experts who lead our client engagements and drive our company vision"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm transition-transform hover:scale-105 cursor-pointer"
                onClick={() => handleTeamMemberClick(member)}
              >
                <div className="h-48 bg-gray-300 overflow-hidden">
                  {member.image ? (
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover" 
                    />
                  ) : (
                    <div className="w-full h-full bg-gray-300"></div>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-brand-400 mb-3">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section className="section-padding" id="careers">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <SectionHeading 
                title="Join Our Team" 
                subtitle="We're always looking for talented individuals to help us create exceptional digital products."
              />
              <p className="text-gray-600 mb-6">
                At ElevateDigital, we foster a culture of innovation, collaboration, and continuous learning. Our team members work on challenging projects for leading brands, with opportunities to grow their skills and make a real impact.
              </p>
              <p className="text-gray-600 mb-6">
                We offer competitive compensation, flexible work arrangements, and a supportive environment where your ideas and contributions are valued.
              </p>
              <a href="#" className="btn-primary">
                View Open Positions
              </a>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-brand-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Benefits</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-400 mr-2" />
                    Competitive salary
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-400 mr-2" />
                    Health & wellness benefits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-400 mr-2" />
                    Remote work options
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-400 mr-2" />
                    Professional development
                  </li>
                </ul>
              </div>
              
              <div className="bg-brand-100 p-6 rounded-lg">
                <h4 className="font-semibold mb-2">Work Culture</h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-400 mr-2" />
                    Collaborative environment
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-400 mr-2" />
                    Innovation-focused
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-400 mr-2" />
                    Work-life balance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-brand-400 mr-2" />
                    Diverse & inclusive
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Ready to Work Together?"
        subtitle="Let's discuss how we can help transform your digital product strategy."
        buttonText="Get in Touch"
        buttonLink="/contact"
      />

      {/* Team Member Drawer */}
      <TeamMemberDrawer 
        member={selectedTeamMember}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </MainLayout>
  );
};

export default About;
