import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import SectionHeading from '../components/ui/SectionHeading';
import CtaSection from '../components/ui/CtaSection';
import ProductJourney from '../components/homepage/ProductJourney';
import TeamMemberDrawer, { TeamMember } from '../components/about/TeamMemberDrawer';
import { CheckCircle, Clock, Users, Lightbulb, Target, Image } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const About = () => {
  const [selectedTeamMember, setSelectedTeamMember] = useState<TeamMember | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  // Team members with expanded data
  const teamMembers: TeamMember[] = [{
    name: 'Husain Mohsin',
    role: 'Enterprise Partner',
    bio: '20+ years of experience lauching and expanding product portfolios for enterprise brands to new markets.',
    fullBio: 'With a proven track record in driving brand and product digitalization, Husain works with enterprise brand, product and market leaders to expand their digital presence, optimize their strategies, and scale effectively across diverse markets. His expertise spans across the digital landscape, from leveraging data-driven insights and a comprehensive understanding of global business dynamics, Husain ensures that brands not only grow but thrive in competitive digital ecosystems. His focus on innovation, efficiency and sustainable growth makes him a trusted ally for brands looking to expand their footprint and innovate with new business models. Through customized strategies and scalable solutions, Husain supports enterprises in building lasting relationships with their customers, growing their digital assets, and achieving long-term success across multiple markets.',
    image: '/assets/imgs/husain-mohsin-profile-pic-old.png',
    linkedin: 'https://www.linkedin.com/in/husainmohsin/',
    email: 'h.mohsin@lemonhq.co.uk'
  }, {
    name: 'Abdul Majeed',
    role: 'Digital Product Expert',
    bio: 'Former enterprise solutions architect at major tech companies with expertise in enterprise digital portfolios.',
    fullBio: 'Abdul Majeed is a seasoned Digital Product Expert with extensive experience in accelerating goto market of digital products. His expertise spans across the entire product lifecycle—from ideation and design to development and launch—allowing him to craft digital solutions that are both functional and forward-thinking. Abdul Majeed is known for his strategic approach, always focused on driving growth, enhancing user engagement, and optimizing product performance. With a strong background in data-driven decision-making and agile methodologies, Abdul Majeed brings efficiency and clarity to complex digital product challenges. His ability to navigate the ever-evolving digital landscape makes him a valuable partner for businesses aiming to stay ahead of the curve and deliver exceptional digital products to the market..',
    image: '/assets/imgs/Abdul-Majeed-Abdul-Hameed.jpeg',
    linkedin: 'https://www.linkedin.com/in/abdul-majeed-abdul-hameed-73396918/',
    email: 'a.majeed@lemonhq.co.uk'
  },{/*} {
    name: 'Mustafa Turab Ali',
    role: 'Digital scaling advisor',
    bio: 'Award-winning designer specializing in brand identity and user experience design.',
    fullBio: "With a deep understanding of both the technical and operational aspects of scaling digital solutions, Mustafa Ali helps businesses enhance the performance, reliability, and scalability of their software products. He works closely with organizations to ensure that their digital products can seamlessly scale to meet the demands of a growing user base, all while maintaining the highest standards of quality. Whether working on large-scale systems or guiding companies through the challenges of digital transformation, Mustafa Ali ensures that businesses are equipped with the tools and strategies needed to scale effectively while maintaining a seamless user experience. His commitment to excellence and quality makes him a trusted advisor for organizations looking to accelerate their growth in the digital space.",
    image: '/assets/imgs/Mustafa-turab-ali.jpeg',
    linkedin: 'https://www.linkedin.com/in/mustafaturabali82/',
    email: 'm.ali@lemonhq.co.uk'
  }*/} ];

  // Values
  const values = [{
    title: 'Innovation First',
    description: 'We challenge conventional thinking to create breakthrough solutions that drive real business value.'
  }, {
    title: 'Client Partnership',
    description: 'We work as extensions of your team, aligning closely with your goals and culture.'
  }, {
    title: 'Data-Driven Decisions',
    description: 'We base our strategies and recommendations on solid research and quantifiable metrics.'
  }, {
    title: 'Quality Without Compromise',
    description: 'We maintain the highest standards in everything we deliver, from strategy to implementation.'
  }];

  // Handle team member click
  const handleTeamMemberClick = (member: TeamMember) => {
    setSelectedTeamMember(member);
    setDrawerOpen(true);
  };
  return <MainLayout>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-700 to-brand-600 text-white py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="mb-6 font-thin text-slate-50">About LemonHQ</h1>
            <p className="text-xl md:text-2xl mb-8 text-brand-100">
            We have a global footprint with distributed teams across multiple regions, enabling us to seamlessly collaborate with clients anywhere in the world while providing localized expertise at scale.
              {/*We're a team of scaling experts enabling multi-product, multi-market enterprise brands create digital eco-system ready brands, product and customers experiences.*/}
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <SectionHeading title="Our Story" subtitle="Founded in 2008, LemonHQ has grown from a boutique strategic digital consultancy to an eco-system digital partner for enterprise brands worldwide looking to launch, scale and expand their digital-firt portfolios." />
              <p className="text-gray-600 mb-6">
                Our journey began with a simple mission: to help businesses create digital-first products that truly serve their customers' needs today and tomorrow. Over the years, we've expanded our capabilities and expertise, but that core mission remains unchanged.
              </p>
              <p className="text-gray-600">
                Today, we work with leading enterprise brands across regulated sectors, bringing together strategic thinking, design excellence, and technical expertise to solve complex eco-system challenges and create exceptional digital-first experiences.
              </p>
            </div>
            
            <div className="relative">
              <Card className="overflow-hidden rounded-xl shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Team collaboration" 
                  className="w-full h-full object-cover aspect-[4/3]"
                />
              </Card>
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-brand-200 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="section-padding bg-gray-50" id="approach">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Approach" subtitle="We combine strategic thinking, design excellence, and technical expertise to deliver exceptional results." centered />

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
          <SectionHeading title="Our Values" subtitle="The principles that guide our work and define our culture" centered />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => <div key={index} className="bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                <div className="w-10 h-10 bg-brand-100 rounded-full flex items-center justify-center mb-4">
                  <span className="text-brand-500 font-semibold">{index + 1}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Team Section - Unhide as requested */}
      <section className="section-padding bg-gray-50" id="team">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Our Team" subtitle="Meet the scaling experts leading digitalization" centered />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {teamMembers.map((member, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-shadow cursor-pointer"
                onClick={() => handleTeamMemberClick(member)}
              >
                <div className="aspect-w-3 aspect-h-4 relative overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-64 object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-xl mb-1">{member.name}</h3>
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
              <SectionHeading title="Join Our Team" subtitle="We're always looking for talented individuals to help us create exceptional digital products." />
              <p className="text-gray-600 mb-6">
                At LemonHQ, we foster a culture of innovation, collaboration, and continuous learning. Our team members work on challenging projects for leading brands, with opportunities to grow their skills and make a real impact.
              </p>
              <p className="text-gray-600 mb-6">
                We offer competitive compensation, flexible work arrangements, and a supportive environment where your ideas and contributions are valued.
              </p>
              <Link to="/cv-submission" className="btn-primary">
                Submit Your CV
              </Link>
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

      {/* CTA Section - Updated to open dialog instead of navigating */}
      <CtaSection 
        title="Talk to us today to explore what's possible?" 
        subtitle="Schedule a one to one connect with our scaling expert" 
        buttonText="Book a Meeting" 
        secondaryButtonText="Contact Us" 
        secondaryButtonLink="/contact" 
      />

      {/* Team Member Drawer - Keep this for potential future use */}
      <TeamMemberDrawer member={selectedTeamMember} open={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </MainLayout>;
};
export default About;
