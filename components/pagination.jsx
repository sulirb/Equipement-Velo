"use client";
import { useRouter } from "next/navigation";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import "./pagination.scss";
import { useEffect, useState } from "react";
import { baseUrl } from "../utils/baseUrl";

function Pagination({ currentPage }) {
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  const goToPage = (page) => {
    router.push(`/articles/${page}`);
  };

  useEffect(() => {
    fetch(`${baseUrl}/articles/all`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const pages = Math.ceil(articles.length / 20);

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToPage(currentPage - 1);
          }}
          className="pagination__chevron"
        >
          <Icon icon="ic:round-chevron-left" />
        </a>
      )}

      <div className="pagination__number">
        {Array.from({ length: pages }, (_, index) => {
          const page = index + 1;
          return (
            <a
              href="#"
              {...(page === currentPage ? { "aria-current": "page" } : {})}
              key={page}
              className={page === currentPage ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                goToPage(page);
              }}
            >
              {page}
            </a>
          );
        })}
      </div>

      {currentPage < pages && (
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            goToPage(currentPage + 1);
          }}
          className="pagination__chevron"
        >
          <Icon icon="ic:round-chevron-right" />
        </a>
      )}
    </div>
  );
}

Pagination.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

export default Pagination;
