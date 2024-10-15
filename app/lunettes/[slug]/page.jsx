"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import GlassTable from "./glassTable";
import "../../article/[slug]/article.scss";
import { useCookies } from "react-cookie";
import { baseUrl } from "../../../utils/baseUrl";
import Image from "next/image";
import Loader from "../../../utils/loader";

function LunetteArticle() {
  const [article, setArticle] = useState(null);
  const { slug } = useParams();
  const router = useRouter();
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/article/${slug}`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("404 Not Found");
        }
        return res.json();
      })
      .then((data) => {
        if (data.tag === "lunettes") {
          setArticle(data);
          setIsLoading(false);
        } else {
          throw new Error("404 Not Found");
        }
      })
      .catch((error) => {
        if (error.message === "404 Not Found") {
          console.error("Article introuvable : ", error);
          router.push("/error");
        }
        setIsLoading(false);
      });
  }, [slug, router]);

  const deleteArticle = () => {
    fetch(`${baseUrl}/article/${slug}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(() => {
        setArticle((values) => {
          return values.filter((item) => item.id !== slug);
        });
        router.push("/");
      });
  };

  const jsonLd = article
    ? {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Équipement Vélo",
        url: `https://equipement-velo.fr/lunettes/${article.slug}`,
        inLanguage: "fr_FR",
      }
    : {};

  return (
    <section className="backarticle">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          {article && (
            <div className="article">
              <h2 className="article__title"> {article.title}</h2>
              <div className="article__date">
                Publié le : {article.createdAt}
              </div>
              <Image
                className="article__file"
                src={article.file}
                alt={`${article.content
                  .replace(/<[^>]*>/g, "")
                  .substring(0, 20)}...`}
                width={100}
                height={100}
                unoptimized
              />
              <GlassTable />
              <div
                className="article__text"
                dangerouslySetInnerHTML={{ __html: article.content }}
              />
              {token ? <button onClick={deleteArticle}>DELETE</button> : ""}
            </div>
          )}{" "}
        </>
      )}
    </section>
  );
}

export default LunetteArticle;
