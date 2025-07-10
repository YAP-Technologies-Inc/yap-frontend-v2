import Image from 'next/image';
import yapLogo from '@/assets/YAP.png';

export default function YapIcon() {
  return (
    <Image
      src={yapLogo}
      alt="YAP Logo"
      className="h-10 w-auto mx-auto"
      priority
    />
  );
}
