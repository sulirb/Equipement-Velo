import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../components/editor.scss";
import { useCookies } from "react-cookie";

const SubmitImage = () => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [error, setError] = useState("");

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Stockez le fichier sélectionné
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !file) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);

    fetch("http://localhost:80/images", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          // Si la réponse indique une erreur (statut non 2xx), lancez une exception
          throw new Error(
            "Une erreur s'est produite lors de l'enregistrement de l'image."
          );
        }
        return response.json();
      })
      .then(() => {
        setConfirmationMessage("L'image a été enregistré avec succès !");
        setError(""); // Réinitialisez les erreurs
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement des données : ", error);
        setConfirmationMessage("");
        setError(
          "Une erreur s'est produite lors de l'enregistrement de l'image."
        );
      });
  };

  return (
    <div>
      {token ? (
        <div className="form-container">
          <form encType="multipart/form-data" onSubmit={handleSubmit}>
            <div className="form-flex">
              <label>
                <h3>Titre:</h3>
                <input
                  type="text"
                  name="title"
                  value={title}
                  onChange={handleTitleChange}
                />
              </label>
              <label>
                <h3>Image:</h3>
                <input type="file" name="image" onChange={handleFileChange} />
              </label>
            </div>
            <button type="submit">Valider</button>
          </form>
          {error && <p className="error">{error}</p>}
          {confirmationMessage && (
            <p className="success">{confirmationMessage}</p>
          )}
        </div>
      ) : (
        setTimeout(() => {
          navigate("/404");
        })
      )}
    </div>
  );
};

export default SubmitImage;
