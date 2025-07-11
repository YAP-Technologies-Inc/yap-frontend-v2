import { TablerCheck } from '@/icons';

interface LessonCardProps {
  title: string;
  description: string;
  status: 'completed' | 'locked' | 'available';
}

export default function LessonCard({ title, description, status }: LessonCardProps) {
  const baseClasses = 'relative rounded-2xl px-4 py-6 shadow-md w-40 h-32 flex-shrink-0 flex flex-col justify-center items-center text-center';

  const statusClasses =
    status === 'completed'
      ? 'bg-red-500 border-b-2 border-red-700 text-white'
      : status === 'locked'
      ? 'bg-gray-200 border-b-2 border-gray-400 text-gray-500'
      : 'bg-white border-b-2 border-gray-300 text-[#2D1C1C]';

  return (
    <div className={`${baseClasses} ${statusClasses}`}>
      {status === 'completed' && (
        <TablerCheck className="absolute top-2 left-2 w-5 h-5 text-white" />
      )}
      <h3 className="text-xl font-bold mb-1">{title}</h3>
      <p className="text-sm opacity-80">{description}</p>
    </div>
  );
}
