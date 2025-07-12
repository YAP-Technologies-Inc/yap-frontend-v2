// LoginForm.tsx
// This component renders the login form for existing users.
// It includes fields for email and password.

"use client";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { TablerChevronLeft, TablerEye, TablerEyeOff } from "@/icons";
import AuthLogo from "@/components/auth/AuthLogo";
interface EmailFormProps {
  onBack: () => void;
  onSwitch: () => void;
}

export default function LoginForm({ onBack, onSwitch }: EmailFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Logging in:", formData);
    // TODO: Hook this up to our login logic
  };

  const router = useRouter();
  return (
    <div className="min-h-screen w-full bg-tertiary px-6 py-6 relative flex flex-col justify-start items-center">
      {/* back button */}
      <button
        onClick={onBack}
        className="absolute left-4 top-12 text-2xl font-semibold text-[#2D1C1C]"
      >
        <TablerChevronLeft />
      </button>

      <AuthLogo />

      {/* title */}
      <h2 className="text-2xl font-bold text-center text-[#2D1C1C] mb-1 pt-28">
        Sign in
      </h2>
      <p className="text-sm text-center text-[#5C4B4B] mb-6">
        Welcome back! Enter your credentials to continue.
      </p>

      {/* login form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4"
        id="login-form"
      >
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 placeholder-[#A59C9C] text-[#2D1C1C] outline-none"
          required
        />
        <div className="relative w-full">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 pr-12 rounded-xl bg-white shadow-sm border border-gray-200 placeholder-[#A59C9C] text-[#2D1C1C] outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#5C4B4B]"
          >
            {showPassword ? (
              <TablerEyeOff className="w-5 h-5" />
            ) : (
              <TablerEye className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="w-full max-w-sm flex justify-end mt-1">
          <button
            type="button"
            onClick={() => router.push("/forgot-password")}
            className="text-sm text-[#5C4B4B] underline"
          >
            Forgot password?
          </button>
        </div>
      </form>

      <div className="fixed bottom-0 left-0 right-0 px-6 pb-12 bg-tertiary">
        <button
          type="submit"
          form="signup-form"
          className="w-full bg-[#2D1C1C] text-white font-semibold py-3 rounded-full shadow-md mb-3"
        >
          Next
        </button>
      </div>
    </div>
  );
}
