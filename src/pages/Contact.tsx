
import React from 'react';
import MainLayout from '../components/layout/MainLayout';
import ContactHero from '@/components/contact/ContactHero';
import ContactSection from '@/components/contact/ContactSection';

const Contact = () => {
  return (
    <MainLayout>
      <ContactHero />
      <ContactSection />
    </MainLayout>
  );
};

export default Contact;
