// src/components/Contact.jsx
//
// Section de contact : pas de formulaire (il faudrait un serveur pour
// le traiter), juste des liens directs — c'est largement suffisant
// pour un portfolio de stage.

import { FiGithub, FiLinkedin, FiMail, FiPhone } from "react-icons/fi";
import { profile } from "../data/profile.js";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <p className="section-kicker">Contact</p>
        <h2 className="section-title">Travaillons ensemble</h2>
        <p className="section-intro">
          Je suis disponible pour un stage de {profile.stage.period.toLowerCase()}. N'hésite pas
          à me contacter, je réponds rapidement !
        </p>

        <div className="contact-grid">
          <a className="card contact-item" href={`mailto:${profile.email}`}>
            <FiMail />
            <span>{profile.email}</span>
          </a>
          <a className="card contact-item" href={`tel:${profile.phone.replace(/\s/g, "")}`}>
            <FiPhone />
            <span>{profile.phone}</span>
          </a>
          <a className="card contact-item" href={profile.linkedin} target="_blank" rel="noreferrer">
            <FiLinkedin />
            <span>LinkedIn</span>
          </a>
          <a className="card contact-item" href={profile.github} target="_blank" rel="noreferrer">
            <FiGithub />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
