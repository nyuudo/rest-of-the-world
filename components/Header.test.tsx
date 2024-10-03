import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header", () => {
  it("should render Logo component when Header is rendered", () => {
    render(<Header />);
    const logoElement = screen.getByTestId("logo");
    expect(logoElement).toBeInTheDocument();
  });

  it("should render the header with logo and search bar on home page", () => {
    jest.mock("next/navigation", () => ({
      usePathname: jest.fn().mockReturnValue("/"),
    }));
    const { getByTestId, queryByRole } = render(<Header />);
    expect(getByTestId("logo")).toBeInTheDocument();
    expect(queryByRole("searchbox")).toBeInTheDocument();
  });
});
