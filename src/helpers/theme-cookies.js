"use server";

import { cookies } from "next/headers";

export async function getThemeCookies() {
  return cookies().get("theme").value;
}

export async function setThemeCookies(mode) {
  cookies().set("theme", mode);
}
