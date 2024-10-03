"use client";

import Image from "next/image";
import { useDispatch } from "react-redux";
import { setSearchTerm } from "@/store/searchSlice";
export default function SearchBar() {
  // This method allows to dispatch the value to the Redux store
  const dispatch = useDispatch();
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchTerm(event.target.value));
  };
  return (
    <div className="flex group rounded-md bg-white px-2 py-1 w-60">
      <input
        className="caret-pink-700 outline-none"
        type="search"
        onChange={handleSearch}
        placeholder="Search"
      />
      <Image
        src="/images/ROW-search.svg"
        alt="Search Icon"
        width={26}
        height={22}
      ></Image>
    </div>
  );
}
