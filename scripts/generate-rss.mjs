import { Feed } from 'feed';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const root = path.join(process.cwd(), '/src');
const baseUrl = 'https://miadv.dev';
const blogUrl = `${baseUrl}/blog`;

async function getAllPostsFrontmatter(postType) {
  const pathPrefix = path.join(root, 'posts', postType);
  const files = fs.readdirSync(pathPrefix);

  let allFrontMatter = [];

  files.forEach((file) => {
    // Remove Unexpected Files
    if (path.extname(file) !== '.md' && path.extname(file) !== '.mdx') {
      return;
    }

    const fullPath = path.join(pathPrefix, file);
    const { data: frontmatter } = matter.read(fullPath);

    const fileName = file.replace(/\.mdx$/, '');

    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: fileName,
      });
    }
  });

  return allFrontMatter;
}

async function generate() {
  const feed = new Feed({
    title: 'Miad Vosoughi- Personal Blog',
    description:
      'This is where I will be sharing some of my public projects and blogs',
    id: blogUrl,
    link: blogUrl,
    language: 'en',
    image: `${baseUrl}/static/favicons/favicon-32x32.png`,
    favicon: `${baseUrl}/static/favicons/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, Miad Vosoughi Nia`,
    feedLinks: {
      rss: `${baseUrl}/feeds/feed.xml`,
      json: `${baseUrl}/feeds/feed.json`,
      atom: `${baseUrl}/feeds/atom.xml`,
    },
    author: {
      name: 'Miad Vosoughi',
      link: 'https://twitter.com/Miad_Vosoughi',
    },
  });

  const allFrontMatter = await getAllPostsFrontmatter('blog');

  allFrontMatter.map((post) => {
    feed.addItem({
      title: post.title,
      link: `${blogUrl}/${post.slug}`,
      date: new Date(post.publishedAt),
      description: post.excerpt,
      author: {
        name: 'Miad Vosoughi',
        link: 'https://twitter.com/Miad_Vosoughi',
      },
    });
  });

  fs.mkdirSync('./public/feeds', { recursive: true });
  fs.writeFileSync('./public/feeds/feed.xml', feed.rss2());
  fs.writeFileSync('./public/feeds/atom.xml', feed.atom1());
  fs.writeFileSync('./public/feeds/feed.json', feed.json1());
}

generate();
