import { Navigate, Route } from "react-router-dom";
import LunetteArticle from "./categoryArticle";

export function lunettesRoute() {
  return (
    <>
      <Route path="/lunettes/:slug" element={<LunetteArticle />} />
      <Route path="/lunettes/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
