import { useState, useEffect } from "react";
import { useWindowSize } from "../utils/useContext";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import "./dropdown.scss";
import Link from "next/link";

function Dropdown({ title, options }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isGreaterThan768px, setIsGreaterThan768px] = useState(false);
  const { width } = useWindowSize();
  const [mounted, setMounted] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleDropdownClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    function handleResize() {
      if (width > 768) {
        setIsGreaterThan768px(true);
      } else {
        setIsGreaterThan768px(false);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <></>;

  return (
    <li className="dropdown-container">
      <div
        className={`dropdown ${isGreaterThan768px ? "desktop" : "mobile"}`}
        onMouseEnter={isGreaterThan768px ? toggleDropdown : null}
        onMouseLeave={isGreaterThan768px ? handleDropdownClose : null}
        onClick={!isGreaterThan768px ? toggleDropdown : null}
      >
        <div className="dropdown__title">
          <Link href={`/${title.toLowerCase().replace(/ê/g, "e")}/index`}>
            {title}
          </Link>
        </div>
        {isOpen && (
          <div className="dropdown__title-options">
            {options.map((option) => (
              <Link
                className="dropdown__anchor"
                href={`/${title.toLowerCase().replace(/ê/g, "e")}/${option
                  .replace(/\s+/g, "-")
                  .replace(/[êé]/g, "e")
                  .replace(/\./g, "-")
                  .toLowerCase()}`}
                key={option}
              >
                {option}
              </Link>
            ))}
          </div>
        )}
      </div>
      {width <= 768 && (
        <Link
          href={`/${title.toLowerCase().replace(/ê/g, "e")}/index`}
          className="mobile-anchor"
          title={`Accédez aux articles sur les ${title.toLowerCase()}`}
        >
          <Icon icon="mingcute:arrow-right-fill" />
        </Link>
      )}
    </li>
  );
}

Dropdown.propTypes = {
  title: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
};

export default Dropdown;
