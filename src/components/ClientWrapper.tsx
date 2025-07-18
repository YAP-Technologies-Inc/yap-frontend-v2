'use client';

import React from 'react';
import { useSafariUIManager } from '@/hooks/SafariUIManager'; // your hook path

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  useSafariUIManager();
  return <>{children}</>;
}
