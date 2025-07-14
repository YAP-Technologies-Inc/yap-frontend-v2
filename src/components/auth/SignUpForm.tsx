// SignUpForm.tsx
// This component renders the sign-up form for new users.
// It includes fields for name, email, password, and confirm password.
// TODO: Hook this up to our auth logic, ensuring nothing can be seen on the frontend that shouldn't be.

'use client';
import { useState } from 'react';
import { TablerChevronLeft, TablerEye, TablerEyeOff } from '@/icons';
import SecuringLoader from '../loading/SecuringLoader';
import AuthLogo from '@/components/auth/AuthLogo';
import SelectLanguageForm from '@/components/auth/SelectLanguageForm';

interface EmailFormProps {
  onBack: () => void;
  onSwitch: () => void;
}

export default function SignUpForm({ onBack, onSwitch }: EmailFormProps) {
  const [step, setStep] = useState<'signup' | 'language' | 'loading'>('signup');
  const [showPassword1, setShowPassword1] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }
    setStep('language');
  };

  if (step === 'loading') return <SecuringLoader />;
  if (step === 'language')
    return (
      <SelectLanguageForm
        onNext={() => setStep('loading')}
        onBack={() => setStep('signup')}
      />
    );

  return (
    <div className="min-h-screen w-full bg-background-primary px-6 py-6 relative flex flex-col justify-start items-center">
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
            type={showPassword1 ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-4 py-3 pr-12 rounded-xl bg-white shadow-sm border border-gray-200 placeholder-[#A59C9C] text-[#2D1C1C] outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword1(!showPassword1)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C4B4B]"
          >
            {showPassword1 ? (
              <TablerEyeOff className="w-5 h-5" />
            ) : (
              <TablerEye className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="relative">
          <input
            type={showPassword2 ? 'text' : 'password'}
            name="confirmPassword"
            placeholder="Re-enter Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full px-4 py-3 pr-12 rounded-xl bg-white shadow-sm border border-gray-200 placeholder-[#A59C9C] text-[#2D1C1C] outline-none"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword2(!showPassword2)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-[#5C4B4B]"
          >
            {showPassword2 ? (
              <TablerEyeOff className="w-5 h-5" />
            ) : (
              <TablerEye className="w-5 h-5" />
            )}
          </button>
        </div>

        <div className="fixed bottom-0 left-0 right-0 px-6 pb-12 bg-background-primary">
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
