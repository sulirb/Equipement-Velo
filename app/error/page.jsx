import "./error.scss";
import errorImage from "../../app/assets/error-404.webp";
import Image from "next/image";

function Error() {
  return (
    <div className="error-page">
      <Image src={errorImage} alt="Homme qui tombe à vélo" />
      <p>Oups, la page que vous cherchez est introuvable</p>
      <a href="/">Retournez à l&apos;accueil</a>
    </div>
  );
}

export default Error;
