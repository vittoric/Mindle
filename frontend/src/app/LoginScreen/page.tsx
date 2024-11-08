"use client";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@/../../components/Button';

export default function LoginScreen() {
	const navigate = useNavigate();
  
	const handleLogin = () => {
	  navigate('/storie');
	};

  return (
    <div className="w-full min-h-screen bg-custom-bg bg-cover bg-center flex flex-col justify-between relative">
      {/* Background Gradient*/}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-90 z-0"></div>

      {/* Top Content */}
      <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-md mx-auto mt-4">
        {/* Back Arrow */}
        <div className="absolute top-4 left-4">
          <svg className="h-6 w-6 text-yellow-400 sm:h-8 sm:w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>

        {/* Logo */}
        <div className="absolute top-4 right-4">
          <img src="/images/logo_white.png" alt="Logowhite" className="w-20 h-20 sm:w-16 sm:h-16 md:w-12 md:h-12 lg:w-10 lg:h-10" />
        </div>

        {/* Header Section */}
        <div className="text-center mt-40">
          <h1 className="text-3xl sm:text-4xl text-white h1-red-rose font-[700] mb-4">Welcome!</h1>
          <p className="text-white text-base sm:text-lg text-justify mt-10">
            <span className="font-red-hat-display">Mindle</span> offers adventures to join in teams towards a common goal. On every page, you are confronted with a choice.
          </p>
          <p className="text-white text-base sm:text-lg font-red-hat-display font-[700] text-justify mt-2">
            Think carefully before choosing because it will have an effect on the rest of the story.
          </p>
        </div>

        {/* Login Buttons Section */}
        <div className="space-y-4 w-full mt-10">
          <Button text="Log in as 42 student" style={{ backgroundColor: '#a239CA', padding: '1rem 2rem', borderRadius: '0.5rem' }} onClick={handleLogin} />
          <div className="flex justify-center items-center">
            <hr className="w-28 border-gray-300" />
            <span className="mx-16 text-white font-bold">or</span>
            <hr className="w-28 border-gray-300" />
          </div>
          <Button text="Log in as guest" style={{ backgroundColor: '#373B53', padding: '1rem 2rem', borderRadius: '0.5rem' }} onClick={handleLogin} />
        </div>
      </div>

      {/* Privacy Policy */}
      <div className="relative z-10 text-white text-sm text-center mb-4">
        <a href="/privacy-policy">Privacy Policy</a>
      </div>
    </div>
  );
}
