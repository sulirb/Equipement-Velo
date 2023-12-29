import "./error.scss";

function Error() {
  return (
    <div className="error-page">
      <img src="/src/assets/error-404.webp" alt="Homme qui tombe à vélo" />
      <p>Oups, la page que vous cherchez est introuvable</p>
      <a href="/">Retournez à l&apos;accueil</a>
    </div>
  );
}

export default Error;
