import { mockUserProfile } from "@/mock/mockUser";
import coin from "@/assets/coin.png";

export default function BalanceCard() {
  return (
    <div className="bg-white w-full rounded-xl shadow- px-6 py-6 flex items-center justify-between text-black border-b-2 border-gray-300">
      <div className="flex items-center text-2xl font-bold">
        <img src={coin.src} alt="Coin" className="w-8 h-8 mr-2" />
        <span>{mockUserProfile.tokenBalance} $YAP</span>
      </div>
    </div>
  );
}