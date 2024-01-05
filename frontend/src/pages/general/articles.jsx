import { useState, useEffect } from "react";
import Card from "../../components/listCard";
import "./articles.scss";
import Pagination from "../../components/pagination";
import PropTypes from "prop-types";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Articles({ page }) {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:80/articles/?page=${page}&perPage=20`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
      });
  }, [page]);

  return (
    <HelmetProvider>
      <section className="articles-list">
        <Helmet>
          <title>Liste des Articles - Équipement Vélo</title>
          <meta
            name="description"
            content="Retrouvez tous nos articles rédigés avec passion et professionalisme pour vous conseiller au mieux sur les équipements préférés des cyclistes"
          />
        </Helmet>
        <h2>Liste des articles</h2>
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
        <Pagination currentPage={parseInt(page)} />
      </section>
    </HelmetProvider>
  );
}

Articles.propTypes = {
  page: PropTypes.number.isRequired,
};

export default Articles;
