"use client";

import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState("");

  useEffect(() => {
    const currentTheme = localStorage.getItem("theme");
    setTheme(currentTheme || "light");
  }, []);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, [theme]);

  return (
    <button
      className="w-fit rounded-full border-2 border-black p-2 px-6 dark:border-white"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      {theme === "light" ? "☀️" : "🌙"}
    </button>
  );
}
