import Home from "./home";

export const metadata = {
  metadataBase: new URL("https://equipement-velo.fr"),
  title:
    "Équipement Vélo - Conseils Casques, Vêtements, Lunettes et Chaussures",
  description:
    "Découvrez nos meilleurs conseils pour choisir casques, lunettes, vêtements et chaussures de vélo adaptés à votre style et à vos besoins.",
  openGraph: {
    title:
      "Équipement Vélo - Conseils Casques, Vêtements, Lunettes et Chaussures",
    description:
      "Découvrez nos meilleurs conseils pour choisir casques, lunettes, vêtements et chaussures de vélo adaptés à votre style et à vos besoins.",
    url: "https://equipement-velo.fr",
    siteName: "Équipement Vélo",
    images: [
      {
        url: "https://equipement-velo.s3.eu-west-3.amazonaws.com/logo/logo-fb-size.png",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Équipement Vélo",
  alternateName: "equipement-velo.fr",
  description: "Conseils Casques, Vêtements, Lunettes et Chaussures",
  url: "https://equipement-velo.fr",
  inLanguage: "fr_FR",
};

export default function Page() {
  return (
    <div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </div>
  );
}
