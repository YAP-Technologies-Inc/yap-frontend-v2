import BottomNavBar from '@/components/layout/BottomNavBar';
import BalanceCard from '@/components/dashboard/BalanceCard';

export default function Progress() {
  return (
    <div className="bg-background-primary min-h-screen w-full flex flex-col">
      <div className="px-6">
        <h1 className="text-2xl font-bold text-secondary pt-8 text-left">
          Progress
        </h1>
      </div>

      <div>
        <h2 className="text-2xl font-bold text-secondary pt-8 text-left">
          Your Earnings
        </h2>
        <div className="w-full max-w-md mx-auto mt-6">
          <BalanceCard />
        </div>
        <div>
        {/* Need some progress card here taht combines streaks and words with a gray out badge */}
        </div>
      </div>

      <BottomNavBar />
    </div>
  );
}
