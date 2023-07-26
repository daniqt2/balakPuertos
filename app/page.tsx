"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  useEffect(() => {
    console.log(session);
    if (session !== undefined) redirect("dashboard");
  }, [session]);

  return (
    <main className="min-h-screen flex-col items-center justify-between p-10 bg-white"></main>
  );
}
