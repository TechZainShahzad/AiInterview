// Input.tsx
import React from 'react';

interface InputProps {
  label: string;
  type: string;
  value: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string; // Add an optional error prop
  placeholder?: string; // Add placeholder prop
  required?: boolean; // Add a required prop
}

const Input: React.FC<InputProps> = ({ label, type, value, name, onChange, error, placeholder, required }) => {
  return (
    <div className="mb-6"> {/* Increased margin bottom for more gap between fields */}
      <label className="text-foreground font-bold">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>} {/* Show red star for required fields */}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder} // Add placeholder here
        className={`w-full border p-2 rounded-lg focus:outline-none transition duration-300
          ${error ? 'border-red-500' : 'border-foreground'} focus:ring-2 focus:ring-blue-500 hover:bg-gray-50 placeholder:text-sm placeholder:text-gray-400`} // Style placeholder text to be smaller
      />
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>} {/* Display error message */}
    </div>
  );
};

export default Input;
