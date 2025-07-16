// Probably need more testing for this but seems to work at a basic level for now
'use client';

import React, { useState, useEffect } from 'react';
import { TablerCheck } from '@/icons';

const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
const STORAGE_KEY = 'login-days';
const TOTAL_STREAK_KEY = 'total-streak';
const LAST_LOGIN_KEY = 'last-login-day';

const getStartOfWeek = () => {
  const date = new Date();
  const day = date.getDay(); // Sunday = 0
  const diff = day === 0 ? -6 : 1 - day;
  date.setDate(date.getDate() + diff);
  date.setHours(0, 0, 0, 0);
  return date.toISOString();
};

export default function DailyStreak() {
  const [completedDays, setCompletedDays] = useState<boolean[]>(Array(7).fill(false));
  const [totalStreak, setTotalStreak] = useState('0');

  const today = new Date();
  const todayIndex = today.getDay() === 0 ? 6 : today.getDay() - 1;
  const todayStr = today.toDateString();

  useEffect(() => {
    const thisWeek = getStartOfWeek();
    const saved = localStorage.getItem(STORAGE_KEY);
    const lastLoginStr = localStorage.getItem(LAST_LOGIN_KEY);
    const storedStreak = parseInt(localStorage.getItem(TOTAL_STREAK_KEY) || '0');

    let newStreak = 1;

    if (lastLoginStr) {
      const lastLogin = new Date(lastLoginStr);
      const diffTime = today.getTime() - lastLogin.getTime();
      const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

      if (diffDays === 1) {
        newStreak = storedStreak + 1;
      } else if (diffDays === 0) {
        newStreak = storedStreak; // same day, no change
      } else {
        newStreak = 1; // skipped day(s), reset
      }
    }

    if (lastLoginStr !== todayStr) {
      localStorage.setItem(TOTAL_STREAK_KEY, newStreak.toString());
      localStorage.setItem(LAST_LOGIN_KEY, todayStr);
    }

    setTotalStreak(newStreak.toString());

    // Weekly checkmarks
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.weekStart === thisWeek) {
        const updated = [...parsed.days];
        updated[todayIndex] = true;
        setCompletedDays(updated);
        localStorage.setItem(
          STORAGE_KEY,
          JSON.stringify({ weekStart: thisWeek, days: updated })
        );
        return;
      }
    }

    const freshWeek = Array(7).fill(false);
    freshWeek[todayIndex] = true;
    setCompletedDays(freshWeek);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ weekStart: thisWeek, days: freshWeek })
    );
  }, []);


  return (
    <div className="bg-secondary w-full rounded-xl shadow px-6 py-4 flex flex-col border-b-2 border-gray-300 relative">
      {/* Header */}
      <div className="text-white flex items-center justify-between w-full mb-4">
        <h3 className="text-lg font-semibold">🔥 Daily Streak</h3>
        <div className="bg-white text-black rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
          {totalStreak}
        </div>
      </div>

      {/* Day Circles */}
      <div className="w-full flex justify-around">
        {days.map((day, index) => {
          const completed = completedDays[index];
          const isToday = index === todayIndex;

          return (
            <div key={`${day}-${index}`} className="flex flex-col items-center">
              <div
                className={`w-10 h-10 rounded-full flex items-center justify-center border-2 text-lg font-bold ${
                  completed
                    ? 'bg-quaternary text-black '
                    : 'border-white text-white'
                } ${isToday ? 'ring-2  ring-tertiary' : ''}`}
              >
                {completed && <TablerCheck className="w-5 h-5 text-white" />}
              </div>
              <span className="text-xs text-white mt-1">{day}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
