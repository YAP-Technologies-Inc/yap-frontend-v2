import { mockUserProfile } from '@/mock/mockUser';
import pfp from '@/assets/pfp.png';

export default function HeaderGreeting() {
  return (
    <div className="flex items-center justify-start w-full px-4 pt-10 pb-4">
      {/* Avatar section, currently a default logo */}
      <div className="w-12 h-12 bg-[#FFD700] rounded-full mr-3 flex items-center justify-center">
        <img
          src={pfp.src}
          alt="Profile"
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      {/* Text content of greting*/}
      <div className="flex flex-col">
        <h1 className="text-lg font-bold text-[#2D1C1C] leading-tight">
          Welcome {mockUserProfile.name}
        </h1>
        <p className="text-sm text-[#5C4B4B] leading-snug">
          Hola, ¿cómo estás hoy?
        </p>
      </div>
    </div>
  );
}