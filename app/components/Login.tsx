import { signIn, signOut, useSession } from "next-auth/react";

import Brand from "./Brand";

export default function Component() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <Brand />
      <div className="w-full flex">
        <button
          onClick={() => signIn()}
          className="mx-auto bg-white rounded-lg px-5 py-2 text-black"
        >
          Sign in
        </button>
      </div>
    </main>
  );
}
