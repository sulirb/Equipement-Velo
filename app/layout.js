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
  "@type": "Organization",
  name: "Équipement Vélo",
  description: "Conseils Casques, Vêtements, Lunettes et Chaussures",
  url: "https://equipement-velo.fr",
  logo: "https://www.equipement-velo.fr/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.9df58a92.png&w=640&q=75",
  inLanguage: "fr_FR",
  email: "contact@equipement-velo.fr",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4910996310955486"
          crossorigin="anonymous"
        ></script>
      </head>
      <body className={montserrat.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
