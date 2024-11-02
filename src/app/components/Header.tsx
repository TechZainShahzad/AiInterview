import React from 'react';
import Link from 'next/link';

interface HeaderProps {
  activeTab: string; // Active tab passed from the page
  onTabSwitch: (tab: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeTab, onTabSwitch }) => {
  return (
    <header className="bg-[var(--background)] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/" className="text-2xl md:text-2xl lg:text-3xl text-[var(--foreground)]">
          Alnterview Hub
        </Link>
        <div className="flex space-x-4">
          <button
            onClick={() => onTabSwitch('contact')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'contact' ? 'bg-foreground text-white' : ''
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => onTabSwitch('pricing')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'pricing' ? 'bg-foreground text-white' : ''
            }`}
          >
            Pricing
          </button>
          <button
            onClick={() => onTabSwitch('login')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'login' ? 'bg-foreground text-white' : ''
            }`}
          >
            Login
          </button>
          <button
            onClick={() => onTabSwitch('signup')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'signup' ? 'bg-foreground text-white' : ''
            }`}
          >
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
