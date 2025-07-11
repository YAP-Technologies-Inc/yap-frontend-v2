'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import './SecuringLoader.css';

export default function SecuringLoader() {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/home');
    }, 3000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="loader-screen">
      <div className="loader-container"></div>
      <p className="loader-message">Securing your account...</p>
    </div>
  );
}
