import { Inter } from "next/font/google";

import "./globals.css";
import { getThemeCookies } from "@/helpers/theme-cookies";
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

export default async function RootLayout({ children }) {
  const theme = await getThemeCookies();

  return (
    <html lang="en" className={theme}>
      <body
        className={`${inter.className} transition-colors duration-200 dark:bg-neutral-950 dark:text-white`}
      >
        <Header className="mx-auto max-w-screen-xl p-6" />
        <main className="mx-auto max-w-screen-xl p-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
