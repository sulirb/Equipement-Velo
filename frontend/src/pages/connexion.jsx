import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import "./connexion.scss";

function Connexion() {
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [cookies, setCookie] = useCookies(["token"]);
  const navigate = useNavigate();
  const token = cookies.token;

  // eslint-disable-next-line no-unused-vars
  const errors = {
    username: "invalid username",
    password: "invalid password",
    code: "invalid code",
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const username = form.username.value;
    const password = form.password.value;
    const code = form.code.value;

    try {
      // Effectuez une requête au serveur pour vérifier les informations d'identification
      const response = await axios.post("http://localhost:80/auth/login", {
        username,
        password,
        code,
      });

      if (response.status === 200) {
        // Connexion réussie, stockez le token dans le navigateur (par exemple, dans localStorage ou un cookie)
        const token = response.data.token;
        const userId = response.data.userId;
        setCookie("token", token, {
          path: "/",
          maxAge: 3600 * 24,
          secure: true,
        });
        setCookie("user_id", userId, {
          path: "/",
          maxAge: 3600 * 24,
          secure: true,
        });
        setIsSubmitted(true);
        setTimeout(() => {
          navigate("/ecriture");
        }, 2000);
      }
    } catch (error) {
      if (error.response) {
        console.error("Error:", error.response);
      } else {
        console.error("Error:", error);
      }

      setErrorMessages({ name: "login", message: "Invalid credentials" });
    }
  };

  const renderErrorMessage = (name) =>
    errorMessages.name === name && (
      <div className="error">{errorMessages.message}</div>
    );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        {token ? (
          <div>You are already logged in.</div>
        ) : (
          <>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="username" required />
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="password" required />
            </div>
            <div className="input-container">
              <label>Confidential Code </label>
              <input type="number" name="code" required />
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </>
        )}
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Connexion</div>
        {isSubmitted ? (
          <div>User is successfully logged in</div>
        ) : (
          <div>
            {renderErrorMessage("login")}
            {renderForm}
          </div>
        )}
      </div>
    </div>
  );
}

export default Connexion;
