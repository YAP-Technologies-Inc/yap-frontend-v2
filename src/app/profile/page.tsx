// ProfilePage.tsx
// This page displays the user's profile information, including their name and wallet address.
// Currently jsut pulls from mock data

'use client';
import BottomNavBar from '../../components/layout/BottomNavBar';
import { mockUserProfile } from '@/mock/mockUser';
import Button from '../../components/ui/Button';

const firstInitial = mockUserProfile.name.charAt(0).toUpperCase();
const userName = mockUserProfile.name;
const walletSubstring = mockUserProfile.wallet.substring(0, 6);

export default function ProfilePage() {
  return (
    <div className="bg-background-primary min-h-screen flex flex-col items-center">
      <div className="mt-4 text-xl font-bold text-gray-800">Account</div>

      <div className="mt-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-semibold">
            {firstInitial}
          </span>
        </div>
        <div className="mt-2 text-lg font-medium text-gray-800">{userName}</div>
      </div>

      <div className="mt-6 w-4/5 flex justify-between items-center">
        <div className="flex-grow">
          <Button
            label={`View Wallet (${walletSubstring}...)`}
            className="w-full text-black bg-white px-6 py-2 border-black rounded-lg shadow-md transition-colors"
            onClick={() => alert('View Wallet Clicked')}
          />
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}
