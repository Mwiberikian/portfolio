# Kian Mwiberi — Portfolio

Personal portfolio built with React and Vite.

## Run it locally

```
npm install
npm run dev
```

Then open the address Vite prints (usually http://localhost:5173).

## Update the content

Every word on the site lives in `src/content.js`: projects, experience, skills and the handover note at the top. Edit that file; the layout in `src/App.jsx` picks the changes up.

To update the CV, replace `public/Kian_Mwiberi_CV.pdf` with the new file under the same name.

## Deploy

`npm run build` writes the site to `dist/`. Vercel and Netlify are both configured to build from source, so `dist/` and `node_modules/` are not committed.
