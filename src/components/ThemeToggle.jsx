// src/components/ThemeToggle.jsx
//
// Bouton pour basculer entre thème sombre et thème clair.
//
// Comment ça marche :
// 1. Toutes nos couleurs sont des variables CSS (voir index.css)
// 2. On ajoute l'attribut data-theme="light" sur <html> pour activer
//    le thème clair — sinon, le thème sombre (par défaut) s'applique.
// 3. On mémorise le choix dans le localStorage du navigateur, pour que
//    le thème choisi soit gardé la prochaine fois que quelqu'un revient.
//
// Un petit script dans index.html applique déjà le bon thème avant même
// que React démarre, pour éviter un "flash" du mauvais thème au chargement.

import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

function getInitialTheme() {
  return document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme);

  // À chaque changement de "theme", on met à jour le HTML et le localStorage
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      localStorage.setItem("theme", theme);
    } catch {
      // Si le localStorage est bloqué (mode privé strict, etc.), tant pis,
      // le thème fonctionnera quand même pour cette visite.
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((current) => (current === "dark" ? "light" : "dark"));
  };

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Activer le thème clair" : "Activer le thème sombre"}
      title={theme === "dark" ? "Thème clair" : "Thème sombre"}
    >
      {theme === "dark" ? <FiSun /> : <FiMoon />}
    </button>
  );
}
