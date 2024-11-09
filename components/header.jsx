"use client";
import Dropdown from "./dropdown";
import "./header.scss";
import { Icon } from "@iconify/react";
import { React, useState } from "react";
import websiteLogo from "../app/assets/logo.png";
import Image from "next/image";
import { WindowSizeProvider } from "@utils/windowSizeContext";

function Header({ pageProps }) {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };

  return (
    <WindowSizeProvider>
      <header className="header">
        <h1 className="header__logo">
          <a href="/" aria-label="Équipement-Vélo">
            <Image src={websiteLogo} alt="Logo du site equipement-velo.fr" />
          </a>
        </h1>
        <nav className="header__nav">
          <div className="menu-toggle" onClick={handleMenuToggle}>
            {showMenu ? <Icon icon="mdi:close" /> : <Icon icon="mdi:menu" />}
          </div>

          <ul className={`header__list ${showMenu ? "active" : "inactive"}`}>
            <Dropdown
              {...pageProps}
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
              {...pageProps}
              title="Lunettes"
              options={[
                "Lunettes Alpina",
                "Lunettes Bollé",
                "Lunettes Julbo",
                "Lunettes Oakley",
                "Lunettes Rudy Project",
                "Lunettes Smith",
                "Lunettes Uvex",
              ]}
            />
            <Dropdown
              {...pageProps}
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
              {...pageProps}
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
    </WindowSizeProvider>
  );
}

export default Header;
