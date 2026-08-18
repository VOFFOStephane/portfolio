// src/components/Hero.jsx
//
// La grande section d'accueil, la première chose qu'un recruteur voit.
// Toutes les infos viennent de src/data/profile.js : ce composant ne
// contient aucun texte "en dur", ce qui le rend facile à réutiliser.

import { useState } from "react";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/profile.js";

// Si la photo ne se charge pas (pas encore ajoutée dans public/, mauvais
// nom de fichier...), on affiche tes initiales à la place plutôt qu'une
// icône d'image cassée.
function getInitials(fullName) {
  const words = fullName.split(" ").filter(Boolean);
  return ((words[0]?.[0] || "") + (words[words.length - 1]?.[0] || "")).toUpperCase();
}

export default function Hero() {
  const [photoError, setPhotoError] = useState(false);

  return (
    <section id="top" className="hero">
      <div className="container hero-columns">
        <div className="hero-text-col">
          <p className="section-kicker">Bonjour, je m'appelle</p>
          <h1 className="hero-title">{profile.fullName}</h1>
          <h2 className="hero-subtitle">
            {profile.tagline} <span className="dot">·</span> {profile.subtitle}
          </h2>
          <p className="hero-text">{profile.heroTagline}</p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Voir mes travaux
            </a>
            <a href="#contact" className="btn btn-secondary">
              Me contacter
            </a>
          </div>

          <div className="hero-social">
            <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-photo-wrap">
          {!photoError ? (
            <img
              src={profile.photo}
              alt={profile.fullName}
              onError={() => setPhotoError(true)}
            />
          ) : (
            <div className="hero-photo-fallback">{getInitials(profile.fullName)}</div>
          )}
        </div>
      </div>
    </section>
  );
}
