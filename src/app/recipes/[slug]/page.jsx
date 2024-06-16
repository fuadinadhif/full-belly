import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS } from "@contentful/rich-text-types";
import { headers } from "next/headers";

import { contentfulClient } from "@/helpers/contentful-client";
import ShareButton from "@/components/ShareButton";

export async function generateStaticParams() {
  const client = contentfulClient();
  const res = await client.getEntries({ content_type: "recipe" });

  return res.items.map((item) => ({
    slug: item.slug,
  }));
}

async function getRecipe(slug) {
  try {
    const client = contentfulClient();
    const res = await client.getEntries({
      content_type: "recipe",
      "fields.slug": slug,
    });
    return res.items[0];
  } catch (error) {
    console.error(error);
  }
}

export async function generateMetadata({ params }) {
  const recipe = await getRecipe(params.slug);
  const { title, description, featuredImage } = recipe.fields;
  const headersList = headers();
  const url = headersList.get("x-url") || "";

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "FullBelly",
      images: [
        {
          url: `https:${featuredImage.fields.file.url}`,
        },
      ],
      locale: "en_US",
      type: "article",
    },
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
  };
}

export default async function Page({ params }) {
  const recipe = await getRecipe(params.slug);
  const {
    title,
    description,
    cookingTime,
    ingredients,
    method,
    featuredImage,
  } = recipe.fields;
  const options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => (
        <p className="mb-4">{children}</p>
      ),
      [BLOCKS.HEADING_5]: (node, children) => (
        <h5 className="text-lg font-semibold">{children}</h5>
      ),
    },
  };
  return (
    <section className="mx-auto max-w-4xl">
      <div className="h-80">
        <Image
          src={`https:${featuredImage.fields.file.url}`}
          alt="Featured image."
          width={featuredImage.fields.file.details.image.width}
          height={featuredImage.fields.file.details.image.height}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="mx-auto max-w-2xl">
        <div className="mt-12">
          <div className="flex items-center justify-between">
            <h3 className="text-4xl font-extrabold">{title}</h3>
            <ShareButton text="Come get this!" size={25} />
          </div>
          <p className="mt-4 font-semibold">⌛ {cookingTime} minutes to make</p>
          <p className="mt-2">{description}</p>
        </div>
        <div className="mt-6">
          <h4 className="mb-2 text-xl font-extrabold">Ingredients</h4>
          <ul className="pl-4">
            {ingredients.map((ing) => (
              <li key={ing} className="list-disc">
                {ing}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-6">
          <h4 className="mb-2 text-xl font-extrabold">Method</h4>
          <div className="rich-text">
            {documentToReactComponents(method, options)}
          </div>
        </div>
      </div>
    </section>
  );
}
