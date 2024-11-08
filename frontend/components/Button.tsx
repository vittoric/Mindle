"use client";
import React from 'react';

interface ButtonProps {
  text: string;
  onClick: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({ text, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className="text-white font-redHat font-[700] rounded-md w-full"
    >
      {text}
    </button>
  );
};

export default Button;