import "./footer.scss";
import { Icon } from "@iconify/react";
import websiteLogo from "../app/assets/logo.png";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__flex-a">
        <Image src={websiteLogo} alt="Logo du site equipement-velo.fr" />
        <p>
          Découvrez les meilleurs conseils pour choisir vos équipements de vélo
          adaptés à votre style et à vos besoins.
        </p>
        <div className="footer__flex-a-icon">
          <a
            href="https://www.threads.net/@equipementvelo5"
            aria-label="Threads"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="hugeicons:threads" />
          </a>
          <a
            href="https://twitter.com/EquipementVelo"
            aria-label="Twitter"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="hugeicons:new-twitter" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=61555770154596"
            aria-label="Facebook"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="hugeicons:facebook-02" />
          </a>
          <a
            href="https://bsky.app/profile/equipement-velo.bsky.social"
            aria-label="Bluesky"
            target="_blank"
            rel="noreferrer"
          >
            <Icon icon="meteor-icons:bluesky" />
          </a>
        </div>
      </div>
      <div className="footer__flex-b">
        <div>
          <p>
            © Copyright 2024 &#x2013; Equipement-velo.fr &#x2013; Tous droits
            réservés
          </p>
        </div>
        <ul className="footer__flex-b-anc">
          <li className="first-anchor">
            <Link href="/mentions-legales">Mentions légales</Link>
          </li>
          <li className="second-anchor">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
