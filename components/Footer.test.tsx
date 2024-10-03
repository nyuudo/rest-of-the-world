import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  it("should render footer with correct background and text colors", () => {
    const { getByText } = render(<Footer />);
    const footerElement = getByText(/©\d{4} REST OF THE WORLD by/);
    expect(footerElement).toHaveClass("bg-sky-950");
    expect(footerElement).toHaveClass("text-stone-100");
  });

  it("should display current year dynamically when rendered", () => {
    const { getByText } = render(<Footer />);
    const currentYear = new Date().getFullYear();
    expect(getByText(`©${currentYear}`)).toBeInTheDocument();
  });

  it("should include link with correct styling to specified URL", () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText("@nyuudo");
    expect(linkElement).toHaveAttribute("href", "https://nyuudo.com/");
    expect(linkElement).toHaveClass("text-pink-500");
  });
});
