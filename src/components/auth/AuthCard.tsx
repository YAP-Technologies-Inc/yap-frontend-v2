"use client";

import AuthButton from "@/components/auth/AuthButtons";
import { TablerBrandGoogle, TablerBrandAppleFilled, TablerMail } from "@/icons";
import yapLogo from "@/assets/YAP.png";
import group from "@/assets/group.png";
import Image from "next/image";
import AuthLogo from "@/components/auth/AuthLogo";
interface AuthCardProps {
  onEmailClick: () => void;
  onSwitch: () => void;
}

export default function AuthCard({ onEmailClick, onSwitch }: AuthCardProps) {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-quaternary">
      <AuthLogo />

      {/* Group Image */}
      <div className="w-full max-w-md pt-28 px-6">
        <img
          src={group.src}
          alt="Group"
          className="w-full object-cover rounded-xl"
        />
      </div>

      {/* Auth Card */}
      <div
        className="bg-tertiary w-full px-6 py-10 rounded-t-3xl shadow-lg
                   sm:max-w-md sm:px-8 sm:py-12
                   lg:max-w-lg xl:max-w-xl
                   flex flex-col items-center justify-center h-auto min-h-[50vh] mt-auto"
      >
        <div className="w-full">
          <h1 className="text-2xl font-bold text-center text-[#2D1C1C] mb-2">
            Welcome to Yap
          </h1>
          <p className="text-sm text-center text-[#5C4B4B] mb-6">
            The only app that pays you to practice languages.
          </p>

          <AuthButton
            icon={<TablerMail />}
            label="Continue with Email"
            onClick={onEmailClick}
          />
          <div className="text-center my-3 text-sm text-[#A59C9C]">OR</div>
          <AuthButton
            icon={<TablerBrandAppleFilled />}
            label="Continue with Apple"
          />
          <AuthButton
            icon={<TablerBrandGoogle />}
            label="Continue with Google"
          />
        </div>

        <p className="text-center text-sm mt-8 text-[#5C4B4B]">
          Already have an account?{" "}
          <span className="underline cursor-pointer" onClick={onSwitch}>
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
}
