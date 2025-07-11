import { TablerHome } from '@/icons';

export default function BottomNavBar() {
  return (
    <div className="fixed w-full h-16 bottom-0 left-0 right-0 border-t text-black bg-primary border-gray-300 shadow-md">
      <nav className="fixed bottom-0 left-0 w-full h-16 bg-white z-50 border-t shadow-md flex justify-around items-center">
        {/* Add navigation items here */}
        <div className="flex flex-col items-center">
          <TablerHome className="text-tertiary hover:text-white w-6 h-6" />
          <a href="/home" className="text-tertiary hover:text-white text-sm">
            Home
          </a>
        </div>
        <a href="/profile" className="text-tertiary hover:text-white">
          Profile
        </a>
        <a href="/settings" className="text-tertiary hover:text-white">
          Settings
        </a>
      </nav>
    </div>
  );
}
