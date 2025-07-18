'use client';

import { TablerChevronLeft } from '@/icons';
import AuthLogo from '@/components/auth/AuthLogo';

interface Props {
  onNext: () => void;
  onBack: () => void;
}

const languages = ['Spanish', 'French'];

export default function SelectLanguageForm({ onNext, onBack }: Props) {
  const handleSelect = (lang: string) => {
    console.log(`Selected language: ${lang}`);
    // TODO: Save to user profile or pass to next step
    onNext();
  };

  return (
    <div className="min-h-screen w-full bg-background-primary px-6  relative flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute left-2 top-2 text-2xl font-semibold text-secondary"
      >
        <div className="mt-2">
          <TablerChevronLeft />
        </div>
      </button>

      <AuthLogo />

      <div className="mt-6 mb-4 text-center">
        <h2 className="text-sm font-semibold text-[#2D1C1C]">
          Select a language
        </h2>
        <p className="text-lg font-bold text-[#2D1C1C] mt-1">
          What language would you like to learn?
        </p>
      </div>

      {/* Language Buttons */}
      <div className="flex flex-col gap-3 max-w-sm w-full mx-auto">
        {languages.map((lang) => (
          <button
            key={lang}
            onClick={() => handleSelect(lang)}
            className="w-full bg-white rounded-xl px-4 py-3 text-left text-[#2D1C1C] text-base font-medium shadow-sm border border-gray-200"
          >
            {lang}
          </button>
        ))}
      </div>
    </div>
  );
}
