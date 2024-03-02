import { remarkCodeHike } from "@code-hike/mdx";
import withMDX from "@next/mdx";

const nextConfig = {
  pageExtensions: [
    "ts", "tsx", "js", 
    "jsx", "md", "mdx"
  ],
  images: {
   
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**",
        },
      ],
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
