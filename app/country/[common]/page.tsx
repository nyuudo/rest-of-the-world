import Image from "next/image";
import Link from "next/link";
import type { CommonProp } from "@/types/restcountries";
import { getCountryByName } from "@/utils/getCountryByName";
export default async function Common({ params }: CommonProp) {
  const common = params.common;
  const countrySelected = await getCountryByName(common);
  if (!countrySelected) {
    return <div>Sorry, Country data not found</div>;
  }

  return (
    <main className=" bg-gradient-to-t from-stone-300 to-stone-100 py-10 px-5 sm:px-10 md:lg:px-[3.75rem] xl:px-20 flex flex-col items-center">
      <div className="flex flex-col md:flex-row gap-6 md:items-start my-4 mx-auto">
        <Image
          src={countrySelected.flags?.svg}
          alt={countrySelected.name?.common}
          width={460}
          height={230}
          className="max-h-[230px]"
        ></Image>
        <div className="flex flex-col gap-6">
          <h1 className="font-bold text-sky-950 text-xl md:text-2xl">
            {countrySelected.name?.common}
          </h1>
          <ul className="text-sm text-sky-600 font-semibold flex flex-col gap-2">
            <li>
              Population:
              <span className="font-normal text-stone-700">
                {` ${countrySelected.population}`}
              </span>
            </li>
            <li>
              Region:
              <span className="font-normal text-stone-700">
                {` ${countrySelected.region}`}
              </span>
            </li>
            <li>
              Subregion:
              <span className="font-normal text-stone-700">
                {` ${countrySelected.subregion}`}
              </span>
            </li>
            <li>
              Capital:
              <span className="font-normal text-stone-700">
                {` ${countrySelected.capital}`}
              </span>
            </li>
          </ul>
        </div>
      </div>
      <hr className="border-1 rounded my-4 border-stone-400 w-4/5 md:w-2/4" />
      <Link
        href="/"
        className="text-stone-400 hover:text-sky-700 font-bold text-sm flex items-center group my-4 md:my-0"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          fill="currentColor"
          className="size-4 translate-x-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 duration-300"
        >
          <path
            fillRule="evenodd"
            d="M9.78 4.22a.75.75 0 0 1 0 1.06L7.06 8l2.72 2.72a.75.75 0 1 1-1.06 1.06L5.47 8.53a.75.75 0 0 1 0-1.06l3.25-3.25a.75.75 0 0 1 1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
        BACK TO LIST
      </Link>
    </main>
  );
}
