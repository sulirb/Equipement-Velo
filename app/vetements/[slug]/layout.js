import Page from "./page";
import { baseUrl } from "../../../utils/baseUrl";

export async function generateMetadata({ params }) {
  // read route params
  const slug = params.slug;

  // fetch data
  const product = await fetch(`${baseUrl}/article/${slug}`);
  const article = await product.json();

  return {
    title: `${article.title} - Équipement Vélo`,
    description:
      article.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
    openGraph: {
      title: article.title,
      description:
        article.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
      images: [
        {
          url: article.file,
        },
      ],
      siteName: "Équipement Vélo",
    },
    twitter: {
      title: article.title,
      description:
        article.content.replace(/<[^>]*>/g, "").substring(0, 150) + "...",
      images: [
        {
          url: article.file,
        },
      ],
      card: "summary_large_image",
    },
    alternates: {
      canonical: `https://equipement-velo.fr/vetements/${article.slug}`,
    },
  };
}

export default Page;
