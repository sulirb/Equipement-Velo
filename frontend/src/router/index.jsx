import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/home";
import Error from "../pages/error";
import Connexion from "../pages/connexion";
import Header from "../components/header";
import Footer from "../components/footer";
import Ecriture from "../pages/ecriture";
import { generalRoute } from "../pages/general/router";
import { casquesRoute } from "../pages/casques/router";
import { lunettesRoute } from "../pages/lunettes/router";
import { chaussuresRoute } from "../pages/chaussures/router";
import { vetementsRoute } from "../pages/vetements/router";
import SubmitImage from "../pages/submit";
import Mentions from "../pages/mentions";
import Contact from "../pages/contact";

const base = import.meta.env.BASE_URL;
export function App() {
  return (
    <Router basename={base}>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/connexion" element={<Connexion />} />
        <Route path="/ecriture" element={<Ecriture />} />
        <Route path="/submit" element={<SubmitImage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/mentions-legales" element={<Mentions />} />
        {lunettesRoute()}
        {vetementsRoute()}
        {chaussuresRoute()}
        {casquesRoute()}
        {generalRoute()}
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
