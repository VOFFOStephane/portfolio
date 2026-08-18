// scripts/build.js
//
// Ce script utilise esbuild pour transformer notre code React (JSX)
// en un seul fichier JavaScript que le navigateur peut comprendre.
// C'est l'équivalent de "npm run build" avec Vite : on l'utilise
// pour générer la version finale du site avant de la déployer.

const esbuild = require("esbuild");
const fs = require("fs");
const path = require("path");

const outdir = path.join(__dirname, "..", "dist");

// On repart d'un dossier dist/ propre à chaque build
fs.rmSync(outdir, { recursive: true, force: true });
fs.mkdirSync(outdir, { recursive: true });

async function build() {
  await esbuild.build({
    entryPoints: ["src/main.jsx"],
    bundle: true,
    minify: true,
    sourcemap: true,
    outfile: path.join(outdir, "bundle.js"),
    jsx: "automatic", // permet d'écrire du JSX sans "import React" partout
    loader: {
      ".js": "jsx",
      ".svg": "dataurl",
      ".png": "dataurl",
      ".jpg": "dataurl",
    },
    define: {
      "process.env.NODE_ENV": '"production"',
    },
    target: ["es2018"],
  });

  // On copie index.html en remplaçant le chemin du script par le bundle généré
  let html = fs.readFileSync(path.join(__dirname, "..", "index.html"), "utf8");
  html = html
    .replace("/dist/bundle.js", "./bundle.js")
    .replace("/dist/bundle.css", "./bundle.css");
  fs.writeFileSync(path.join(outdir, "index.html"), html);

  // On copie le dossier public/ (photo, futur CV...) dans dist/public/
  // pour que l'URL soit la même en dev ("/public/photo.jpg") et en
  // production — sinon les images cassent une fois déployées.
  const publicDir = path.join(__dirname, "..", "public");
  if (fs.existsSync(publicDir)) {
    fs.cpSync(publicDir, path.join(outdir, "public"), { recursive: true });
  }

  console.log("✅ Build terminé dans le dossier dist/");
}

build().catch((err) => {
  console.error(err);
  process.exit(1);
});
