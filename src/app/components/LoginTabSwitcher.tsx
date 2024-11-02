import React from 'react';

interface TabSwitcherProps {
  activeTab: string;
  onTabSwitch: (tab: string) => void;
}

const LoginTabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabSwitch }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => onTabSwitch('candidate')}
        className={`px-4 py-2 ${activeTab === 'candidate' ? 'bg-foreground text-white' : 'bg-white text-foreground'} rounded transition-colors duration-300`}
      >
        Candidate
      </button>
      <button
        onClick={() => onTabSwitch('recruiter')}
        className={`px-4 py-2 ${activeTab === 'recruiter' ? 'bg-foreground text-white' : 'bg-white text-foreground'} rounded transition-colors duration-300`}
      >
        Recruiter
      </button>
      <button
        onClick={() => onTabSwitch('organization')}
        className={`px-4 py-2 ${activeTab === 'organization' ? 'bg-foreground text-white' : 'bg-white text-foreground'} rounded transition-colors duration-300`}
      >
        Organization
      </button>
    </div>
  );
};

export default LoginTabSwitcher;
