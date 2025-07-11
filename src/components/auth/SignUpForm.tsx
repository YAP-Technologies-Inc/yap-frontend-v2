"use client";

import Image from "next/image";
import { useState } from "react";
import yapLogo from "@/assets/YAP.png";
import { TablerX, TablerEye, TablerEyeOff } from "@/icons";
import SecuringLoader from "../loading/SecuringLoader";
interface EmailFormProps {
  onBack: () => void;
  onSwitch: () => void;
}

export default function SignUpForm({ onBack, onSwitch }: EmailFormProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [showLoader, setShowLoader] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowLoader(true);
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
        <TablerX />
      </button>

      {/* logo section, img load time bit slow on first load so will swith to img tag */}
      <div className="mt-10 mb-6">
        <Image src={yapLogo} alt="YAP Logo" className="h-10 w-auto mx-auto" />
      </div>

      {/* title section */}
      <h2 className="text-2xl font-bold text-center text-[#2D1C1C] mb-1">
        Create an account
      </h2>
      <p className="text-sm text-center text-[#5C4B4B] mb-6">
        Let’s get started! Enter the details to create an account.
      </p>

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
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#5C4B4B]"
          >
            {showPassword ? <TablerEyeOff /> : <TablerEye />}
          </button>
        </div>
        <button
          type="submit"
          className="w-full bg-[#2D1C1C] text-white font-semibold py-3 rounded-full shadow-md"
        >
          Signup
        </button>
      </form>

      {/* footer, maybe component it for auth pages */}
      <p className="text-center text-sm mt-8 text-[#5C4B4B] absolute left-0 right-0 bottom-4">
        Already have an account?{" "}
        <span className="underline cursor-pointer" onClick={onSwitch}>
          Sign in
        </span>
      </p>
    </div>
  );
}
