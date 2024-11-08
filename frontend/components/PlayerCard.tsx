import React from 'react';

interface CardProps {
  title: string;
  role: string;
  imageSrc: string;
  description: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, role, imageSrc, description }) => {
  return (
	  <div className="bg-gray-100 text-gray-900 p-4 shadow-lg w-full text-center mb-4"
	  style={{ borderRadius: '2.5rem' }}>
      <h2 className="text-sm font-semibold">{title}</h2>
      <h1 className="text-2xl font-bold">{role}</h1>
      <img src={imageSrc} alt={role} className="w-full rounded-lg shadow-md mt-4" />
      <p className="text-md mt-4">{description}</p>
    </div>
  );
};

export default Card;
