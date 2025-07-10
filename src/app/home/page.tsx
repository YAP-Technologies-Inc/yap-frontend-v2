import HeaderGreeting from "@/components/dashboard/HeaderGreeting";
import BalanceCard from "@/components/dashboard/BalanceCard";
export default function HomePage() {
  return (
    <div className="bg-tertiary min-h-screen w-full flex flex-col items-center px-4 py-2">
      <HeaderGreeting />
      
      <div className="w-full max-w-md mt-4 flex justify-center">
        <BalanceCard />
      </div>
    </div>
  );
}

