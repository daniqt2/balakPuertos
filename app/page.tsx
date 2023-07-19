import Brand from "./components/Brand";
import Image from "next/image";
import SearchBar from "./components/SearchBar";

const fs = require("fs");
let data = require("./data/data.json");

export default function Home() {
  return (
    <main className="min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        {/* <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none"> */}
        <Brand />
      </div>
      <SearchBar {...data} />
    </main>
  );
}
