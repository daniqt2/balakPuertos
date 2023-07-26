"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useEffect, useState } from "react";

const AppContext = createContext({});

export function AppWrapper({ children }: { children: React.ReactNode }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}
