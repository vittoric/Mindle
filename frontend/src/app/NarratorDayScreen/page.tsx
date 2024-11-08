import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '@/../components/Header';
import NarratorCard from '../../../components/NarratorCard';
import Button from '@/../components/ReadyButton';
	
const NarratorScreen: React.FC = () => {
	const navigate = useNavigate();
  
	const handleReady = () => {
	  navigate('/narratornight');
	};

  return (
    <div style={{ backgroundColor: '#2E3249' }} className="min-h-screen flex flex-col items-center text-white w-full p-4">
      {/* Header */}
      <Header timer="1:00" />

      {/* Card */}
      <div className="flex flex-col items-center justify-center flex-grow w-full max-w-md mt-4">
        <NarratorCard
          title="First day"
          role="Narrator"
          imageSrc="/images/village.png"
          description={
            <>
              Welcome to the village, a once-peaceful place nestled in misty hills. Be vigilant, for
			  whispers of fear echo through the streets...
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

export default NarratorScreen;
