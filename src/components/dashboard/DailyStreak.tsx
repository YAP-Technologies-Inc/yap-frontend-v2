// DailyStreak.tsx
// This component displays the user's daily streak in the dashboard.
// Will need to have it check locally and compare against the server maybe?
// Or only locally for now?

import { useState } from "react";

export default function DailyStreak() {
  const [streak, setStreak] = useState(0);
  return (
    <div className="bg-quaternary w-full rounded-xl shadow- px-6 py-4 flex flex-col items-start text-black border-b-2 border-gray-300">
      <div className="text-white flex flex-col items-start justify-start text-lg font-semibold">
        <h3>🔥 Daily Streak</h3>
      </div>
      <div className="text-white flex flex-col items-start justify-start mt-2">
        Circle component here
      </div>
    </div>
  );
}
