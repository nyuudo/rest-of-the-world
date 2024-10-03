"use client";

import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import SearchBar from "./SearchBar";
export default function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  return (
    <header className="bg-stone-200 top-0 flex h-32 flex-col items-center justify-evenly px-5 sm:px-10 md:h-16 md:flex-row md:justify-between md:lg:px-[3.75rem] xl:px-20">
      <Logo /> {isHomePage && <SearchBar />}
    </header>
  );
}
