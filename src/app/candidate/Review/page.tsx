// pages/candidate/review/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '../../components/Footer';
import ReviewBody from '../../components/Candidate/ReviewBody';
import CandidateHeader from '../../components/Candidate/CandidateHeader';

const CandidateReview = () => {
  const router = useRouter();

  // State to track active tab in header
  const [activeHeaderTab, setActiveHeaderTab] = useState('ai-interview');

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
    setActiveHeaderTab('ai-interview'); // Set default tab as 'ai-interview'
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with tab switching functionality */}
      <CandidateHeader activeTab={activeHeaderTab} onTabSwitch={handleHeaderTabSwitch} userName="Zain Ahmed" />
      <main className="flex-grow container mx-auto px-4">
        <ReviewBody />
      </main>
      <Footer />
    </div>
  );
};

export default CandidateReview;
