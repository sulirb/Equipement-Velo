import PropTypes from "prop-types";
import "./listCard.scss";
import { Link } from "react-router-dom";

function Card({ picture, title, href, content }) {
  return (
    <Link to={href} className="anchor-listcard">
      <div className="listcard">
        <div className="listcard__image">
          <img src={picture} alt="logo" />
        </div>
        <div className="listcard__flex">
          <h3 className="listcard__flex-title">{title}</h3>
          <div
            className="listcard__flex-content"
            dangerouslySetInnerHTML={{
              __html: content.replace(/<[^>]*>/g, "").substring(0, 200) + "...",
            }}
          ></div>
        </div>
      </div>
    </Link>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

Card.defaultProps = {
  href: "/article/:ficheNumber",
};

export default Card;
