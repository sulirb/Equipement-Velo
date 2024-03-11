"use client";
import { useState, useEffect } from "react";
import CardList from "../../components/listCard";
import "./articles.scss";
import Pagination from "../../components/pagination";
import { baseUrl } from "../../utils/baseUrl";

function Articles({ page }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`${baseUrl}/articles/perPage?page=${page}&perPage=20`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, [page]);

  return (
    <section className="articles-list">
      <h2>Liste des articles</h2>
      <div className="list-container">
        {articles.map((article) => (
          <CardList
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
      <Pagination currentPage={parseInt(page)} />
    </section>
  );
}

export default Articles;
