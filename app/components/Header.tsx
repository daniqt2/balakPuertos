"use client";

import { useEffect, useState } from "react";

import { IUser } from "@/interfaces/user.interface";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";

export default function Header() {
  const { data: session } = useSession();
  const [user, setUser] = useState<IUser | undefined>();

  useEffect(() => {
    if (session?.user?.name) setUser(session?.user as IUser);
  }, [session?.user?.email]);

  return (
    <div className=" bg-balak-primary w-full text-black py-5 px-4 flex">
      <p className="font-bold text-white text-balak-green flex-1">BALAK</p>
      {user && (
        <div className="flex ">
          <p className="text-white mr-4 uppercase">{user.name}</p>
          <button className="text-balak-red text-sm" onClick={() => signOut()}>
            SIGNOUT
          </button>
        </div>
      )}
    </div>
  );
}
