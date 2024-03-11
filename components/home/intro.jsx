import { Icon } from "@iconify/react";
import "./intro.scss";

function Intro() {
  return (
    <section className="intro">
      <div className="intro__safe">
        <h2 className="intro__title">Sécurité</h2>
        <div className="intro__hexagon">
          <Icon icon="ant-design:safety-certificate-filled" />
        </div>
        <div className="intro__txt">
          <p>
            Découvrez les dernières innovations en matière d&apos;équipements de
            protection. Protégez-vous à chaque sortie à vélo.
          </p>
        </div>
      </div>
      <div className="intro__comfort">
        <h2 className="intro__title">Confort</h2>
        <div className="intro__hexagon">
          <Icon icon="icon-park-twotone:t-shirt" />
        </div>
        <div className="intro__txt">
          <p>
            Trouvez des vêtements et des chaussures qui rendront vos sorties à
            vélo plus agréables. Maximisez votre confort sur la selle.
          </p>
        </div>
      </div>
      <div className="intro__style">
        <h2 className="intro__title">Tendance</h2>
        <div className="intro__hexagon">
          <Icon icon="noto-v1:sunglasses" />
        </div>
        <div className="intro__txt">
          <p>
            Restez à la pointe de la mode avec notre sélection
            d&apos;équipements élégants et tendance. Exprimez votre style à
            travers vos équipements.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Intro;
