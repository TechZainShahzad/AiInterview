'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginTabSwitcher from '../components/LoginTabSwitcher';
import CandidateLoginForm from '../components/CandidateLoginForm';
import RecruiterLoginForm from '../components/RecruiterLoginForm';
import OrganizationLoginForm from '../components/OrganizationLoginForm';
import SocialButton from '../components/Social-Button';
import ForgotPasswordForm from '../components/ForgotPasswordForm'; // New form for forgot password

const Login = () => {
  const router = useRouter();

  // State for header active tab (e.g., signup, login, etc.)
  const [activeHeaderTab, setActiveHeaderTab] = useState('login');

  // State for the form tab (candidate, recruiter, organization)
  const [activeFormTab, setActiveFormTab] = useState('candidate');

  // State to check if we are in forgot password mode
  const [isForgotPassword, setIsForgotPassword] = useState(false);

  // Handle form tab switch (candidate/recruiter/organization)
  const handleFormTabSwitch = (tab: string) => {
    setActiveFormTab(tab); // Switch between the 3 forms
    setIsForgotPassword(false); // Reset to normal form when switching tabs
  };

  // Handle forgot password click to toggle form
  const handleForgotPassword = () => {
    setIsForgotPassword(true); // Show forgot password form
  };

  // Handle header tab switch (like signup, login, etc.)
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveHeaderTab(tab);
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

  useEffect(() => {
    setActiveHeaderTab('login');
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeHeaderTab} onTabSwitch={handleHeaderTabSwitch} />
      <main className="flex-grow container mx-auto py-8 px-4">
        {/* Dynamic Title */}
        <h1 className="text-center text-2xl font-bold mb-4">
          {isForgotPassword ? 'Forgot Password' : 'Login to your account'}
        </h1>

        <LoginTabSwitcher activeTab={activeFormTab} onTabSwitch={handleFormTabSwitch} />
        <h2 className="text-center text-sm text-gray-400 mt-4">
          Required fields are marked with <span className="text-red-500">*</span>
        </h2>
        <div className="mx-auto my-6 max-w-lg">
          {/* Check if we're in forgot password mode */}
          {isForgotPassword ? (
            <ForgotPasswordForm />
          ) : (
            <>
              {activeFormTab === 'candidate' && <CandidateLoginForm onForgotPassword={handleForgotPassword} />}
              {activeFormTab === 'recruiter' && <RecruiterLoginForm onForgotPassword={handleForgotPassword} />}
              {activeFormTab === 'organization' && <OrganizationLoginForm onForgotPassword={handleForgotPassword} />}
            </>
          )}
        </div>

        {!isForgotPassword && (
          <>
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
          </>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Login;
