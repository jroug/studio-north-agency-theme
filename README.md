# Studio North — Creative Agency Theme

A standalone React agency demo with a responsive editorial layout, fictional portfolio projects, a studio team, services, a journal, and a contact form preview. All content and assets are local. No WordPress, GraphQL, API keys, database, or backend is required.

## Run locally

Use Node.js 22 LTS or newer and npm.

```sh
npm ci
npm start
```

Open http://localhost:3000. No `.env` file is needed. If adapting an older checkout, remove previous `PUBLIC_URL` or API settings and restart the development server.

```sh
npm run lint
CI=true npm test -- --watchAll=false --runInBand
npm run build
```

The production output is written to `build/`.

## Publish with GitHub and Vercel

1. Push this project to your GitHub repository. Commit `package-lock.json`; do not commit `node_modules`, `build`, or local `.env` files.
2. Import that repository into Vercel as a new project.
3. Use the **Create React App** preset, build command **npm run build**, and output directory **build**. These settings are also in `vercel.json`.
4. No environment variables are required. Remove any API URLs or `PUBLIC_URL` values inherited from an earlier deployment.
5. Deploy. The included [SPA rewrite](https://vercel.com/docs/rewrites) supports refreshing direct URLs such as `/work/forma` and `/journal/start-with-a-question`.

The post-build script adds the site's social cover metadata using Vercel's deployment hostname. For other static hosts, set `VERCEL_PROJECT_PRODUCTION_URL` to your public hostname, without `https://`, to generate absolute social image URLs. Standard static hosting must serve `index.html` for unknown page paths. This configuration targets Vercel; GitHub is the source repository, not GitHub Pages hosting.

## Customize

- **Demo content:** `src/data/demo.js` contains the brand description, six projects, three team members, services, and three journal articles.
- **Pages and navigation:** `src/App.js`.
- **Contact preview:** `src/components/Contact.jsx`.
- **Design tokens and responsive styles:** `src/assets/css/style.css`.
- **Cover image:** `public/images/studio-north-cover.jpg`.
- **Page metadata and favicon:** `public/index.html`, `public/favicon.svg`, and `public/manifest.json`.
- **Social metadata:** `scripts/social-meta.cjs`.

Current routes: `/`, `/work`, `/work/:slug`, `/studio`, `/services`, `/journal`, `/journal/:slug`, `/contact`, and `/privacy`. Unknown routes have an in-app 404 page. The original main navigation paths redirect to the corresponding demo pages.

## Demo behavior

All organizations, people, project descriptions, and articles are fictional sample content. The typography-based project artwork is part of the theme. The Studio North cover image is AI-generated. No original client logos, campaign photos, contact information, tracking scripts, or WordPress integrations are included in the current source.

The contact form validates entries in the browser and displays an explicit demo confirmation. It sends and stores nothing. To use it in production, connect your own submission service and update the form copy and privacy page.

No third-party requests are needed to render the demo. Fonts use the system stack; images ship with the site. Hosting-provider request logs are governed by that provider's policies.

## Before making an existing repository public

The current source has been rebranded. Earlier Git commits may still contain the original project and client assets. If you want a clean public theme repository, publish this working tree as a fresh repository without the old `.git` history. No Git history has been rewritten by this conversion.
