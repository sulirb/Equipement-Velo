"use client";
import { useState, useEffect } from "react";
import Card from "../../../components/listCard";
import "../../articles/articles.scss";
import "../../article/[slug]/article.scss";
import { baseUrl } from "@utils/baseUrl";
import Loader from "@utils/loader";

function GlassArticles() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/articles/lunettes`)
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
    url: `https://equipement-velo.fr/lunettes/index`,
    inLanguage: "fr_FR",
  };

  return (
    <section className="articles-list">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <h2>Lunettes</h2>
      <div className="article__text sub">
        <p>
          Souvent négligés, les lunettes pour la pratique du vélo sont néanmoins
          importantes pour la protection de vos yeux durant les longues sorties,
          pour vous proteger du soleil ou bien de la pluie, des insectes ou du
          vent, aidez-vous de{" "}
          <a href="/article/un-guide-complet-sur-les-types-de-verres-pour-les-lunettes-de-velo">
            notre guide
          </a>{" "}
          et de nos articles pour choisir la paire que vous sied le mieux, des
          marques Alpina, Julbo ou encore Rudy Project.
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

export default GlassArticles;
