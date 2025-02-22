import { remarkCodeHike } from "@code-hike/mdx";
import withMDX from "@next/mdx";
import path from "path";
import { fileURLToPath } from "url";

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
    config.module.rules.push({
      test: /\.mp3$/,
      use: {
        loader: "file-loader",
        options: {
          name: "[name].[hash].[ext]",
          outputPath: "static/media",
          publicPath: "/_next/static/media",
          emitFile: true,
        },
      },
    });
    config.resolve.alias["@"] = path.resolve(__dirname, "src");
    config.resolve.alias["@/sound"] = path.resolve(__dirname, "public/sound");

    config.resolve.extensions.push(".md", ".mdx");

    return config;
  },
};

const mdxOptions = {
  remarkPlugins: [
    [
      remarkCodeHike,
      {
        lineNumbers: true, // Enable line numbers for consistency with CodeBlock
        showCopyButton: true, // Enable copy button for better UX
        theme: "prismThemes.dracula", // Consistent with your dark theme
        skipLanguages: ["mermaid"], // Keep this if you don’t use Mermaid
        staticMediaQuery: "screen and (min-width: 768px)", // Enable on desktop, disable on mobile for better performance
        autoImport: false, // Disable auto-import to avoid conflicts with CodeBlock
        autoLink: false, // Disable auto-linking for cleaner code blocks
      },
    ],
  ],
  // Optionally, add rehype plugins for additional MDX processing
  rehypePlugins: [],
};

// Apply MDX configuration to nextConfig
export default withMDX(mdxOptions)(nextConfig);
