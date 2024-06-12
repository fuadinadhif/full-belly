import { Inter } from "next/font/google";
import Link from "next/link";

import Logo from "@/components/Logo";
import Menu from "@/components/Menu";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "%s | FullBelly",
    default: "FullBelly",
  },
  description: "Fullfill your belly everyday.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} dark:bg-neutral-950 dark:text-white`}
      >
        <header className="mx-auto max-w-screen-xl p-6">
          <div className="hidden xl:block">
            <div>
              <Logo className={"text-center text-7xl"} />
              <h2 className="mt-2 text-center text-2xl uppercase leading-none">
                Fullfill
                <br />
                <span className="font-extralight">your</span> belly
              </h2>
            </div>
            <Menu className="mt-8 flex items-center justify-center gap-4" />
          </div>
          <div className="hidden items-center justify-between md:flex xl:hidden">
            <Logo className="text-3xl" />
            <Menu className="flex items-center justify-center gap-4" />
          </div>
          <div className="flex justify-between md:hidden">
            <Logo className="text-3xl" />
            <button class="flex items-center rounded border-2 border-black px-3 py-2">
              <svg
                class="h-3 w-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
        </header>
        <main className="mx-auto max-w-screen-xl p-6">{children}</main>
        <footer className="mt-24 text-center">
          <p className="bg-neutral-950 py-6 text-white">
            © 2024 FullBelly ❤️{" "}
          </p>
        </footer>
      </body>
    </html>
  );
}
