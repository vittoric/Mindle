import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/../components/Header';
import Button from '@/../components/ReadyButton';

const HiddenCardScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleShowCard = () => {
    navigate('/werewolf');
  };

  const handleReady = () => {
    navigate('/narratorday');
  };

  return (
    <div style={{ backgroundColor: '#2E3249' }} className="min-h-screen flex flex-col items-center text-white w-full p-4">
      {/* Header */}
      <Header timer="1:00" />

      {/* Card*/}
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md mt-4">
        <div className="relative bg-gray-100 shadow-lg w-full max-w-md h-[600px] rounded-[2.5rem] overflow-hidden">
          <img
            src="/images/hiddencard.webp"
            alt="Hidden Card Background"
            className="w-full h-full object-cover"
          />

          {/* Show Card Button*/}
          <div className="absolute inset-0 flex items-center justify-center">
            <button
              onClick={handleShowCard}
              className="bg-gray-100 text-gray-900 font-bold rounded-lg"
              style={{
                height: '2rem',
                width: 'auto',
                padding: '0 1rem',
              }}
            >
              Tap to show card
            </button>
          </div>
        </div>

        {/* Ready Button */}
        <div className="flex justify-end w-full mt-4">
          <Button text="Ready" onClick={handleReady} styleClass="py-2 px-4 w-1/2 sm:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default HiddenCardScreen;