import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Logo } from "./Logo";

describe("Logo", () => {
  it("should render the Logo component without errors", () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText("Rest of the World Logo");
    expect(logoImage).toBeInTheDocument();
  });
});
