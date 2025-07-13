// TODO: This file is super hacked together 
// and needs to be cleaned up. The UI and UX needs to be improved.
// But works for now 


"use client";
import { useState } from "react";
import { TablerChevronLeft } from "@/icons";
import AuthLogo from "@/components/auth/AuthLogo";

interface Props {
  onNext: () => void;
  onBack?: () => void;
}

export default function SelectLanguageForm({ onNext, onBack }: Props) {
  const [languageData, setLanguageData] = useState({
    native_language: "",
    language_to_learn: "Spanish",
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguageData({ ...languageData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: send this to the backend or next step
    onNext();
  };

  return (
    <div className="min-h-screen w-full bg-tertiary px-6 py-6 relative flex flex-col justify-start items-center">
      {/* Back Button */}
      {onBack && (
        <button
          onClick={onBack}
          className="absolute left-4 top-12 text-2xl font-semibold text-[#2D1C1C]"
        >
          <TablerChevronLeft />
        </button>
      )}

      {/* Yap Logo */}
      <AuthLogo />

      <h2 className="text-2xl font-bold text-center text-[#2D1C1C] pt-28 mb-2">
        Language Preferences
      </h2>
      <p className="text-base text-center text-[#5C4B4B] mb-6">
        Tell us what you speak and want to learn.
      </p>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm flex flex-col gap-4"
      >
        <select
          name="native_language"
          value={languageData.native_language}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 text-[#2D1C1C] outline-none"
        >
          <option value="" disabled>
            Select your native language
          </option>
          <option value="English">English</option>
        </select>

        <select
          name="language_to_learn"
          value={languageData.language_to_learn}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 rounded-xl bg-white shadow-sm border border-gray-200 text-[#2D1C1C] outline-none"
        >
          <option value="Spanish">Spanish</option>
        </select>

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
