import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/../components/Header';
import NarratorCard from '../../../components/NarratorCard';
import Button from '@/../components/ReadyButton';
	
const NarratorVillageWakeUpScreen: React.FC = () => {
	const navigate = useNavigate();
  
	const handleReady = () => {
	  navigate('/narratorvillagedecision');
	};

  return (
    <div style={{ backgroundColor: '#2E3249' }} className="min-h-screen flex flex-col items-center text-white w-full p-4">
      {/* Header */}
      <Header timer="1:00" />

      {/* Card */}
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md mt-4">
        <NarratorCard
          title="First night"
          role="Narrator"
          imageSrc="/images/villagewakesup.png"
          description={
            <>
              Day breaks, and the village gathers. It's time to vote on who you suspect is the werewolf among you. The player with the most votes will face the village's judgment. Choose wisely — your survival depends on it.
            </>
          }
        />

        {/* Ready Button */}
        <div className="flex justify-end w-full mt-4">
          <Button text="Ready" onClick={handleReady} styleClass="py-2 px-4 w-1/2 sm:w-auto" />
        </div>
      </div>
    </div>
  );
};

export default NarratorVillageWakeUpScreen;
