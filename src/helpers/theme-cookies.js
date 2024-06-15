"use server";

import { cookies } from "next/headers";

export async function getThemeCookies() {
  const theme = cookies().get("theme")?.value;
  if (theme) return theme;
  return "light";
}

export async function setThemeCookies(mode) {
  cookies().set("theme", mode);
}
