"use client";

import { useEffect, useState } from "react";

import { get } from "../api/utils/fetchService";

interface IPuerto {
  name: string;
  description: string;
  gx_media_links: string;
}

export default function SearchBar() {
  const [filtered, setFiltered] = useState<IPuerto[]>([]);
  const [selected, setSelected] = useState<IPuerto[]>([]);
  const [data, setData] = useState<IPuerto[]>([]);

  useEffect(() => {
    const _getData = async () => {
      const _data = await get({ src: "api/puertos" });
      setData(_data);
    };

    _getData();
  }, []);

  const handleChange = (e: any) => {
    const filter = e.target.value;
    const res = data.filter((p) => {
      console.log(p);
      return p.name.toLowerCase().includes(filter.toLowerCase());
    });
    filter.length ? setFiltered(res) : setFiltered([]);
    // props.data.forEach((p) => console.log(p.name));
    console.log(res);
  };

  const addPuerto = (p: any) => {
    selected.push(p);
    setSelected([...selected]);
  };
  const removePuerto = (idx: number) => {
    selected.splice(idx, 1);
    setSelected([...selected]);
  };

  if (!data) return <div>jeje</div>;
  return (
    <div onClick={() => setFiltered([])}>
      <div className="pt-10 w-full flex">
        <div className="w-full text-center">
          <label htmlFor="search" className="text-white lg:w-1/3 mx-auto">
            <p>BÚSCA UN PUERTO PARA AÑADIR</p>
          </label>
          <div className="lg:w-1/3 inline-block">
            <input
              name="search"
              className="rounded-t-md py-2 px-5 text-black w-full  mx-auto"
              onChange={handleChange}
            />
            <div className="lg:w-1/3 mx-auto overflow-y-scroll max-h-96 absolute">
              {filtered.map((_, idx) => (
                <div
                  onClick={() => addPuerto(_)}
                  key={idx}
                  className=" bg-white p-2 text-gray-500 hover:text-gray-900 hover:cursor-pointer hover:bg-gray-300 flex"
                >
                  <p className="flex-grow">{_.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <p></p>
        {selected.map((_, idx) => (
          <div
            key={idx}
            className="  p-2 text-balak-primary hover:text-gray-900 hover:cursor-pointer hover:bg-gray-300 flex"
          >
            <p className="flex-grow">{_.name}</p>
            <p className="text-balak-red" onClick={() => removePuerto(idx)}>
              X
            </p>
          </div>
        ))}
      </div>

      <button className=" bg-balak-green text-balak-primary text-black p-2 px-5 rounded-full my-10">
        Guardar
      </button>
    </div>
  );
}
