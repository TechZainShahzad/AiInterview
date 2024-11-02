import React from 'react';
import { CheckIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

interface PricingCardProps {
  title: string;
  price: string;
  benefits: string[];
  highlight?: boolean;
  isPromo?: boolean;
  buttonTitle: string; // Added buttonTitle prop
  style?: React.CSSProperties; // Added style prop for custom styling
}

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  benefits,
  highlight = false,
  isPromo = false,
  buttonTitle,
  style, // Destructure the style prop
}) => {
  const router = useRouter();
  return (
    <div
      className={`relative p-6 rounded-3xl shadow-lg ${
        highlight ? 'bg-foreground text-white' : 'bg-white text-foreground'
      }`}
      style={style} // Apply the style prop
    >
      {isPromo && (
        <div className="absolute top-0 right-0 mt-2 mr-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-xs text-white px-3 py-1 rounded-full">
          Most popular
        </div>
      )}

      <h2 className="text-xl font-bold mb-4">{title}</h2>
      <p className="text-4xl font-bold mb-4">{price}</p>
      <button
      onClick={() => router.push('/signup')} className={`w-full py-2 px-6 rounded-md font-medium ${highlight ? 'bg-white text-foreground' : 'bg-foreground text-white'}`}>
        {buttonTitle} {/* Render the button title */}
      </button>
      <ul className="mt-4 space-y-4">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center space-x-2 p-2">
            <CheckIcon className="h-5 w-5 text-green-500" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
