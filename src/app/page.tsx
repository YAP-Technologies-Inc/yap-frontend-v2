'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import yapLogo from '../assets/YAP.png';

export default function SplashPage() {
  const router = useRouter();

  //redurect users after 2s to login page
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push('/auth');
    }, 2000);

    //clear the timeout if the component unmounts before the timeout completes
    return () => clearTimeout(timeout);
  }, [router]);
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-primary">
      <Image
        src={yapLogo}
        alt="YAP Logo"
        width={160}
        height={160}
        priority
      />
    </div>
  );
}
