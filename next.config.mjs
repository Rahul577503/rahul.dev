import { remarkCodeHike } from "@code-hike/mdx";
import withMDX from "@next/mdx";
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  pageExtensions: ["ts", "tsx", "js", "jsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Add a rule to handle .mp3 files
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: 'file-loader',
        options: {
          name: '[name].[hash].[ext]',
          outputPath: 'static/media',
          publicPath: '_next/static/media',
        },
      },
    });

    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@/sound'] = path.resolve(__dirname, 'public/sound');

    return config;
  },
};

const mdxOptions = {
  remarkPlugins: [
    [
      remarkCodeHike,
      {
        lineNumbers: false,
        showCopyButton: false,
        theme: "prismThemes.dracula",
        skipLanguages: ["mermaid"],
        staticMediaQuery: "not screen, (max-width: 768px)",
        autoImport: true,
        autoLink: false,
      },
    ],
  ],
};

export default withMDX(mdxOptions)(nextConfig);
