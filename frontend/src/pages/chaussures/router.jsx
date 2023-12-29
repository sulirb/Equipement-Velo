import { Navigate, Route } from "react-router-dom";
import ChaussureArticle from "./categoryArticle";

export function chaussuresRoute() {
  return (
    <>
      <Route path="/chaussures/:slug" element={<ChaussureArticle />} />
      <Route path="/chaussures/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
