"use client";

import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import Link from "next/link";
import Image from "next/image";
import type { RestCountries } from "@/types/restcountries";
import { setRegion } from "@/store/regionSlice";

export default function Home() {
  const [countries, setCountries] = useState<RestCountries>([]);
  const dispatch = useDispatch();
  const selectedRegion = useSelector(
    (state: RootState) => state.region.selectedRegion
  );
  const searchTerm = useSelector((state: RootState) => state.search.searchTerm);

  // Fetch data and update state
  useEffect(() => {
    async function fetchCountries() {
      const res = await fetch("https://restcountries.com/v3.1/all");
      const data = await res.json();
      setCountries(data);
    }
    fetchCountries();
  }, []);

  // Function to Select Region
  const handleRegionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setRegion(event.target.value));
  };

  const filteredCountries = selectedRegion
    ? countries
        .filter((country) => country.region === selectedRegion)
        .sort((a, b) => (a.name?.common > b.name?.common ? 1 : -1))
    : countries;

  // Filter based on search term
  const filteredCountriesWithSearch = searchTerm
    ? filteredCountries.filter((country) =>
        country.name?.common.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : filteredCountries;

  // The condition for the data waiting
  if (!countries) return <div>Loading...</div>;

  return (
    <main className="bg-gradient-to-t from-stone-400 to-stone-100 md:lg:px-[3.75rem] xl:px-20 flex flex-col gap-4 py-8">
      <div className="self-center md:self-end">
        <p className=" text-sky-700 font-bold text-center md:text-right p-2">
          Sort by Region
        </p>
        <select
          value={selectedRegion}
          onChange={handleRegionChange}
          className="text-sm font-medium drop-shadow-md text-stone-500 hover:text-pink-500 rounded-lg block w-60 p-2 transition duration-1000 ease-in-out"
        >
          <option value="">All Regions</option>
          <option value="Antarctic">Antarctic</option>
          <option value="Americas">Americas</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
          <option value="Asia">Asia</option>
          <option value="Africa">Africa</option>
        </select>
      </div>
      <section className="justify-center flex flex-column flex-wrap gap-6 md:flex-row">
        {filteredCountriesWithSearch.map((country) => (
          <Link
            // used the name of the country as key to maintain consistency
            key={country.name?.common}
            href={`/country/${country.name?.common.replace(/\s+/g, "-")}`}
            className="justify-center gap-4 group relative flex flex-col rounded-md bg-stone-100 hover:bg-white w-[260px] h-[200px] hover:scale-105 transition duration-1000 ease-in-out"
          >
            <Image
              src={country.flags?.svg}
              alt={country.name?.common}
              width={230}
              height={115}
              className="mx-auto max-h-[115px] grayscale group-hover:drop-shadow-lg group-hover:mix-blend-normal group-hover:grayscale-0"
            ></Image>
            <h2 className="text-stone-600 text-sm font-bold text-center group-hover:text-sky-950 px-2">
              {country.name?.common}
            </h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
