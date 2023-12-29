import "./footer.scss";
import { Icon } from "@iconify/react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__flex-a">
        <img
          src="/src/assets/logo.png"
          alt="Logo du site equipement-velo.com"
        />
        <p>
          Découvrez les meilleurs conseils pour choisir vos équipements de vélo
          adaptés à votre style et à vos besoins.
        </p>
        <div className="footer__flex-a-icon">
          <a href="/" target="_blank" rel="noreferrer">
            <Icon icon="mdi:instagram" />
          </a>
          <a
            href="https://twitter.com/EquipementVelo"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="mdi:twitter" />
          </a>
          <a href="/" target="_blank" rel="noreferrer">
            <Icon icon="mdi:facebook" />
          </a>
        </div>
      </div>
      <div className="footer__flex-b">
        <div>
          <p>
            © Copyright 2023 &#x2013; Equipement-velo.fr &#x2013; Tous droits
            réservés
          </p>
        </div>
        <ul className="footer__flex-b-anc">
          <li className="first-anchor">
            <a href="/mentions-legales">Mentions légales</a>
          </li>
          <li className="second-anchor">
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
