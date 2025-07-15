import BottomNavBar from '@/components/layout/BottomNavBar';
import InfoListCard from '@/components/ui/InfoListCard';
export default function Learn() {
  return (
    <div className="bg-background-primary min-h-screen flex items-center justify-center">

      <h1 className="absolute top-0 left-0 m-4 text-2xl font-bold pt-8 text-secondary flex justify-start items-start">
        Learn
      </h1>

      <BottomNavBar />
    </div>
  );
}
