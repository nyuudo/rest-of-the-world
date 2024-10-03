import Link from "next/link";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

export default function Footer() {
  return (
    <footer className="bg-sky-950 md:lg:px-[3.75rem] xl:px-20">
      <p className="py-4 text-xs text-center font-normal leading-3 text-stone-100 md:text-left">
        ©{currentYear} REST OF THE WORLD by{" "}
        <Link className="text-pink-500" href="https://nyuudo.com/">
          @nyuudo
        </Link>
      </p>
    </footer>
  );
}
