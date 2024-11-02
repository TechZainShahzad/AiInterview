'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import RecruiterHeader from '../../components/Recruiter/RecruiterHeader';
import Footer from '../../components/Footer';
import CandidateReportBody from '../../components/Recruiter/CandidateReport';

const CandidateReportPage = () => {
  const router = useRouter();

  // State to track active tab in header
  const [activeHeaderTab, setActiveHeaderTab] = useState('candidate-report');

  // Function to handle tab switching in the recruiter header
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
    } else if (tab === 'candidate-report') {
      router.push('/recruiter/CandidateReport');
    }
  };

  useEffect(() => {
    setActiveHeaderTab('candidate-report'); // Set default tab as 'candidate-report'
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
        {/* Candidate Report Body */}
        <CandidateReportBody />
      </main>
      <Footer />
    </div>
  );
};

export default CandidateReportPage;
