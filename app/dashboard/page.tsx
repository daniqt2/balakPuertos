"use client";

import { get, post } from "../api/utils/fetchService";
import { signIn, signOut, useSession } from "next-auth/react";
import { useEffect, useState } from "react";

import { AppWrapper } from "../providers/AppProvider";
import { IUser } from "@/interfaces/user.interface";
import SearchBar from "../components/SearchBar";
import { redirect } from "next/navigation";

const puertos = require("../data/data.json");

export default function MainDashboard() {
  const { data: session } = useSession({ required: true });
  const [user, setuser] = useState<IUser | undefined>();

  console.log(session?.user);

  // if (!session) redirect("signin");

  const addAll = async () => {
    const a = await get({ src: "/api/puertos" });
    console.log("!!!a", a);
  };

  return (
    <div className="min-h-screen flex-col items-center justify-between p-10">
      <SearchBar />
    </div>
  );
}
