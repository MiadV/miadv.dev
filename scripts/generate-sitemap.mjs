import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const baseUrl = 'https://miadv.dev';

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js');
  const pages = await globby([
    'src/pages/*.tsx',
    'src/pages/*.jsx',
    'src/posts/**/*.mdx',
    '!src/posts/*.mdx',
    '!src/pages/_*.tsx',
    '!src/pages/api',
    '!src/pages/404.tsx',
  ]);

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace('src/', '')
              .replace('pages', '')
              .replace('posts', '')
              .replace('.tsx', '')
              .replace('.jsx', '')
              .replace('.mdx', '');
            const route = path === '/index' ? '' : path;

            return `
              <url>
                  <loc>${`${baseUrl}${route}`}</loc>
              </url>
            `;
          })
          .join('')}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html',
  });

  // eslint-disable-next-line no-sync
  writeFileSync('public/sitemap.xml', formatted);
}

generate();
