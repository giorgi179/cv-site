# Giorgi Meshveliani — CV site (Angular)

## Run
    npm install
    npm start          # http://localhost:4200

## Edit content
Everything (profile, skills, projects, links) is in `src/app/data/portfolio.ts`.
TODO: replace each project's `repoUrl` with its exact GitHub repository link.

## Deploy (Render → Static Site)
- Build command:     npm install && npm run build
- Publish directory: dist/cv-site/browser
- Redirects/Rewrites: add rule  Source: /*   Destination: /index.html   Action: Rewrite
