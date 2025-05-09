
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import TeamMemberDrawer from '../components/about/TeamMemberDrawer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CtaSection from '../components/ui/CtaSection';
import SectionHeading from '../components/ui/SectionHeading';

// Define the TeamMember type to match what's expected by TeamMemberDrawer
interface TeamMember {
  name: string;
  role: string;
  bio: string;
  // Add any other required properties here
}

const About = () => {
  // Sample team member data
  const teamMember: TeamMember = {
    name: "John Doe",
    role: "CEO",
    bio: "John has over 15 years of experience in the industry."
  };

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="bg-brand-100 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl mb-8">We help enterprise brands scale digital portfolios across markets.</p>
          </div>
        </div>
      </section>

      {/* Team Section with TeamMemberDrawer */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberDrawer teamMember={teamMember} />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaSection 
        title="Want to join our team?"
        subtitle="We're always looking for talented individuals to join our growing team."
        buttonText="View Openings"
        buttonLink="/careers"
        secondaryButtonText="Contact Us"
        secondaryButtonLink="/contact"
      />
    </MainLayout>
  );
};

export default About;
