'use client';

import { useState } from 'react';
import AuthCard from '@/components/auth/AuthCard';
import SignUpForm from '@/components/auth/SignUpForm';
import LoginForm from '@/components/auth/LoginForm';
import group from '@/assets/group.png';
import yapLogo from '@/assets/YAP.png';
export default function AuthPage() {
  type FormType = 'signup' | 'login' | null;
  const [formType, setFormType] = useState<FormType>(null);

  return (
    <div className="min-h-screen bg-quaternary relative flex flex-col items-center justify-center overflow-hidden">
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
          <AuthCard
            onEmailClick={() => setFormType('signup')}
            onSwitch={() => setFormType('login')}
          />
        )}
      </div>
    </div>
  );
}
