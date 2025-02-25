import { Merriweather } from "next/font/google";
import "./banner.scss";

const merriweather = Merriweather({
  weight: ["700"],
  subsets: ["latin"],
  display: "swap",
});

function Banner() {
  return (
    <section className="banner">
      <div className="banner__flex">
        <h1 className={`${merriweather.className} banner__title`}>
          Roulez avec style et en sécurité
        </h1>
      </div>
    </section>
  );
}

export default Banner;
