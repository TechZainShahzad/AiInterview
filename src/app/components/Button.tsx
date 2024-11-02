import React from 'react';

interface ButtonProps {
  label: string;
  type?: 'button' | 'submit';
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; // Optional click handler
}

const Button: React.FC<ButtonProps> = ({ onClick, label, type = 'button' }) => {
  return (
    <button
      className="bg-foreground text-white py-2 px-6 rounded-md shadow hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition duration-300"
      onClick={onClick}
      type={type}
    >
      {label}
    </button>
  );
};

export default Button;
