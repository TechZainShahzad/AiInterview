'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import OrganizationHeader from '../../components/Organization/OrganizationHeader'; // Import the new header
import Footer from '../../components/Footer'; // Import your existing footer component
import PlanAndBillingBody from '../../components/Organization/PlanAndBillingBody'; // Import the PlanAndBillingBody component we created earlier

const PlansAndBilling = () => {
  const router = useRouter();
  
  // State to track the active tab
  const [activeHeaderTab, setActiveHeaderTab] = useState('plans-billing');

  // Function to handle tab switching in the OrganizationHeader component
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

  // Effect to set the initial active tab as 'plans-billing'
  useEffect(() => {
    setActiveHeaderTab('plans-billing');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* OrganizationHeader with tab-switching */}
      <OrganizationHeader
        activeTab={activeHeaderTab}
        onTabSwitch={handleHeaderTabSwitch}
        userName="Zain Shahzad" // Placeholder for the user's name, pass actual user name from props/context if available
      />

      {/* Main Content */}
      <main className="flex-grow container mx-auto py-8 px-4">
        <PlanAndBillingBody /> {/* The body content for the Plan and Billing section */}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PlansAndBilling;
