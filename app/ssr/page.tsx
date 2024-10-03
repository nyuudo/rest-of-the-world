import Link from "next/link";
import Image from "next/image";
import type { RestCountry } from "@/types/restcountries";

/* This was just a way to check the main fetching features as an async funciton */
/* The Server Side Rendering method produce a warning about missing a "key" when it's actually there ?!? */
export default async function SSR() {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const countries: RestCountry[] = await data.json();

  return (
    <main className="bg-gradient-to-t from-stone-300 to-stone-100 md:lg:px-[3.75rem] xl:px-20 flex flex-col gap-4 py-8">
      <section className="justify-center flex flex-column flex-wrap gap-6 md:flex-row">
        {countries.map((country) => (
          <Link
            key={country.name?.common}
            href={`/country/${country.name?.common}`}
            className="justify-center gap-4 group relative flex flex-col rounded-md bg-stone-100 hover:bg-white w-[260px] h-[200px] transition duration-1000 ease-in-out"
          >
            <Image
              src={country.flags?.svg}
              alt={country.name?.common}
              width={230}
              height={115}
              className="mx-auto max-h-[115px] grayscale group-hover:drop-shadow-lg group-hover:mix-blend-normal group-hover:grayscale-0"
            ></Image>
            <h2 className="text-stone-600 text-sm font-bold text-center group-hover:text-sky-950 px-2">
              {country.languages?.afr}
            </h2>
          </Link>
        ))}
      </section>
    </main>
  );
}
