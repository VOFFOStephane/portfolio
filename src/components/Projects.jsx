// src/components/Projects.jsx
//
// Chaque projet est maintenant présenté comme une mini "étude de cas"
// (Contexte → Problème → Solution → Résultat), inspiré de la structure
// utilisée par des développeurs plus expérimentés pour raconter leur
// travail de façon concrète, même quand il s'agit d'exercices scolaires.

import { Fragment } from "react";
import { projects } from "../data/profile.js";

const CASE_STUDY_STEPS = [
  { key: "context", label: "Contexte" },
  { key: "problem", label: "Problème" },
  { key: "solution", label: "Solution" },
  { key: "results", label: "Résultat" },
];

export default function Projects() {
  return (
    <section id="projects">
      <div className="container">
        <p className="section-kicker">Projets & travaux</p>
        <h2 className="section-title">Ce que j'ai déjà pratiqué</h2>
        <p className="section-intro">
          Je n'ai pas encore de projet personnel complet publié, mais voici les exercices et
          travaux réalisés durant ma formation, présentés comme de vraies mini études de cas.
          D'autres projets arrivent bientôt !
        </p>

        <div className="projects-list">
          {projects.map((project) => (
            <article className="card project-card" key={project.title}>
              <div className="project-card-header">
                <span className="badge project-status">{project.status}</span>
                <h3>{project.title}</h3>
              </div>

              <dl className="case-study">
                {CASE_STUDY_STEPS.map((step) => (
                  <Fragment key={step.key}>
                    <dt>{step.label}</dt>
                    <dd>{project[step.key]}</dd>
                  </Fragment>
                ))}
              </dl>

              <div className="skills-badges">
                {project.tags.map((tag) => (
                  <span className="badge" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </article>
          ))}

          <article className="card project-card project-card--upcoming">
            <h3>🚀 Prochains projets</h3>
            <p className="text-muted">
              Je construis actuellement de nouveaux projets pour enrichir cette section. Reviens
              bientôt !
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
