import React from 'react';

interface InfoCardProps {
  title: string;
  description: string;
  imageSrc?: string; // Optional image source prop
}

const InfoCard: React.FC<InfoCardProps> = ({ title, description, imageSrc }) => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-sm">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={title}
          className="w-full h-40 object-cover rounded-lg mb-4"
        />
      )}
      <h3 className="text-2xl font-semibold text-gray-700 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default InfoCard;
