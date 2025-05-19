import "./error.scss";
import errorImage from "../assets/error-404.webp";
import Image from "next/image";

function Error() {
  return (
    <div className="error-page">
      <Image
        unoptimized
        src={errorImage}
        alt="Homme qui tombe à vélo"
        width={100}
        height={100}
      />
      <p>Oups, la page que vous cherchez est introuvable</p>
      <a href="/">Retournez à l&apos;accueil</a>
    </div>
  );
}

export default Error;
