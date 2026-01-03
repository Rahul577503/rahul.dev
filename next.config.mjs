
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
  remarkPlugins: [],
  rehypePlugins: [],
};

export default withMDX(mdxOptions)(nextConfig);
