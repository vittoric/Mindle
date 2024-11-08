import React from 'react';

const LoadingScreen: React.FC = () => {
  return (
    <div className="w-full min-h-screen bg-custom-bg bg-cover bg-center flex flex-col items-center justify-center relative">
      {/* Background Gradient*/}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black opacity-90"></div>
      
      {/* Logo */}
      <div className="relative z-10 text-center flex flex-col items-center">
        <img
          src="/images/logo.png"
          alt="Mindle Logo"
          className="w-24 h-24 mb-4 animate-pulse"
        />
      </div>

      {/* Privacy Policy */}
      <div className="absolute bottom-4 z-10">
        <a href="/privacy-policy" className="text-white text-sm">Privacy Policy</a>
      </div>
    </div>
  );
};

export default LoadingScreen;