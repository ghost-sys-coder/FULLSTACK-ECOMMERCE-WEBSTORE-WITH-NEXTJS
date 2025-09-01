"use client";
import { createAuthClient } from "better-auth/client";

export const authClient = createAuthClient({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
});

export const { signIn, signUp, signOut, useSession } = authClient;

export function useAuth() {
  const session = useSession.get();

  return {
    user: session.data?.user || null,
    session: session.data || null,
    isLoading: session.isPending,
    isAuthenticated: !!session.data?.user,
    signIn,
    signOut,
    signUp,
  };
}
