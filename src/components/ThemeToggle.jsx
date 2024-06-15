"use client";

import { setThemeCookies } from "@/helpers/theme-cookies";

export default function ThemeToggle({ theme }) {
  return (
    <button
      className="w-fit rounded-full border-2 border-black p-2 px-6 dark:border-white"
      onClick={() => setThemeCookies(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
