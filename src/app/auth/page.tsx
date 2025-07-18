'use client';

import { useState, useEffect } from 'react';
import AuthCard from '@/components/auth/AuthCard';
import SignUpForm from '../../components/auth/SignUpForm';
import LoginForm from '../../components/auth/LoginForm';
import { setThemeColor, themeColors } from '@/utils/themeColor';

export default function AuthPage() {
  type FormType = 'signup' | 'login' | null;
  const [formType, setFormType] = useState<FormType>(null);

  // Set the initial theme color based on the form type
  useEffect(() => {
    if (formType === null) {
      setThemeColor(themeColors.secondary);
    } else {
      setThemeColor(themeColors.backgroundPrimary);
    }
  }, [formType]);

  return (
    <div
      className={`min-h-screen w-screen ${
        formType === null ? 'bg-background-secondary' : 'bg-background-primary'
      } flex flex-col items-center justify-center`}
      style={{
        paddingTop: 'env(safe-area-inset-top)',
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
      // Maybe these padding styles should be in the global CSS instead? or not needed at all
    >
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
