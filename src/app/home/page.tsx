'use client';
import { useState } from 'react';
import HeaderGreeting from '@/components/dashboard/HeaderGreeting';
import BalanceCard from '@/components/dashboard/BalanceCard';
import DailyStreak from '@/components/dashboard/DailyStreak';
import BottomNavBar from "@/components/BottomNavBar";

export default function HomePage() {

  return (
    <div className="bg-tertiary min-h-screen w-full flex flex-col relative">
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-6 pb-24">
        <HeaderGreeting />
        <div className="flex items-center justify-center w-full">
          <BalanceCard />
        </div>
        <div className="flex items-center justify-center w-full mt-6">
          <DailyStreak />
        </div>
      </div>
      {/* Bottom navigation bar */}
      <BottomNavBar />

    </div>
  );
}
