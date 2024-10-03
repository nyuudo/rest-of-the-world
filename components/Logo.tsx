import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image
        src="/images/ROW-logo.svg"
        alt="Rest of the World Logo"
        width={220}
        height={22}
        priority={true}
      ></Image>
    </Link>
  );
};
