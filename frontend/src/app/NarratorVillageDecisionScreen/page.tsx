import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/../components/Header';
import Card from '../../../components/PlayerCard';
import Button from '@/../components/ReadyButton';
	
const NarratorVillageDecisionScreen: React.FC = () => {
	const navigate = useNavigate();
  
	const handleReady = () => {
	  navigate('/narratorend');
	};

  return (
    <div style={{ backgroundColor: '#2E3249' }} className="min-h-screen flex flex-col items-center text-white w-full p-4">
      {/* Header */}
      <Header timer="1:00" />

      {/* Card */}
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md mt-4">
        <Card
          title="First day"
          role="Narrator"
          imageSrc="/images/werewolfdead.jpg"
          description={
			  <>
				  The votes are in. The village has chosen, and their true role is revealed: Werewolf or Villager. The balance shifts as the count updates.
				  <br />
				  <strong>David was killed</strong>
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

export default NarratorVillageDecisionScreen;
