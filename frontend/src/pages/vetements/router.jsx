import { Navigate, Route } from "react-router-dom";
import VetementArticle from "./categoryArticle";

export function vetementsRoute() {
  return (
    <>
      <Route path="/vetements/:slug" element={<VetementArticle />} />
      <Route path="/vetements/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
