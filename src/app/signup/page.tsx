'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import TabSwitcher from '../components/TabSwitcher';
import OrganizationForm from '../components/OrganizationForm';
import CandidateForm from '../components/CandidateForm';
import SocialButton from '../components/Social-Button';

const Register = () => {
  const router = useRouter();

  // State for header active tab (for navigation buttons like signup, login, etc.)
  const [activeHeaderTab, setActiveHeaderTab] = useState('signup');

  // State for the form (candidate or organization)
  const [activeFormTab, setActiveFormTab] = useState('organization');

  // Handle form tab switch (candidate/organization)
  const handleFormTabSwitch = (tab: string) => {
    setActiveFormTab(tab); // This only switches candidate/organization form
  };

  // Handle header tab switch (like signup, login, etc.)
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveHeaderTab(tab);
    // Navigate to the respective page based on the header tab
    if (tab === 'signup') {
      router.push('/signup');
    } else if (tab === 'login') {
      router.push('/login');
    } else if (tab === 'pricing') {
      router.push('/pricing');
    } else if (tab === 'contact') {
      router.push('/contact');
    }
  };

  // Ensure the header tab is highlighted as 'signup' when visiting this page
  useEffect(() => {
    setActiveHeaderTab('signup');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeHeaderTab} onTabSwitch={handleHeaderTabSwitch} />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-center text-2xl font-bold mb-4">Create an account</h1>

        {/* Candidate/Organization tab switch */}
        <TabSwitcher activeTab={activeFormTab} onTabSwitch={handleFormTabSwitch} />
        <h2 className="text-center text-sm text-gray-400 mt-4">
          Required fields are marked with <span className="text-red-500">*</span>
        </h2>
        <div className="mx-auto my-6 max-w-lg">
          {activeFormTab === 'organization' ? <OrganizationForm /> : <CandidateForm />}
        </div>

        {/* Line separator */}
        <div className="flex flex-col items-center my-6 mx-auto max-w-lg">
          <div className="flex items-center justify-center w-full">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="text-sm text-gray-500 mx-4">or continue with</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>
        </div>

        {/* Social buttons */}
        <div className="flex flex-col items-center space-y-3 mx-auto my-6 max-w-lg">
          <SocialButton label="Sign in with Google" className="w-full" />
          <SocialButton label="Sign in with Microsoft" className="w-full" />
        </div>

        {/* Footer text */}
        <p className="text-center text-sm text-gray-500 mx-auto my-4 max-w-lg">
          By continuing, you agree to our{' '}
          <span className="text-blue-600 cursor-pointer">Terms of Service</span> and{' '}
          <span className="text-blue-600 cursor-pointer">Privacy Policy</span>.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
