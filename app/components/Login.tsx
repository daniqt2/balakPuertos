"use client";

import Brand from "./Brand";
import Logo from "./Logo";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-10 bg-white">
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
            className=" bg-balak-green text-balak-primary text-black p-2 px-5 rounded-full my-10"
          >
            Iniciar Sesión
          </button>
        </div>
      </div>
    </main>
  );
}
