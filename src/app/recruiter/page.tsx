'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from '../components/HeroSection';
import SectionWithImage from '../components/SectionWithImage';
import FeatureSection from '../components/FeaturesSection';
import Footer from '../components/Footer';
import RecruiterHeader from '../components/Recruiter/RecruiterHeader';

export default function RecruiterMainPage() {
  const router = useRouter();

  // State for the active tab (Contact, AI-Hire, etc.)
  const [activeTab, setActiveTab] = useState('home');

  // Handle header tab switch based on recruiter header
  const handleHeaderTabSwitch = (tab: string) => {
    setActiveTab(tab);
    
    // Navigate to respective pages based on the header tab
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

  // Set the active tab to home on initial load (if applicable)
  useEffect(() => {
    setActiveTab('home');
  }, []);

  // Handler for the "Get Started" buttons to navigate to another page
  const handleGetStartedClick = () => {
    router.push('/login'); // This can be updated if "Get Started" should lead to another page
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Recruiter Header */}
      <RecruiterHeader activeTab={activeTab} onTabSwitch={handleHeaderTabSwitch} userName="Zain Ahmed" />
      
      {/* Main content with consistent margins */}
      <main className="flex-grow max-w-10xl mx-auto px-2">
        {/* Hero Section */}
        <HeroSection />

        {/* Section 1: Smart AI Tool to accelerate hiring */}
        <SectionWithImage
          title="Smart AI Tool to accelerate hiring"
          description="Frees up valuable engineering personnel from interviewing so that they can focus on building products."
          buttonText="Get Started"
          imageSrc="/Images/image1.png"
          onButtonClick={handleGetStartedClick} // Navigates to login on click
        />

        {/* Section 2: Fair and Consistent */}
        <SectionWithImage
          title="Fair and Consistent"
          description="Unlike humans, AI is objective and unemotional. Decisions are based on merit, with no biases."
          buttonText="Get Started"
          imageSrc="/Images/image2.png"
          imageLeft
          onButtonClick={handleGetStartedClick} // Navigates to login on click
        />

        {/* Features Section */}
        <FeatureSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}
