"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useState } from "react";

import Login from "../components/Login";

const AppContext = createContext({});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  const { data: session } = useSession({});

  if (!session) return <Login />;
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
