import { NextRequest, NextResponse } from "next/server";

import Puerto from "@/models/Puertos";
import dbConnect from "@/lib/dbConnect";
import { useSession } from "next-auth/react";

export async function GET(req: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(req.url);
  console.log(searchParams.get("userid"));

  const p = await Puerto.find({});

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
