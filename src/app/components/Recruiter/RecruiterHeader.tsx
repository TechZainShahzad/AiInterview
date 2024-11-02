import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

interface RecruiterHeaderProps {
  activeTab: string;
  onTabSwitch: (tab: string) => void;
  userName: string;
}

const RecruiterHeader: React.FC<RecruiterHeaderProps> = ({ activeTab, onTabSwitch, userName }) => {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const getInitials = (name: string) => {
    const nameParts = name.split(' ');
    return nameParts.map(part => part.charAt(0).toUpperCase()).join('').slice(0, 2);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setDropdownVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="bg-[var(--background)] py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link href="/recruiter" className="text-2xl md:text-2xl lg:text-3xl text-[var(--foreground)]">
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
            onClick={() => onTabSwitch('ai-hire')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'ai-hire' ? 'bg-foreground text-white' : ''
            }`}
          >
            AI-Hire
          </button>
          <button
            onClick={() => onTabSwitch('upcoming-interviews')}
            className={`bg-[var(--background)] text-[var(--foreground)] hover:bg-[var(--foreground)] hover:text-white font-medium px-4 py-2 rounded-md transition-colors duration-300 ${
              activeTab === 'upcoming-interviews' ? 'bg-foreground text-white' : ''
            }`}
          >
            Upcoming Interviews
          </button>

          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownVisible(!isDropdownVisible)}
              className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full text-[var(--foreground)] font-bold"
            >
              {getInitials(userName)}
            </button>

            {isDropdownVisible && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg transition-opacity duration-300">
                <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                  Profile
                </a>
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

export default RecruiterHeader;
