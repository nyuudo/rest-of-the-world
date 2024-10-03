import type { RestCountry } from "@/types/restcountries";
export async function getCountryByName(
  common: string
): Promise<RestCountry | undefined> {
  const data = await fetch("https://restcountries.com/v3.1/all");
  const countries: RestCountry[] = await data.json();

  // Replace hyphens with spaces
  const commonFormatted = common.replace(/-/g, " ");

  return countries.find((country) => {
    return country.name?.common === commonFormatted;
  });
}
