// home/page.tsx
// This is the main page of the application, serving as the dashboard for users.
// It is very component-heavy, displaying various user-related information such as balance, daily streak, lessons, and quizzes.
// Makes it easyer to manage the layout and components of the home page.

"use client";
import HeaderGreeting from "@/components/dashboard/HeaderGreeting";
import BalanceCard from "@/components/dashboard/BalanceCard";
import DailyStreak from "@/components/dashboard/DailyStreak";
import BottomNavBar from "@/components/layout/BottomNavBar";
import LessonCard from "@/components/dashboard/LessonCard";
import DailyQuizCard from "../../components/dashboard/DailyQuizPrompt";
import { lessons } from "../../mock/mockLesson";

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

        {/* these will need to be changed to whatever we hit on backend */}
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

        <h3 className="text-quaternary text-xl font-semibold mt-4 mb-2">
          Daily Quiz
        </h3>

        <div className="w-full">
          <DailyQuizCard isUnlocked={true} />
        </div>

        {/* Bottom navigation bar */}
        <BottomNavBar />
      </div>
    </div>
  );
}
