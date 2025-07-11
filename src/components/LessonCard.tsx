import { TablerCheck } from '@/icons'; 

interface LessonCardProps {
  title: string;
  description: string;
  status: 'completed' | 'locked' | 'available';
}

export default function LessonCard({ title, description, status }: LessonCardProps) {
  const getStyles = () => {
    switch (status) {
      case 'completed':
        return 'bg-red-500 border-b-2 border-red-700 text-white';
      case 'locked':
        return 'bg-gray-200 border-b-2 border-gray-400 text-gray-500';
      case 'available':
      default:
        return 'bg-white border-b-2 border-gray-300 text-[#2D1C1C]';
    }
  };

  return (
    <div className={`relative rounded-2xl px-4 py-6 shadow-md w-54 ${getStyles()}`}>
      {status === 'completed' && (
        <TablerCheck className="absolute top-2 left-2 w-5 h-5 text-white" />
      )}
      <h3 className="text-xl font-bold mb-1 text-center">{title}</h3>
      <p className="text-sm text-center opacity-80">{description}</p>
    </div>
  );
}
