"use client";
import { useState, useEffect } from "react";
import CardHome from "./homeCard.jsx";
import "./articlesGrid.scss";
import { baseUrl } from "../../utils/baseUrl.jsx";
import React from "react";
import Loader from "../../utils/loader";

function ArticlesGrid() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/articles/latest`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <section className="articles-grid">
      <h2>Les derniers articles</h2>
      {isLoading ? (
        <Loader />
      ) : (
        <div className="grid-container">
          {articles.map((article) => (
            <CardHome
              key={article._id}
              title={article.title}
              picture={article.file}
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
      <div className="more-articles">
        <a href="/articles/1">Voir tous les articles</a>
      </div>
    </section>
  );
}

export default ArticlesGrid;
