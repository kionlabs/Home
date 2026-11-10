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
  const { getSeo, prerenderPaths } = await vite.ssrLoadModule('/src/seo.ts');
  const { MemoryRouter } = await vite.ssrLoadModule('react-router-dom');

  for (const pathname of prerenderPaths) {
    const seo = getSeo(pathname);
    const content = renderToString(
      createElement(MemoryRouter, { initialEntries: [pathname] }, createElement(SiteRoutes)),
    );

    let html = template;
    html = replaceRequired(html, /<title>[^<]*<\/title>/, `<title>${seo.title}</title>`);
    html = replaceRequired(html, /<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${seo.description}" />`);
    html = replaceRequired(html, /<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${seo.url}" />`);
    html = replaceRequired(html, /<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${seo.url}" />`);
    html = replaceRequired(html, /<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${seo.title}" />`);
    html = replaceRequired(html, /<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${seo.description}" />`);
    html = replaceRequired(html, /<div id="root"><\/div>/, `<div id="root">${content}</div>`);

    const filename = pathname === '/' ? 'index.html' : `${pathname.slice(1)}.html`;
    const output = path.join(dist, filename);
    await mkdir(path.dirname(output), { recursive: true });
    await writeFile(output, html);
  }
} finally {
  await vite.close();
}
