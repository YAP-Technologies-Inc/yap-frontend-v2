// home/page.tsx
// This is the main page of the application, serving as the dashboard for users.
// It is very component-heavy, displaying various user-related information such as balance, daily streak, lessons, and quizzes.
// Makes it easyer to manage the layout and components of the home page.

'use client';
import HeaderGreeting from '@/components/dashboard/HeaderGreeting';
import BalanceCard from '@/components/dashboard/BalanceCard';
import DailyStreak from '@/components/dashboard/DailyStreak';
import BottomNavBar from '@/components/layout/BottomNavBar';
import LessonCard from '@/components/dashboard/LessonCard';
import DailyQuizCard from '../../components/dashboard/DailyQuizPrompt';
import { lessons } from '../../mock/mockLesson';

export default function HomePage() {
  return (
    <div className="bg-background-primary min-h-screen w-full flex flex-col">
      <div className="flex-1 w-full max-w-4xl mx-auto pt-4 px-4 ">
        <HeaderGreeting />

        {/* Balance Card */}
        <div className="mt-2">
          <BalanceCard />
        </div>

        {/* Daily Streak */}
        <div className="mt-4">
          <DailyStreak />
        </div>

        {/* Lessons */}
        <h3 className="text-secondary text-xl font-semibold mt-2 ">Lessons</h3>
        <div className="mt-2">
          <div className="flex gap-4 overflow-x-auto no-scrollbar w-full">
            {lessons.map((lesson) => (
              <LessonCard
                key={lesson.id}
                id={lesson.id}
                title={lesson.title}
                description={lesson.description}
                status={lesson.status}
              />
            ))}
          </div>
        </div>

        {/* Daily Quiz */}
        <h3 className="text-secondary text-xl font-semibold mt-4 mb-2">
          Daily Quiz
        </h3>
        <div className="pb-36 relative z-0">
          <DailyQuizCard isUnlocked={false} />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}
