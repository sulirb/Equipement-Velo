"use client";
import { useState } from "react";
import "./editor.scss";
import { useCookies } from "react-cookie";
import { baseUrl } from "@utils/baseUrl";
import { useEditor, EditorContent } from "@tiptap/react";
import TiptapOptions from "@utils/tiptapOptions";
import MenuBar from "@utils/menuBar";

const TiptapEditor = () => {
  const [cookies] = useCookies(["token"]);
  const token = cookies.token;
  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [file, setFile] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [error, setError] = useState("");

  const { extensions, content } = TiptapOptions();

  const editor = useEditor({
    extensions,
    content,
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
    },
  });

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

    if (!title || !file || !editor || editor.isEmpty) {
      setError("Veuillez remplir tous les champs.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", file);
    formData.append("content", editor.getHTML());
    formData.append("tag", tag);

    fetch(`${baseUrl}/articles`, {
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
            <MenuBar editor={editor} />
            <EditorContent editor={editor} />
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

export default TiptapEditor;
