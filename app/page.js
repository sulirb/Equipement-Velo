import Home from "./home";

export const metadata = {
  metadataBase: new URL("https://equipement-velo.fr"),
  title:
    "Equipement Vélo - Conseils Casques, Vêtements, Lunettes et Chaussures",
  description:
    "Découvrez nos meilleurs conseils pour choisir casques, lunettes, vêtements et chaussures de vélo adaptés à votre style et à vos besoins.",
  openGraph: {
    title:
      "Equipement Vélo - Conseils Casques, Vêtements, Lunettes et Chaussures",
    description:
      "Découvrez nos meilleurs conseils pour choisir casques, lunettes, vêtements et chaussures de vélo adaptés à votre style et à vos besoins.",
    url: "https://equipement-velo.fr",
    siteName: "Équipement Vélo",
    image: "https://i.ibb.co/DzQrYYZ/logo-fb-size.png",
    locale: "fr_FR",
    type: "website",
  },
};

export default function Page() {
  return (
    <div>
      <Home />
    </div>
  );
}
