const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [],
    rehypePlugins: [],
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
module.exports = withMDX({
  reactStrictMode: true,
  // pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    // domains: ['via.placeholder.com'],
  },
});
