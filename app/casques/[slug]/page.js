"use client";
import { useState, useEffect } from "react";
import HelmetTable from "./helmetTable";
import "../../article/[slug]/article.scss";
import { useCookies } from "react-cookie";
import { baseUrl } from "../../../utils/baseUrl";
import Image from "next/image";
import { useRouter, useParams } from "next/navigation";

function CasqueArticle() {
  const [article, setArticle] = useState(null);
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const { slug } = useParams();
  const router = useRouter();

  useEffect(() => {
    fetch(`${baseUrl}/article/${slug}`)
      .then((res) => {
        console.log(res);
        if (!res.ok) {
          throw new Error("404 Not Found");
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        if (data.tag === "casques") {
          setArticle(data);
        } else {
          throw new Error("404 Not Found");
        }
      })
      .catch((error) => {
        if (error.message === "404 Not Found") {
          console.error("Article introuvable : ", error);
        }
      });
  }, [slug]);

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

  return (
    <section className="backarticle">
      {article && (
        <div className="article">
          <h2 className="article__title">{article.title}</h2>
          <div className="article__date">Publié le : {article.createdAt}</div>
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
          <HelmetTable />
          <div
            className="article__text"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          {token ? <button onClick={deleteArticle}>DELETE</button> : ""}
        </div>
      )}
    </section>
  );
}

export default CasqueArticle;
