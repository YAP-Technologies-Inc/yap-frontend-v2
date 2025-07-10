'use client';

import { useState } from 'react';
import AuthCard from "@/components/auth/AuthCard";
import EmailForm from "@/components/auth/EmailForm"; 

export default function AuthPage() {
  const [showEmailForm, setShowEmailForm] = useState(false);

  return (
    <div className="min-h-screen bg-primary flex flex-col">
      <div className="flex-grow flex items-center justify-center">
        {showEmailForm ? (
          <EmailForm onBack={() => setShowEmailForm(false)} />
        ) : (
          <AuthCard onEmailClick={() => setShowEmailForm(true)} />
        )}
      </div>
    </div>
  );
}
