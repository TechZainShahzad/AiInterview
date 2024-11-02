'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrganizationHeader from '../../components/Organization/OrganizationHeader'; // Import the new header
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';

const OrganizationContact = () => {
  const router = useRouter();
  
  // State to track active tab in header
  const [activeHeaderTab, setActiveHeaderTab] = useState('contact');

  // Function to handle tab switch in the organization header
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveHeaderTab(tab);
    if (tab === 'contact') {
      router.push('/organization/OrganizationContact');
    } else if (tab === 'manage-recruiters') {
      router.push('/organization/OrganizationManageRecruiter');
    } else if (tab === 'plans-billing') {
      router.push('/organization/OrganizationPlanAndBilling');
    } else if (tab === 'profile') {
      router.push('/organization/organization/profile');
    }
  };

  useEffect(() => {
    setActiveHeaderTab('contact'); // Set default tab as 'contact'
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Organization Header with tab switching functionality */}
      <OrganizationHeader
        activeTab={activeHeaderTab}
        onTabSwitch={handleHeaderTabSwitch}
        userName="John Doe" // Pass the user's name for generating initials
      />
      <main className="flex-grow container mx-auto py-8 px-4">
        {/* Contact Form */}
        <h1 className="text-center text-2xl font-bold mb-4">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default OrganizationContact;
