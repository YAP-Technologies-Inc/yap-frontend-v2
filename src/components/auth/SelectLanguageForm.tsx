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
    <div className="min-h-screen w-full bg-tertiary px-6 py-6 relative flex flex-col">
      {/* Back Button */}
      <button
        onClick={onBack}
        className="absolute left-4 top-12 text-[#2D1C1C]"
      >
        <TablerChevronLeft className="w-6 h-6" />
      </button>

      {/* Logo */}
      <AuthLogo />

      {/* Heading */}
      <h2 className="text-sm font-semibold text-center text-[#2D1C1C] pt-28">
        Select a language
      </h2>
      <p className="text-lg font-bold text-center text-[#2D1C1C] mb-6">
        What language would you like to learn?
      </p>

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
