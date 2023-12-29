import PropTypes from "prop-types";
import "./homeCard.scss";
import { Link } from "react-router-dom";

function Card({ picture, title, href }) {
  return (
    <Link to={href} className="card">
      <div className="card__container">
        <img src={picture} alt={`Image ${title}`} />
        <div className="card__container__title">
          <h3 className="card__container__title__span">{title}</h3>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

Card.defaultProps = {
  href: "/article/:ficheNumber",
};

export default Card;
