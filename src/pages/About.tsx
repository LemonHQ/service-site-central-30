
import React, { useState } from 'react';
import MainLayout from '../components/layout/MainLayout';
import TeamMemberDrawer, { TeamMember } from '../components/about/TeamMemberDrawer';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import CtaSection from '../components/ui/CtaSection';
import SectionHeading from '../components/ui/SectionHeading';

const About = () => {
  // Sample team member data
  const teamMember: TeamMember = {
    name: "John Doe",
    role: "CEO",
    bio: "John has over 15 years of experience in the industry."
  };

  // State to control the drawer
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  // Function to open the drawer with a specific team member
  const openMemberDrawer = (member: TeamMember) => {
    setSelectedMember(member);
    setIsDrawerOpen(true);
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
            {/* Team member card that opens the drawer when clicked */}
            <div 
              className="cursor-pointer bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              onClick={() => openMemberDrawer(teamMember)}
            >
              <div className="mb-4 aspect-square overflow-hidden rounded-full">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80"
                  alt={teamMember.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-semibold text-xl">{teamMember.name}</h3>
              <p className="text-brand-500">{teamMember.role}</p>
              <p className="mt-2 text-gray-600 line-clamp-3">{teamMember.bio}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Pass the correct props to TeamMemberDrawer */}
      <TeamMemberDrawer 
        member={selectedMember} 
        open={isDrawerOpen} 
        onClose={() => setIsDrawerOpen(false)}
      />

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
