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
    <div
      className={`dropdown ${isGreaterThan768px ? "desktop" : "mobile"}`}
      onMouseEnter={isGreaterThan768px ? toggleDropdown : null}
      onMouseLeave={isGreaterThan768px ? handleDropdownClose : null}
      onClick={!isGreaterThan768px ? toggleDropdown : null}
    >
      <li className="dropdown__title">{title}</li>
      {isOpen && (
        <div className="dropdown__title-options">
          {options.map((option) => (
            <a
              href={`/${title.toLowerCase().replace(/ê/g, "e")}/${option
                .replace(/\s+/g, "-")
                .replace(/ê/g, "e")
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
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Dropdown;
