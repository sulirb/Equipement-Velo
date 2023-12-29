import { Route } from "react-router-dom";
import CasqueArticle from "./categoryArticle";

export function casquesRoute() {
  return (
    <>
      <Route path="/casques/:slug" element={<CasqueArticle />} />
    </>
  );
}
