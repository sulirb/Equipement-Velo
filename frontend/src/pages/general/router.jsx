import { Navigate, Route } from "react-router-dom";
import Article from "./article";
import Articles from "./articles";

export function generalRoute() {
  return (
    <>
      <Route path="/articles" element={<Articles page={1} />} />
      <Route path="/articles/1" element={<Navigate replace to="/articles" />} />
      <Route path="/articles/2" element={<Articles page={2} />} />
      <Route path="/articles/3" element={<Articles page={3} />} />
      <Route path="/article/:slug" element={<Article />} />
      <Route path="/article/*" element={<Navigate replace to="/404" />} />
    </>
  );
}
