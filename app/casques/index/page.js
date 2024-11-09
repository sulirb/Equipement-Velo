"use client";
import { useState, useEffect } from "react";
import Card from "../../../components/listCard";
import "../../articles/articles.scss";
import "../../article/[slug]/article.scss";
import { baseUrl } from "@utils/baseUrl";
import Loader from "@utils/loader";

function HelmetArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/articles/casques`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Équipement Vélo",
    url: `https://equipement-velo.fr/casques/index`,
    inLanguage: "fr_FR",
  };

  return (
    <section className="articles-list">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2>Casques</h2>
      <div className="article__text sub">
        <p>
          Que ce soit pour être protégé ou pour être tendance, trouvez un casque
          qui reflète vos envies et votre personnalité. Retrouvez donc les
          articles avec nos avis sur les casques de vélo: les casques pour la
          pratique du{" "}
          <a href="/article/les-equipements-primordiaux-pour-le-vtt-casque-gants-chaussures">
            VTT
          </a>
          , du{" "}
          <a href="/article/les-equipements-indispensables-pour-les-cyclistes-urbains-le-casque">
            vélo urbain
          </a>{" "}
          ou du vélo de route, les casques pour{" "}
          <a href="/article/choisir-un-bon-casque-de-velo-avec-un-petit-budget">
            les enfants
          </a>{" "}
          ou pour les adultes, pour un{" "}
          <a href="/article/choisir-un-bon-casque-de-velo-avec-un-petit-budget">
            petit
          </a>{" "}
          ou un gros budget, des différentes marques proposées sur notre site,
          de Abus à Uvex, en passant par Scott ou Kask.
        </p>
      </div>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="list-container">
          {articles.map((article) => (
            <Card
              key={article._id}
              title={article.title}
              picture={article.file}
              content={article.content}
              date={article.createdAt}
              href={
                article.tag === "casques"
                  ? `/casques/${article.slug}`
                  : article.tag === "lunettes"
                  ? `/lunettes/${article.slug}`
                  : article.tag === "vetements"
                  ? `/vetements/${article.slug}`
                  : article.tag === "chaussures"
                  ? `/chaussures/${article.slug}`
                  : `/article/${article.slug}`
              }
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default HelmetArticles;
