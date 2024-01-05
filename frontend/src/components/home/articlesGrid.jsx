import { useState, useEffect } from "react";
import Card from "./homeCard";
import "./articlesGrid.scss";

function ArticlesGrid() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:80/articles/latest")
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  return (
    <section className="articles-grid">
      <h2>Les derniers articles</h2>
      <div className="grid-container">
        {articles.map((article) => (
          <Card
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
      <div className="more-articles">
        <a href="/articles">Voir tous les articles</a>
      </div>
    </section>
  );
}

export default ArticlesGrid;
