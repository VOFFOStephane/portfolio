// src/components/Footer.jsx
//
// Petit pied de page. On calcule l'année automatiquement avec
// `new Date().getFullYear()` pour ne jamais avoir à la changer à la main.

import { profile } from "../data/profile.js";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.fullName}
        </p>
      </div>
    </footer>
  );
}
