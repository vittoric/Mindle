import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  styleClass?: string;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, styleClass }) => {
  return (
    <button
      onClick={onClick}
		  className={`bg-gray-300 text-gray-900 font-bold rounded-lg py-2 px-6 ${styleClass}`}
		  style={{ backgroundColor: '#d1d5db' }}
    >
      {text}
    </button>
  );
};

export default Button;
