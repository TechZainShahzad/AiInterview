'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrganizationHeader from '../../components/Organization/OrganizationHeader';
import ManageRecruiters from '../../components/Organization/ManageRecruitersBody';
import Footer from '../../components/Footer';

export default function ManageRecruitersMainPage() {
  const router = useRouter();

  // State for the active tab (like in the reference code)
  const [activeTab, setActiveTab] = useState('manage-recruiters');

  // Handle header tab switch
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveTab(tab);
    
    // Switch pages based on the selected tab
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

  // Set the active tab to 'manage-recruiters' on load
  useEffect(() => {
    setActiveTab('manage-recruiters');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Organization Header */}
      <OrganizationHeader activeTab={activeTab} onTabSwitch={handleHeaderTabSwitch} userName="Zain Ahmed" />
      
      {/* Main Content: Manage Recruiters */}
      <main className="flex-grow max-w-10xl mx-auto px-2">
        <ManageRecruiters /> {/* ManageRecruiters Component */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
