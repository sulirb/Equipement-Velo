"use client";
import { useCookies } from "react-cookie";
import MyEditor from "../../../components/editor";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

function Article() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      router.push("/error");
    }
  }, [token, router]);

  if (!token) {
    return null;
  }

  return (
    <div>
      <MyEditor />
    </div>
  );
}

export default Article;
