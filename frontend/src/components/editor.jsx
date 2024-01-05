import { useState } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "draft-js/dist/Draft.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./editor.scss";
import draftToHtml from "draftjs-to-html";
import { useCookies } from "react-cookie";

const MyEditor = () => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [file, setFile] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [error, setError] = useState("");

  const onEditorStateChange = (state) => {
    setEditorState(state);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTagChange = (e) => {
    setTag(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Stockez le fichier sélectionné
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !file ||
      editorState.getCurrentContent().getPlainText("\u0001") === ""
    ) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append(
      "content",
      draftToHtml(convertToRaw(editorState.getCurrentContent()))
    );
    formData.append("image", file);
    formData.append("tag", tag);

    fetch("http://localhost:80/articles", {
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
            "Une erreur s'est produite lors de l'enregistrement de l'article."
          );
        }
        return response.json();
      })
      // eslint-disable-next-line no-unused-vars
      .then(() => {
        setConfirmationMessage("L'article a été enregistré avec succès !");
        setError(""); // Réinitialisez les erreurs
      })
      .catch((error) => {
        console.error("Erreur lors de l'enregistrement des données : ", error);
        setConfirmationMessage("");
        setError(
          "Une erreur s'est produite lors de l'enregistrement de l'article."
        );
      });
  };

  return (
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
          <div>
            <h3>Guidelines :</h3>
            <p>Photo du titre à upload en 16:9</p>
            <p>Commencer les titres par h3</p>
          </div>
          <label>
            <h3>Contenu:</h3>
            <Editor
              editorState={editorState}
              placeholder="L'article commence ici..."
              wrapperClassName="wrapper-class"
              editorClassName="editor-class"
              toolbarClassName="toolbar-class"
              toolbar={{
                inline: { inDropdown: true },
                list: { inDropdown: true },
                textAlign: { inDropdown: true },
                link: { inDropdown: true },
                history: { inDropdown: true },
              }}
              localization={{
                locale: "fr",
              }}
              onEditorStateChange={onEditorStateChange}
            />
          </label>
          <label>
            <h3>Tag:</h3>
            <input
              type="text"
              name="tag"
              value={tag}
              onChange={handleTagChange}
            />
          </label>
        </div>
        <button type="submit">Valider</button>
      </form>
      {error && <p className="error">{error}</p>}
      {confirmationMessage && <p className="success">{confirmationMessage}</p>}
    </div>
  );
};

export default MyEditor;
