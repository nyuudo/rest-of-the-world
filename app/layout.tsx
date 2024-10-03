import "./globals.css";
import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Providers from "@/store/Provider";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "Rest of The World | %s",
    default: "Rest of The World",
  },
  description: "A small app to get data from restcountries.api",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={notoSans.className}>
      <body className="grid h-screen grid-rows-[auto_1fr_auto]">
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
