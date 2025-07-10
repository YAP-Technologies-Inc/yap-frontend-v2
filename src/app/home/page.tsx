'use client';
import { useState } from 'react';
import SplashScreen from '@/components/SplashScreen';
import HeaderGreeting from '@/components/dashboard/HeaderGreeting';
import BalanceCard from '@/components/dashboard/BalanceCard';
import DailyStreak from '@/components/dashboard/DailyStreak';

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true);

  return showSplash ? (
    <SplashScreen onFinish={() => setShowSplash(false)} />
  ) : (
    <div className="bg-tertiary min-h-screen w-full flex flex-col items-start">
      <HeaderGreeting />
      <div className="flex-row flex items-center justify-center w-full max-w-4xl mx-auto px-4 py-6">
        <BalanceCard />
      </div>
      <div className="flex-row flex items-center justify-center w-full max-w-4xl mx-auto px-4 py-6">
        <DailyStreak />
      </div>

    </div>
  );
}
