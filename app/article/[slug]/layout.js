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
    description: article.content.replace(/<[^>]*>/g, "").substring(0, 150),
    openGraph: {
      title: `${article.title} - Équipement Vélo`,
      description: article.content.replace(/<[^>]*>/g, "").substring(0, 150),
      image: article.file,
    },
  };
}

export default Page;
