"use client";
import { useState, useEffect } from "react";
import Card from "../../../components/listCard";
import "../../articles/articles.scss";
import "../../article/[slug]/article.scss";
import { baseUrl } from "../../../utils/baseUrl";
import Loader from "../../../utils/loader";

function ClothesArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/articles/vetements`)
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
    url: `https://equipement-velo.fr/vetements/index`,
    inLanguage: "fr_FR",
  };

  return (
    <section className="articles-list">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2>Vêtements</h2>
      <div className="article__text sub">
        <p>
          Des{" "}
          <a href="https://www.equipement-velo.fr/article/3-maillots-pour-la-belle-saison">
            maillots
          </a>
          , aux{" "}
          <a href="https://www.equipement-velo.fr/article/3-maillots-pour-la-belle-saison">
            cuissards
          </a>
          , en passant par les vestes,{" "}
          <a href="https://www.equipement-velo.fr/article/guide-pour-choisir-ses-gants-de-velo-a-la-mi-saison">
            les gants
          </a>{" "}
          et même{" "}
          <a href="https://www.equipement-velo.fr/article/les-chaussettes-pour-le-velo-un-indispensable">
            les chaussettes
          </a>
          , pour homme ou{" "}
          <a href="https://www.equipement-velo.fr/article/le-guide-cuissard-femme">
            pour femme
          </a>
          , il est toujours satisfaisant de partir en vélo dans des vêtements
          confortables qui correspondent à notre style. Ainsi, vous trouverez
          sur cette page, de nombreux articles sur les principaux distributeurs
          de vêtements à travers le vélo: les italiens de Castelli ou Santini,
          les americains de Gorewear ou encore les anglais de Rapha et Le Col.
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

export default ClothesArticles;
