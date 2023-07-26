"use client";

import Header from "../components/Header";
import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <Header></Header>
      {children}
    </SessionProvider>
  );
};
