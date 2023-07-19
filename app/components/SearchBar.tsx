"use client";

import { useState } from "react";

interface IPuerto {
  name: string;
  description: string;
  gx_media_links: string;
}

export default function SearchBar(props: { data: IPuerto[] }) {
  const [filtered, setFiltered] = useState<IPuerto[]>([]);
  const [selected, setSelected] = useState<IPuerto[]>([]);

  const handleChange = (e: any) => {
    const filter = e.target.value;
    const res = props.data.filter((p) =>
      p.name.toLowerCase().includes(filter.toLowerCase())
    );
    filter.length ? setFiltered(res) : setFiltered([]);
    // props.data.forEach((p) => console.log(p.name));
    console.log(res);
  };

  const addPuerto = (p: any) => {
    selected.push(p);
    setSelected([...selected]);
  };

  return (
    <div onClick={() => setFiltered([])}>
      <div className="pt-10 w-full flex">
        <div className="w-full text-center">
          <label htmlFor="search" className="text-white lg:w-1/3 mx-auto">
            <p>AÑADE UN PUERTO</p>
          </label>
          <input
            name="search"
            className="rounded-t-md py-2 px-5 text-black w-full lg:w-1/3 mx-auto"
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="lg:w-1/3 mx-auto overflow-y-scroll max-h-96">
        {filtered.map((_, idx) => (
          <div
            onClick={() => addPuerto(_)}
            key={idx}
            className=" bg-gray-200 p-2 text-gray-500 hover:text-gray-900 hover:cursor-pointer hover:bg-gray-300 flex"
          >
            <p className="flex-grow">{_.name}</p>
            <div className=" " onClick={() => addPuerto(_)}>
              +
            </div>
          </div>
        ))}
      </div>

      <div>
        {selected.map((_, idx) => (
          <div
            key={idx}
            className="  p-2 text-white hover:text-gray-900 hover:cursor-pointer hover:bg-gray-300 flex"
          >
            <p className="flex-grow">{_.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
