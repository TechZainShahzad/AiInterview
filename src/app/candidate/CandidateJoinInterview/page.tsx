'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import CandidateHeader from '../../components/Candidate/CandidateHeader';
import JoinInterviewBody from '../../components/Candidate/JoinInterviewBody';
import Footer from '../../components/Footer';

const CandidateJoinInterviewPage = () => {
  const router = useRouter();

  // State for the active tab (Contact, Join Interview, Profile)
  const [activeTab, setActiveTab] = useState('join-interview');

  // Handle header tab switch based on candidate header
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveTab(tab);

    // Navigate to respective pages based on the header tab
    if (tab === 'ai-interview') {
      router.push('/candidate/CandidateJoinInterview');
    } else if (tab === 'contact') {
      router.push('/candidate/Contact');
    } else if (tab === 'profile') {
      router.push('/candidate/profile');
    }
  };

  // Set the active tab to join-interview on initial load
  useEffect(() => {
    setActiveTab('join-interview');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Candidate Header */}
      <CandidateHeader
        activeTab={activeTab}
        onTabSwitch={handleHeaderTabSwitch}
        userName="Zain Ahmed" // You can dynamically fetch the user's name
      />
      
      {/* Main content with consistent margins */}
      <main className="flex-grow max-w-10xl mx-auto px-2">
        {/* Join Interview Body */}
        <JoinInterviewBody />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default CandidateJoinInterviewPage;
