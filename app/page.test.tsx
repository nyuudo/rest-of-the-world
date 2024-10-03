import { render, screen } from "@testing-library/react";
import Home from "./page";
import { useState } from "react";

describe("Home", () => {
  it("should fetch and display all countries on initial render", async () => {
    const mockCountries = [
      { name: { common: "Country1" }, flags: { svg: "flag1.svg" } },
      { name: { common: "Country2" }, flags: { svg: "flag2.svg" } },
    ];
    global.fetch = jest.fn(() =>
      Promise.resolve({
        json: () => Promise.resolve(mockCountries),
      })
    );
    const { findByText } = render(<Home />);
    expect(await findByText("Country1")).toBeInTheDocument();
    expect(await findByText("Country2")).toBeInTheDocument();
  });

  it("should filter countries by selected region when region is selected", () => {
    const mockSelectedRegion = "Europe";
    const mockCountries = [
      { name: { common: "Country1" }, region: "Europe" },
      { name: { common: "Country2" }, region: "Asia" },
    ];

    useSelector.mockImplementation((selector) =>
      selector({ region: { selectedRegion: mockSelectedRegion } })
    );

    useState.mockReturnValueOnce([mockCountries, jest.fn()]);

    render(<Home />);

    expect(screen.getByText("Country1")).toBeInTheDocument();
    expect(screen.queryByText("Country2")).not.toBeInTheDocument();
  });

  it("should filter countries by search term when search term is provided", () => {
    const mockSearchTerm = "land";
    const mockCountries = [
      { name: { common: "Finland" }, region: "Europe" },
      { name: { common: "Iceland" }, region: "Europe" },
    ];

    useSelector.mockImplementation((selector) =>
      selector({ search: { searchTerm: mockSearchTerm } })
    );

    useState.mockReturnValueOnce([mockCountries, jest.fn()]);

    render(<Home />);

    expect(screen.getByText("Finland")).toBeInTheDocument();
    expect(screen.queryByText("Iceland")).not.toBeInTheDocument();
  });
});
