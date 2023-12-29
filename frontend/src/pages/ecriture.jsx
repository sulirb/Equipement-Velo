import { useCookies } from "react-cookie";
import MyEditor from "../components/editor";
import { useNavigate } from "react-router-dom";

function Article() {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const navigate = useNavigate();

  return (
    <div>
      {token ? (
        <MyEditor />
      ) : (
        setTimeout(() => {
          navigate("/404");
        })
      )}
    </div>
  );
}

export default Article;
