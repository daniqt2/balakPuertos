"use client";

import { SessionProvider, useSession } from "next-auth/react";
import { createContext, useState } from "react";

import Login from "../components/Login";

const UserContext = createContext({});

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [logged, setLogged] = useState(false);

  return (
    <SessionProvider>
      <UserContext.Provider value={{}}>{children}</UserContext.Provider>
    </SessionProvider>
  );
}
