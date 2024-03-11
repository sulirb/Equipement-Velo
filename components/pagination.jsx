"use client";
import { Link } from "next/link";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import "./pagination.scss";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";
import { redirect } from "next/dist/server/api-utils";

function Pagination({ currentPage }) {
  const [articles, setArticles] = useState([]);

  const goToPage = (page) => {
    redirect(`/articles/${page}`);
  };

  useEffect(() => {
    fetch(`${baseUrl}/articles/all`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const pages = Math.ceil(articles.length / 20);
  console.log(pages);
  console.log(articles.length);
  console.log(articles);
  return (
    <div className="pagination">
      {currentPage > 1 && (
        <Link
          to={`/articles/${currentPage - 1}`}
          className="pagination__chevron"
        >
          <Icon icon="ic:round-chevron-left" />
        </Link>
      )}

      <div className="pagination__number">
        {Array.from({ length: pages }, (_, index) => {
          const page = index + 1;
          return (
            <a
              href=""
              key={page}
              className={page === currentPage ? "active" : ""}
              onClick={() => goToPage(page)}
            >
              {page}
            </a>
          );
        })}
      </div>

      {currentPage < pages && (
        <Link
          to={`/articles/${currentPage + 1}`}
          className="pagination__chevron"
        >
          <Icon icon="ic:round-chevron-right" />
        </Link>
      )}
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
