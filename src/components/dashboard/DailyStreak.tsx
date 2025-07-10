import { useState } from 'react';

export default function DailyStreak() {
    const [streak, setStreak] = useState(0);
    return (
        <div className="bg-quaternary w-full rounded-xl shadow- px-6 py-4 flex flex-col items-start text-black border-b-2 border-gray-300">
            <div className="text-white flex flex-col items-start justify-start">
                <h3>🔥 Daily Streak</h3>
            </div>
            <div className="text-white flex flex-col items-start justify-start mt-2">
                Hello
            </div>
        </div>
    );
}
