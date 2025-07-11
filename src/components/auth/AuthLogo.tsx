'use client';

import Image from 'next/image';
import yapLogo from '@/assets/YAP.png';

export default function AuthLogo() {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-10">
      <Image src={yapLogo} alt="YAP Logo" className="h-10 w-auto" />
    </div>
  );
}
