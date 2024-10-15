"use client";
import { useState, useEffect } from "react";
import CardList from "../../../components/listCard";
import "../articles.scss";
import Pagination from "../../../components/pagination";
import { baseUrl } from "../../../utils/baseUrl";
import { useParams, useRouter } from "next/navigation";
import Loader from "../../../utils/loader";

function Articles() {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  const page = parseInt(slug, 10) || 1;

  useEffect(() => {
    fetch(`${baseUrl}/articles/perPage?page=${page}&perPage=20`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data);
        setIsLoading(false);
      })
      .catch((error) => {
        if (error.message === "404 Not Found") {
          console.error("Article introuvable : ", error);
          router.push("/error");
        }
        setIsLoading(false);
      });
  }, [page, router]);

  return (
    <section className="articles-list">
      <h2>Liste des articles</h2>
      {isLoading ? (
        <Loader />
      ) : (
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
      )}
      <Pagination currentPage={page} />
    </section>
  );
}

export default Articles;
