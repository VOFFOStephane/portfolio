// src/components/About.jsx
//
// Section "À propos" : formation + ce que Stéphane recherche comme
// stage. On affiche ces infos sous forme de petite fiche ("card").

import { profile } from "../data/profile.js";

export default function About() {
  return (
    <section id="about">
      <div className="container">
        <p className="section-kicker">À propos</p>
        <h2 className="section-title">Qui suis-je ?</h2>
        <p className="section-intro">{profile.bio}</p>

        <div className="about-grid">
          <div className="card">
            <h3>🎓 Formation</h3>
            <p className="text-muted">{profile.formation.program}</p>
            <p className="text-muted">{profile.formation.school}</p>
            <p className="text-muted">Diplôme obtenu en {profile.formation.graduationYear}</p>
          </div>

          <div className="card">
            <h3>🎯 Stage recherché</h3>
            <p className="text-muted">Période : {profile.stage.period}</p>
            <p className="text-muted">Domaine : {profile.stage.domain}</p>
            <p className="text-muted">{profile.stage.note}</p>
          </div>

          <div className="card">
            <h3>📍 Localisation</h3>
            <p className="text-muted">{profile.location}</p>
            <p className="text-muted">Ouvert aux stages sur place ou à distance</p>
          </div>
        </div>
      </div>
    </section>
  );
}
