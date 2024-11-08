import React from 'react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  timer: string;
}

const Header: React.FC<HeaderProps> = ({ timer }) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="w-full mb-4">
      <div className="flex justify-between items-center">
        <button onClick={handleBack} style={{ color: '#FBBF24', fontSize: '1.5rem' }} className="text-yellow-500 text-2xl">{'<'}</button>
        <span style={{ color: '#FBBF24' }} className="text-yellow-500 text-lg font-bold">Time remaining:</span>
        <button style={{ color: '#FBBF24' }} className="text-yellow-500 text-3xl">&#9776;</button>
      </div>
      <div className="flex justify-center" style={{ marginTop: '2px' }}>
        <span style={{ color: '#FBBF24' }} className="text-yellow-500 text-lg font-bold">{timer}</span>
      </div>
    </div>
  );
};

export default Header;
