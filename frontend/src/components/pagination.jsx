import { Link, useNavigate } from "react-router-dom";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import "./pagination.scss";
import { useEffect, useState } from "react";

function Pagination({ currentPage }) {
  const [articles, setArticles] = useState([]);
  const navigate = useNavigate();

  const goToPage = (page) => {
    navigate(`/articles/${page}`);
  };

  useEffect(() => {
    fetch(`http://localhost:80/articles/`)
      .then((res) => res.json())
      .then((data) => setArticles(data));
  }, []);

  const pages = Math.ceil(articles.length / 20);

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
