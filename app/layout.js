"use client";
import { Montserrat } from "next/font/google";
import Footer from "../components/footer";
import Header from "../components/header";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Équipement Vélo",
  alternateName: "equipement-velo.fr",
  description: "Conseils Casques, Vêtements, Lunettes et Chaussures",
  url: "https://equipement-velo.fr",
  inLanguage: "fr_FR",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
      <GoogleAnalytics gaId="G-JNFF13MLTT" />
    </html>
  );
}
