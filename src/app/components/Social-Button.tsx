// SocialButton.tsx
import React from 'react';

interface SocialButtonProps {
  label: string;
  logo?: string; // Optional logo for the button
  className?: string; // Optional className for additional styling
  onClick?: () => void; // Optional click handler
}

const SocialButton: React.FC<SocialButtonProps> = ({ label, logo, className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-white flex items-center p-3 rounded-lg shadow-md hover:bg-gray-100 transition duration-200 ease-in-out ${className}`}
    >
      {logo && <img src={logo} alt={`${label} logo`} className="mr-3 h-5 w-5" />} {/* Logo on the left */}
      <span className="text-gray-700 font-medium flex-1 text-center">{label}</span>
    </button>
  );
};

export default SocialButton;
