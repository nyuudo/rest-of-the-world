import { render } from "@testing-library/react";
import RootLayout from "./layout";

it("should render children components correctly within the layout", () => {
  const { getByText } = render(
    <RootLayout>
      <div>Test Child</div>
    </RootLayout>
  );
  expect(getByText("Test Child")).toBeInTheDocument();
});
