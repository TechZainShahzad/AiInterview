// pages/contact/page.tsx

'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  const router = useRouter();
  
  // State to track active tab in header
  const [activeHeaderTab, setActiveHeaderTab] = useState('contact');

  // Function to handle tab switch in header
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
    setActiveHeaderTab('contact'); // Set default tab as 'contact'
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header with tab switching functionality */}
      <Header activeTab={activeHeaderTab} onTabSwitch={handleHeaderTabSwitch} />
      <main className="flex-grow container mx-auto py-8 px-4">
        {/* Contact Form */}
        <h1 className="text-center text-2xl font-bold mb-4">Contact Us</h1>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
