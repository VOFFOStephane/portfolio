// src/main.jsx
//
// C'est le tout premier fichier JavaScript exécuté par le navigateur.
// Son seul rôle : dire à React "prends le contrôle de la balise
// <div id='root'> dans index.html, et affiche mon composant <App />
// à l'intérieur."

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
