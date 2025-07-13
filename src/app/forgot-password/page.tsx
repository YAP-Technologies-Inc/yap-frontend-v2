"use client";

import { useState } from "react";
import AuthLogo from "@/components/auth/AuthLogo";
import { TablerChevronLeft } from "@/icons";
import { useRouter } from "next/navigation";
import CheckEmail from "@/components/auth/CheckEmail";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  //simulate email submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setSubmitted(true); 
  };

  if (submitted) return <CheckEmail />;

  return (
    <div className="min-h-screen w-full bg-tertiary px-6 py-6 relative flex flex-col justify-start items-center">
      {/* back button */}
      <button
        onClick={() => router.back()}
        className="absolute left-4 top-12 text-2xl font-semibold text-[#2D1C1C]"
      >
        <TablerChevronLeft />
      </button>

      <AuthLogo />

      <h2 className="text-2xl font-bold text-center text-[#2D1C1C] mb-1 pt-28">
        Forgot Password
      </h2>
      <p className="text-sm text-center text-[#5C4B4B] mb-6">
        Enter the email associated with your account.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4"
        id="forgot-form"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 placeholder-[#A59C9C] text-[#2D1C1C] outline-none"
          required
        />
      </form>

      <div className="fixed bottom-0 left-0 right-0 px-6 pb-12 bg-tertiary">
        <button
          type="submit"
          form="forgot-form"
          className="w-full bg-[#2D1C1C] text-white font-semibold py-3 rounded-full shadow-md mb-3"
        >
          Next
        </button>
      </div>
    </div>
  );
}