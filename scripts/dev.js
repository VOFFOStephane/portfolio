// scripts/dev.js
//
// Serveur de développement : reconstruit le bundle à chaque
// modification de fichier et sert le site sur http://localhost:5173
// C'est l'équivalent de "npm run dev" avec Vite.

const esbuild = require("esbuild");

async function dev() {
  const ctx = await esbuild.context({
    entryPoints: ["src/main.jsx"],
    bundle: true,
    sourcemap: true,
    outfile: "dist/bundle.js",
    jsx: "automatic",
    loader: {
      ".svg": "dataurl",
      ".png": "dataurl",
      ".jpg": "dataurl",
    },
    define: {
      "process.env.NODE_ENV": '"development"',
    },
  });

  await ctx.watch();

  const { host, port } = await ctx.serve({
    servedir: ".",
    port: 5173,
  });

  console.log(`🚀 Portfolio en cours de développement sur http://localhost:${port}`);
  console.log("   (Ctrl+C pour arrêter)");
}

dev().catch((err) => {
  console.error(err);
  process.exit(1);
});
