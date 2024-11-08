import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/../components/Header';
import Card from '../../../components/PlayerCard';
import Button from '@/../components/ReadyButton';
	
const WerewolfScreen: React.FC = () => {
	const navigate = useNavigate();
  
	const handleReady = () => {
	  navigate('/hiddencardscreen');
	};

  return (
    <div style={{ backgroundColor: '#2E3249' }} className="min-h-screen flex flex-col items-center text-white w-full p-4">
      {/* Header */}
      <Header timer="1:00" />

      {/* Card */}
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md mt-4">
        <Card
          title="Playing as"
          role="Werewolf"
          imageSrc="/images/werewolf.webp"
          description={
            <>
              <strong>Info</strong>
              <br />
              During the night, choose one (1) villager to kill. <br />
              <strong>Objective</strong>
              <br />
              Let the count of villagers be less than or equal to werewolves. Try not to be discovered.
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

export default WerewolfScreen;
