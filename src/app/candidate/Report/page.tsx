'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Footer from '@/app/components/Footer';
import ReportBody from '@/app/components/Candidate/ReportBody';
import CandidateHeader from '@/app/components/Candidate/CandidateHeader';

const CandidateReport = () => {
  const router = useRouter();

  // State to track active tab in header
  const [activeHeaderTab, setActiveHeaderTab] = useState('report');

  // Function to handle tab switch in header
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveHeaderTab(tab);
    if (tab === 'contact') {
      router.push('/candidate/Contact');
    } else if (tab === 'join-interview') {
      router.push('/candidate/Report');
    } else if (tab === 'profile') {
      router.push('/candidate/profile');
    }
  };

  useEffect(() => {
    setActiveHeaderTab('report'); // Set default tab as 'report'
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with tab switching functionality */}
      <CandidateHeader activeTab={activeHeaderTab} onTabSwitch={handleHeaderTabSwitch} userName="Zain Ahmed" />
      <main className="flex-grow container mx-auto px-4 py-8">
        <ReportBody />
      </main>
      <Footer />
    </div>
  );
};

export default CandidateReport;
