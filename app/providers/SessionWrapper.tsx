"use client";

import { AppWrapper } from "./AppProvider";
import { SessionProvider } from "next-auth/react";

type Props = {
  children?: React.ReactNode;
};

export const NextAuthProvider = ({ children }: Props) => {
  return (
    <SessionProvider>
      <AppWrapper>{children}</AppWrapper>
    </SessionProvider>
  );
};
