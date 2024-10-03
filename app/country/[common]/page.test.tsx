import { render } from "@testing-library/react";
import Common from "./page";

describe("Common", () => {
  it("should display country data when a valid country name is provided", async () => {
    const mockCountryData = {
      flags: { svg: "mock-flag-url" },
      name: { common: "Mock Country" },
      population: 1000000,
      region: "Mock Region",
      subregion: "Mock Subregion",
      capital: "Mock Capital",
    };

    jest.mock("@/utils/getCountryByName", () => ({
      getCountryByName: jest.fn().mockResolvedValue(mockCountryData),
    }));

    const { getByText, getByAltText } = render(
      <Common params={{ common: "Mock Country" }} />
    );

    expect(await getByAltText("Mock Country")).toBeInTheDocument();
    expect(getByText("Population: 1000000")).toBeInTheDocument();
    expect(getByText("Region: Mock Region")).toBeInTheDocument();
    expect(getByText("Subregion: Mock Subregion")).toBeInTheDocument();
    expect(getByText("Capital: Mock Capital")).toBeInTheDocument();
  });

  it("should display an error message when the country name does not exist", async () => {
    jest.mock("@/utils/getCountryByName", () => ({
      getCountryByName: jest.fn().mockResolvedValue(null),
    }));

    const { getByText } = render(
      <Common params={{ common: "Nonexistent Country" }} />
    );

    expect(
      await getByText("Sorry, Country data not found")
    ).toBeInTheDocument();
  });
});
