"use client";
import React from 'react';
import Image from 'next/image';
import { useNavigate } from 'react-router-dom';
import Button from '@/../../components/Button';

const WaitingRoom: React.FC = () => {
    const navigate = useNavigate();

    const handleReady = () => {
        navigate('/werewolf');
    };
    return (
        <div className="w-full min-h-screen bg-custom-bg bg-cover bg-center flex flex-col justify-between relative">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-75 z-0"></div>
            {/* Header */}
            <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-md mx-auto mt-4">
                <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-md mx-auto mt-4">
                    <div className="flex items-center justify-center space-x-2">
                        <h1 className="text-white text-5xl font-semibold">Waiting room</h1>
                    </div>
                </div>
                <div className="relative z-10 flex justify-center">
                </div>
                {/* Main Content */}
                <div className="bg-gray-800 p-4 rounded-lg shadow-lg w-full mx-auto mt-8 relative z-10">
                    <div className="p-4 text-center space-y-2 ">
                        <p className="text-white text-xl font-bold">Number of players</p>
                    </div>
                </div>
                {/* Cards */}
                <div className="bg-gray-800 p-4 my-12 rounded-lg shadow-lg w-full mx-auto relative z-10">
                    <div className=" p-4 text-center space-y-2">
                        <p className="text-white text-9xl font-bold  inline"> 1 </p>
                        <p className="text-white text-9xl font-bold inline"> / </p>
                        <p className="text-white text-9xl font-bold inline"> 5 </p>
                    </div>
                </div>
                <Button text="Play" style={{ backgroundColor: '#a239CA', padding: '1rem 5rem', borderRadius: '0.5rem' }} onClick={handleReady} />

            </div>
            {/* Privacy Policy Link */}
            <div className="relative z-10 mt-4 text-center">
                <p className="text-white text-sm">Privacy Policy</p>
            </div>
        </div >
    );
}

export default WaitingRoom;