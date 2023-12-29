import "./table.scss";
/*import { useState, useEffect } from "react";*/

export function Table(data) {
  /*const [isLink, setIsLink] = useState(true);
  useEffect(() => {
    const reven = data.revendeurs[1].link;

    if (reven === "") {
      setIsLink(false);
    }
  }, [data.revendeurs[1].link]);*/

  return (
    <div className="tab">
      <div className="tab__coeur">
        <div className="tab__coeur-flex">
          <h3>Coup de coeur</h3>
          {data.photos && (
            <img
              className="tab__photo"
              src={data.photos[0]}
              alt={`Casque ${data.modeles[0]}`}
            />
          )}
          {data.modeles && (
            <div className="tab__coeur-flex__mname">{data.modeles[0]}</div>
          )}
        </div>
        <div className="tab__coeur-store">
          {data.revendeurs && data.revendeurs[0] && (
            <img
              className="tab__brand"
              src={data.revendeurs[0].nom}
              alt="Logo Amazon"
            />
          )}
          <div className="anchor">
            {data.revendeurs && data.revendeurs[0] && (
              <a
                href={data.revendeurs[0].link[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le prix
              </a>
            )}
          </div>
        </div>
        <div className="tab__coeur-store">
          {data.revendeurs && data.revendeurs[1] && (
            <img
              className="tab__brand"
              src={data.revendeurs[1].nom}
              alt="Logo Alltricks"
            />
          )}
          <div className="anchor">
            {data.revendeurs && data.revendeurs[1] && (
              <a
                href={data.revendeurs[1].link[0]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le prix
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="tab__rapport">
        <div className="tab__rapport-flex">
          <h3>Meilleur rapport qualité/prix</h3>
          {data.photos && (
            <img
              className="tab__photo"
              src={data.photos[1]}
              alt={`Casque ${data.modeles[1]}`}
            />
          )}
          {data.modeles && (
            <div className="tab__rapport-flex__mname">{data.modeles[1]}</div>
          )}
        </div>
        <div className="tab__rapport-store">
          {data.revendeurs && data.revendeurs[0] && (
            <img
              className="tab__brand"
              src={data.revendeurs[0].nom}
              alt="Logo Amazon"
            />
          )}
          <div className="anchor">
            {data.revendeurs && data.revendeurs[0] && (
              <a
                href={data.revendeurs[0].link[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le prix
              </a>
            )}
          </div>
        </div>
        <div className="tab__rapport-store">
          {data.revendeurs && data.revendeurs[1] && (
            <img
              className="tab__brand"
              src={data.revendeurs[1].nom}
              alt="Logo Alltricks"
            />
          )}
          <div className="anchor">
            {data.revendeurs && data.revendeurs[1] && (
              <a
                href={data.revendeurs[1].link[1]}
                target="_blank"
                rel="noopener noreferrer"
              >
                {/*isLink ? "Voir le prix" : "-"*/}
                Voir le prix
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="tab__choix">
        <div className="tab__choix-flex">
          <h3>Meilleur choix</h3>
          {data.photos && (
            <img
              className="tab__photo"
              src={data.photos[2]}
              alt={`Casque ${data.modeles[2]}`}
            />
          )}
          {data.modeles && (
            <div className="tab__choix-flex__mname">{data.modeles[2]}</div>
          )}
        </div>
        <div className="tab__choix-store">
          {data.revendeurs && data.revendeurs[0] && (
            <img
              className="tab__brand"
              src={data.revendeurs[0].nom}
              alt="Logo Amazon"
            />
          )}
          <div className="anchor">
            {data.revendeurs && data.revendeurs[0] && (
              <a
                href={data.revendeurs[0].link[2]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le prix
              </a>
            )}
          </div>
        </div>
        <div className="tab__choix-store">
          {data.revendeurs && data.revendeurs[1] && (
            <img
              className="tab__brand"
              src={data.revendeurs[1].nom}
              alt="Logo Alltricks"
            />
          )}
          <div className="anchor">
            {data.revendeurs && data.revendeurs[1] && (
              <a
                href={data.revendeurs[1].link[2]}
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir le prix
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
