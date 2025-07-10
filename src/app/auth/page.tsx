'use client';

import { useState } from 'react';
import AuthCard from '@/components/auth/AuthCard';
import SignUpForm from '@/components/auth/SignUpForm';
import LoginForm from '@/components/auth/LoginForm';
import group from '@/assets/group.png';

export default function AuthPage() {
  type FormType = 'signup' | 'login' | null;
  const [formType, setFormType] = useState<FormType>(null);
  

  return (
    <div className="min-h-screen bg-quaternary relative flex flex-col items-center justify-center overflow-hidden">
      <img
        src={group.src}
        alt="Group"
        className="absolute top-0 left-0 w-full object-cover z-0 pointer-events-none pt-20"
      />

      <div className="relative z-10 w-full flex items-center justify-center">
        {formType === 'signup' && (
          <SignUpForm
            onBack={() => setFormType(null)}
            onSwitch={() => setFormType('login')}
          />
        )}

        {formType === 'login' && (
          <LoginForm
            onBack={() => setFormType(null)}
            onSwitch={() => setFormType('signup')}
          />
        )}

        {formType === null && (
          <AuthCard onEmailClick={() => setFormType('signup')} />
        )}
      </div>
    </div>
  );
}
