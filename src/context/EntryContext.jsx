"use client";

import { createContext } from "react";

export const EntryContext = createContext(null);

export default function EntryContextProvider({ children }) {
  return <EntryContext.Provider value="dark">{children}</EntryContext.Provider>;
}
