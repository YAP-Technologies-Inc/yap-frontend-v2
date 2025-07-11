'use client';
import { useState } from 'react';
import HeaderGreeting from '@/components/dashboard/HeaderGreeting';
import BalanceCard from '@/components/dashboard/BalanceCard';
import DailyStreak from '@/components/dashboard/DailyStreak';
import BottomNavBar from '@/components/BottomNavBar';
import LessonCard from '@/components/LessonCard';
import { lessons } from '@/mock/mockLesson';

export default function HomePage() {
  return (
    <div className="bg-tertiary min-h-screen w-full flex flex-col relative">
      <div className="flex-1 w-full max-w-4xl mx-auto px-4 py-6 pb-24">
        <HeaderGreeting />
        <div className="w-full mt-6">
          <BalanceCard />
        </div>
        <div className="w-full mt-6">
          <DailyStreak />
        </div>
        <h3 className="text-quaternary text-xl font-semibold mt-6">Lessons</h3>

        <div className="w-full mt-6">
          <div className="flex gap-4 overflow-x-auto no-scrollbar w-full h-40">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                title={lesson.title}
                description={lesson.description}
                status={lesson.status}
              />
            ))}
          </div>
        </div>

        <h3 className="text-quaternary mt-6">Daily Quiz</h3>
      </div>
      {/* Bottom navigation bar */}
      <BottomNavBar />
    </div>
  );
}
