"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: React.ReactNode;
}
//!! This component will most likley be used later when I start implementing auth
//!! for now it is just a placeholder to show how you can protect routes if needed

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const router = useRouter();

  //this is a simulated auth check, replace with real check if we need
  //for example, you can check if a token exists in localStorage or use a context
  const isAuthenticated =
    typeof window !== "undefined" && localStorage.getItem("token");

  //this sends users to login
  //   useEffect(() => {
  //     if (!isAuthenticated) {
  //       router.replace('/auth');
  //     }
  //   }, [isAuthenticated, router]);

  // if not authenticated, return null or a loading spinner
  if (!isAuthenticated) return null;

  return <>{children}</>;
}
