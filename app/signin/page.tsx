"use client";

import Brand from "../components/Brand";
import Logo from "../components/Logo";
import { signIn } from "next-auth/react";

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-10">
      <div className="w-full  items-center justify-between font-mono text-sm lg:flex h-full">
        <Brand />
      </div>

      <div className="items-center text-center my-10">
        <div className="mx-auto text-center bg-white inline-block py-8 rounded-md px-4 lg:px-16">
          <Logo></Logo>
          <button
            onClick={() =>
              signIn("google", {
                callbackUrl: `/dashboard`,
              })
            }
            className="bg-slate-300 text-black p-2 px-5 rounded-full my-10"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </main>
  );
}
