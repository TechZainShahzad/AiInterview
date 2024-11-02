// pages/candidate/contact/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';
import ContactForm from '../../components/ContactForm';
import CandidateHeader from '../../components/Candidate/CandidateHeader'; // Import the CandidateHeader


const CandidateContact = () => {
  const router = useRouter();

  // State to track active tab in header
  const [activeHeaderTab, setActiveHeaderTab] = useState('contact');

  // Function to handle tab switch in header
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveHeaderTab(tab);
    if (tab === 'contact') {
      router.push('/candidate/Contact');
    } else if (tab === 'join-interview') {
      router.push('/candidate/CandidateJoinInterview');
    } else if (tab === 'profile') {
      router.push('/candidate/profile');
    }
  };

  useEffect(() => {
    setActiveHeaderTab('contact'); // Set default tab as 'contact'
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with tab switching functionality */}
      <CandidateHeader activeTab={activeHeaderTab} onTabSwitch={handleHeaderTabSwitch} userName="Zain Ahmed" />
      <main className="flex-grow container mx-auto py-8 px-4">
        {/* Contact Form */}
        <h1 className="text-center text-2xl font-bold mb-4">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default CandidateContact;
