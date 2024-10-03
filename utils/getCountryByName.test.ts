import "@testing-library/jest-dom";
import { getCountryByName } from "./getCountryByName";

describe("getCountryByName", () => {
  it("should return a country object when a valid country name is provided", async () => {
    const mockResponse = [
      {
        name: { common: "France" },
        cca2: "FR",
        cca3: "FRA",
        status: "officially-assigned",
        unMember: true,
        idd: { root: "+3", suffixes: ["3"] },
        altSpellings: ["FR", "French Republic"],
        region: "Europe",
        translations: {},
        latlng: [46, 2],
        landlocked: false,
        area: 551695,
        flag: "🇫🇷",
        maps: { googleMaps: "", openStreetMaps: "" },
        population: 67081000,
        car: { signs: ["F"], side: "right" },
        timezones: ["UTC+01:00"],
        continents: ["Europe"],
        flags: { png: "", svg: "" },
        coatOfArms: { png: "", svg: "" },
        startOfWeek: "monday",
        capitalInfo: { latlng: [48.85, 2.35] },
      },
    ];

    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      })
    ) as jest.Mock;

    const result = await getCountryByName("France");
    expect(result).toEqual(mockResponse[0]);
  });

  it("should return undefined when there is a network error", async () => {
    global.fetch = jest.fn(() =>
      Promise.reject(new Error("Network Error"))
    ) as jest.Mock;

    const result = await getCountryByName("France");
    expect(result).toBeUndefined();
  });

  it("should return the country object when a matching common name is provided", async () => {
    const mockData = [
      { name: { common: "United States" } },
      { name: { common: "Canada" } },
    ];
    global.fetch = jest
      .fn()
      .mockResolvedValue({ json: jest.fn().mockResolvedValue(mockData) });

    const result = await getCountryByName("United-States");

    expect(result).toEqual({ name: { common: "United States" } });
  });
});
