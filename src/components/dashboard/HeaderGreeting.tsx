import { mockUserProfile } from '@/mock/mockUser';

export default function HeaderGreeting() {
  return (
    <div className="flex items-center justify-start w-full px-4 pt-10 pb-4">
      {/* Placeholder avatar circle */}
      <div className="w-12 h-12 bg-[#FFD700] rounded-full mr-3 flex items-center justify-center">
        {/* You can replace this text with an image later */}
        <span className="text-lg font-bold text-white">
          {mockUserProfile.name[0]}
        </span>
      </div>

      {/* Text content */}
      <div className="flex flex-col">
        <h1 className="text-lg font-semibold text-[#2D1C1C] leading-tight">
          Welcome {mockUserProfile.name}
        </h1>
        <p className="text-sm text-[#5C4B4B] leading-snug">
          Hola, ¿cómo estás hoy?
        </p>
      </div>
    </div>
  );
}
