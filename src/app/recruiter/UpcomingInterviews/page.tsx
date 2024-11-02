'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RecruiterHeader from '../../components/Recruiter/RecruiterHeader';
import UpcomingInterviewBody from '../../components/Recruiter/UpcomingInterviewBody';
import Footer from '../../components/Footer';

const UpcomingInterviews = () => {
  const router = useRouter();
  
  // State to track active tab in header
  const [activeHeaderTab, setActiveHeaderTab] = useState('upcoming-interviews');

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
    setActiveHeaderTab('upcoming-interviews'); // Set default tab as 'upcoming-interviews'
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
        {/* Upcoming Interview Body */}
        <h1 className="text-center text-2xl font-bold mb-4">Upcoming Interviews</h1>
        <UpcomingInterviewBody />
      </main>
      <Footer />
    </div>
  );
};

export default UpcomingInterviews;
