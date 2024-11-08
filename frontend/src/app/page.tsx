"use client";
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoadingScreen from '@/app/LoadingScreen/page';
import Login from '@/app/LoginScreen/page';
import StoriePageScreen from '@/app/StoriePageScreen/page';
import WaitingRoom from '@/app/WaitingRoom/page';
import NarratorDayScreen from '@/app/NarratorDayScreen/page';
import NarratorNightScreen from '@/app/NarratorNightScreen/page';
import NarratorEndScreen from '@/app/NarratorEndScreen/page';
import NarratorVillageDecisionScreen from '@/app/NarratorVillageDecisionScreen/page';
import NarratorVillageWakeUpScreen from '@/app/NarratorVillageWakeUpScreen/page';
import NarratorWerewolfDecisionScreen from '@/app/NarratorWerewolfDecisionScreen/page';
import WerewolfScreen from '@/app/WerewolfScreen/page';
import HiddenCardScreen from '@/app/HiddenCardScreen/page';
import VillagerScreen from '@/app/VillagerScreen/page';

const App: React.FC = () => {
  const [currentScreen, setCurrentScreen] = useState<'loading' | 'login' | 'narrator' | 'main'>('loading');

  useEffect(() => {
    const loadingTimer = setTimeout(() => {
      setCurrentScreen('login');
    }, 3000);

    return () => clearTimeout(loadingTimer);
  }, []);

  return (
    <Router>
      <div className="min-h-screen text-white flex">
        <Routes>
          <Route
            path="/"
            element={
              currentScreen === 'loading' ? <LoadingScreen /> : <Navigate to="/login" />
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/storie" element={<StoriePageScreen />} />
          <Route path="/waitingroom" element={<WaitingRoom />} />
          <Route path="/werewolf" element={<WerewolfScreen />} />
          <Route path="/narratorday" element={<NarratorDayScreen />} />
          <Route path="/narratornight" element={<NarratorNightScreen />} />
          <Route path="/narratorend" element={<NarratorEndScreen />} />
          <Route path="/narratorvillagedecision" element={<NarratorVillageDecisionScreen />} />
          <Route path="/narratorvillagewakeup" element={<NarratorVillageWakeUpScreen />} />
          <Route path="/narratorwerewolfdecision" element={<NarratorWerewolfDecisionScreen />} />
          <Route path="/hiddencardscreen" element={<HiddenCardScreen />} />
          <Route path="/villager" element={<VillagerScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
