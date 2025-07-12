// AuthLogo.tsx
// This component renders the YAP logo used in the authentication pages.
// Maybe redundent since we have a YapIcon component,
// but that can be addresed later

"use client";
import yapLogo from "@/assets/YAP.png";

export default function AuthLogo() {
  return (
    <div className="fixed top-10 left-1/2 transform -translate-x-1/2 z-10">
      <img src={yapLogo.src} alt="YAP Logo" className="h-10 w-auto" />
    </div>
  );
}
