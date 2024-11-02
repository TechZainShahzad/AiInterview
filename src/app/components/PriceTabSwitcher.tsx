// components/TabSwitcher.tsx
import React from 'react';

interface TabSwitcherProps {
  activeTab: string;
  onTabSwitch: (tab: string) => void;
}

const TabSwitcher: React.FC<TabSwitcherProps> = ({ activeTab, onTabSwitch }) => {
  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={() => onTabSwitch('monthly')}
        className={`px-4 py-2 ${activeTab === 'monthly' ? 'bg-foreground text-white' : 'bg-white text-foreground'} rounded transition-colors duration-300`}
      >
        Monthly Plans
      </button>
      <button
        onClick={() => onTabSwitch('annual')}
        className={`px-4 py-2 ${activeTab === 'annual' ? 'bg-foreground text-white' : 'bg-white text-foreground'} rounded transition-colors duration-300`}
      >
        Annual Plans (2 Months Free)
      </button>
    </div>
  );
};

export default TabSwitcher;
