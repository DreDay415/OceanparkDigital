import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const publicDir = path.join(projectRoot, 'public');
const distDir = path.join(projectRoot, 'dist');
const sitemapFilename = 'sitemap.xml';
const publicSitemapPath = path.join(publicDir, sitemapFilename);
const distSitemapPath = path.join(distDir, sitemapFilename);
const blogPostsPath = path.join(projectRoot, 'src', 'data', 'blogPosts.json');

const BASE_URL = 'https://oceanparkdigital.com';

async function loadBlogPosts() {
  try {
    const raw = await readFile(blogPostsPath, 'utf-8');
    return JSON.parse(raw);
  } catch (error) {
    console.error('Failed to read blog posts for sitemap generation:', error);
    return [];
  }
}

async function generateSitemap() {
  const posts = await loadBlogPosts();

  const urls = [
    {
      loc: `${BASE_URL}/`,
      changefreq: 'monthly',
      priority: '1.0',
    },
    {
      loc: `${BASE_URL}/blog`,
      changefreq: 'weekly',
      priority: '0.9',
    },
    ...posts.map((post) => ({
      loc: `${BASE_URL}/blog/${post.slug}`,
      changefreq: 'weekly',
      priority: '0.8',
    })),
  ];

  const now = new Date().toISOString();

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls.map(
      ({ loc, changefreq, priority }) => [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${now}</lastmod>`,
        `    <changefreq>${changefreq}</changefreq>`,
        `    <priority>${priority}</priority>`,
        '  </url>',
      ].join('\n'),
    ),
    '</urlset>',
    '',
  ].join('\n');

  await mkdir(publicDir, { recursive: true });
  await writeFile(publicSitemapPath, xml, 'utf-8');
  console.log(`Sitemap written to ${path.relative(projectRoot, publicSitemapPath)}`);

  try {
    await mkdir(distDir, { recursive: true });
    await writeFile(distSitemapPath, xml, 'utf-8');
    console.log(`Sitemap written to ${path.relative(projectRoot, distSitemapPath)}`);
  } catch (error) {
    console.warn('Skipped writing sitemap to dist:', error.message);
  }
}

generateSitemap().catch((error) => {
  console.error('Failed to generate sitemap:', error);
  process.exitCode = 1;
});

