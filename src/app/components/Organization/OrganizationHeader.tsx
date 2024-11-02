import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface OrganizationHeaderProps {
  activeTab: string; // Active tab passed from the page
  onTabSwitch: (tab: string) => void;
  userName: string;  // The name of the user to generate initials
}

const OrganizationHeader: React.FC<OrganizationHeaderProps> = ({ activeTab, onTabSwitch, userName }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Reference for the dropdown

  // Function to generate initials from the user's name
  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
    return initials.slice(0, 2); // Return only the first two initials
  };

  // Close dropdown when clicking outside
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  // Add event listener to handle clicks outside the dropdown
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[var(--background)] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/organization" className="text-2xl md:text-2xl lg:text-3xl text-[var(--foreground)]">
          Alnterview Hub
        </Link>
        <div className="flex space-x-4 items-center">
          <button
            onClick={() => onTabSwitch('contact')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'contact' ? 'bg-foreground text-white' : ''
            }`}
          >
            Contact
          </button>
          <button
            onClick={() => onTabSwitch('manage-recruiters')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'manage-recruiters' ? 'bg-foreground text-white' : ''
            }`}
          >
            Manage Recruiters
          </button>
          <button
            onClick={() => onTabSwitch('plans-billing')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'plans-billing' ? 'bg-foreground text-white' : ''
            }`}
          >
            Plans & Billing
          </button>

          {/* Circle with initials */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownVisible(!isDropdownVisible)} // Toggle dropdown visibility
              className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-[var(--foreground)] font-bold"
            >
              {getInitials(userName)}
            </button>

            {/* Dropdown Menu */}
            {isDropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-opacity duration-300">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Profile
                </a>
                {/* Use Link for Logout navigation */}
                <Link href="/" passHref>
                  <button className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100">
                    Logout
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default OrganizationHeader;
