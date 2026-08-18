// src/App.jsx
//
// App.jsx est le composant "chef d'orchestre" : il n'affiche rien
// lui-même, il assemble les différentes sections du portfolio dans
// le bon ordre. C'est un pattern très courant en React : un gros
// composant se compose de plusieurs petits composants, chacun
// responsable d'une seule partie de la page.

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
