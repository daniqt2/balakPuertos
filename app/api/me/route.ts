import { NextRequest, NextResponse } from "next/server";

import Puerto from "@/models/Puertos";
import User from "@/models/User";
import dbConnect from "@/lib/dbConnect";
import { useSession } from "next-auth/react";

export async function GET(req: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userid");

  const p = await User.find({ _id: userId });

  return NextResponse.json(p);
}

export async function POST(req: NextRequest) {
  //   await dbConnect();

  //   const p = await Puerto.insertMany(data);

  //   console.log("p", p);
  const res = await req.json();
  console.log(res);

  const p = await Puerto.insertMany(res);
  return NextResponse.json("holiiiii");
}
