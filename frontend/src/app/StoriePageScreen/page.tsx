"use client";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Image from 'next/image';
import Button from '@/../../components/Button';
const StoriePageScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleReady = () => {
    navigate('/waitingroom');
  };

  return (
    <div className="w-full min-h-screen bg-custom-bg bg-cover bg-center flex flex-col justify-between relative">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-75 z-0"></div>
      {/* Header */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-md mx-auto mt-4">
        <div className="space-y-2 relative z-10">
          <div className="flex items-center justify-center space-x-2">
            {/* Logo */}
        <div className="relative top-0 right-0">
          <img src="/images/logo_white.png" alt="Logowhite" className="w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-10 lg:h-10" />
        </div>
            <h1 className="text-white text-2xl font-semibold">Mindle</h1>
          </div> </div>

        {/* Main Content */}
    
        <div className="space-y-2 relative z-10 mt-8 w-full" >
          <div className="flex flex-col">
            <h2 className="text-gray-300 text-lg">Hello David,</h2>
            <p className="text-gray-300 text-lg">Select an activity to start</p>
          </div>
        </div>
        {/* Info icon */}
        <div className="relative flex items-center justify-end w-full z-10">
          <Image src="/images/info.svg" alt="Icon" width={24} height={24} className="" />
        </div>
        {/* Cards */}
        <div className="bg-gray-800 p-4 my-12 rounded-lg shadow-lg w-full mx-auto relative z-10">
          <div className="relative w-full h-40">
            <Image
              src="/images/werewolf.png" // Cambia la ruta de la imagen según sea necesario
              alt="Werewolf"
              layout="fill"
              className="rounded-t-lg object-cover"
            />
          </div>
          <div className="p-4 text-center space-y-2 ">
            <p className="text-gray-400">Castonegro</p>
            <p className="text-white text-2xl font-bold">Werewolf</p>
            <p className="text-white">Players 5 - 18</p>
            <p className="text-white">Duration 30</p>
          </div>
          <Button text="Start" style={{ backgroundColor: '#a239CA', padding: '1rem 2rem', borderRadius: '0.5rem' }} onClick={handleReady} />
        </div>


        <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full mx-auto relative z-10">
          <div className="p-4 text-center space-y-2 ">
            <p className="text-white text-xl font-bold">More stories coming soon!</p>
          </div>
        </div>
      </div>
      {/* Privacy Policy Link */}
      <div className="relative z-10 mt-4 text-center">
        <p className="text-white text-sm">Privacy Policy</p>
      </div>
    </div >
  );
}

export default StoriePageScreen;