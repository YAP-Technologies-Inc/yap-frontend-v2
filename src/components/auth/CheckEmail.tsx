import { useRouter } from "next/navigation";
import Vector from "@/assets/Vector.png";
import { TablerChevronLeft } from "@/icons";
import AuthLogo from "@/components/auth/AuthLogo";

export default function CheckEmail() {
  const router = useRouter();

  return (
    <div className="min-h-screen w-full bg-background-primary px-6 py-6 relative flex flex-col justify-center items-center text-center">
      {/* Back button */}
      <button
        onClick={() => router.back()}
        className="absolute left-4 top-12 text-2xl font-semibold text-[#2D1C1C]"
      >
        <TablerChevronLeft />
      </button>

      <AuthLogo />

      <div className="mt-20 mb-6 w-20 h-20">
        <img
          src={Vector.src}
          alt="Check Email"
          className="w-full h-full object-contain"
        />
      </div>
      <h2 className="text-xl font-bold text-[#2D1C1C] mb-2">
        Check your email
      </h2>
      <p className="text-sm text-[#5C4B4B] max-w-xs">
        If there is an email associated with that account you will receive an email to reset your password
      </p>
    </div>
  );
}
