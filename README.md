# Studio North — Creative Agency Theme

A responsive React theme for a fictional creative agency, featuring a portfolio, studio profile, services, journal, and contact form preview. Content, images, and fonts are served locally; the demo requires no API keys, database, or backend.

## Features

- Six concept projects with category filters and individual case studies.
- Studio page with team profiles and a services overview.
- Three sample journal articles with dedicated reading pages.
- Responsive navigation, keyboard skip link, and reduced-motion styles.
- Browser-validated contact form with a local confirmation preview.
- Page titles, social cover metadata, and an in-app 404 page.

Built with React 18, React Router 6, and Create React App.

## Getting started

Install Node.js and npm, then run these commands from the project directory:

```sh
npm ci
npm start
```

Open [localhost:3000](http://localhost:3000). No environment variables are required.

## Development commands

| Command | Purpose |
| --- | --- |
| `npm start` | Start the development server. |
| `npm run lint` | Check JavaScript and JSX with ESLint. |
| `npm test` | Run tests in watch mode. |
| `CI=true npm test -- --watchAll=false --runInBand` | Run the test suite once. |
| `npm run build` | Create the production site in `build/` and add social image metadata. |

## Project structure

```text
public/
  images/studio-north-cover.jpg  Homepage and social cover
  index.html                    Base HTML and metadata
  favicon.svg                   Site icon
  manifest.json                 Web app metadata
scripts/
  social-meta.cjs               Post-build social image metadata
src/
  assets/css/style.css          Theme tokens and responsive styles
  components/Contact.jsx        Contact form preview
  data/demo.js                  Brand, projects, team, services, and articles
  App.js                        Pages, navigation, and routes
  App.test.js                   Route and interaction tests
  index.js                      React entry point
vercel.json                     Build settings and SPA rewrite
```

## Customization

Edit `src/data/demo.js` to replace the sample content. Keep project and article slugs unique: they determine detail-page URLs. Project slugs also select artwork styles, and project order controls the homepage selection and next-project links.

Update page copy and navigation in `src/App.js`, and change colors, typography, and layouts in `src/assets/css/style.css`. Replace the cover image in `public/images/`, then update its alt text in `src/App.js` and `scripts/social-meta.cjs`.

For a complete rebrand, review `public/index.html`, `public/manifest.json`, `public/favicon.svg`, and the social metadata script as well as the visible page content.

## Routes

| URL | Page |
| --- | --- |
| `/` | Home |
| `/work` | Filterable portfolio |
| `/work/:slug` | Project case study |
| `/studio` | Studio and team |
| `/services` | Services |
| `/journal` | Journal index |
| `/journal/:slug` | Article |
| `/contact` | Contact preview |
| `/privacy` | Demo and privacy information |

Unknown URLs and missing project or article slugs display the 404 page. Compatibility redirects for `/the-team`, `/we-deliver`, `/we-are-trusted`, and `/creative-reviews` are defined in `src/App.js`.

## Deployment

The included `vercel.json` configures the Create React App framework, `npm run build` as the build command, and `build` as the output directory. It also rewrites page requests to `index.html` so direct links work with the client-side router.

Push the repository to GitHub and import it into Vercel. No application environment variables are required. Commit `package-lock.json`; local environment files, `node_modules/`, and `build/` are excluded by `.gitignore`.

The post-build script uses `VERCEL_PROJECT_PRODUCTION_URL`, falling back to `VERCEL_URL`, to create absolute social image URLs. Without either value, it uses a relative image path. For another static host, you can supply `VERCEL_PROJECT_PRODUCTION_URL` at build time as a hostname without `https://`.

Other static hosts must serve `build/` and fall back to `index.html` for client-side routes. The current configuration assumes the site is hosted at the domain root.

## Demo content and contact form

All brands, people, projects, and articles are fictional sample content. Project artwork uses typography and CSS; the Studio North cover image is AI-generated. Fonts use the system stack.

The contact form validates fields in the browser and previews a confirmation. It does not send or save submissions. To accept real inquiries, connect a submission service and update the confirmation text and privacy page.

The application includes no analytics or tracking scripts. Hosting providers may maintain their own request logs.
