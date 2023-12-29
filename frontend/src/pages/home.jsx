import ArticlesGrid from "../components/home/articlesGrid";
import Banner from "../components/home/banner";
import HomeText from "../components/home/homeText";
import Intro from "../components/home/intro";

function Home() {
  return (
    <div className="home">
      <Banner />
      <Intro />
      <ArticlesGrid />
      <HomeText />
    </div>
  );
}

export default Home;
