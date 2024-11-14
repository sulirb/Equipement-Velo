"use client";
import { useCookies } from "react-cookie";
import MyEditor from "../../../components/editor";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "./style.scss";

function ArticleEditor() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      router.push("/error");
    } else {
      setIsLoading(false);
    }
  }, [token, router]);

  if (isLoading) {
    return null; // ou un composant de chargement
  }

  return (
    <section>
      <MyEditor />
    </section>
  );
}

export default ArticleEditor;
