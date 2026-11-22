import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { createElement } from 'react';
import { renderToString } from 'react-dom/server';
import { createServer } from 'vite';

const dist = path.resolve('dist');
const template = await readFile(path.join(dist, 'index.html'), 'utf8');
const vite = await createServer({
  server: { middlewareMode: true },
  appType: 'custom',
  resolve: {
    alias: [
      { find: /^react-router-dom$/, replacement: path.resolve('node_modules/react-router-dom/dist/index.mjs') },
      { find: /^react-router$/, replacement: path.resolve('node_modules/react-router/dist/development/index.mjs') },
    ],
  },
  ssr: { noExternal: ['react-router-dom', 'react-router'] },
});

function replaceRequired(html, pattern, replacement) {
  if (!pattern.test(html)) throw new Error(`Missing HTML marker: ${pattern}`);
  return html.replace(pattern, replacement);
}

try {
  const { SiteRoutes } = await vite.ssrLoadModule('/src/App.tsx');
  const { getSeo, indexablePaths, prerenderPaths } = await vite.ssrLoadModule('/src/seo.ts');
  const { MemoryRouter } = await vite.ssrLoadModule('react-router-dom');
  const siteUrl = (process.env.VITE_SITE_URL || 'https://kionlabs.pages.dev').replace(/\/$/, '');

  for (const pathname of prerenderPaths) {
    const seo = getSeo(pathname);
    const content = renderToString(
      createElement(MemoryRouter, { initialEntries: [pathname] }, createElement(SiteRoutes)),
    );

    let html = template.replaceAll('https://kionlabs.vercel.app', siteUrl);
    html = replaceRequired(html, /<title>[^<]*<\/title>/, `<title>${seo.title}</title>`);
    html = replaceRequired(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${seo.description}" />`);
    html = replaceRequired(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${seo.url}" />`);
    html = replaceRequired(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${seo.url}" />`);
    html = replaceRequired(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${seo.title}" />`);
    html = replaceRequired(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${seo.description}" />`);
    if (pathname === '/admin') html = html.replace('</head>', '    <meta name="robots" content="noindex, nofollow" />\n  </head>');
    html = replaceRequired(html, /<div id="root"><\/div>/, `<div id="root">${content}</div>`);

    const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`;
    const output = path.join(dist, filename);
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, html);
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${indexablePaths.map((pathname) => `  <url><loc>${siteUrl}${pathname}</loc></url>`).join('\n')}\n</urlset>\n`;
  await writeFile(path.join(dist, 'sitemap.xml'), sitemap);
  await writeFile(path.join(dist, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`);
} finally {
  await vite.close();
}
