"use client";
import { useCookies } from "react-cookie";
import MyEditor from "../../../components/editor";
import { useRouter } from "next/navigation";

function Article() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const router = useRouter();

  return (
    /*   <div>
      {token ? (
        <MyEditor />
      ) : (
        setTimeout(() => {
          router.push("/error");
        })
      )}
    </div>*/
    <div>
      <MyEditor />
    </div>
  );
}

export default Article;
