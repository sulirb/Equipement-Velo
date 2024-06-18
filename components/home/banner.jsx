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
        <h2 className={`${merriweather.className} banner__title`}>
          Roulez avec style et en sécurité
        </h2>
      </div>
    </section>
  );
}

export default Banner;
