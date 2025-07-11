'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import SplashScreen from '@/components/SplashScreen'; // <-- your 3-slide splash
import './SecuringLoader.css';

export default function SecuringLoader() {
  const router = useRouter();
  const [showSplash, setShowSplash] = useState(false);

  // Phase 1: "Securing your account..." loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(true); // Show the onboarding splash next
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  // Phase 2: After 3-slide splash is done, push to home
  const handleFinishSplash = () => {
    router.push('/home');
  };

  if (showSplash) return <SplashScreen onFinish={handleFinishSplash} />;

  return (
    <div className="loader-screen">
      <div className="loader-container"></div>
      <p className="loader-message">Securing your account...</p>
    </div>
  );
}
