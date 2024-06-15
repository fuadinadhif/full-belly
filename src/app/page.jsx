import { contentfulClient } from "@/helpers/contentful-client";

import RecipeCard from "@/components/RecipeCard";

async function getRecipes() {
  try {
    const client = contentfulClient();
    const res = await client.getEntries({ content_type: "recipe" });
    return res.items;
  } catch (error) {
    console.error(error);
  }
}

export default async function Home() {
  const recipes = await getRecipes();

  return (
    <section className="flex flex-wrap gap-8 gap-y-16">
      {recipes.map((recipe) => {
        return <RecipeCard key={recipe.sys.id} recipe={recipe} />;
      })}
    </section>
  );
}
