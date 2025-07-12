// SignUpForm.tsx
// This component renders the sign-up form for new users.
// It includes fields for name, email, password, and confirm password.
// TODO: Hook this up to our auth logic, ensuring nothing can be seen on the frontend that shouldn't be.
// TODO: Tabler Eyes need to be unique for each input field

"use client";
import { useState } from "react";
import { TablerChevronLeft, TablerEye, TablerEyeOff } from "@/icons";
import SecuringLoader from "../loading/SecuringLoader";
interface EmailFormProps {
  onBack: () => void;
  onSwitch: () => void;
}
import AuthLogo from "@/components/auth/AuthLogo";
export default function SignUpForm({ onBack, onSwitch }: EmailFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setShowLoader(true);
    // proceed with signup
  };

  if (showLoader) return <SecuringLoader />;

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Submitting:', formData);
  //   // TODO: Hook this up to our auth logic, ensuring nothing can be
  //   // seen on the frontend that shouldn't be.
  // };

  return (
    <div className="min-h-screen w-full bg-tertiary px-6 py-6 relative flex flex-col justify-start items-center">
      {/* return to prev page*/}
      <button
        onClick={onBack}
        className="absolute left-4 top-12 text-2xl font-semibold text-[#2D1C1C]"
      >
        <TablerChevronLeft />
      </button>

      <AuthLogo />

      {/* title section */}
      <h2 className="text-2xl font-bold text-center text-[#2D1C1C] mb-1 pt-28">
        Create an account
      </h2>
      <p className="text-base text-center text-[#5C4B4B] mb-6">
        Let’s get started! Enter the details to create an account.
      </p>
      <div className="py-4"></div>
      {/* form submission */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 placeholder-[#A59C9C] text-[#2D1C1C] outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 placeholder-[#A59C9C] text-[#2D1C1C] outline-none"
          required
        />
        <div className="relative">
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
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C4B4B]"
          >
            {showPassword ? (
              <TablerEyeOff className="w-5 h-5" />
            ) : (
              <TablerEye className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="relative">
          <input
            type={showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 pr-12 rounded-xl bg-white shadow-sm border border-gray-200 placeholder-[#A59C9C] text-[#2D1C1C] outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C4B4B]"
          >
            {showPassword ? (
              <TablerEyeOff className="w-5 h-5" />
            ) : (
              <TablerEye className="w-5 h-5" />
            )}
          </button>
        </div>
        <div className="fixed bottom-0 left-0 right-0 px-6 pb-12 bg-tertiary">
          <button
            type="submit"
            className="w-full bg-[#2D1C1C] text-white font-semibold py-3 rounded-full shadow-md mb-3"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
