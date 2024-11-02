'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RecruiterHeader from '../../components/Recruiter/RecruiterHeader'; // Import the Recruiter header
import Footer from '../../components/Footer';
import AIHireBody from '../../components/Recruiter/AIHireBody'; // Import the AIHireBody component

const RecruiterAIHire = () => {
  const router = useRouter();

  // State to track active tab in header
  const [activeHeaderTab, setActiveHeaderTab] = useState('ai-hire');

  // Function to handle tab switch in the recruiter header
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveHeaderTab(tab);
    if (tab === 'contact') {
      router.push('/recruiter/RecruiterContact');
    } else if (tab === 'ai-hire') {
      router.push('/recruiter/RecruiterAIHire');
    } else if (tab === 'upcoming-interviews') {
      router.push('/recruiter/UpcomingInterviews');
    } else if (tab === 'profile') {
      router.push('/recruiter/recruiter/profile');
    }
  };

  useEffect(() => {
    setActiveHeaderTab('ai-hire'); // Set default tab as 'ai-hire'
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Recruiter Header with tab switching functionality */}
      <RecruiterHeader
        activeTab={activeHeaderTab}
        onTabSwitch={handleHeaderTabSwitch}
        userName="John Doe" // Pass the user's name for generating initials
      />
      <main className="flex-grow container mx-auto py-8 px-4">
        {/* AI Hire Body */}
        <AIHireBody />
      </main>
      <Footer />
    </div>
  );
};

export default RecruiterAIHire;
