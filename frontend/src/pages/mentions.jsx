import "./mentions.scss";
import { Helmet, HelmetProvider } from "react-helmet-async";

function Mentions() {
  return (
    <HelmetProvider>
      <div className="mentions">
        <Helmet>
          <title>Mentions Légales - Équipement Vélo</title>
        </Helmet>
        <div className="mentions-text">
          <h2 className="mentions-text-title">Mentions légales</h2>
          <h3>Éditeur du site :</h3>

          <p>Nom du site : Équipement Vélo</p>
          <p>
            Adresse du site :{" "}
            <a href="https://equipement-velo.fr">https://equipement-velo.fr</a>
          </p>

          <h3>Propriétaire :</h3>

          <p>Jean Carnez - 3 rue de la Chambre 75000 Paris</p>

          <h3>Hébergement du site :</h3>

          <p>
            Le site est hébergé par : Planethoster - siège social : 4416
            Louis-B.-Mayer, Laval, Québec, Canada H7P 0G1 - Site de Paris - -
            Tél. : 01 76 60 41 43 - Site web :{" "}
            <a href="https://www.planethoster.net/fr">
              www.planethoster.net/fr
            </a>
          </p>

          <h3>
            Conseils sur les achats de casque, lunettes, vêtements et chaussures
            de vélo :
          </h3>

          <p>
            Le site equipement-velo.fr propose des conseils sur les achats de
            casques, lunettes, vêtements et chaussures de vélo. Les informations
            fournies sont à titre informatif uniquement et ne constituent pas
            des recommandations professionnelles. Les utilisateurs du site
            equipement-velo.fr sont invités à consulter un expert en la matière
            avant de prendre des décisions d&apos;achat.
          </p>

          <h3>Limitation de responsabilité :</h3>

          <p>
            L&apos;éditeur du site equipement-velo.fr ne peut être tenu
            responsable des décisions prises par les utilisateurs sur la base
            des informations fournies sur le site. Les conseils sont donnés à
            titre indicatif, et l&apos;éditeur ne garantit pas l&apos;exactitude
            ou la pertinence de ces conseils pour chaque utilisateur.
          </p>

          <h3>Droits d&apos;auteur :</h3>

          <p>
            Le contenu du site equipement-velo.fr, y compris les conseils et les
            informations fournies, est protégé par le droit d&apos;auteur. Toute
            reproduction ou utilisation non autorisée du contenu est interdite.
          </p>

          <h3>Cookies :</h3>

          <p>
            Un cookie est un petit fichier texte stocké sur votre ordinateur ou
            appareil mobile par votre navigateur web. Ce site utilise des
            cookies de Google Analytics, ils sont utilisés à des fins
            d&apos;analyse et d&apos;amélioration de l&apos;expérience
            utilisateur. Ils permettent de collecter des données statistiques
            sur la manière dont les utilisateurs naviguent sur le site.
          </p>

          <p>
            Le refus d’installation d’un cookie peut entraîner l’impossibilité
            d’accéder à certains services. L’utilisateur peut toutefois
            configurer son ordinateur de la manière suivante, pour refuser
            l’installation des cookies :
          </p>

          <ul>
            <li>
              Sous Internet Explorer : onglet outil (pictogramme en forme de
              rouage en haut a droite) / options internet. Cliquez sur
              Confidentialité et choisissez Bloquer tous les cookies. Validez
              sur Ok.
            </li>
            <li>
              Sous Firefox : en haut de la fenêtre du navigateur, cliquez sur le
              bouton Firefox, puis aller dans l’onglet Options. Cliquer sur
              l’onglet Vie privée. Paramétrez les Règles de conservation sur :
              utiliser les paramètres personnalisés pour l’historique. Enfin
              décochez-la pour désactiver les cookies.
            </li>
            <li>
              Sous Safari : Cliquez en haut à droite du navigateur sur le
              pictogramme de menu (symbolisé par un rouage). Sélectionnez
              Paramètres. Cliquez sur Afficher les paramètres avancés. Dans la
              section “Confidentialité”, cliquez sur Paramètres de contenu. Dans
              la section “Cookies”, vous pouvez bloquer les cookies.
            </li>
            <li>
              Sous Chrome : Cliquez en haut à droite du navigateur sur le
              pictogramme de menu (symbolisé par trois lignes horizontales).
              Sélectionnez Paramètres. Cliquez sur Afficher les paramètres
              avancés. Dans la section “Confidentialité”, cliquez sur
              préférences. Dans l’onglet “Confidentialité”, vous pouvez bloquer
              les cookies.
            </li>
          </ul>

          <h3>Liens hypertextes :</h3>

          <p>
            Le site equipement-velo.fr peut contenir des liens hypertextes
            redirigeant vers d&apos;autres sites web. L&apos;éditeur du site
            n&apos;est pas responsable du contenu des sites visités via ces
            liens hypertextes. Les liens sont fournis à des fins
            d&apos;information et de commodité, et l&apos;utilisation de ces
            liens est à la discrétion des utilisateurs. En cliquant sur ces
            liens, vous reconnaissez le fait que vous quittez notre site et que
            nous n&apos;avons aucun contrôle sur le contenu des sites externes.
          </p>

          <h3>Programmes d&apos;affiliation :</h3>

          <p>
            Le site equipement-velo.fr participe aux programmes
            d&apos;affiliation d&apos;Amazon et Alltricks. En tant que
            participant à ces programmes, nous pouvons recevoir des commissions
            sur les ventes générées par des liens d&apos;affiliation. Ces
            commissions contribuent au financement du site mais il est important
            de noter que la participation à ces programmes n&apos;affecte en
            rien les coûts des produits ou services pour les utilisateurs.
          </p>

          <h3>Droit applicable :</h3>

          <p>
            Ces mentions légales sont soumises au droit français. Tout litige
            découlant de l&apos;utilisation de ce site sera régi par les lois de
            la France.
          </p>
        </div>
      </div>
    </HelmetProvider>
  );
}

export default Mentions;
