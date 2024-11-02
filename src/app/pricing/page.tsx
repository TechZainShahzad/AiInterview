'use client'

// components/PricingPage.tsx
import React, { useState, useEffect } from 'react';
import TabSwitcher from '../components/PriceTabSwitcher';
import PricingCard from '../components/PricingCard';
import FAQ from '../components/FAQ';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/navigation';

const PricingPage = () => {
  const router = useRouter();

  // State for active header tab
  const [activeHeaderTab, setActiveHeaderTab] = useState('pricing');

  // State for the pricing plan (monthly or annual)
  const [activeTab, setActiveTab] = useState<'monthly' | 'annual'>('monthly');

  // Handle switching the pricing plan (monthly/annual)
  const handleTabSwitch = (tab: string) => {
    setActiveTab(tab as 'monthly' | 'annual');
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

  // Ensure the header tab is highlighted as 'pricing' when visiting this page
  useEffect(() => {
    setActiveHeaderTab('pricing');
  }, []);

  const plans = [
    { 
      title: 'Free', 
      price: { monthly: '$0', annual: '$0' }, 
      benefits: ['Benefit 1', 'Benefit 2'], 
      buttonTitle: 'Get started for free', 
      style: { height: '460px' } // Set a fixed height for first card
    },
    { 
      title: 'Startup', 
      price: { monthly: '$29', annual: '$290' }, 
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4', 'Benefit 5'], 
      isPromo: true, 
      buttonTitle: 'Signup now', 
      style: { height: '460px' } // Set the same height as first card
    },
    { 
      title: 'Business', 
      price: { monthly: '$99', annual: '$990' }, 
      benefits: ['Benefit 1', 'Benefit 2', 'Benefit 3', 'Benefit 4', 'Benefit 5', 'Benefit 6', 'Benefit 7', 'Benefit 8'], 
      buttonTitle: 'Signup now', 
      style: { height: '620px' } // Set a larger height for third card
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header activeTab={activeHeaderTab} onTabSwitch={handleHeaderTabSwitch} />
      <main className="flex-grow container mx-auto py-8 px-4">
        <h1 className="text-center text-4xl font-bold text-foreground mb-6">Start Your AI-Hiring Journey</h1>

        <TabSwitcher activeTab={activeTab} onTabSwitch={handleTabSwitch} />

        {/* Updated card container */}
        <div className="flex justify-center mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
            {plans.map((plan) => (
              <PricingCard
                key={plan.title}
                title={plan.title}
                price={activeTab === 'monthly' ? plan.price.monthly : plan.price.annual}
                benefits={plan.benefits}
                highlight={plan.title === 'Startup'}
                isPromo={plan.isPromo}
                buttonTitle={plan.buttonTitle} // Pass the buttonTitle prop
                style={plan.style} // Pass the custom style prop for height
              />
            ))}
          </div>
        </div>

        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;
