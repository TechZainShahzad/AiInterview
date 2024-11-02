'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import HeroSection from './components/HeroSection';
import SectionWithImage from './components/SectionWithImage';
import FeatureSection from './components/FeaturesSection';
import Footer from './components/Footer';
import Header from './components/Header';

export default function Home() {
  const router = useRouter();

  // State for header active tab (signup, login, etc.)
  const [activeHeaderTab, setActiveHeaderTab] = useState('home');

  // Handle header tab switch (signup, login, etc.)
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

  // Ensure the header tab is highlighted as 'home' when visiting the home page
  useEffect(() => {
    setActiveHeaderTab('home');
  }, []);

  // Handler for Get Started buttons to navigate to login
  const handleGetStartedClick = () => {
    router.push('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header activeTab={activeHeaderTab} onTabSwitch={handleHeaderTabSwitch} />
      
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
