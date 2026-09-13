// Run after CRA builds. Vercel supplies its URL; local builds use a relative image.
const fs = require('fs');
const rawHost = process.env.VERCEL_PROJECT_PRODUCTION_URL || process.env.VERCEL_URL;
// Accept hostname characters only because this value is inserted into HTML attributes.
const host = rawHost && /^[a-z0-9.-]+$/i.test(rawHost) ? `https://${rawHost}` : '';
const image = `${host}/images/studio-north-cover.jpg`;
const file = 'build/index.html';
// Put image metadata in the built HTML so crawlers can read it without running React.
const html = fs.readFileSync(file, 'utf8').replace('</head>', `<meta property="og:image" content="${image}"/><meta property="og:image:alt" content="Studio North — Independent ideas. Lasting impact."/><meta name="twitter:image" content="${image}"/></head>`);
fs.writeFileSync(file, html);
