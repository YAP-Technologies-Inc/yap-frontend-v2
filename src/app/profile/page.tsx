'use client';
import BottomNavBar from '../../components/layout/BottomNavBar';
import { mockUserProfile } from '@/mock/mockUser';
import Button from '../../components/ui/Button';
import StatCard from '@/components/ui/StatCard';
import coin from '@/assets/coin.png';
import InfoListCard from '@/components/ui/InfoListCard';
import { TablerInfoCircle, TablerHelp, TablerFileTextShield } from '@/icons';

const firstInitial = mockUserProfile.name.charAt(0).toUpperCase();
const userName = mockUserProfile.name;
const walletSubstring = mockUserProfile.wallet.substring(0, 6);

export default function ProfilePage() {
  return (
    <div className="bg-background-primary min-h-screen flex flex-col items-center">
      <div className="mt-4 text-xl font-bold text-secondary">Account</div>

      {/* header greeting with user info and wallet */}
      <div className="mt-6 flex flex-col items-center">
        <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center">
          <span className="text-white text-2xl font-semibold">
            {firstInitial}
          </span>
        </div>
        <div className="mt-2 text-lg font-medium text-secondary">{userName}</div>
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

      {/* Stats cards */}
      <div className="w-full max-w-md px-6 mt-10">
        <h2 className="text-md font-bold text-secondary mb-4">Statistics</h2>
        <div className="flex justify-between items-center gap-2">
          <StatCard
            icon="⏰"
            label="Practiced"
            value={mockUserProfile.streakDays}
          />
          <StatCard
            icon="🔥"
            label="Streak"
            value={mockUserProfile.highestStreak}
          />
          <StatCard
            icon={coin.src}
            label="Total $YAP"
            value={mockUserProfile.tokenBalance}
            isImage
          />
        </div>
      </div>
      {/* Others like about and what not */}
      <div className="w-full max-w-md px-6 mt-16 pb-10">
        <h2 className="text-md font-bold text-secondary mb-2">Others</h2>
        <InfoListCard
          items={[
            {
              icon: <TablerInfoCircle />,
              label: 'About app',
              onClick: () => console.log('About app clicked'),
            },
            {
              icon: <TablerHelp />,
              label: 'Help & Support',
              onClick: () => console.log('Help clicked'),
            },
            {
              icon: <TablerFileTextShield />,
              label: 'Terms & Conditions',
              onClick: () => console.log('Terms clicked'),
            },
          ]}
        />
      </div>

      <BottomNavBar />
    </div>
  );
}
