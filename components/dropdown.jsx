import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./dropdown.scss";

function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGreaterThan768px, setIsGreaterThan768px] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 768) {
        setIsGreaterThan768px(true);
      } else {
        setIsGreaterThan768px(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <li className="dropdown-container">
      <div
        className={`dropdown ${isGreaterThan768px ? "desktop" : "mobile"}`}
        onMouseEnter={isGreaterThan768px ? toggleDropdown : null}
        onMouseLeave={isGreaterThan768px ? handleDropdownClose : null}
        onClick={!isGreaterThan768px ? toggleDropdown : null}
      >
        <div className="dropdown__title">
          <a href={`/${title.toLowerCase().replace(/ê/g, "e")}/index`}>
            {title}
          </a>
        </div>
        {isOpen && (
          <div className="dropdown__title-options">
            {options.map((option) => (
              <a
                className="dropdown__anchor"
                href={`/${title.toLowerCase().replace(/ê/g, "e")}/${option
                  .replace(/\s+/g, "-")
                  .replace(/[êé]/g, "e")
                  .replace(/\./g, "-")
                  .toLowerCase()}`}
                key={option}
              >
                {option}
              </a>
            ))}
          </div>
        )}
      </div>
    </li>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Dropdown;
