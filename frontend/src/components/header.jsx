import Dropdown from "./dropdown";
import "./header.scss";
import { Icon } from "@iconify/react";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className="header">
      <h1 className="header__logo">
        <a href="/">
          <img
            src="/src/assets/logo.png"
            alt="Logo du site equipement-velo.com"
          />
        </a>
      </h1>
      <nav className="header__nav">
        <div className="menu-toggle" onClick={handleMenuToggle}>
          {showMenu ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />}
        </div>

        <ul className={`header__list ${showMenu ? "active" : "inactive"}`}>
          <Dropdown
            title="Casques"
            options={[
              "Casques Abus",
              "Casques Bell",
              "Casques Giro",
              "Casques Kask",
              "Casques Lazer",
              "Casques MET",
              "Casques POC",
              "Casques Rudy Project",
              "Casques Scott",
              "Casques Smith",
              "Casques Uvex",
            ]}
          />
          <Dropdown
            title="Lunettes"
            options={[
              "Lunettes Alpina",
              "Lunettes Bolle",
              "Lunettes Julbo",
              "Lunettes Oakley",
              "Lunettes Rudy Project",
              "Lunettes Smith",
              "Lunettes Uvex",
            ]}
          />
          <Dropdown
            title="Vêtements"
            options={[
              "Vêtements Alé",
              "Vêtements Assos",
              "Vêtements Castelli",
              "Vêtements Endura",
              "Vêtements Gore Wear",
              "Vêtements Le Col",
              "Vêtements Q36.5",
              "Vêtements Rapha",
              "Vêtements Santini",
              "Vêtements Sportful",
            ]}
          />
          <Dropdown
            title="Chaussures"
            options={[
              "Chaussures Fizik",
              "Chaussures Gaerne",
              "Chaussures Mavic",
              "Chaussures Northwave",
              "Chaussures Shimano",
              "Chaussures Sidi",
            ]}
          />
        </ul>
      </nav>
    </header>
  );
}

export default Header;
