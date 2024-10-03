import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";
import { setSearchTerm } from "@/store/searchSlice";

it("should dispatch search term to Redux store when input changes", () => {
  const dispatch = jest.fn();
  useDispatch.mockReturnValue(dispatch);
  render(<SearchBar />);
  const input = screen.getByPlaceholderText("Search");
  fireEvent.change(input, { target: { value: "test" } });
  expect(dispatch).toHaveBeenCalledWith(setSearchTerm("test"));
});
