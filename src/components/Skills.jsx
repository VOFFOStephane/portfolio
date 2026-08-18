// src/components/Skills.jsx
//
// Ici, on utilise .map() pour transformer un tableau de données
// (skills, importé de profile.js) en une liste de composants JSX.
// C'est LE pattern le plus courant en React pour afficher une liste :
// pas de boucle "for", on "map" les données vers de l'affichage.

import { skills } from "../data/profile.js";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <p className="section-kicker">Compétences</p>
        <h2 className="section-title">Ce que je sais déjà faire</h2>
        <p className="section-intro">
          Technologies vues et pratiquées durant ma formation. Cette liste s'agrandit au fil de
          mes projets.
        </p>

        <div className="skills-grid">
          {skills.map((group) => (
            <div className="card" key={group.category}>
              <h3>{group.category}</h3>
              <div className="skills-badges">
                {group.items.map((item) => (
                  <span className="badge" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
