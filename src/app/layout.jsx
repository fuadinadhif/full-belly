import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
        <Header className="mx-auto max-w-screen-xl p-6" />
        <main className="mx-auto max-w-screen-xl p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
