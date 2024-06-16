"use client";

import { createContext, useEffect, useState } from "react";
import { createClient } from "contentful";

export const EntriesContext = createContext();

export default function EntriesProvider({ children }) {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const client = createClient({
          space: "2zs8e5c2j0qx",
          accessToken: "zAtlK481499AwvbuCkfeLwcQjDb55wr9YeOSorCzk2o",
        });
        const res = await client.getEntries({ content_type: "recipe" });
        setRecipes(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <EntriesContext.Provider value={recipes}>
      {children}
    </EntriesContext.Provider>
  );
}
