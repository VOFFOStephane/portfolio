// src/components/Navbar.jsx
//
// La barre de navigation, fixée en haut de la page.
// On utilise "useState" pour savoir si le menu mobile (le menu en
// forme de hamburger sur petit écran) est ouvert ou fermé : c'est
// notre premier exemple de "state" React dans ce projet.

import { useState } from "react";
import { profile } from "../data/profile.js";
import ThemeToggle from "./ThemeToggle.jsx";

const links = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="container navbar-inner">
        <a href="#top" className="navbar-brand">
          {profile.fullName.split(" ")[0]}
        </a>

        <div className="navbar-end">
          <nav className={`navbar-links ${open ? "navbar-links--open" : ""}`}>
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <div className="navbar-right">
            <ThemeToggle />

            {/* Bouton hamburger, visible seulement sur mobile via le CSS */}
            <button
              className="navbar-toggle"
              onClick={() => setOpen((o) => !o)}
              aria-label="Ouvrir le menu"
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
