"use client";
import { Montserrat } from "next/font/google";
import Footer from "../components/footer";
import Header from "../components/Header";
import { GoogleAnalytics } from "@next/third-parties/google";

const montserrat = Montserrat({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={montserrat.className}>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-JNFF13MLTT" />
    </html>
  );
}
